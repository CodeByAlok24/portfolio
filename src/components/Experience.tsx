import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

// All company logos must be in public/images/
const experiences = [
  {
    title: 'Web Development Intern',
    company: 'CodeCraft Infotech',
    period: 'Jan-2025 - Feb-2025',
    description: [
    'Developed a high-accuracy Stopwatch web app with millisecond precision and instant UI updates',
    'Built a Calculator web app for real-time operations and smooth user experience',
    'Implemented custom time-tracking logic for seamless accuracy in stopwatch calculations',
    'Designed full user interfaces and integrated math functions for all calculator needs'
],
    logo: '/images/CodeCraftInfotech.png'
  },
  {
    title: 'Frontend Developer',
    company: 'IBM SKillBuild - Edunet Foundation',
    period: 'Aug-2025 - Oct-2025',
    description: [
  'Developed a fully responsive and visually engaging personal portfolio website using React, TypeScript, and modern JavaScript.',
  'Implemented a clean and interactive UI with advanced styling through Tailwind CSS, HTML5, and CSS3 to ensure an elegant user experience across all devices.',
  'Integrated smooth animations and transitions for a dynamic, professional feel using Framer Motion and component-based architecture.',
  'Optimized performance, accessibility, and SEO for fast loading times and improved visibility.',
  'Designed the portfolio as a reflection of my skills — combining aesthetic appeal with technical precision to leave a lasting impression on visitors.'
],

    logo: '/images/IBMPhoto.png'
  },
  {
    title: 'Prompt Engineer for GenAI',
    company: 'Internshala Training',
    period: 'Aug-2024 - Oct-2024',
    description: [
      'Developed responsive websites using React and modern CSS',
      'Participated in code reviews and agile ceremonies',
      'Contributed to open-source projects',
      'Gained expertise in web accessibility standards',
    ],
    logo: '/images/Internshala.png'
  },
  {
    title: 'Summer Intern – Digital Fundraising',
    company: 'Pledge A Smile Foundation',
    period: 'Aug-2025-Sep-2025',
    description: [
    'Engaged in outreach initiatives via calls, emails, and social media to connect with potential donors and sponsors',
    'Helped raise awareness and funds for people lacking access to basic resources and education',
    'Collaborated with the outreach team to enhance campaign reach and audience engagement'
  ],
    logo: '/images/PledgeSmile.png'
  }
];

const ExperienceCard = ({ exp, showLine }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative flex gap-6 items-center">
      {/* Timeline line: ONLY matches the logo/profile box, not above or below */}
      {showLine && (
        <div
          style={{
            position: 'absolute',
            left: '2.1rem', // aligns at logo's edge (adjust if needed for your layout/logo size!)
            top: 0,
            height: '4rem', // must match logo/profile height (w-16 = 4rem)
            zIndex: 0,
            pointerEvents: 'none'
          }}
        >
          <div className="w-0.5 h-full bg-gradient-to-b from-primary to-transparent" />
        </div>
      )}
      <motion.div
        whileHover={{ scale: 1.06, rotate: 360 }}
        transition={{ duration: 0.4 }}
        className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-primary to-accent shadow-glow flex items-center justify-center overflow-hidden relative z-10"
      >
        {exp.logo && !imgError ? (
          <img
            src={exp.logo}
            alt={`${exp.company} logo`}
            className="w-full h-full object-cover bg-white rounded-xl"
            onError={() => setImgError(true)}
          />
        ) : (
          <Briefcase className="w-full h-full text-white" />
        )}
      </motion.div>
      <div className="glass rounded-2xl p-6 flex-grow glass-hover">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-1">
              {exp.title}
            </h3>
            <p className="text-primary font-medium">{exp.company}</p>
          </div>
          <span className="text-muted-foreground mt-2 md:mt-0">
            {exp.period}
          </span>
        </div>
        <ul className="space-y-2">
          {exp.description.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span className="text-foreground/80 leading-relaxed">
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => (
  <section id="experience" className="py-20 md:py-32 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          Work Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
      </motion.div>
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title + exp.company}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative mb-12 last:mb-0"
          >
            <ExperienceCard
              exp={exp}
              showLine={index < experiences.length - 1}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
