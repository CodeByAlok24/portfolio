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
      className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-background/90 p-2 shadow-glow md:h-20 md:w-20"
    >
      {exp.logo && !imgError ? (
        <img
          src={exp.logo}
          alt={`${exp.company} logo`}
          className="h-full w-full rounded-xl bg-white object-contain p-1"
          onError={() => setImgError(true)}
        />
      ) : (
        <FallbackIcon className="h-8 w-8 text-primary" />
      )}
    </motion.div>
  );
};

const ExperienceCard = ({ exp }: { exp: ExperienceItem }) => {
  return (
    <div className="animated-card group relative overflow-hidden rounded-2xl border border-border/70 bg-card/70 p-5 shadow-glass backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-glow sm:p-6">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary opacity-80" />
      <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-primary/5 transition-colors group-hover:bg-primary/10" />

      <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <span className="mb-3 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {exp.type}
          </span>
          <h3 className="text-xl font-bold leading-tight text-foreground sm:text-2xl">
            {exp.title}
          </h3>
          <p className="mt-2 font-medium text-primary">{exp.company}</p>
        </div>

        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-background/50 px-3 py-2 text-xs text-muted-foreground sm:px-4 sm:text-sm">
          <CalendarDays size={16} className="text-accent" />
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
            className="flex items-start gap-3 text-foreground/80"
          >
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary shadow-glow" />
            <span className="leading-relaxed">{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => (
  <section id="experience" className="relative py-20 md:py-32">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold gradient-text md:text-4xl">
          Work Experience
        </h2>
        <div className="mx-auto mb-5 h-1 w-24 bg-gradient-to-r from-primary to-secondary" />
        <p className="mx-auto max-w-2xl text-foreground/75">
          A snapshot of internships, training, and event wins that shaped how I build, collaborate, and ship.
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-8 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-primary/70 via-border to-transparent md:block" />

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
