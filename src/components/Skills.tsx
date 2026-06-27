import { motion } from 'framer-motion';
import Reveal from './Reveal';

const skillGroups = [
  {
    title: 'Languages',
    color: 'border-blue-500/20 bg-blue-500/8 text-blue-300',
    skills: ['JavaScript', 'TypeScript', 'HTML/CSS', 'SQL', 'C++'],
  },
  {
    title: 'Frameworks & Libraries',
    color: 'border-emerald-500/20 bg-emerald-500/8 text-emerald-300',
    skills: ['React', 'Node.js', 'Express', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Tools & Platforms',
    color: 'border-purple-500/20 bg-purple-500/8 text-purple-300',
    skills: ['Git', 'Docker', 'AWS', 'GitHub Actions', 'MongoDB', 'PostgreSQL', 'Redis', 'RabbitMQ'],
  },
  {
    title: 'Expertise',
    color: 'border-amber-500/20 bg-amber-500/8 text-amber-300',
    skills: ['Full-Stack Development', 'AI Integration', 'System Design', 'UI/UX Engineering'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-white">
              Skills & Expertise
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-10">
              {skillGroups.map((group, i) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                >
                  <h3 className="text-sm font-semibold text-white/35 uppercase tracking-wider mb-4">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.04, y: -1 }}
                        className={`px-3 py-1.5 text-sm rounded-lg border ${group.color} transition-all duration-200 cursor-default`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;
