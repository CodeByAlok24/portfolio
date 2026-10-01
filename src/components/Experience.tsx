import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, Calendar, ChevronDown } from 'lucide-react';
import { useState, useRef } from 'react';

const contributions = [
  'Built and maintained REST APIs for a real-time hospital appointment and queue management platform',
  'Worked with Next.js, Node.js, PostgreSQL, Prisma, and Socket.IO',
  'Implemented and maintained RBAC and authentication systems',
  'Fixed N+1 query problems across database operations',
  'Resolved Socket.IO race conditions in real-time updates',
  'Fixed authentication and security vulnerabilities',
  'Handled deployment on Vercel, Render, and Neon',
];

const Experience = () => {
  const [expanded, setExpanded] = useState(true);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" ref={ref} className="section-padding bg-card/30 relative overflow-hidden">
      <motion.div
        style={{ height: lineHeight }}
        className="absolute left-0 top-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent pointer-events-none"
      />

      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="mono-label text-primary">Experience</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Where I've worked
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12"
        >
          <div className="relative pl-8 md:pl-12 border-l border-border">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"
            />

            <div className="pb-4">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Building2 className="w-4 h-4 text-primary" />
                  </motion.div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                    Figital Labs
                  </h3>
                </div>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium"
                >
                  <Calendar className="w-3 h-3" />
                  Jan 2026 – Apr 2026
                </motion.span>
              </div>
              <p className="text-muted-foreground font-medium">
                Software Development Engineer Intern — Full Stack
              </p>
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-2 mb-4"
              aria-expanded={expanded}
            >
              {expanded ? 'Hide' : 'Show'} contributions
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>

            <motion.div
              initial={false}
              animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Worked on <span className="text-foreground font-medium">HAQMS</span>, a
                real-time hospital appointment and queue management platform.
              </p>
              <ul className="space-y-3">
                {contributions.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-3 text-sm text-muted-foreground cursor-default"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
