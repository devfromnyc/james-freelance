"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const dockItems = [
  { icon: "🏠", label: "Home", href: "/" },
  { icon: "📁", label: "Finder", href: "/portfolio", active: true },
  { icon: "💬", label: "Contact", href: "/contact" },
];

export function Dock() {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", damping: 20 }}
        className="flex items-end gap-2 px-4 py-2 bg-cyber-darker/80 backdrop-blur-md rounded-2xl border border-neon-cyan/20"
      >
        {dockItems.map((item) => (
          <motion.div
            key={item.label}
            whileHover={{ scale: 1.3, y: -10 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <Link
              href={item.href}
              className={`flex items-center justify-center w-12 h-12 rounded-xl text-2xl transition-all ${
                item.active
                  ? "bg-cyber-gray/80 shadow-lg shadow-neon-cyan/20"
                  : "hover:bg-cyber-gray/50"
              }`}
            >
              {item.icon}
            </Link>

            {/* Tooltip */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-cyber-dark rounded text-xs text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {item.label}
            </div>

            {/* Active indicator */}
            {item.active && (
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neon-cyan" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
