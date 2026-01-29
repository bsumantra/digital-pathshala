import { Monitor, Users, BookOpen, IndianRupee } from "lucide-react";

const concepts = [
  {
    icon: Monitor,
    title: "Digital Skills",
    description: "Professional training in Excel, PowerPoint, and computer basics",
    color: "primary"
  },
  {
    icon: Users,
    title: "Elite Mentorship",
    description: "Sunday Masterclasses with IITians, NITians, and industry professionals via Google Meet",
    color: "secondary"
  },
  {
    icon: BookOpen,
    title: "The Library",
    description: "A curated collection of books plus a local seed bank to preserve India's biodiversity",
    color: "emerald"
  },
  {
    icon: IndianRupee,
    title: "Accessibility",
    description: "Students pay only ₹5 per day so learning is valued but never a burden",
    color: "gold"
  }
];

export const ConceptSection = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">"Bytes for the Mind,</span>{" "}
            <span className="text-secondary">Seeds for the Soil"</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The Concept Behind Digital Pathshala
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {concepts.map((concept, index) => (
            <div
              key={concept.title}
              className="group glass-card rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                concept.color === "primary" ? "bg-primary/20 text-primary" :
                concept.color === "secondary" ? "bg-secondary/20 text-secondary" :
                concept.color === "emerald" ? "bg-emerald/20 text-emerald" :
                "bg-gold/20 text-gold"
              }`}>
                <concept.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                {concept.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {concept.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
