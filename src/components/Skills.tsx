import { motion } from 'framer-motion';
import { Code2, Database, Wrench, Users } from 'lucide-react';

// Import react-icons for technology-specific icons
import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiHtml5, 
  SiCss3, 
  SiMysql,
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiNextdotjs, 
  SiDjango, 
  SiGit,  
  SiGooglecloud, 
  SiPostgresql, 
  SiMongodb, 
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', icon: SiCss3, color: '#1572B6' },
      { name: 'SQL', icon: SiMysql, color: '#4479A1' }
    ],
    color: 'from-primary to-accent',
  },
  {
    title: 'Frameworks',
    icon: Database,
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#000000' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'Django', icon: SiDjango, color: '#092E20' },
    ],
    color: 'from-accent to-secondary',
  },
  {
  title: 'Tools',
  icon: Wrench,
  skills: [
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' }, // Google Cloud icon here!
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  ],
  color: 'from-secondary to-primary',
},

  {
    title: 'Soft Skills',
    icon: Users,
    skills: [
      { name: 'Team Leadership', icon: null, color: null },
      { name: 'Communication', icon: null, color: null },
      { name: 'Problem Solving', icon: null, color: null },
      { name: 'Agile', icon: null, color: null },
    ],
    color: 'from-primary to-secondary',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass glass-hover rounded-2xl p-6 relative overflow-hidden group"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Icon */}
              <div className="relative mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} p-3 shadow-glow`}>
                  <category.icon className="w-full h-full text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-foreground relative">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="space-y-3 relative">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center gap-3 group/skill hover:bg-white/5 rounded-lg p-2 transition-all duration-200"
                  >
                    {skill.icon ? (
                      <skill.icon 
                        className="w-5 h-5 transition-transform duration-200 group-hover/skill:scale-110" 
                        style={{ color: skill.color }}
                      />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    )}
                    <span className="text-foreground/80 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
