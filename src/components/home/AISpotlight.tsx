"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    step: 1,
    title: "Discovery",
    description: "Understand your goals, challenges, and vision",
    icon: "🔍",
  },
  {
    step: 2,
    title: "Strategy",
    description: "Plan timeline, tech stack, and milestones",
    icon: "📋",
  },
  {
    step: 3,
    title: "Build",
    description: "Develop with regular updates and feedback",
    icon: "⚡",
  },
  {
    step: 4,
    title: "Launch",
    description: "Deploy, document, and provide support",
    icon: "🚀",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 sm:py-32 bg-cyber-darker relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-neon-cyan/5" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-neon-cyan font-mono text-sm mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            A Simple, Transparent Process
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            No guesswork, no chaos. Just a clear path from idea to launch.
          </p>
        </motion.div>

        {/* Workflow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          {/* Circles and connecting lines row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {processSteps.map((step, index) => (
              <div key={step.step} className="flex items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  className="w-24 h-24 rounded-full bg-cyber-gray border-2 border-neon-cyan/50 flex flex-col items-center justify-center"
                >
                  <span className="text-2xl">{step.icon}</span>
                  <span className="text-xs text-foreground/50 mt-1">
                    Step {step.step}
                  </span>
                </motion.div>

                {/* Connecting line */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="hidden md:block w-12 lg:w-20 h-0.5 bg-gradient-to-r from-neon-cyan/50 to-neon-cyan/30 mx-1"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Labels row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 mt-4">
            {processSteps.map((step, index) => (
              <div key={step.step} className="flex items-center">
                <div className="w-24 text-center">
                  <div className="text-sm font-semibold text-foreground">
                    {step.title}
                  </div>
                  <div className="text-xs text-foreground/50 hidden md:block mt-1">
                    {step.description}
                  </div>
                </div>

                {/* Spacer to match line width */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block w-12 lg:w-20 mx-1" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
