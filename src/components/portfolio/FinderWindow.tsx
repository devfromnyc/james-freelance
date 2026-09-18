"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Project } from "@/types";

interface FinderWindowProps {
  project: Project;
  onClose: () => void;
  zIndex: number;
  onFocus: () => void;
  initialPosition: { x: number; y: number };
}

export function FinderWindow({
  project,
  onClose,
  zIndex,
  onFocus,
  initialPosition,
}: FinderWindowProps) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    onFocus();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart]);

  return (
    <motion.div
      ref={windowRef}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      style={{
        left: position.x,
        top: position.y,
        zIndex,
      }}
      onClick={onFocus}
      className="absolute w-[500px] max-w-[90vw] bg-cyber-darker rounded-xl overflow-hidden border border-neon-cyan/30 shadow-2xl shadow-neon-cyan/10"
    >
      {/* Title Bar */}
      <div
        onMouseDown={handleMouseDown}
        className="flex items-center justify-between px-4 py-3 bg-cyber-gray/80 border-b border-cyber-light cursor-move"
      >
        {/* Traffic lights */}
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"
            aria-label="Close"
          />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* Title */}
        <span className="text-sm text-foreground/80 font-medium">
          {project.title}
        </span>

        {/* Spacer for centering */}
        <div className="w-12" />
      </div>

      {/* Content */}
      <div className="p-6 max-h-[70vh] overflow-y-auto">
        {/* Screenshot */}
        <div className="aspect-video bg-cyber-gray rounded-lg mb-6 overflow-hidden border border-cyber-light">
          {project.screenshots[0] ? (
            <img
              src={project.screenshots[0]}
              alt={`${project.title} screenshot`}
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
          {project.title}
        </h2>
        {project.origin === "production" && (
          <div className="mb-4 px-3 py-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 text-sm text-foreground/80">
            Production work from my current job. I contribute extensively on
            the in-house team — I did not build this site independently, and
            this is not my company.
          </div>
        )}
        <p className="text-foreground/70 mb-6">{project.longDescription}</p>

        {/* Tech Stack */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-neon-cyan uppercase tracking-wider mb-3">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
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
            {project.features.map((feature) => (
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
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-cyber-gray hover:bg-cyber-light border border-cyber-light transition-colors text-foreground/80 hover:text-foreground"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              View Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-neon-cyan text-cyber-dark font-semibold hover:bg-neon-cyan/90 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Site
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
