import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "API Testing & Documentation Tool",
    description: "A powerful online Postman alternative with AI-powered API documentation generation, automated testing, and collaborative features for development teams.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=center",
    tags: ["API Testing", "Documentation", "Collaboration"],
    demoUrl: "#",
    featured: true
  },
  {
    title: "AI-Powered Website Builder",
    description: "Create stunning websites using natural language prompts. Powered by Gemini 2.5 Pro for intelligent design suggestions and automatic code generation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
    tags: ["Website Builder", "AI", "Gemini 2.5"],
    demoUrl: "#",
    featured: true
  },
  {
    title: "File Management Platform",
    description: "A modern Google Drive alternative with advanced file organization, AI-powered search, and seamless collaboration features.",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop&crop=center",
    tags: ["File Management", "Cloud Storage", "Collaboration"],
    demoUrl: "#",
    featured: false
  },
  {
    title: "Docs Summariser",
    description: "AI-powered document analysis and summarization tool. Extract key insights from PDFs, Word docs, and web pages instantly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center",
    tags: ["AI", "Document Analysis", "Coming Soon"],
    demoUrl: "#",
    featured: false
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">AI Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Explore our suite of AI-powered development tools designed to streamline your workflow 
            and accelerate your projects.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`card-elegant overflow-hidden group hover:scale-[1.02] transition-all duration-500 ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button className="btn-gradient flex-1 group">
                    Try It Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="icon" className="shrink-0">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More projects CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="btn-ghost-gradient">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}