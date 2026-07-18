import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Reveal from './Reveal';

const footerGroups = [
  {
    title: 'Explore',
    links: [
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Experience', href: '#experience' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { name: 'GitHub', href: 'https://github.com/CodeByAlok24' },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/alok-kumar-das-590885294' },
      { name: 'Email', href: 'mailto:alok.officials.25@gmail.com' },
      { name: 'WhatsApp', href: 'https://wa.me/919835137229' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Resume', href: '/Resume_All_one.pdf' },
      { name: 'Contact', href: '#contact' },
    ],
  },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/CodeByAlok24', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/alok-kumar-das-590885294', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:alok.officials.25@gmail.com', label: 'Email' },
  { icon: FaWhatsapp, href: 'https://wa.me/919835137229', label: 'WhatsApp' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.04]">
      <Reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pb-8 border-b border-white/[0.06]">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h4 className="text-[12px] font-medium text-white/30 uppercase tracking-wider mb-4">
                  {group.title}
                </h4>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1 text-[12px] text-white/50 hover:text-white transition-colors"
                      >
                        {link.name}
                        {link.href.startsWith('http') && <ArrowUpRight size={10} className="opacity-40" />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-6">
            <p className="text-[12px] text-white/30 order-2 sm:order-1">
              &copy; {currentYear} Alok Kumar Das. All rights reserved.
            </p>
            <div className="flex items-center gap-3 order-1 sm:order-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all duration-300"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </footer>
  );
};

export default Footer;
