"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "TailwindCSS", icon: "🎨" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Shopify", icon: "🛒" },
  { name: "Salesforce", icon: "☁️" },
  { name: "OpenAI", icon: "🤖" },
  { name: "Vercel", icon: "▲" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "📦" },
  { name: "GraphQL", icon: "◈" },
];

export function TechStack() {
  return (
    <section className="py-20 sm:py-32 bg-cyber-darker overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-neon-cyan font-mono text-sm mb-4">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Tools of the Trade
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A curated selection of technologies I work with daily to build
            robust, scalable applications.
          </p>
        </motion.div>

        {/* Marquee container */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-cyber-darker to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-cyber-darker to-transparent z-10" />

          {/* Marquee */}
          <div className="flex overflow-hidden">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-8 py-4"
            >
              {/* Double the items for seamless loop */}
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex items-center gap-3 px-6 py-3 rounded-full bg-cyber-gray/50 border border-cyber-light hover:border-neon-cyan/50 transition-colors whitespace-nowrap"
                >
                  <span className="text-xl">{tech.icon}</span>
                  <span className="text-foreground/80 font-medium">
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second row - reverse direction */}
          <div className="flex overflow-hidden mt-4">
            <motion.div
              initial={{ x: "-50%" }}
              animate={{ x: 0 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-8 py-4"
            >
              {[...technologies.reverse(), ...technologies].map(
                (tech, index) => (
                  <div
                    key={`${tech.name}-rev-${index}`}
                    className="flex items-center gap-3 px-6 py-3 rounded-full bg-cyber-gray/50 border border-cyber-light hover:border-neon-cyan/50 transition-colors whitespace-nowrap"
                  >
                    <span className="text-xl">{tech.icon}</span>
                    <span className="text-foreground/80 font-medium">
                      {tech.name}
                    </span>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
