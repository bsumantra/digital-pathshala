import { Target, MapPin } from "lucide-react";

export const VisionSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/50 via-transparent to-forest-dark/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/30 mb-8">
            <Target className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">The 10-Year Vision</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            From One Room to{" "}
            <span className="text-primary">Every Block</span>
          </h2>

          <div className="glass-card rounded-2xl p-8 md:p-12 mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-primary" />
              <span className="font-display text-2xl text-primary font-semibold">India-Wide Mission</span>
            </div>
            
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              Starting with one room, our goal is to reach{" "}
              <strong className="text-primary">every administrative block across India</strong>{" "}
              within a decade. We are building a nation where a child's zip code does not define their potential.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary font-display">1</div>
              <div className="text-sm text-muted-foreground mt-1">Room Today</div>
            </div>
            <div className="text-3xl text-muted-foreground/50 self-center">→</div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary font-display">6,600+</div>
              <div className="text-sm text-muted-foreground mt-1">Blocks in 10 Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
