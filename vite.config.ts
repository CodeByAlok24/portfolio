import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { sendContactEmail } from "./api/sendContactEmail.js";

const readJsonBody = (req: import("node:http").IncomingMessage) =>
  new Promise<Record<string, unknown>>((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });

    req.on("error", reject);
  });

const contactApiPlugin = (): Plugin => ({
  name: "contact-api",
  configureServer(server) {
    server.middlewares.use("/api/contact", async (req, res) => {
      res.setHeader("Content-Type", "application/json");

      if (req.method !== "POST") {
        res.statusCode = 405;
        res.setHeader("Allow", "POST");
        res.end(JSON.stringify({ message: "Method not allowed" }));
        return;
      }

      try {
        const body = await readJsonBody(req);
        await sendContactEmail(body);
        res.statusCode = 200;
        res.end(JSON.stringify({ message: "Message sent successfully." }));
      } catch (error) {
        console.error("[vite:/api/contact] failed to send contact email", error);
        const statusCode = typeof error === "object" && error !== null && "statusCode" in error
          ? Number(error.statusCode)
          : 500;
        const message = error instanceof Error && (statusCode === 400 || statusCode === 500)
          ? error.message
          : "Failed to send message. Please email me directly.";

        res.statusCode = Number.isFinite(statusCode) ? statusCode : 500;
        res.end(JSON.stringify({ message }));
      }
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  process.env.SMTP_USER = process.env.SMTP_USER || env.SMTP_USER;
  process.env.SMTP_PASS = process.env.SMTP_PASS || env.SMTP_PASS;
  process.env.CONTACT_EMAIL = process.env.CONTACT_EMAIL || env.CONTACT_EMAIL;

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), contactApiPlugin(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
