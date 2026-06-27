import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { useState } from 'react';

// Place your college/school logos in 'public/images'
const educationData = [
  {
    degree: 'B.Tech in Computer Science',
    university: 'Indian Institute of Information Technology (IIIT), Dharwad',
    year: 'Sept. 2023 - July 2027',
    coursework: [
      'Full Stack Development',
      'Artificial Intelligence',
      'Advanced Algorithms',
      'Machine Learning',
      'Statistics & Probability',
      'Algebra & Calculus'
    ],
    logo: '/images/InstituteProfile.png',
  },
  {
    degree: 'Senior Secondary Education - XIIth',
    university: 'Church School Beldih , Jamshedpur',
    year: '2020 - 2022',
    coursework: [
      'Physics',
      'Computer',
      'Mathematics',
      'Chemistry'
    ],
    logo: '/images/SchoolImage.png',
  },
  {
    degree: 'Secondary Education - Xth',
    university: 'Church School Beldih , Jamshedpur',
    year: '2020',
    coursework: [
      'Physics',
      'Biology',
      'Chemistry',
      'Mathematics',
      'Geography',
      'English',
      'Computer'
    ],
    honors: 'Certificate of Excellence',
    logo: '/images/SchoolImage.png',
  },
];

const EducationCard = ({ edu }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="animated-card group relative overflow-hidden rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06] hover:border-white/[0.12] hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)] sm:p-8"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60" />

      <div className="relative flex flex-col items-center gap-5 text-center md:flex-row md:gap-6 md:text-left">
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
          className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.2)] sm:h-24 sm:w-24"
        >
          {edu.logo && !imgError ? (
            <img
              src={edu.logo}
              alt={`${edu.university} logo`}
              className="h-16 w-16 rounded-md object-contain sm:h-20 sm:w-20"
              onError={() => setImgError(true)}
            />
          ) : (
            <GraduationCap className="w-3/4 h-3/4 text-white/70" />
          )}
        </motion.div>

        <div className="flex-grow min-w-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className="text-xl font-bold leading-tight text-white/90 sm:text-2xl">
              {edu.degree}
            </h3>
            <span className="text-white/50 font-medium mt-2 md:mt-0">
              {edu.year}
            </span>
          </div>
          <p className="mb-4 text-base text-white/60 sm:text-xl">{edu.university}</p>
          {edu.honors && (
          <div className="mb-4 flex items-start justify-center gap-2 text-white/60 md:justify-start">
            <Award size={20} className="mt-0.5 flex-shrink-0" />
            <span className="font-medium">{edu.honors}</span>
          </div>
          )}
          <div>
            <h4 className="text-sm font-semibold text-white/40 mb-2">
              Relevant Coursework:
            </h4>
            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              {edu.coursework.map((course) => (
                <span
                  key={course}
                  className="px-3 py-1 text-sm text-white/50 bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-full"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SectionFloaters = () => (
  <>
    <motion.div
      className="absolute top-20 right-16 w-14 h-14 rounded-full border border-white/[0.03] pointer-events-none"
      animate={{ y: [0, -15, 0], rotate: [0, -180, -360] }}
      transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-24 left-8 w-6 h-6 rounded-full bg-white/[0.02] blur-sm pointer-events-none"
      animate={{ y: [0, 10, 0], x: [0, 6, 0] }}
      transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
    />
    <motion.div
      className="absolute top-1/2 left-1/3 w-1 h-1 rounded-full bg-white/[0.04] pointer-events-none"
      animate={{ y: [0, -20, 0], opacity: [0.15, 0.5, 0.15] }}
      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
    />
  </>
);

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-32 relative overflow-hidden">
      <SectionFloaters />
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-white"
          >
            Education
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu) => (
            <EducationCard edu={edu} key={edu.degree} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
