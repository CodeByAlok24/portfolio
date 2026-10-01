import { motion } from 'framer-motion';
import { Code2, Database, Terminal, Binary, ExternalLink } from 'lucide-react';

const skills = [
  { icon: Code2, label: 'C++', desc: 'Primary DSA language' },
  { icon: Terminal, label: 'Data Structures', desc: 'Arrays, trees, graphs, heaps' },
  { icon: Binary, label: 'Algorithms', desc: 'Sorting, searching, DP, graphs' },
  { icon: Database, label: 'SQL', desc: 'Complex queries, optimization' },
];

const profiles = [
  { label: 'LeetCode', url: 'https://leetcode.com/u/Alok_leetC27/' },
  { label: 'Codeforces', url: 'https://codeforces.com/profile/Alok_CFC27' },
  { label: 'CodeChef', url: 'https://www.codechef.com/users/coderx404' },
  { label: 'HackerRank', url: 'https://www.hackerrank.com/profile/alokhacs222729' },
];

const CodingBackground = () => {
  return (
    <section id="coding" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="mono-label text-primary">Coding & DSA</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Strong engineering
            <br />
            <span className="gradient-text">foundations.</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Problem-solving is at the core of how I think. I've solved{' '}
              <span className="text-foreground font-semibold">450+ coding problems</span>{' '}
              across platforms, building deep intuition for algorithms and data structures.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              My primary language for DSA is <span className="text-foreground font-medium">C++</span>,
              and I'm equally comfortable with{' '}
              <span className="text-foreground font-medium">Python</span> and{' '}
              <span className="text-foreground font-medium">SQL</span>. I hold a{' '}
              <span className="text-primary font-medium">HackerRank Gold Badge</span> in SQL.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              This foundation translates directly into writing efficient, optimized code —
              whether it's fixing N+1 queries, resolving race conditions, or designing
              scalable system architecture.
            </p>
          </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="p-5 rounded-lg border border-border bg-card/50 card-hover"
                >
                  <skill.icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-display font-semibold text-sm text-foreground">{skill.label}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{skill.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="p-5 rounded-lg border border-border bg-card/50">
              <h4 className="mono-label text-muted-foreground mb-3">Competitive Programming</h4>
              <div className="flex flex-wrap gap-2">
                {profiles.map((profile) => (
                  <a
                    key={profile.label}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-border bg-secondary/50 text-muted-foreground hover:text-foreground hover:border-primary/25 transition-all"
                  >
                    {profile.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CodingBackground;
