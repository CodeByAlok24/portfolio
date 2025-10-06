import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '@/assets/profile.jpg';

const About = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/CodeByAlok24/Portfolio', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/alok-kumar-das-590885294/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:alok.officials.25@gmail.com', label: 'Email' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30" />
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={profileImg}
                alt="Profile"
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-primary/30 shadow-glow-lg"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
              I'm a passionate <span className="font-semibold">Front-End Developer</span> and 
              <span className="font-semibold"> Prompt Engineer</span> with a deep enthusiasm for creating 
              seamless, visually engaging, and intelligent digital experiences. 
              My journey in technology is driven by curiosity, creativity, and a desire 
              to bridge the gap between humans and technology through thoughtful design and AI-driven solutions.
            </p>

            <p className="text-lg text-foreground/90 leading-relaxed">
              Beyond coding, I am an avid learner and collaborator, always eager to explore and 
              contribute to innovative projects. Let's connect and create something amazing together!
            </p>

            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="glass glass-hover rounded-xl p-4 flex items-center justify-center"
                  aria-label={social.label}
                >
                  <social.icon className="text-primary" size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
