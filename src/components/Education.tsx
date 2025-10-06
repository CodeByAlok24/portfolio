import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { useState } from 'react';

// Place your college/school logos in 'public/images'
const educationData = [
  {
    degree: 'Bachlors of Technology in Computer Science & Engg',
    university: 'Indian Institute of Information Technology, Dharwad',
    year: '2023 - 2027',
    coursework: [
      'Full Stack Development',
      'Artificial Intelligence',
      'Advanced Algorithms',
      'Machine Learning',
      'Statistics & Probability',
      'Algebra & Calculus'
    ],
    honors: 'Graduated with Honors - GPA 3.9/4.0',
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
    honors: 'Graduated with Honors - GPA 3.9/4.0',
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
      whileHover={{ y: -5 }}
      className="glass glass-hover rounded-2xl p-8"
    >
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Profile box: soft rounded square, white, with glow */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
          className="flex-shrink-0 w-24 h-24 rounded-2xl bg-white shadow-[0_0_24px_2px_rgba(5,183,255,0.25)] flex items-center justify-center"
        >
          {edu.logo && !imgError ? (
            <img
              src={edu.logo}
              alt={`${edu.university} logo`}
              className="w-20 h-20 object-contain rounded-md"
              onError={() => setImgError(true)}
            />
          ) : (
            <GraduationCap className="w-3/4 h-3/4 text-primary" />
          )}
        </motion.div>

        {/* Content */}
        <div className="flex-grow min-w-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className="text-2xl font-bold text-foreground">
              {edu.degree}
            </h3>
            <span className="text-primary font-medium mt-2 md:mt-0">
              {edu.year}
            </span>
          </div>
          <p className="text-xl text-foreground/80 mb-4">{edu.university}</p>
          {/* Honors */}
          <div className="flex items-start gap-2 mb-4 text-secondary">
            <Award size={20} className="mt-0.5 flex-shrink-0" />
            <span className="font-medium">{edu.honors}</span>
          </div>
          {/* Coursework */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground mb-2">
              Relevant Coursework:
            </h4>
            <div className="flex flex-wrap gap-2">
              {edu.coursework.map((course) => (
                <span
                  key={course}
                  className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full border border-accent/20"
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

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

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
