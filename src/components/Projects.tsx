import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Reveal from './Reveal';

const projects = [
  {
    title: 'TestGen-AI',
    description:
      'Automated test generation platform that creates acceptance and system test cases from source code, descriptions, user stories, and exportable self-healing reports.',
    tech: ['React 19', 'Vite', 'Framer Motion', 'Monaco Editor', 'Node.js', 'Express', 'MongoDB', 'Docker'],
    github: 'https://github.com/CodeByAlok24/TestGen-AI',
    demo: '',
  },
  {
    title: 'HAQMS',
    description:
      'Hospital Appointment Queue and Management System with real-time queue tracking, appointment scheduling, role-based dashboards, and instant status updates.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Socket.IO', 'JWT', 'Vercel'],
    github: 'https://github.com/CodeByAlok24',
    demo: '',
  },
  {
    title: 'CineGharShow',
    description:
      'Movie ticket booking app with interactive seat maps, Stripe/Razorpay payments, admin dashboards, revenue analytics, Cloudinary media, and instant confirmation emails.',
    tech: ['React.js', 'Tailwind CSS', 'Express.js', 'JWT', 'Stripe', 'Razorpay', 'Nodemailer', 'Cloudinary'],
    github: 'https://github.com/CodeByAlok24/CineGharShow',
    demo: '',
  },
  {
    title: 'NativeHarvest',
    description:
      'XAI framework for Indian crop mapping using Sentinel-1/2 fusion, Attention-LSTM modeling, and SHAP explanations for Rabi crop detection.',
    tech: ['PyTorch', 'SHAP', 'GeoPandas', 'Google Earth Engine', 'Streamlit'],
    github: 'https://github.com/CodeByAlok24',
    demo: '',
  },
  {
    title: 'Lost-Listed',
    description:
      'Campus lost-and-found platform for item reporting, student marketplace exchanges, real-time activity updates, user management, and image uploads.',
    tech: ['React', 'TypeScript', 'Redux', 'Cloudinary', 'MongoDB'],
    github: 'https://github.com/CodeByAlok24/Lost-Listed',
    demo: '',
  },
];

const ProjectBlock = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const isEven = index % 2 === 0;
  const number = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="relative group w-full py-16 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: isEven ? '#0a0a0a' : '#0e0e0e' }}
    >
      <motion.div
        className="absolute top-16 right-12 w-20 h-20 rounded-full border border-white/[0.03] pointer-events-none"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-8 w-10 h-10 rounded-full bg-white/[0.02] blur-sm pointer-events-none"
        animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-white/[0.05] pointer-events-none"
        animate={{ y: [0, -30, 0], opacity: [0.2, 0.7, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.015] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      </div>

      <Reveal delay={0.1}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block text-sm font-mono text-white/15 mb-3"
              >
                {number}
              </motion.span>
              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
                {project.title}
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-base sm:text-lg leading-relaxed text-white/55">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="px-3 py-1.5 text-sm text-white/60 bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-full"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + project.tech.length * 0.05, duration: 0.4 }}
                className="flex gap-6 pt-2"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm text-white/60 bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-full hover:bg-white/[0.08] hover:text-white transition-all duration-300"
                >
                  <Github size={14} />
                  View Code
                </a>
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm text-white/60 bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-full hover:bg-white/[0.08] hover:text-white transition-all duration-300"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                ) : (
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm text-white/60 bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-full hover:bg-white/[0.08] hover:text-white transition-all duration-300"
                  >
                    <ExternalLink size={14} />
                    Discuss Project
                  </a>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </Reveal>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-32 pb-4">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-white">
            Projects
          </h2>
        </Reveal>
      </div>
      {projects.map((project, index) => (
        <ProjectBlock key={project.title} project={project} index={index} />
      ))}
    </section>
  );
};

export default Projects;
