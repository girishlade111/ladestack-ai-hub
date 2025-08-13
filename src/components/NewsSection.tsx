import { ExternalLink, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    title: "OpenAI Releases GPT-4 Turbo with Enhanced Coding Capabilities",
    summary: "The latest model shows significant improvements in code generation and debugging assistance.",
    url: "#",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    category: "AI",
    readTime: "3 min read"
  },
  {
    title: "Google's Gemini 2.5 Pro Sets New Benchmarks for Multimodal AI",
    summary: "Revolutionary capabilities in understanding and generating code, images, and text simultaneously.",
    url: "#",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=250&fit=crop",
    category: "AI",
    readTime: "5 min read"
  },
  {
    title: "The Rise of AI-Powered Development Tools in 2024",
    summary: "How artificial intelligence is transforming the software development landscape.",
    url: "#",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=250&fit=crop",
    category: "Development",
    readTime: "4 min read"
  },
  {
    title: "WebAssembly and Edge Computing: The Future of Web Performance",
    summary: "Exploring how WASM is enabling lightning-fast web applications at the edge.",
    url: "#",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
    category: "Web",
    readTime: "6 min read"
  }
];

export function NewsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Latest Tech Trends</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Stay Updated with <span className="gradient-text">Tech News</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Curated insights from the world of AI, development, and emerging technologies 
            that shape the future of software development.
          </p>
        </div>

        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <article
              key={item.title}
              className="card-elegant overflow-hidden group hover:scale-[1.02] transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                  {item.summary}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readTime}
                  </div>
                  
                  <Button variant="ghost" size="sm" className="group/btn">
                    Read More
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* More news CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="btn-ghost-gradient">
            View All Tech News
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}