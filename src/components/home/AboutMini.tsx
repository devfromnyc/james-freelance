"use client";

import { motion } from "framer-motion";

export function AboutMini() {
  return (
    <section className="py-20 sm:py-32 bg-cyber-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          {/* Photo placeholder */}
          <div className="relative flex-shrink-0">
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-cyber-gray border-2 border-neon-cyan/30 overflow-hidden">
              {/* Replace with actual photo */}
              <div className="w-full h-full flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border border-neon-cyan/20 animate-pulse-glow" />
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block text-neon-cyan font-mono text-sm mb-4"
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
            >
              Hey, I&apos;m James
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-foreground/70 mb-6 leading-relaxed"
            >
              A senior developer with{" "}
              <span className="text-neon-cyan font-semibold">7+ years</span> of
              experience turning complex ideas into elegant, scalable solutions.
              Based in NYC, I specialize in building web applications that don't
              just work—they think.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-foreground/60 leading-relaxed"
            >
              From crafting seamless e-commerce experiences to integrating AI
              workflows that automate the mundane, I'm passionate about
              leveraging technology to solve real business problems.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 mt-8 justify-center md:justify-start"
            >
              <div>
                <div className="text-3xl font-bold text-neon-cyan">7+</div>
                <div className="text-sm text-foreground/50">Years Exp</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon-cyan">50+</div>
                <div className="text-sm text-foreground/50">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon-cyan">100%</div>
                <div className="text-sm text-foreground/50">Dedication</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
