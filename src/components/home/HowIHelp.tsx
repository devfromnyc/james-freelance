"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "I can work on almost any type of web project, from frontend development and landing page creation, to Full-stack applications built with React, Next.js, and TypeScript.",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    color: "neon-cyan",
  },
  {
    icon: "🛒",
    title: "E-Commerce",
    description:
      "Shopify and Salesforce expertise to build, optimize, and scale your online store for maximum conversions.",
    skills: ["Shopify", "Salesforce", "Payment APIs", "Inventory Systems"],
    color: "neon-magenta",
  },
  {
    icon: "🤖",
    title: "AI Integration",
    description:
      "Custom AI workflows that automate your business processes, from customer service to data analysis.",
    skills: ["OpenAI", "LangChain", "Automation", "Custom Agents"],
    color: "neon-blue",
  },
];

export function HowIHelp() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-cyber-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-neon-cyan font-mono text-sm mb-4">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            How I Can Help
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Three core pillars of expertise, each honed through years of
            real-world application.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative p-8 rounded-2xl bg-cyber-gray/30 border border-cyber-light 
                hover:border-${service.color}/50 transition-all duration-500 overflow-hidden`}
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500
                  bg-gradient-radial from-${service.color} to-transparent`}
              />

              <div className="relative z-10">
                <div className="text-5xl mb-6">{service.icon}</div>

                <h3
                  className={`text-2xl font-bold text-foreground mb-4 group-hover:text-${service.color} transition-colors`}
                >
                  {service.title}
                </h3>

                <p className="text-foreground/60 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 text-xs font-mono rounded-full 
                        bg-cyber-dark border border-cyber-light text-foreground/70`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
