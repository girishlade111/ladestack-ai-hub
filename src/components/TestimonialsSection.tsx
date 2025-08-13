import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ravi Kumar",
    role: "Full Stack Developer",
    company: "Tech Startup, Mumbai",
    feedback: "LadeStack's AI tools have made my development workflow so much faster. The API testing tool alone saves me hours every week. It's like having a personal assistant for coding and design.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Priya Mehta",
    role: "Software Engineer",
    company: "Fintech Company, Bangalore",
    feedback: "The AI-powered website builder is incredible. I can prototype ideas in minutes instead of hours. The Gemini integration makes it feel like magic. Highly recommended for any developer.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b94c?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Amit Sharma",
    role: "Data Scientist",
    company: "AI Research Lab, Delhi",
    feedback: "Seamless AI integration with multiple LLM support. LadeStack is my go-to toolkit for all projects. The performance and reliability are outstanding. It's a game-changer for our team.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Sneha Patel",
    role: "Product Manager",
    company: "E-commerce Platform, Pune",
    feedback: "The documentation tool has transformed how our team collaborates on API development. The AI-generated docs are surprisingly accurate and save us tons of manual work.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Arjun Singh",
    role: "DevOps Engineer",
    company: "Cloud Services, Hyderabad",
    feedback: "Fast deployment and excellent security features. LadeStack tools integrate perfectly with our existing CI/CD pipeline. The team support is also fantastic.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Kavya Reddy",
    role: "Frontend Developer",
    company: "Design Agency, Chennai",
    feedback: "The file management platform is so intuitive. AI-powered search finds exactly what I need instantly. It's replaced Google Drive for our entire creative team.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by <span className="gradient-text">Developers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Join thousands of developers who are already accelerating their workflow with LadeStack's AI tools.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-elegant p-6 hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.feedback}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}