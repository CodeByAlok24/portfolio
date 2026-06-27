import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CalendarDays, Code2, Trophy } from 'lucide-react';

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string[];
  logo: string;
  type: 'Achievement' | 'Internship' | 'Training' | 'Volunteer' | 'Open Source';
};

const experiences: ExperienceItem[] = [
  {
    title: 'Open Source Contributor',
    company: 'Open Source Community',
    period: 'May 2026 - Present',
    type: 'Open Source',
    description: [
      'Contributing to public repositories through issue fixes, documentation improvements, and feature-focused pull requests.',
      'Practicing collaborative development workflows with Git, GitHub, code reviews, and maintainable commit history.',
      'Improving production-readiness by reading existing codebases, following project conventions, and shipping focused changes.',
    ],
    logo: '/images/OpenSourceContributor.svg',
  },
  {
    title: 'Runner-Up - Agentica 2.0 Hackathon',
    company: 'Agentica 2.0 Hackathon',
    period: 'March 2026',
    type: 'Achievement',
    description: [
      'Developed an AI-powered automatic test case generator for unit, integration, and acceptance tests.',
      'Implemented multi-framework support for Pytest, JUnit, and Jest with test quality analysis and self-healing.',
      'Secured Runner-Up with scalable API design and local AI model integration.',
    ],
    logo: '/images/IIITSriCity.png',
  },
  {
    title: 'Frontend Developer',
    company: 'IBM SkillBuild - Edunet Foundation',
    period: 'Aug 2025 - Oct 2025',
    type: 'Internship',
    description: [
      'Developed a responsive portfolio website UI using React.js and modern CSS.',
      'Optimized state management to reduce re-renders and improve performance across devices.',
      'Built reusable components and polished user flows for a professional developer portfolio.',
    ],
    logo: '/images/IBMPhoto.png',
  },
  {
    title: 'Web Development Intern',
    company: 'CodeCraft Infotech',
    period: 'Jan 2025 - Feb 2025',
    type: 'Internship',
    description: [
      'Developed a high-accuracy stopwatch web app with millisecond precision and instant UI updates.',
      'Built a calculator web app for real-time operations and smooth user experience.',
      'Implemented custom time-tracking logic for seamless stopwatch accuracy.',
      'Designed full user interfaces and integrated math functions for calculator workflows.',
    ],
    logo: '/images/CodeCraftInfotech.png',
  },
  {
    title: 'Prompt Engineer for GenAI',
    company: 'Internshala Training',
    period: 'Aug 2024 - Oct 2024',
    type: 'Training',
    description: [
      'Practiced prompt design workflows for generating clearer, more useful AI responses.',
      'Explored structured prompting, iterative refinement, and real-world GenAI use cases.',
      'Built stronger communication habits for translating goals into precise instructions.',
    ],
    logo: '/images/Internshala.png',
  },
  {
    title: 'Summer Intern - Digital Fundraising',
    company: 'Pledge A Smile Foundation',
    period: 'Aug 2025 - Sep 2025',
    type: 'Volunteer',
    description: [
      'Executed digital fundraising campaigns to increase donor outreach and online engagement.',
      'Maintained landing pages and tracked campaign metrics through weekly reports.',
      'Collaborated with the outreach team to improve campaign reach and audience engagement.',
    ],
    logo: '/images/PledgeSmile.png',
  },
];

const ExperienceLogo = ({ exp }: { exp: ExperienceItem }) => {
  const [imgError, setImgError] = useState(false);
  const FallbackIcon = exp.type === 'Achievement'
    ? Trophy
    : exp.type === 'Open Source'
      ? Code2
      : Briefcase;

  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      transition={{ duration: 0.25 }}
      className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] p-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)] md:h-20 md:w-20"
    >
      {exp.logo && !imgError ? (
        <img
          src={exp.logo}
          alt={`${exp.company} logo`}
          className="h-full w-full rounded-xl bg-white object-contain p-1"
          onError={() => setImgError(true)}
        />
      ) : (
        <FallbackIcon className="h-8 w-8 text-white/70" />
      )}
    </motion.div>
  );
};

const ExperienceCard = ({ exp }: { exp: ExperienceItem }) => {
  return (
    <div className="animated-card group relative overflow-hidden rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06] hover:border-white/[0.12] hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)] sm:p-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60" />

      <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-white/50">
            <span className="w-1 h-1 rounded-full bg-white/30" />
            {exp.type}
          </span>
          <h3 className="text-xl font-bold leading-tight text-white/90 sm:text-2xl">
            {exp.title}
          </h3>
          <p className="mt-2 font-medium text-white/60">{exp.company}</p>
        </div>

        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] px-3 py-2 text-xs text-white/40 sm:px-4 sm:text-sm">
          <CalendarDays size={14} className="text-white/30" />
          {exp.period}
        </div>
      </div>

      <ul className="relative mt-6 space-y-3 text-sm sm:text-base">
        {exp.description.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07 }}
            className="flex items-start gap-3 text-white/60"
          >
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/30 shadow-[0_0_8px_rgba(255,255,255,0.15)]" />
            <span className="leading-relaxed">{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

const SectionFloaters = () => (
  <>
    <motion.div
      className="absolute top-24 right-12 w-16 h-16 rounded-full border border-white/[0.03] pointer-events-none"
      animate={{ y: [0, -18, 0], rotate: [0, 180, 360] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-32 left-10 w-8 h-8 rounded-full bg-white/[0.02] blur-sm pointer-events-none"
      animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
    />
    <motion.div
      className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full bg-white/[0.05] pointer-events-none"
      animate={{ y: [0, -25, 0], opacity: [0.2, 0.6, 0.2] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
    />
  </>
);

const Experience = () => (
  <section id="experience" className="relative py-16 md:py-32 overflow-hidden">
    <SectionFloaters />
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-white"
        >
          Work Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-lg text-white/50 max-w-2xl"
        >
          A snapshot of internships, training, and event wins that shaped how I build, collaborate, and ship.
        </motion.p>
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-8 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent md:block" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.title}-${exp.company}`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.08 }}
              className="relative grid gap-5 md:grid-cols-[5rem_1fr]"
            >
              <div className="flex justify-center md:justify-start">
                <ExperienceLogo exp={exp} />
              </div>
              <ExperienceCard exp={exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
