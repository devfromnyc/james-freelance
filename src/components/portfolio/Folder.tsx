"use client";

import { motion } from "framer-motion";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Project } from "@/types";

interface FolderProps {
  project: Project;
  position: { x: number; y: number };
  onOpen: () => void;
  isSelected: boolean;
  onSelect: () => void;
}

const iconMap: Record<string, string> = {
  "folder-chart": "📊",
  "folder-star": "⭐",
  "folder-code": "💻",
  folder: "📁",
};

export function Folder({
  project,
  position,
  onOpen,
  isSelected,
  onSelect,
}: FolderProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: project.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    left: position.x,
    top: position.y,
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      onDoubleClick={(e) => {
        e.stopPropagation();
        onOpen();
      }}
      className={`absolute cursor-pointer select-none ${
        isDragging ? "z-50 opacity-40" : "z-10"
      }`}
    >
      <div
        className={`flex flex-col items-center gap-1 p-3 rounded-lg transition-all ${
          isSelected
            ? "bg-neon-cyan/20 border border-neon-cyan/50"
            : "hover:bg-cyber-gray/30"
        }`}
      >
        {/* Folder Icon */}
        <motion.div
          animate={
            isDragging
              ? { rotate: [0, -5, 5, -5, 0] }
              : isSelected
                ? { y: [0, -2, 0] }
                : {}
          }
          transition={{ duration: 0.3, repeat: isDragging ? Infinity : 0 }}
          className="text-5xl"
        >
          {iconMap[project.icon] || "📁"}
        </motion.div>

        {/* Label */}
        <div
          className={`text-xs text-center max-w-[80px] truncate ${
            isSelected ? "bg-neon-cyan text-cyber-dark px-2 rounded" : "text-foreground/90"
          }`}
        >
          {project.title}
        </div>
      </div>
    </motion.div>
  );
}
