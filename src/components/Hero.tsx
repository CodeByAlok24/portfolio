import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const highlights = [
  { value: '250+', label: 'LeetCode problems' },
  { value: '3', label: 'Featured builds' },
  { value: 'Runner-Up', label: 'Agentica 2.0' },
  { value: '2027', label: 'IIIT Dharwad CSE' },
];

const techTicker = ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Docker', 'GitHub Actions', 'Redis'];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-24 pb-14 sm:pb-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.16),transparent_32%),radial-gradient(circle_at_75%_35%,hsl(var(--accent)/0.12),transparent_34%),linear-gradient(180deg,transparent,hsl(var(--background))_92%)]" />

      <div className="relative z-10 flex min-h-[calc(100vh-8rem)] items-center">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-5 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-2 text-center text-xs font-medium leading-5 text-primary shadow-glow sm:px-4 sm:text-sm"
              >
                <Sparkles size={16} />
                Available for frontend, full-stack and AI projects
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 }}
                className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-7xl lg:text-8xl"
              >
                Hi, I am <span className="gradient-text">Alok</span>
                <span className="block text-2xl text-foreground/80 sm:text-3xl md:text-5xl lg:text-6xl">
                  I build recruiter-ready web experiences.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="mx-auto mb-8 max-w-3xl text-base leading-7 text-foreground/80 sm:text-lg md:text-xl lg:mx-0"
              >
                Computer Science student at IIIT Dharwad building full-stack React, Node.js,
                and AI products, from automated test generation to production-ready booking
                and campus marketplace platforms.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
                className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
              >
                <Button
                  size="lg"
                  className="animated-card spread-hover h-12 w-full bg-primary px-7 text-primary-foreground shadow-glow transition-all hover:-translate-y-1 hover:bg-primary/90 hover:shadow-glow-lg sm:w-auto"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Hire Me
                </Button>
                <a
                  href="/Resume_Alok_Kumar_Das.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animated-card spread-hover inline-flex h-12 w-full items-center justify-center rounded-lg border border-primary/45 bg-background/50 px-7 font-semibold text-primary backdrop-blur transition-all hover:-translate-y-1 hover:bg-primary/10 sm:w-auto"
                >
                  <Download className="mr-2" size={20} />
                  View Resume
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.86 }}
                className="mx-auto mt-7 max-w-2xl overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)] lg:mx-0"
              >
                <div className="tech-marquee">
                  {[...techTicker, ...techTicker].map((tech, index) => (
                    <span key={`${tech}-${index}`} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.95 }}
                className="mt-8 flex items-center justify-center gap-4 lg:justify-start"
              >
                <a href="https://github.com/CodeByAlok24" target="_blank" rel="noopener noreferrer" className="hero-social spread-hover" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/alok-kumar-das" target="_blank" rel="noopener noreferrer" className="hero-social spread-hover" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:alok.officials.25@gmail.com" className="hero-social spread-hover" aria-label="Email">
                  <Mail size={20} />
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="mx-auto w-full max-w-lg px-1 sm:px-0"
            >
              <div className="developer-card">
                <div className="developer-card__top">
                  <span />
                  <span />
                  <span />
                  <p>portfolio.tsx</p>
                </div>
                <div className="space-y-3 overflow-hidden p-4 font-mono text-xs leading-6 text-foreground/80 sm:space-y-4 sm:p-6 sm:text-sm">
                  <p><span className="text-primary">const</span> role = <span className="text-accent">"AI / Full-Stack Developer"</span>;</p>
                  <p><span className="text-primary">const</span> stack = [<span className="text-accent">"React"</span>, <span className="text-accent">"Express"</span>, <span className="text-accent">"MongoDB"</span>];</p>
                  <p><span className="text-primary">return</span> products.ship(<span className="text-accent">"securely"</span>);</p>
                </div>
                <div className="grid grid-cols-2 border-t border-border/60 sm:grid-cols-4">
                  {highlights.map((item) => (
                    <div key={item.label} className="border-r border-border/60 p-3 last:border-r-0 even:border-r-0 sm:p-4 sm:even:border-r sm:last:border-r-0">
                      <strong className="block text-xl leading-tight text-primary sm:text-2xl">{item.value}</strong>
                      <span className="text-xs text-muted-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-sm text-muted-foreground md:flex"
      >
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={20} />
        </motion.span>
        Explore
      </motion.a>
    </section>
  );
};

export default Hero;
