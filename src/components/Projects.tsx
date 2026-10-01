import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Activity, TestTube, MapPin } from 'lucide-react';
import { useRef } from 'react';

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-4, 4]);

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
      className={className}
    >
      {children}
    </motion.div>
  );
};

const projects = [
  {
    name: 'HAQMS',
    tagline: 'Hospital Appointment & Queue Management System',
    description:
      'A real-time hospital queue management platform that streamlines patient flow, reduces wait times, and gives staff live visibility into appointments and queues.',
    problem:
      'Hospitals struggle with long wait times, chaotic queue management, and no real-time visibility into patient flow.',
    tech: ['Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Socket.IO', 'JWT', 'RBAC', 'pgvector', 'Ollama', 'Groq'],
    features: [
      'Real-time queue management with live updates',
      'Patient, staff, and admin role-based flows',
      'RBAC and JWT authentication',
      'REST APIs with N+1 query optimization',
      'Socket.IO race-condition fixes',
      'Gollum AI RAG hospital assistant with PDF/TXT ingestion',
      'Source-cited answers and live wait-time info',
    ],
    icon: Activity,
    accent: 'primary',
    github: 'https://github.com/CodeByAlok24/HAQMS',
    live: 'https://haqms-y1fv.vercel.app/',
  },
  {
    name: 'TestGen AI',
    tagline: 'AI-Powered Automatic Test Case Generator',
    description:
      'An AI platform that generates unit, integration, and acceptance test cases from source code — supporting multiple frameworks with self-healing capabilities.',
    problem:
      'Writing comprehensive test cases is time-consuming and often incomplete, leading to bugs slipping into production.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Docker', 'GitHub Actions', 'Groq', 'JWT', 'CodeQL'],
    features: [
      'AI-powered test generation from source code',
      'Multiple framework exports: Pytest, JUnit, Jest',
      'Self-healing test support',
      'CI/CD integration with GitHub Actions',
      'CodeQL security analysis',
      'Docker containerization',
      'LLM integration via Groq',
    ],
    icon: TestTube,
    accent: 'primary',
    github: 'https://github.com/CodeByAlok24/TestGen-AI',
    live: 'https://test-gen-ai-gamma.vercel.app/',
    badge: 'Runner-Up — Agentica 2.0 Hackathon',
  },
  {
    name: 'SRAP',
    tagline: 'Smart Route AI Planner',
    description:
      'A multimodal travel route optimizer that finds the best path across flights, trains, metro, buses, and autos using Dijkstra\'s algorithm with AI-generated explanations.',
    problem:
      'Planning multi-modal travel routes is complex — balancing cost, time, distance, and convenience across different transport modes.',
    tech: ['Django REST Framework', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MySQL', 'JWT', 'Groq', 'Cerebras'],
    features: [
      'Multi-modal: flights, trains, metro, buses, autos',
      "Dijkstra's algorithm for optimal pathfinding",
      'Cost, time, distance, and stop-count scoring',
      'AI-generated natural-language route explanations',
      'REST API with Django REST Framework',
    ],
    icon: MapPin,
    accent: 'primary',
    github: 'https://github.com/CodeByAlok24/SRAP---Smart-Route-AI-Planner',
    live: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 dot-bg dot-bg-fade pointer-events-none" />
      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="mono-label text-primary">Projects</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Featured work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Products I've designed, built, and shipped — from real-time systems to AI-powered platforms.
          </p>
        </motion.div>

        <div className="mt-16 space-y-20">
          {projects.map((project, idx) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group"
            >
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                        {project.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.tagline}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mt-4">
                    {project.description}
                  </p>

                  <p className="mt-3 text-sm text-muted-foreground/80 italic">
                    {project.problem}
                  </p>

                  {project.badge && (
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                      <ArrowUpRight className="w-3 h-3" />
                      {project.badge}
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-mono rounded border border-border bg-card/50 text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md border border-border text-foreground hover:border-primary/30 hover:bg-secondary/50 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <TiltCard className="h-full min-h-[280px] rounded-xl border border-border bg-card/30 p-6 md:p-8 flex flex-col">
                    <h4 className="mono-label text-muted-foreground mb-4">Key Features</h4>
                    <ul className="space-y-3 flex-1">
                      {project.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.06 }}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </TiltCard>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
