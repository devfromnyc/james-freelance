"use client";

import { motion } from "framer-motion";

const shopifyServices = [
  {
    title: "Custom Shopify Apps",
    description:
      "Private and public apps that extend Shopify's functionality exactly how your business needs.",
    icon: "🔧",
    examples: ["Checkout extensions", "Admin dashboards", "Inventory sync tools"],
  },
  {
    title: "Theme Development",
    description:
      "Custom themes built from scratch or modifications to existing themes for pixel-perfect storefronts.",
    icon: "🎨",
    examples: ["Custom Liquid themes", "Headless storefronts", "Theme customizations"],
  },
  {
    title: "Third-Party Integrations",
    description:
      "Connect Shopify with your existing tools—ERPs, CRMs, fulfillment systems, and more.",
    icon: "🔗",
    examples: ["API integrations", "Webhook handlers", "Data sync pipelines"],
  },
];

const techBadges = [
  "Shopify CLI",
  "Liquid",
  "Polaris",
  "Remix",
  "GraphQL",
  "REST API",
  "Webhooks",
  "App Bridge",
];

export function ShopifySection() {
  return (
    <section className="py-20 sm:py-32 bg-cyber-dark relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0, 245, 255, 0.15) 0%, transparent 50%),
                              radial-gradient(circle at 80% 50%, rgba(149, 76, 233, 0.15) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-neon-cyan font-mono text-sm mb-4">
            E-commerce Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Shopify Development That{" "}
            <span className="text-neon-cyan text-glow-cyan">Scales</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            From custom apps to complete storefronts, I build Shopify solutions
            that grow with your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {shopifyServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-6 rounded-xl bg-cyber-gray/30 border border-cyber-light hover:border-neon-cyan/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-foreground/60 text-sm mb-4">
                {service.description}
              </p>
              <ul className="space-y-1">
                {service.examples.map((example) => (
                  <li
                    key={example}
                    className="text-xs text-foreground/50 flex items-center gap-2"
                  >
                    <span className="text-neon-cyan">→</span>
                    {example}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Tech Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {techBadges.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.05 }}
              className="px-4 py-2 rounded-full bg-cyber-gray/50 border border-cyber-light text-sm text-foreground/70 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
