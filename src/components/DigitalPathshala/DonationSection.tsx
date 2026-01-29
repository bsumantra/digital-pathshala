import { Heart, BookOpen, Laptop, Building2 } from "lucide-react";

const donationTiers = [
  {
    amount: "₹500",
    impact: "Supports one child's practice for 100 days",
    icon: Heart,
    highlight: false
  },
  {
    amount: "₹5,000",
    impact: "Sets up the entire library and seed bank",
    icon: BookOpen,
    highlight: false
  },
  {
    amount: "₹18,000",
    impact: "Funds the first computer — the heart of the center",
    icon: Laptop,
    highlight: true
  }
];

export const DonationSection = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How You Can{" "}
            <span className="text-primary">Help</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every contribution plants a seed of knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
          {donationTiers.map((tier, index) => (
            <div
              key={tier.amount}
              className={`relative group rounded-2xl p-6 md:p-8 transition-all duration-300 animate-fade-in ${
                tier.highlight 
                  ? "bg-gradient-to-b from-primary/20 to-primary/5 border-2 border-primary glow-gold" 
                  : "glass-card hover:border-primary/30"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full">
                  <span className="text-xs font-semibold text-primary-foreground">Most Impactful</span>
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                tier.highlight ? "bg-primary text-primary-foreground" : "bg-primary/20 text-primary"
              }`}>
                <tier.icon className="w-7 h-7" />
              </div>
              
              <div className="text-3xl md:text-4xl font-bold text-primary font-display mb-3">
                {tier.amount}
              </div>
              
              <p className="text-foreground/80 leading-relaxed">
                {tier.impact}
              </p>
            </div>
          ))}
        </div>

        {/* Pilot Center Goal */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-6 md:p-8 border-2 border-secondary/30 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-secondary" />
              <span className="font-display text-xl text-secondary font-semibold">Pilot Center Goal</span>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-primary font-display mb-3">₹50,000</div>
            <p className="text-foreground/80">
              Our pilot center requires ₹50,000 for hardware, furniture, books, and seeds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
