"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { featuredProjects } from "@/lib/projects";
import { Button } from "@/components/ui/Button";

export function FeaturedWork() {
  return (
    <section className="py-20 sm:py-32 bg-cyber-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-neon-cyan font-mono text-sm mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Featured Work
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in web
            development, e-commerce, and AI integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden bg-cyber-gray/50 border border-cyber-light hover:border-neon-cyan/50 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-cyber-darker flex items-center justify-center">
                <div className="text-4xl opacity-50">
                  {project.icon === "folder-chart" && "📊"}
                  {project.icon === "folder-star" && "⭐"}
                  {project.icon === "folder-code" && "💻"}
                  {project.icon === "folder" && "📁"}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/60 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech stack preview */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono rounded bg-cyber-dark text-foreground/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 text-xs font-mono rounded bg-cyber-dark text-foreground/40">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Hover overlay with link */}
              <Link
                href="/portfolio"
                className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6"
              >
                <span className="text-neon-cyan font-semibold">
                  View Project →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button href="/portfolio" variant="secondary">
            View Full Portfolio
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
