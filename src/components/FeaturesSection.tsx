import { Code2, Zap, Users, Shield, Cpu, Rocket } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "AI-Powered Development",
    description: "Leverage advanced AI models to accelerate your coding, testing, and debugging workflow with intelligent suggestions and automation."
  },
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Optimized for speed with edge computing and smart caching. Deploy and iterate faster than ever before."
  },
  {
    icon: Users,
    title: "Multi-LLM Support",
    description: "Choose from multiple language models including GPT-4, Claude, and Gemini. Switch seamlessly based on your needs."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Built with security-first approach. Your code and data remain private with end-to-end encryption."
  },
  {
    icon: Cpu,
    title: "Smart Automation",
    description: "Automate repetitive tasks with AI workflows. Focus on creativity while AI handles the mundane."
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description: "Deploy anywhere with one-click. Supports all major cloud providers and edge networks."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">LadeStack</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Built by developers, for developers. Our AI tools are designed to enhance your productivity 
            without getting in your way.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-elegant p-8 group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}