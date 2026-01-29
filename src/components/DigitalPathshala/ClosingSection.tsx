import { Sprout, ArrowRight } from "lucide-react";

export const ClosingSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-background to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-8 md:p-12 border-2 border-primary/20 animate-glow-pulse">
            <Sprout className="w-16 h-16 text-primary mx-auto mb-6" />
            
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-primary">Plant a seed of knowledge today.</span>
              <br />
              Help us build a Digital India from the roots up.
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8">
              Your contribution is the spark that turns a rural student's curiosity into a professional career.
            </p>

            <a
              href="https://www.bskf.org.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              Support Digital Pathshala
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Bangla Susthayi Krishi Foundation. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/70 mt-2">
              Registration: S0056943 | Darpan ID: WB/2025/0765073
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
