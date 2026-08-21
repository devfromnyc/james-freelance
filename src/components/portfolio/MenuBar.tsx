"use client";

import { useState, useEffect } from "react";

export function MenuBar() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 bg-cyber-darker/90 backdrop-blur-md border-b border-neon-cyan/20 flex items-center justify-between px-4 text-sm">
      {/* Left side - Apple-like menu */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <span className="text-neon-cyan font-bold">{"</>"}</span>
        <span className="text-foreground/90 font-semibold">
          James&apos;s Portfolio
        </span>
        <span className="text-foreground/50">File</span>
        <span className="text-foreground/50">Edit</span>
        <span className="text-foreground/50">View</span>
      </div>

      {/* Right side - Status */}
      <div className="flex items-center gap-4 text-foreground/70">
        <span>🔋 100%</span>
        <span>📶</span>
        <span className="font-mono">{time}</span>
      </div>
    </div>
  );
}
