import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Service-based E-Commerce Application',
    description: [
      'A full-stack movie ticket booking web app that enables users to browse movies, select seats, and book tickets online with secure payments.It offers real-time updates, responsive design, and seamless user experience powered by modern web technologies.',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe/payments', 'Tailwind', 'Express.js', 'JWT'],
    image: 'https://cdn.dribbble.com/userupload/3030996/file/original-0ee71c0fe6413f57e8fc16a52b20a708.png?resize=752x&vertical=center',
    github: 'https://github.com/CodeByAlok24/CineGharShow',
    demo: 'https://example.com',
  },

  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time data visualization platform with machine learning predictions and automated reporting.',
    tech: ['React', 'Python', 'TensorFlow', 'D3.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Social Media App',
    description: 'Mobile-first social networking platform with real-time messaging, media sharing, and user analytics.',
    tech: ['React Native', 'Firebase', 'Redux', 'WebSocket'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Task Management System',
    description: 'Collaborative project management tool with Kanban boards, time tracking, and team collaboration features.',
    tech: ['Next.js', 'MongoDB', 'Socket.io', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, rotateX: 5 }}
              className="glass glass-hover rounded-2xl overflow-hidden group"
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
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

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
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
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
