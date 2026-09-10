import { Hero } from "@/components/home/Hero";
import { AboutMini } from "@/components/home/AboutMini";
import { ProblemSection } from "@/components/home/ProblemSection";
import { HowIHelp } from "@/components/home/HowIHelp";
import { ShopifySection } from "@/components/home/ShopifySection";
import { ProcessSection } from "@/components/home/AISpotlight";
import { TechStack } from "@/components/home/TechStack";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMini />
      <ProblemSection />
      <HowIHelp />
      <ProcessSection />
      <ShopifySection />
      <TechStack />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
