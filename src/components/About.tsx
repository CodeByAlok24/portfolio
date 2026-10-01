import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Database, Brain, Wrench } from 'lucide-react';
import { useRef } from 'react';

const highlights = [
  { icon: Code2, label: 'Full-Stack Development', desc: 'End-to-end web applications' },
  { icon: Database, label: 'Backend & Systems', desc: 'APIs, databases, real-time infra' },
  { icon: Brain, label: 'AI / LLM Integration', desc: 'RAG, embeddings, AI products' },
  { icon: Wrench, label: 'DevOps & Deployment', desc: 'CI/CD, Docker, cloud platforms' },
];

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section id="about" ref={ref} className="section-padding relative bg-accent-circle overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute top-20 -right-20 w-80 h-80 rounded-full border border-primary/[0.04] pointer-events-none"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 40]) }}
        className="absolute bottom-20 -left-20 w-60 h-60 rounded-full border border-primary/[0.03] pointer-events-none"
      />

      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="mono-label text-primary">About</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Who I am
          </h2>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I'm a Computer Science student at IIIT Dharwad who likes building
              things that work. Not just demos — real products that solve real
              problems.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              My core strength is full-stack development. I work across the
              entire stack — from designing database schemas and building REST
              APIs to crafting frontend interfaces and deploying to production.
              I care about writing clean, maintainable code and building systems
              that scale.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Lately, I've been deep into AI-powered engineering — building RAG
              systems, integrating LLMs into real applications, and working with
              vector databases. I'm interested in how AI can be woven into
              products in a way that's actually useful, not just a gimmick.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              When I'm not coding, I'm solving DSA problems, contributing to
              hackathons, or exploring new tools and frameworks.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-5 rounded-lg border border-border bg-card/50 card-hover"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <item.icon className="w-5 h-5 text-primary mb-3" />
                </motion.div>
                <h3 className="font-display font-semibold text-sm text-foreground">
                  {item.label}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
