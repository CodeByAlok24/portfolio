import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const highlights = [
  { value: '250+', label: 'LeetCode problems' },
  { value: '3', label: 'Featured builds' },
  { value: 'Runner-Up', label: 'Agentica 2.0' },
  { value: '2027', label: 'IIIT Dharwad CSE' },
];

const techTicker = ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Docker', 'GitHub Actions', 'Redis'];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.16),transparent_32%),radial-gradient(circle_at_75%_35%,hsl(var(--accent)/0.12),transparent_34%),linear-gradient(180deg,transparent,hsl(var(--background))_92%)]" />

      <div className="relative z-10 flex min-h-[calc(100svh-7rem)] items-center">
        <div className="container mx-auto w-full max-w-full px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto grid w-full max-w-7xl min-w-0 items-center gap-9 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12"
          >
            <div className="min-w-0 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mx-auto mb-4 inline-flex max-w-[calc(100vw-2rem)] items-center justify-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-2 text-center text-[0.72rem] font-medium leading-5 text-primary shadow-glow sm:max-w-full sm:px-4 sm:text-xs md:text-sm lg:mx-0"
              >
                <Sparkles size={16} className="shrink-0" />
                <span className="min-w-0 whitespace-normal break-words">
                  Available for frontend, full-stack and AI projects
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 }}
                className="mb-5 min-w-0 font-bold leading-tight"
              >
                <span className="mb-3 block break-words text-base font-semibold uppercase tracking-[0.16em] text-foreground/70 sm:text-lg sm:tracking-[0.18em] md:text-xl lg:text-2xl">
                  Hi, I am <span className="gradient-text">Alok</span>
                </span>
                <span className="mx-auto block max-w-[20rem] break-words text-balance text-[1.55rem] leading-[1.18] text-foreground min-[380px]:max-w-[23rem] min-[380px]:text-[1.72rem] sm:max-w-[42rem] sm:text-3xl md:text-[2.35rem] lg:mx-0 lg:text-[2.8rem] xl:text-[3.05rem]">
                  Building smart, polished software that leaves a strong first impression.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="mx-auto mb-7 max-w-[22rem] break-words text-sm leading-7 text-foreground/80 sm:max-w-2xl sm:text-base md:text-[1.05rem] lg:mx-0"
              >
                Computer Science student at IIIT Dharwad building full-stack React, Node.js,
                and AI products, from automated test generation to production-ready booking
                and campus marketplace platforms.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
                className="flex min-w-0 flex-col justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start"
              >
                <Button
                  size="lg"
                  className="animated-card spread-hover h-12 w-full min-w-0 max-w-full bg-primary px-5 text-primary-foreground shadow-glow transition-all hover:-translate-y-1 hover:bg-primary/90 hover:shadow-glow-lg sm:w-auto sm:px-7"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Hire Me
                </Button>
                <a
                  href="/Resume_Alok_Kumar_Das.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animated-card spread-hover inline-flex h-12 w-full min-w-0 max-w-full items-center justify-center rounded-lg border border-primary/45 bg-background/50 px-5 font-semibold text-primary backdrop-blur transition-all hover:-translate-y-1 hover:bg-primary/10 sm:w-auto sm:px-7"
                >
                  <Download className="mr-2 shrink-0" size={20} />
                  <span className="truncate">View Resume</span>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.86 }}
                className="mx-auto mt-7 w-full max-w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)] sm:max-w-2xl lg:mx-0"
              >
                <div className="tech-marquee">
                  {[...techTicker, ...techTicker].map((tech, index) => (
                    <span key={`${tech}-${index}`} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.95 }}
                className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
              >
                <a href="https://github.com/CodeByAlok24" target="_blank" rel="noopener noreferrer" className="hero-social spread-hover" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/alok-kumar-das" target="_blank" rel="noopener noreferrer" className="hero-social spread-hover" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:alok.officials.25@gmail.com" className="hero-social spread-hover" aria-label="Email">
                  <Mail size={20} />
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="mx-auto w-full max-w-lg min-w-0 px-1 sm:px-0"
            >
              <div className="developer-card">
                <div className="developer-card__top">
                  <span />
                  <span />
                  <span />
                  <p>portfolio.tsx</p>
                </div>
                <div className="space-y-3 overflow-hidden p-4 font-mono text-xs leading-6 text-foreground/80 sm:space-y-4 sm:p-6 sm:text-sm">
                  <p><span className="text-primary">const</span> role = <span className="text-accent">"AI / Full-Stack Developer"</span>;</p>
                  <p><span className="text-primary">const</span> stack = [<span className="text-accent">"React"</span>, <span className="text-accent">"Express"</span>, <span className="text-accent">"MongoDB"</span>];</p>
                  <p><span className="text-primary">return</span> products.ship(<span className="text-accent">"securely"</span>);</p>
                </div>
                <div className="grid grid-cols-2 border-t border-border/60 sm:grid-cols-4">
                  {highlights.map((item) => (
                    <div key={item.label} className="border-r border-border/60 p-3 last:border-r-0 even:border-r-0 sm:p-4 sm:even:border-r sm:last:border-r-0">
                      <strong className="block text-xl leading-tight text-primary sm:text-2xl">{item.value}</strong>
                      <span className="text-xs text-muted-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-sm text-muted-foreground md:flex"
      >
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={20} />
        </motion.span>
        Explore
      </motion.a>
    </section>
  );
};

export default Hero;
