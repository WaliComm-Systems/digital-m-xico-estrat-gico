const services = [
  { title: "Desarrollo Web", subtitle: "Soluciones a Medida" },
  { title: "Automatización & IA", subtitle: "Procesos Inteligentes" },
  { title: "E-Commerce", subtitle: "Tiendas que Venden" },
  { title: "Marketing Digital", subtitle: "Estrategia & Resultados" },
  { title: "Branding", subtitle: "Identidad Única" },
  { title: "UX/UI Design", subtitle: "Experiencias Memorables" },
];

const Marquee = () => {
  return (
    <section className="py-8 bg-charcoal overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee">
          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-8 whitespace-nowrap"
            >
              <span className="text-gold-light text-sm font-medium tracking-wider">
                //{service.title}//
              </span>
              <span className="text-muted-foreground text-sm">
                {service.subtitle}
              </span>
              <span className="text-primary text-2xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
