import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

const cyclingWords = ['Interfaces', 'Experiences', 'Products', 'Solutions', 'Systems'];

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % cyclingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 120% 100% at 20% 40%, rgba(180, 83, 9, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse 100% 120% at 80% 30%, rgba(120, 53, 15, 0.35) 0%, transparent 50%),
            radial-gradient(ellipse 80% 80% at 60% 70%, rgba(161, 98, 7, 0.25) 0%, transparent 50%),
            radial-gradient(ellipse 60% 60% at 30% 80%, rgba(120, 53, 15, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse 50% 50% at 70% 50%, rgba(180, 83, 9, 0.15) 0%, transparent 50%),
            linear-gradient(180deg, #0f0a06 0%, #120c07 40%, #1a100a 70%, #0f0a06 100%)
          `,
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] rounded-full bg-gradient-to-br from-[#b45309]/40 via-[#78350f]/25 to-transparent blur-[120px]"
          animate={{
            x: mousePos.x * -30,
            y: mousePos.y * -30,
          }}
          transition={{ type: 'spring', stiffness: 30, damping: 20 }}
        />

        <motion.div
          className="absolute -top-[30%] -left-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#b45309]/30 via-[#d97706]/15 to-transparent blur-[100px]"
          animate={{
            x: [0, 60, -30, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute -bottom-[20%] -right-[15%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#78350f]/25 via-[#92400e]/15 to-transparent blur-[100px]"
          animate={{
            x: [0, -40, 50, 0],
            y: [0, 30, -50, 0],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c4956a]/[0.08] backdrop-blur-xl border border-[#c4956a]/[0.15] text-[#c4956a]/80 text-xs sm:text-sm mb-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c4956a] shadow-[0_0_8px_rgba(196,149,106,0.5)]" />
            AI / Full-Stack Developer
            <Sparkles size={12} className="text-[#c4956a]/50" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-white font-bold leading-[1.1] tracking-tight text-[2.2rem] sm:text-6xl md:text-7xl lg:text-[64px]"
          >
            Alok Kumar Das
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-white/50 text-base sm:text-[21px] font-light leading-relaxed max-w-2xl mx-auto px-4 sm:px-0"
          >
            Building smart, polished{' '}
            <span className="relative inline-flex h-[1.2em] overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={cyclingWords[wordIndex]}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[#c4956a] font-normal"
                >
                  {cyclingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>{' '}
            that leave a strong first impression.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-[#b45309] via-[#a16207] to-[#78350f] backdrop-blur-xl border border-[#c4956a]/[0.2] text-white font-medium text-sm hover:from-[#c2410c] hover:via-[#b45309] hover:to-[#92400e] transition-all duration-300 shadow-[0_8px_32px_rgba(180,83,9,0.3)] hover:shadow-glow"
            >
              Get In Touch
            </a>
            <a
              href="/Resume_All_one.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#c4956a]/[0.06] backdrop-blur-xl border border-[#c4956a]/[0.12] text-white/70 font-medium text-sm hover:bg-[#c4956a]/[0.12] hover:text-white transition-all duration-300"
            >
              View Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#c4956a]/[0.08] backdrop-blur-md border border-[#c4956a]/[0.12] text-[#c4956a]/50 hover:bg-[#c4956a]/[0.15] transition-all duration-300"
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
