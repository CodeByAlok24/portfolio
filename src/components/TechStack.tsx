import { motion } from 'framer-motion';
import { Monitor, Server, Database, Brain, Cloud, Code2 } from 'lucide-react';

const categories = [
  {
    icon: Code2,
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'C++', 'Python'],
  },
  {
    icon: Monitor,
    title: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    icon: Server,
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'Django REST', 'FastAPI'],
  },
  {
    icon: Database,
    title: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Prisma', 'pgvector'],
  },
  {
    icon: Brain,
    title: 'AI / LLM',
    items: ['RAG', 'Vector Embeddings', 'Ollama', 'Groq', 'Cerebras'],
  },
  {
    icon: Cloud,
    title: 'DevOps',
    items: ['Docker', 'GitHub Actions', 'CI/CD', 'Vercel', 'Kubernetes', 'CodeQL'],
  },
];

const TechStack = () => {
  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="mono-label text-primary">Tech Stack</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Tools I work with
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="p-6 rounded-lg border border-border bg-card/50 card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <cat.icon className="w-5 h-5 text-primary" />
                <h3 className="font-display font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-2.5 py-1 text-xs font-mono rounded border border-border/60 bg-secondary/50 text-muted-foreground hover:text-foreground hover:border-primary/25 transition-colors cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
