"use client";

import { motion } from "framer-motion";

const workflowSteps = [
  {
    step: 1,
    title: "Trigger",
    description: "New form submission, email, or scheduled task",
    icon: "⚡",
  },
  {
    step: 2,
    title: "Process",
    description: "AI analyzes, categorizes, and enriches data",
    icon: "🧠",
  },
  {
    step: 3,
    title: "Action",
    description: "Automated response, update, or notification",
    icon: "🚀",
  },
  {
    step: 4,
    title: "Learn",
    description: "System improves from each interaction",
    icon: "📈",
  },
];

const useCases = [
  "Customer support chatbots that actually understand context",
  "Automated content generation for your blog or social media",
  "Smart inventory management that predicts demand",
  "Lead scoring and qualification on autopilot",
];

export function AISpotlight() {
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
          <span className="inline-block text-neon-purple font-mono text-sm mb-4">
            The Differentiator
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            AI Workflows That Work For You
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Most developers build websites. I build intelligent systems that
            learn, adapt, and automate your business processes.
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            {workflowSteps.map((step, index) => (
              <div key={step.step} className="flex items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  className="relative"
                >
                  <div className="w-24 h-24 rounded-full bg-cyber-gray border-2 border-neon-purple/50 flex flex-col items-center justify-center">
                    <span className="text-2xl">{step.icon}</span>
                    <span className="text-xs text-foreground/50 mt-1">
                      Step {step.step}
                    </span>
                  </div>
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center w-32">
                    <div className="text-sm font-semibold text-foreground">
                      {step.title}
                    </div>
                    <div className="text-xs text-foreground/50 hidden md:block">
                      {step.description}
                    </div>
                  </div>
                </motion.div>

                {/* Arrow */}
                {index < workflowSteps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-neon-purple/50 to-neon-cyan/50 mx-2"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 p-8 rounded-2xl bg-cyber-gray/30 border border-cyber-light"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Real-World Applications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-neon-cyan">✓</span>
                <span className="text-foreground/70">{useCase}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
