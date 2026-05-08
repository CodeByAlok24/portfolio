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

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

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
              {/* Flex container: Logo on left, Card on right with gap */}
              <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                {/* Logo container - separate with white background */}
                <div className="mx-auto flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white shadow-[0_0_16px_1px_rgba(5,183,255,0.15)] sm:mx-0 sm:h-20 sm:w-20">
                  <img
                    src={achievement.logo}
                    alt="logo"
                    className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                  />
                </div>

                {/* Main content card - separate from logo */}
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animated-card glass glass-hover relative flex-1 overflow-hidden rounded-2xl p-5 text-center transition-all duration-300 group-hover:shadow-lg sm:p-6 sm:text-left"
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative">
                    <h3 className="mb-2 text-lg font-bold leading-tight text-foreground sm:text-xl">
                      {achievement.title}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {achievement.organization}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4">
                      {achievement.date}
                    </p>
                    
                    {/* View Certificate Button */}
                    <div className="mt-4">
                      <span className="inline-block rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow transition-colors duration-200 hover:bg-accent sm:text-base">
                        View Certificate
                      </span>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
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
