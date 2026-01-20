import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Transformaron completamente nuestra operación. La automatización que implementaron nos ahorra más de 20 horas semanales.",
    author: "María González",
    role: "CEO, TechStore MX",
    avatar: "MG",
  },
  {
    quote:
      "Profesionales de primer nivel. Entendieron nuestra visión desde el primer día y entregaron un producto que superó nuestras expectativas.",
    author: "Carlos Hernández",
    role: "Director, Constructora Del Valle",
    avatar: "CH",
  },
  {
    quote:
      "El mejor equipo con el que hemos trabajado. Su enfoque en resultados y comunicación constante marca la diferencia.",
    author: "Ana Martínez",
    role: "CMO, RestaurantePro",
    avatar: "AM",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-4 block">
            Testimonios
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Lo que Dicen{" "}
            <span className="text-gradient">Nuestros Clientes</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-card"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Quote */}
              <p className="text-foreground text-lg leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-semibold text-primary">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
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

export default Testimonials;
