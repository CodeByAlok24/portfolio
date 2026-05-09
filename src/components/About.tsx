import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Rocket, ShieldCheck, Sparkles } from 'lucide-react';
import profileImg from '@/assets/profile.jpg';

const About = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/CodeByAlok24', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/alok-kumar-das', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:alok.officials.25@gmail.com', label: 'Email' },
  ];
  const strengths = [
    { icon: Rocket, title: 'Product Thinking', text: 'I turn vague ideas into clear, responsive interfaces with practical flows.' },
    { icon: ShieldCheck, title: 'Reliable Delivery', text: 'I care about clean components, readable code, and smooth handoff.' },
    { icon: Sparkles, title: 'AI-Aware Builds', text: 'I use prompt engineering to speed research, iteration, and better UX decisions.' },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
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
            <div className="animated-card glass rounded-2xl p-8">
              <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
                I am a <span className="font-semibold text-primary">Computer Science student at IIIT Dharwad</span> and
                <span className="font-semibold text-primary"> AI / Full-Stack Developer</span> building
                polished products with React, TypeScript, Node.js, Express, MongoDB, and modern AI workflows.
                My work is driven by clear interfaces, secure engineering, and practical problem solving.
              </p>

              <p className="text-lg text-foreground/90 leading-relaxed">
                Recent work includes an automated test generation platform, a movie ticket booking
                app, and a campus lost-and-found marketplace. I like collaborating with teams that
                value ownership, strong communication, and user-focused execution.
              </p>
            </div>

            <div className="grid gap-3">
              {strengths.map((item) => (
                <div key={item.title} className="animated-card glass rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-primary/10 p-2 text-primary">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm leading-6 text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
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
                  className="glass glass-hover spread-hover rounded-xl p-4 flex items-center justify-center"
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
