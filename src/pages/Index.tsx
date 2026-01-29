import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Users, Sprout, Lightbulb } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-forest-dark via-background to-background" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 30% 20%, hsl(var(--primary) / 0.4) 0%, transparent 40%),
                               radial-gradient(circle at 70% 60%, hsl(var(--secondary) / 0.3) 0%, transparent 40%)`
            }} />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center py-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/30 mb-8 animate-fade-in">
              <span className="text-xs font-medium text-muted-foreground">Registration: S0056943</span>
              <span className="text-muted-foreground/50">|</span>
              <span className="text-xs font-medium text-muted-foreground">Darpan ID: WB/2025/0765073</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="text-primary">Bangla Susthayi</span>
              <br />
              <span className="text-foreground">Krishi Foundation</span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Empowering farmers across India through sustainable practices and community support
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link
                to="/digital-pathshala"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              >
                Explore Digital Pathshala
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="glass-card rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary font-display">200+</div>
                <div className="text-sm text-muted-foreground">Farmer Members</div>
              </div>
              <div className="glass-card rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-3">
                  <Sprout className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-3xl font-bold text-secondary font-display">5+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="glass-card rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-emerald/20 flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-6 h-6 text-emerald" />
                </div>
                <div className="text-3xl font-bold text-emerald font-display">50+</div>
                <div className="text-sm text-muted-foreground">Seeds Preserved</div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Focus Areas */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our Core <span className="text-primary">Focus Areas</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Four pillars supporting Bangla Susthayi Krishi Foundation and rural prosperity across India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Leaf,
                  title: "Biodiversity Conservation",
                  description: "Protecting native seeds and traditional crops. We work with farmers to preserve indigenous varieties and maintain seed banks.",
                  color: "primary"
                },
                {
                  icon: Sprout,
                  title: "Regenerative Farming",
                  description: "Organic composting, natural pest control, and crop rotation techniques rebuild soil fertility and eliminate harmful chemicals.",
                  color: "secondary"
                },
                {
                  icon: Users,
                  title: "Community Development",
                  description: "Cooperative farming, skill workshops, and women's empowerment programs strengthen the social fabric of rural India.",
                  color: "emerald"
                },
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description: "We create appropriate technology, mobile apps, and innovative irrigation systems for sustainable progress.",
                  color: "gold"
                }
              ].map((area, index) => (
                <div
                  key={area.title}
                  className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    area.color === "primary" ? "bg-primary/20 text-primary" :
                    area.color === "secondary" ? "bg-secondary/20 text-secondary" :
                    area.color === "emerald" ? "bg-emerald/20 text-emerald" :
                    "bg-gold/20 text-gold"
                  }`}>
                    <area.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto glass-card rounded-3xl p-8 md:p-12 text-center border-2 border-primary/20">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Join Our <span className="text-primary">Digital Revolution</span>
              </h2>
              <p className="text-foreground/80 mb-8">
                Discover Digital Pathshala — our initiative to bring digital literacy to rural India for just ₹5 a day.
              </p>
              <Link
                to="/digital-pathshala"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-border/50">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Bangla Susthayi Krishi Foundation. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
