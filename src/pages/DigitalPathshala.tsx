import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/DigitalPathshala/HeroSection";
import { ConceptSection } from "@/components/DigitalPathshala/ConceptSection";
import { VisionSection } from "@/components/DigitalPathshala/VisionSection";
import { DonationSection } from "@/components/DigitalPathshala/DonationSection";
import { ClosingSection } from "@/components/DigitalPathshala/ClosingSection";

const DigitalPathshala = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 md:pt-20">
        <HeroSection />
        <ConceptSection />
        <VisionSection />
        <DonationSection />
        <ClosingSection />
      </main>
    </div>
  );
};

export default DigitalPathshala;
