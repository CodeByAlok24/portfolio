import { motion, useInView } from 'framer-motion';
import { Trophy, Code2, Award, Shield, Users } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const AnimatedCounter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
};

const achievements = [
  {
    icon: Trophy,
    title: 'Agentica 2.0',
    subtitle: 'Runner-Up',
    description: 'Built TestGen AI — an AI-powered test case generator — and placed as Runner-Up at Agentica 2.0 Hackathon.',
    metric: 'Runner-Up',
    numeric: null,
  },
  {
    icon: Code2,
    title: '450+',
    subtitle: 'Coding Problems',
    description: 'Solved 450+ DSA problems across platforms, building strong fundamentals in algorithms and data structures.',
    metric: '450+',
    numeric: 450,
  },
  {
    icon: Award,
    title: 'SQL',
    subtitle: 'HackerRank Gold Badge',
    description: 'Earned the Gold Badge for SQL on HackerRank, demonstrating advanced query and database skills.',
    metric: 'Gold',
    numeric: null,
  },
  {
    icon: Users,
    title: 'Sangeet 4.0',
    subtitle: 'Operations & Logistics Lead',
    description: 'Led operations and logistics for Sangeet 4.0, managing event flow, resources, and coordination.',
    metric: 'Lead',
    numeric: null,
  },
  {
    icon: Shield,
    title: 'Sangeet 3.0',
    subtitle: 'Event Security Lead',
    description: 'Directed security operations for Sangeet 3.0, ensuring safe and smooth event execution.',
    metric: 'Lead',
    numeric: null,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding bg-card/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="mono-label text-primary">Achievements</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Recognition & milestones
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group p-6 rounded-lg border border-border bg-card/50 card-hover cursor-default"
            >
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                  className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-primary" />
                </motion.div>
                <span className="font-display text-2xl font-bold text-primary/30 group-hover:text-primary/60 transition-colors">
                  {item.numeric ? <AnimatedCounter value={item.numeric} /> : item.metric}
                </span>
              </div>
              <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-primary font-medium mt-0.5">{item.subtitle}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
