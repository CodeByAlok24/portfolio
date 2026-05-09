import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'NativeHarvest',
    category: 'Research project',
    description:
      'XAI framework for Indian crop mapping using Sentinel-1/2 fusion, Attention-LSTM modeling, and SHAP explanations for Rabi crop detection.',
    highlights: ['80.8% Rabi crop accuracy', '6.70% spatial error', 'SHAP Jan-Mar phenology insights'],
    tech: ['PyTorch', 'SHAP', 'GeoPandas', 'Google Earth Engine', 'Sentinel-1/2', 'Streamlit'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
    github: 'https://github.com/CodeByAlok24',
    demo: '',
  },
  {
    title: 'TestGen-AI',
    category: 'Featured build',
    description:
      'Automated test generation platform that creates acceptance and system test cases from source code, descriptions, user stories, and exportable self-healing reports.',
    highlights: ['Self-healing reports', 'Acceptance and system tests', 'Developer productivity flow'],
    tech: ['React 19', 'Vite', 'Framer Motion', 'Monaco Editor', 'Node.js', 'Express', 'MongoDB', 'Docker'],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop',
    github: 'https://github.com/CodeByAlok24/TestGen-AI',
    demo: '',
  },
  {
    title: 'CineGharShow Ticket Booking',
    category: 'Featured build',
    description:
      'Movie ticket booking app with interactive seat maps, Stripe/Razorpay payments, admin dashboards, revenue analytics, Cloudinary media, and instant confirmation emails.',
    highlights: ['Interactive seat maps', 'Payment-ready booking', 'Admin analytics'],
    tech: ['React.js', 'Tailwind CSS', 'Express.js', 'JWT', 'Stripe', 'Razorpay', 'Nodemailer', 'Cloudinary'],
    image: 'https://cdn.dribbble.com/userupload/3030996/file/original-0ee71c0fe6413f57e8fc16a52b20a708.png?resize=752x&vertical=center',
    github: 'https://github.com/CodeByAlok24/CineGharShow',
    demo: '',
  },
  {
    title: 'Lost-Listed',
    category: 'Featured build',
    description:
      'Campus lost-and-found platform for item reporting, student marketplace exchanges, real-time activity updates, user management, and image uploads.',
    highlights: ['Campus item reporting', 'Marketplace exchanges', 'Real-time activity'],
    tech: ['React', 'TypeScript', 'Redux', 'Cloudinary', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
    github: 'https://github.com/CodeByAlok24/Lost-Listed',
    demo: '',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="animated-card glass glass-hover rounded-2xl overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>

              {/* Project Details */}
              <div className="p-5 sm:p-6">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-primary/80">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold mb-3 text-foreground sm:text-2xl">
                  {project.title}
                </h3>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4 grid gap-2">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    variant="outline"
                    size="sm"
                    className="spread-hover w-full border-primary text-primary hover:bg-primary/10 sm:w-auto"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.demo ? (
                    <Button
                      size="sm"
                      className="spread-hover w-full bg-primary hover:bg-primary/90 text-primary-foreground sm:w-auto"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      className="spread-hover w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground sm:w-auto"
                      asChild
                    >
                      <a href="#contact">
                        <ExternalLink size={16} className="mr-2" />
                        Discuss Project
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
