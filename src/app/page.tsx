import { Hero } from "@/components/home/Hero";
import { AboutMini } from "@/components/home/AboutMini";
import { ProblemSection } from "@/components/home/ProblemSection";
import { HowIHelp } from "@/components/home/HowIHelp";
import { AISpotlight } from "@/components/home/AISpotlight";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { TechStack } from "@/components/home/TechStack";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMini />
      <ProblemSection />
      <HowIHelp />
      <AISpotlight />
      <FeaturedWork />
      <TechStack />
      <FinalCTA />
    </>
  );
}
