import { Code2, Bot, Palette, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    description:
      "Sitios web, plataformas, dashboards, APIs e integraciones construidas específicamente para las necesidades de tu negocio. Creamos soluciones escalables que crecen contigo.",
    projects: "50+",
    badge: "Proyectos Ilimitados",
  },
  {
    icon: Bot,
    title: "Automatización & IA",
    description:
      "Optimiza tus operaciones con automatización inteligente: optimización de flujos de trabajo, integraciones de IA, automatización de procesos y soluciones que ahorran tiempo y reducen costos.",
    projects: "100+",
    badge: "Proyectos Ilimitados",
  },
  {
    icon: Palette,
    title: "Branding & UX/UI",
    description:
      "Diseño de experiencias memorables y marcas que conectan. Desde la identidad visual hasta interfaces intuitivas que convierten visitantes en clientes.",
    projects: "30+",
    badge: "Diseño Estratégico",
  },
  {
    icon: TrendingUp,
    title: "Marketing Digital",
    description:
      "Estrategias de marketing que generan resultados medibles. SEO, campañas pagadas, email marketing y automatización de ventas para escalar tu negocio.",
    projects: "80+",
    badge: "Resultados Comprobados",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-4 block">
            Nuestros Servicios
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Soluciones que{" "}
            <span className="text-gradient">Impulsan Resultados</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada proyecto es único. Por eso ofrecemos servicios personalizados 
            que se adaptan a tus objetivos específicos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-card"
            >
              {/* Badge */}
              <div className="absolute top-6 right-6">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {service.badge}
                </span>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Projects Count */}
              <div className="text-sm text-muted-foreground mb-2">
                {service.projects} Proyectos Realizados
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* CTA */}
              <Button variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-primary/80" asChild>
                <a href="#contacto" className="inline-flex items-center gap-2">
                  Ver Detalles
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
