import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "TechStore MX",
    category: "E-Commerce",
    tags: ["Desarrollo Web", "UX/UI"],
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Constructora Del Valle",
    category: "Sitio Corporativo",
    tags: ["Branding", "Desarrollo"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "RestaurantePro",
    category: "SaaS",
    tags: ["Automatización", "IA"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Inmobiliaria Azteca",
    category: "Plataforma Web",
    tags: ["Desarrollo", "Marketing"],
    color: "from-rose-500 to-pink-600",
  },
];

const Portfolio = () => {
  return (
    <section id="portafolio" className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-4 block">
              Nuestro Portafolio
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">
              Proyectos que{" "}
              <span className="text-gradient">Hemos Construido</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-5xl font-display font-bold text-gradient">50+</div>
            <div className="text-cream/60 text-sm">
              Proyectos<br />Exitosos
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-charcoal-light border border-border/10 hover:border-primary/30 transition-all duration-500"
            >
              {/* Project Image Placeholder */}
              <div className={`aspect-video bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity duration-500`}>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium text-cream/80 bg-cream/10 backdrop-blur-sm px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Category */}
                <span className="text-gold-light text-sm font-medium mb-1">
                  {project.category}
                </span>

                {/* Title */}
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-bold text-cream group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
