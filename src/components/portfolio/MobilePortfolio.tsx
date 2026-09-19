"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/projects";
import { Project } from "@/types";

const iconMap: Record<string, string> = {
  "folder-chart": "📊",
  "folder-star": "⭐",
  "folder-code": "💻",
  folder: "📁",
};

export function MobilePortfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-cyber-gradient pt-20 pb-8 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Portfolio</h1>
        <p className="text-foreground/60">Tap a project to view details</p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
        {projects.map((project, index) => (
          <motion.button
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="flex flex-col items-center gap-2 p-4 rounded-xl bg-cyber-gray/50 border border-cyber-light hover:border-neon-cyan/50 transition-colors"
          >
            <span className="text-4xl">{iconMap[project.icon] || "📁"}</span>
            <span className="text-sm text-foreground/90 text-center line-clamp-2">
              {project.title}
            </span>
            {project.origin === "production" && (
              <span className="text-[10px] text-neon-cyan">Production work</span>
            )}
          </motion.button>
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-cyber-dark/95 z-50 overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-cyber-gray border border-cyber-light text-foreground z-10"
            >
              ✕
            </button>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="max-w-lg mx-auto pt-16 pb-8 px-4"
            >
              {/* Screenshot */}
              <div className="aspect-video bg-cyber-gray rounded-lg mb-6 overflow-hidden border border-cyber-light">
                {selectedProject.screenshots[0] ? (
                  <img
                    src={selectedProject.screenshots[0]}
                    alt={`${selectedProject.title} screenshot`}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl opacity-30">🖼️</span>
                  </div>
                )}
              </div>

              {/* Title & Description */}
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {selectedProject.title}
              </h2>
              {selectedProject.origin === "production" && (
                <div className="mb-4 px-3 py-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 text-sm text-foreground/80">
                  Production work from my current job. I contribute extensively
                  on the in-house team — I did not build this site
                  independently, and this is not my company.
                </div>
              )}
              {selectedProject.note && (
                <p className="mb-3 text-sm italic text-foreground/50">
                  {selectedProject.note}
                </p>
              )}
              <p className="text-foreground/70 mb-6">
                {selectedProject.longDescription}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-neon-cyan uppercase tracking-wider mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-cyber-gray border border-cyber-light text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-neon-cyan uppercase tracking-wider mb-3">
                  Features
                </h3>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-foreground/70"
                    >
                      <span className="text-neon-cyan mt-1">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-cyber-gray border border-cyber-light text-foreground/80"
                  >
                    View Code
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-neon-cyan text-cyber-dark font-semibold"
                  >
                    Live Site
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
