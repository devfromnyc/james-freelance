"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What's your typical project timeline?",
    answer:
      "It completely depends on the project assigned — scope and complexity vary, so there isn't a one-size-fits-all schedule. Every project is completed in a very timely manner, and I'll share a clear plan once we talk through the work.",
  },
  {
    question: "How do you handle communication during a project?",
    answer:
      "I believe in transparent, regular communication. You'll get weekly progress updates, and I'm available via email or Slack for questions. For larger projects, we can set up brief weekly check-in calls.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Yes! I offer maintenance packages for clients who need ongoing support, updates, and improvements. Many of my clients continue working with me long after the initial launch.",
  },
  {
    question: "What if I need changes after the project is complete?",
    answer:
      "I include a revision period in every project to ensure you're happy with the final result. After launch, changes can be handled through a maintenance agreement or on a per-project basis.",
  },
  {
    question: "Can you work with my existing team or other developers?",
    answer:
      "Absolutely. I've collaborated with in-house teams, designers, and other developers on many projects. Clean code, documentation, and clear communication make handoffs smooth.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-32 bg-cyber-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-neon-cyan font-mono text-sm mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Common Questions
          </h2>
          <p className="text-lg text-foreground/60">
            Everything you need to know about working together.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-5 rounded-xl bg-cyber-gray/50 border border-cyber-light hover:border-neon-cyan/50 transition-all"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-medium text-foreground">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    className="text-neon-cyan text-xl flex-shrink-0"
                  >
                    +
                  </motion.span>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-foreground/60 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
