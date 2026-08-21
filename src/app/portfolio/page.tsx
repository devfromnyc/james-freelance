"use client";

import { useEffect, useState } from "react";
import { Desktop } from "@/components/portfolio/Desktop";
import { MobilePortfolio } from "@/components/portfolio/MobilePortfolio";

export default function PortfolioPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-cyber-gradient flex items-center justify-center">
        <div className="text-neon-cyan text-xl">Loading...</div>
      </div>
    );
  }

  return isMobile ? <MobilePortfolio /> : <Desktop />;
}
