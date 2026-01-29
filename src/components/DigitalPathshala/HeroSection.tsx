import { Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark via-background to-background" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, hsl(var(--secondary) / 0.2) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center py-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/30 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Launching January 23rd — Netaji Jayanti</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="text-primary">DIGITAL</span>{" "}
          <span className="text-foreground">PATHSHALA</span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl font-display text-secondary mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          The ₹5 Revolution: Empowering Rural India's Future
        </p>

        <blockquote className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 italic mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          "In rural India, a brilliant mind shouldn't be held back by a lack of bandwidth."
        </blockquote>

        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-6 md:p-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            This January 23rd (Netaji Jayanti), <strong className="text-primary">Bangla Susthayi Krishi Foundation</strong> is launching 
            Digital Pathshala — a one-room digital revolution for underprivileged children (Classes 5–12) and rural women.
          </p>
        </div>
      </div>
    </section>
  );
};
