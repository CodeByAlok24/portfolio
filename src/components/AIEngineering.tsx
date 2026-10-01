import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Brain, Database, MessageSquare, Search, Cpu, Layers } from 'lucide-react';
import { useRef } from 'react';

const FloatingCard = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, springY: rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const capabilities = [
  {
    icon: Search,
    title: 'RAG Systems',
    desc: 'Retrieval-augmented generation that grounds AI responses in real application data — not just training knowledge.',
    example: 'HAQMS Gollum AI assistant',
  },
  {
    icon: Database,
    title: 'Vector Embeddings',
    desc: 'Storing and querying semantic embeddings for fast, relevant search across documents and data.',
    example: 'pgvector with PostgreSQL',
  },
  {
    icon: MessageSquare,
    title: 'LLM Integration',
    desc: 'Wiring LLMs into products via Groq, Cerebras, and Ollama — with source-cited, reliable outputs.',
    example: 'HAQMS + TestGen AI',
  },
  {
    icon: Cpu,
    title: 'AI-Assisted Development',
    desc: 'Using AI tools to accelerate development — from code generation to automated test creation.',
    example: 'TestGen AI platform',
  },
  {
    icon: Layers,
    title: 'Multi-Model Pipelines',
    desc: 'Orchestrating multiple AI models for different tasks — routing, scoring, and combining outputs.',
    example: 'SRAP route explanations',
  },
  {
    icon: Brain,
    title: 'Real-World AI Products',
    desc: 'Building AI features that solve actual problems — not demos, but production systems.',
    example: 'HAQMS, TestGen AI, SRAP',
  },
];

const AIEngineering = () => {
  return (
    <section id="ai" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 diagonal-lines opacity-40 pointer-events-none" />
      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="mono-label text-primary">AI / Engineering</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Building AI that works
            <br />
            with <span className="gradient-text">real data.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I'm not interested in AI as a buzzword. I build AI features that solve
            real problems — grounded in actual application data, reliable in
            production, and useful to real users.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap, i) => (
            <FloatingCard
              key={cap.title}
              delay={i * 0.06}
              className="p-6 rounded-lg border border-border bg-card/50 card-hover-glow"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                <cap.icon className="w-5 h-5 text-primary mb-4" />
              </motion.div>
              <h3 className="font-display font-semibold text-foreground mb-2">{cap.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cap.desc}</p>
              <div className="pt-3 border-t border-border/60">
                <span className="mono-label text-primary/70">{cap.example}</span>
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIEngineering;
