import { motion } from 'framer-motion';
import { Trophy, Award, FileText, Star } from 'lucide-react';

const achievements = [
  {
    title: 'Runner-Up - Agentica 2.0 Hackathon',
    organization: 'AI / Full-Stack Developer',
    date: 'March 2026',
    icon: Trophy,
    logo: '/images/IIITSriCity.png',
    link: '#experience',
  },
  {
    title: 'HTML & CSS in Depth',
    organization: 'Meta (Coursera)',
    date: '2025',
    icon: Award,
    logo: '/images/MetaProfile.png',
    link: 'https://www.coursera.org/account/accomplishments/verify/X0F7NSIOO16J',
  },
  {
    title: 'National Financial Literacy Quiz',
    organization: 'NISM - SEBI',
    date: '2025',
    icon: Trophy,
    logo: '/images/NismFinancial.png',
    link: 'https://www.linkedin.com/in/alok-kumar-das-590885294/details/certifications/1744539188130/single-media-viewer/?profileId=ACoAAEdSDPwBYkT8iExyGNf94oYtKfZYeAghmFE',
  },
  {
    title: 'Blog about Placement Guides',
    organization: 'Hashnodes',
    date: '2021',
    icon: FileText,
    logo: '/images/Blog1.png',
    link: 'https://codebyalok24.hashnode.dev/is-dsa-enough-for-placement',
  },
  {
    title: 'Deloitte Australia - Data Analytics Job Simulation',
    organization: 'Forage',
    date: '2025',
    icon: Star,
    logo: '/images/Forage.png',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_fSajBssa9vNgyLShZ_1752134030722_completion_certificate.pdf',
  },
  {
    title: 'Prompt Design in Vertex AI',
    organization: 'Google Cloud',
    date: '2025',
    icon: Trophy,
    logo: '/images/GoogleCloud.png',
    link: 'https://www.cloudskillsboost.google/public_profiles/b7388a20-2e23-440d-9114-bf6bfbb9de0b/badges/12991163',
  },
  {
    title: 'Accenture UK - Introduction to Technology Apprenticeship Job Simulation',
    organization: 'Forage',
    date: '2025',
    icon: Award,
    logo: '/images/Forage.png',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ovyvuqqNRQKBjNxbj/EzKFRQ2oEA87PPjsL_ovyvuqqNRQKBjNxbj_Ct8ptgxcLXJehdzyq_1750847597569_completion_certificate.pdf',
  },
  {
    title: 'Certificate of Participation - DevHack 6.0',
    organization: 'Parsec - IIT Dharwad (Hackathon)',
    date: '2025',
    icon: Award,
    logo: '/images/IITDWD.png',
    link: 'https://www.linkedin.com/in/alok-kumar-das-590885294/details/certifications/1752837671603/single-media-viewer/?profileId=ACoAAEdSDPwBYkT8iExyGNf94oYtKfZYeAghmFE',
  },
];

const SectionFloaters = () => (
  <>
    <motion.div
      className="absolute top-16 right-20 w-12 h-12 rounded-full border border-white/[0.03] pointer-events-none"
      animate={{ y: [0, -12, 0], rotate: [0, 120, 240] }}
      transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-28 left-12 w-7 h-7 rounded-full bg-white/[0.02] blur-sm pointer-events-none"
      animate={{ y: [0, 14, 0], x: [0, -7, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
    />
    <motion.div
      className="absolute top-2/3 right-1/4 w-1 h-1 rounded-full bg-white/[0.04] pointer-events-none"
      animate={{ y: [0, -18, 0], opacity: [0.15, 0.55, 0.15] }}
      transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
    />
  </>
);

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 md:py-32 relative overflow-hidden">
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
            Achievements & Certifications
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="relative group cursor-pointer"
            >
              <div className="flex flex-row items-stretch gap-3 sm:gap-4 sm:flex-row sm:items-center">
                <div className="mx-auto flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.2)] sm:mx-0 sm:h-20 sm:w-20">
                  <img
                    src={achievement.logo}
                    alt="logo"
                    className="h-10 w-10 object-contain sm:h-14 sm:w-14"
                  />
                </div>

                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animated-card group relative flex-1 overflow-hidden rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] p-5 text-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06] hover:border-white/[0.12] hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)] sm:p-6 sm:text-left"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60" />

                  <div className="relative">
                    <h3 className="mb-2 text-lg font-bold leading-tight text-white/90 sm:text-xl">
                      {achievement.title}
                    </h3>
                    <p className="text-white/50 font-medium mb-2">
                      {achievement.organization}
                    </p>
                    <p className="text-white/30 text-sm mb-4">
                      {achievement.date}
                    </p>
                    
                    <div className="mt-4">
                      <span className="inline-block rounded-lg bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] px-4 py-2 text-sm font-medium text-white/70 shadow transition-all duration-300 hover:bg-white/[0.12] hover:text-white">
                        View Certificate
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
