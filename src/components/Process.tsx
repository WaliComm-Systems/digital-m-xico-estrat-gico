import { MessageSquare, Paintbrush, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Descubrimiento",
    description:
      "Platicamos sobre tu negocio, procesos y objetivos. Identificamos oportunidades reales de mejora y automatización, entendiendo exactamente lo que necesitas.",
  },
  {
    icon: Paintbrush,
    number: "02",
    title: "Diseño & Desarrollo",
    description:
      "Creamos la solución perfecta para ti. Con comunicación constante y entregas iterativas, verás el progreso mientras construimos juntos tu proyecto.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Lanzamiento & Soporte",
    description:
      "Desplegamos tu proyecto y te acompañamos en el crecimiento. Ofrecemos mantenimiento, actualizaciones y soporte técnico continuo.",
  },
];

const Process = () => {
  return (
    <section id="proceso" className="py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-4 block">
            Cómo Trabajamos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Un Proceso Claro,{" "}
            <span className="text-gradient">Sin Complicaciones</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="relative bg-secondary rounded-2xl p-8 hover:shadow-card transition-all duration-500">
                {/* Number */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center font-display font-bold text-primary-foreground text-xl shadow-gold">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
