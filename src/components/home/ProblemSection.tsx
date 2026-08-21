"use client";

import { motion } from "framer-motion";

const painPoints = [
  {
    icon: "⚡",
    title: "Slow, Outdated Websites",
    description:
      "Your site takes forever to load, frustrating users and killing conversions.",
  },
  {
    icon: "🔧",
    title: "Manual Processes",
    description:
      "Hours wasted on repetitive tasks that could be automated with the right tools.",
  },
  {
    icon: "📉",
    title: "Missed Opportunities",
    description:
      "Your competitors are leveraging AI while you're stuck with legacy systems.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-20 sm:py-32 bg-cyber-darker">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-neon-magenta font-mono text-sm mb-4">
            The Challenge
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Sound Familiar?
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Most businesses struggle with these common pain points. The good
            news? They're all solvable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 rounded-xl bg-cyber-gray/50 border border-cyber-light hover:border-neon-magenta/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-neon-magenta transition-colors">
                {point.title}
              </h3>
              <p className="text-foreground/60">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
