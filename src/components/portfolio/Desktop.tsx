"use client";

import { useState, useCallback } from "react";
import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { AnimatePresence } from "framer-motion";
import { projects } from "@/lib/projects";
import { Project } from "@/types";
import { MenuBar } from "./MenuBar";
import { Folder } from "./Folder";
import { FinderWindow } from "./FinderWindow";
import { Dock } from "./Dock";

interface FolderPosition {
  x: number;
  y: number;
}

interface OpenWindow {
  project: Project;
  zIndex: number;
  position: { x: number; y: number };
}

const iconMap: Record<string, string> = {
  "folder-chart": "📊",
  "folder-star": "⭐",
  "folder-code": "💻",
  folder: "📁",
};

function DragOverlayFolder({ project }: { project: Project }) {
  return (
    <div className="cursor-grabbing select-none">
      <div className="flex flex-col items-center gap-1 p-3 rounded-lg bg-neon-cyan/20 border border-neon-cyan/50 shadow-lg shadow-neon-cyan/20">
        <div className="text-5xl">{iconMap[project.icon] || "📁"}</div>
        <div className="text-xs text-center max-w-[80px] truncate bg-neon-cyan text-cyber-dark px-2 rounded">
          {project.title}
        </div>
      </div>
    </div>
  );
}

export function Desktop() {
  // Initialize folder positions in a grid
  const [folderPositions, setFolderPositions] = useState<
    Record<string, FolderPosition>
  >(() => {
    const positions: Record<string, FolderPosition> = {};
    const cols = 4;
    const startX = 40;
    const startY = 60;
    const gapX = 100;
    const gapY = 100;

    projects.forEach((project, index) => {
      const col = index % cols;
      const row = Math.floor(index / cols);
      positions[project.id] = {
        x: startX + col * gapX,
        y: startY + row * gapY,
      };
    });

    return positions;
  });

  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [openWindows, setOpenWindows] = useState<OpenWindow[]>([]);
  const [highestZIndex, setHighestZIndex] = useState(100);
  const [activeId, setActiveId] = useState<string | null>(null);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 5,
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 200,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  }, []);

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, delta } = event;

    setFolderPositions((prev) => ({
      ...prev,
      [active.id]: {
        x: prev[active.id].x + delta.x,
        y: prev[active.id].y + delta.y,
      },
    }));
    setActiveId(null);
  }, []);

  const openWindow = useCallback(
    (project: Project) => {
      // Check if window is already open
      const existingIndex = openWindows.findIndex(
        (w) => w.project.id === project.id
      );

      if (existingIndex !== -1) {
        // Bring to front
        focusWindow(project.id);
        return;
      }

      const newZIndex = highestZIndex + 1;
      setHighestZIndex(newZIndex);

      // Position window near center with some randomness
      const position = {
        x: Math.random() * 100 + 150,
        y: Math.random() * 50 + 100,
      };

      setOpenWindows((prev) => [
        ...prev,
        { project, zIndex: newZIndex, position },
      ]);
    },
    [openWindows, highestZIndex]
  );

  const closeWindow = useCallback((projectId: string) => {
    setOpenWindows((prev) => prev.filter((w) => w.project.id !== projectId));
  }, []);

  const focusWindow = useCallback(
    (projectId: string) => {
      const newZIndex = highestZIndex + 1;
      setHighestZIndex(newZIndex);

      setOpenWindows((prev) =>
        prev.map((w) =>
          w.project.id === projectId ? { ...w, zIndex: newZIndex } : w
        )
      );
    },
    [highestZIndex]
  );

  const handleDesktopClick = useCallback(() => {
    setSelectedFolder(null);
  }, []);

  return (
    <div
      className="fixed inset-0 bg-cyber-gradient overflow-hidden"
      onClick={handleDesktopClick}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Menu Bar */}
      <MenuBar />

      {/* Desktop Area */}
      <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="absolute inset-0 pt-8 pb-20">
          {projects.map((project) => (
            <Folder
              key={project.id}
              project={project}
              position={folderPositions[project.id]}
              onOpen={() => openWindow(project)}
              isSelected={selectedFolder === project.id}
              onSelect={() => setSelectedFolder(project.id)}
            />
          ))}
        </div>
        <DragOverlay dropAnimation={null}>
          {activeId ? (
            <DragOverlayFolder project={projects.find((p) => p.id === activeId)!} />
          ) : null}
        </DragOverlay>
      </DndContext>

      {/* Windows */}
      <AnimatePresence>
        {openWindows.map((window) => (
          <FinderWindow
            key={window.project.id}
            project={window.project}
            onClose={() => closeWindow(window.project.id)}
            zIndex={window.zIndex}
            onFocus={() => focusWindow(window.project.id)}
            initialPosition={window.position}
          />
        ))}
      </AnimatePresence>

      {/* Dock */}
      <Dock />
    </div>
  );
}
