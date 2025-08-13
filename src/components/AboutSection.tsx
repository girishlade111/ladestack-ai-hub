import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Mail, Code, Palette, Cpu } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meet <span className="gradient-text">Girish Lade</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                Programmer, UI/UX Designer, and AI Tools Maker passionate about creating 
                tools that empower developers worldwide.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                With years of experience in software development and design, I've dedicated my career 
                to exploring the intersection of AI and developer productivity. LadeStack represents 
                my vision of making advanced AI tools accessible to every developer, regardless of 
                their background or experience level.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I'm constantly experimenting with cutting-edge AI models, building side projects, 
                and following global tech trends. My open-source contributions and tools are used 
                by thousands of developers worldwide, and I'm always looking for new ways to help 
                the community build better software faster.
              </p>
            </div>

            {/* Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-muted/30 rounded-xl">
                <Code className="w-6 h-6 text-primary" />
                <span className="font-medium">Programming</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-muted/30 rounded-xl">
                <Palette className="w-6 h-6 text-secondary" />
                <span className="font-medium">UI/UX Design</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-muted/30 rounded-xl">
                <Cpu className="w-6 h-6 text-primary" />
                <span className="font-medium">AI Tools</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="sm" className="group">
                <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                GitHub
              </Button>
              <Button variant="outline" size="sm" className="group">
                <Linkedin className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="group">
                <Instagram className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Instagram
              </Button>
              <Button variant="outline" size="sm" className="group">
                <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Email
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=face"
                alt="Girish Lade"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-80 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-2xl opacity-60 animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
}