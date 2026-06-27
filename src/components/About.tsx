import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Reveal from './Reveal';
import { ArrowUpRight, Code2, Layers, Award } from 'lucide-react';

const stats = [
  { value: 2, suffix: '+', label: 'Years Coding', icon: Code2 },
  { value: 8, suffix: '+', label: 'Projects Built', icon: Layers },
  { value: 6, suffix: '+', label: 'Certifications', icon: Award },
];

const CountUp = ({ target, suffix }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-white">
              About Me
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-white/60">
                I am a <span className="font-semibold text-white">Computer Science student at IIIT Dharwad</span> and{' '}
                <span className="font-semibold text-white">AI / Full-Stack Developer</span> building
                polished products with React, TypeScript, Node.js, Express, MongoDB, and modern AI workflows.
                My work is driven by clear interfaces, secure engineering, and practical problem solving.
              </p>
              <p className="text-lg leading-relaxed text-white/60">
                Recent work includes an automated test generation platform, a movie ticket booking
                app, and a campus lost-and-found marketplace. I like collaborating with teams that
                value ownership, strong communication, and user-focused execution.
              </p>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                      className="text-center"
                    >
                      <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 mb-2">
                        <Icon size={16} className="text-white/40" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-white">
                        <CountUp target={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-xs text-white/40 mt-0.5">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-white/70 font-medium border-b border-white/20 hover:border-white transition-all"
                >
                  Let's work together
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
