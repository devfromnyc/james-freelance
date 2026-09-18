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
          {/* Mobile / tablet: each step is circle + copy in one row */}
          <ol className="lg:hidden max-w-md mx-auto">
            {processSteps.map((step, index) => (
              <li key={step.step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                    className="w-16 h-16 shrink-0 rounded-full bg-cyber-gray border-2 border-neon-cyan/50 flex flex-col items-center justify-center"
                  >
                    <span className="text-xl leading-none">{step.icon}</span>
                    <span className="text-[10px] text-foreground/50 mt-0.5">
                      {step.step}
                    </span>
                  </motion.div>
                  {index < processSteps.length - 1 && (
                    <div className="w-0.5 flex-1 min-h-10 my-1 bg-gradient-to-b from-neon-cyan/50 to-neon-cyan/20" />
                  )}
                </div>
                <div className="pb-8 pt-1">
                  <div className="text-base font-semibold text-foreground">
                    {step.title}
                  </div>
                  <p className="text-sm text-foreground/50 mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* Desktop: original two-row timeline so connectors sit at circle center */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-center">
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
                  {index < processSteps.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="w-12 lg:w-20 h-0.5 origin-left bg-gradient-to-r from-neon-cyan/50 to-neon-cyan/30 mx-1"
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-start justify-center mt-4">
              {processSteps.map((step, index) => (
                <div key={step.step} className="flex items-start">
                  <div className="w-24 text-center">
                    <div className="text-sm font-semibold text-foreground">
                      {step.title}
                    </div>
                    <div className="text-xs text-foreground/50 mt-1">
                      {step.description}
                    </div>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-12 lg:w-20 mx-1" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
