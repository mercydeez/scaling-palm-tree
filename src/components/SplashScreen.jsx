import { motion } from 'framer-motion';

export default function SplashScreen() {
  const first = 'ATHARVA'.split('');
  const last = 'SOUNDANKAR'.split('');

  return (
    <motion.div
      key="splash"
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black overflow-hidden"
      exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
          {/* Central Line Container */}
          <div className="relative w-full max-w-4xl flex flex-col items-center">
            
            {/* ATHARVA dropping down */}
            <div className="absolute bottom-full mb-4 flex justify-center space-x-1 lg:space-x-2">
              {first.map((char, i) => (
                <motion.span
                  key={`first-${i}`}
                  className="font-headline font-black text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-on-surface"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8 + (i * 0.06), // Starts exactly after line completes (0.8s)
                    type: 'spring',
                    stiffness: 150,
                    damping: 10,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* The Horizontal Line (#b8fd4b) */}
            <motion.div
              className="h-[2px] w-full bg-primary origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: 'circOut' }}
            />

            {/* SOUNDANKAR rising up */}
            <div className="absolute top-full mt-4 flex justify-center space-x-[2px] md:space-x-1">
              {last.map((char, i) => (
                <motion.span
                  key={`last-${i}`}
                  className="font-headline font-semibold text-lg md:text-2xl lg:text-3xl tracking-widest text-primary"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.4 + (i * 0.05), // Starts after ATHARVA mostly drops down
                    ease: [0.34, 1.56, 0.64, 1], // Custom bounce
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

          </div>

          {/* Pill Badge */}
          <motion.div
            className="absolute bottom-20 flex items-center gap-3 border border-primary/30 rounded-full px-6 py-3 bg-primary/5 backdrop-blur-sm max-w-[90vw] text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 2.3 }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-primary shrink-0" />
            <span className="font-mono text-[10px] md:text-xs text-primary font-bold tracking-[0.1em] uppercase">
              AI Engineer & LLM Systems Builder | GenAI · RAG · Agentic Workflows
            </span>
          </motion.div>

    </motion.div>
  );
}
