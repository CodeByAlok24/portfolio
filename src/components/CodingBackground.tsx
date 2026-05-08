import { motion } from 'framer-motion';

const codeLines = [
  'const candidate = "Alok";',
  'skills.map(buildProductionUI);',
  'await ship({ react, node, ai });',
  'type RecruiterView = Portfolio;',
  'git commit -m "polished experience"',
  'function solve(problem) { return impact; }',
  'SELECT growth FROM projects;',
  'npm run build && deploy',
];

const floatingSnippets = [
  '{ React }',
  '<AI />',
  'Node.js',
  'MongoDB',
  'CI/CD',
  'secure()',
  'tests++',
  'ship();',
];

const CodingBackground = () => {
  return (
    <div className="coding-background" aria-hidden="true">
      <div className="code-grid" />
      <div className="scanline" />
      <motion.div
        className="code-rain"
        animate={{ y: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {[...codeLines, ...codeLines, ...codeLines].map((line, index) => (
          <span key={`${line}-${index}`}>{line}</span>
        ))}
      </motion.div>

      <div className="floating-snippets">
        {floatingSnippets.map((snippet, index) => (
          <motion.span
            key={snippet}
            className="floating-snippet"
            style={{
              left: `${8 + ((index * 13) % 82)}%`,
              top: `${14 + ((index * 17) % 70)}%`,
            }}
            animate={{
              y: [0, -18, 0],
              x: [0, index % 2 === 0 ? 12 : -12, 0],
              opacity: [0.12, 0.42, 0.12],
              rotate: [index % 2 === 0 ? -4 : 4, 0, index % 2 === 0 ? -4 : 4],
            }}
            transition={{
              duration: 7 + index,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.35,
            }}
          >
            {snippet}
          </motion.span>
        ))}
      </div>

      <motion.div
        className="terminal-panel hidden md:block"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="terminal-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="terminal-body">
          <p><span>$</span> recruiter.scan --portfolio</p>
          <p>React | TypeScript | Prompt Engineering</p>
          <p className="typing-line">status: ready_for_interview</p>
        </div>
      </motion.div>
    </div>
  );
};

export default CodingBackground;
