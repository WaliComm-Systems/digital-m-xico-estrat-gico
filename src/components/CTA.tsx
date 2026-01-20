import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section id="contacto" className="py-24">
      <div className="container mx-auto px-6">
        <div className="relative bg-gradient-dark rounded-3xl p-12 md:p-16 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-light/10 rounded-full blur-3xl" />
          
          {/* Floating Shapes */}
          <div className="absolute top-12 right-12 w-16 h-16 border-4 border-primary/30 rounded-full animate-float" />
          <div className="absolute bottom-12 left-12 w-12 h-12 bg-gradient-gold rounded-lg rotate-45 animate-float" style={{ animationDelay: "1s" }} />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-4 block">
              ¿Listo para Empezar?
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
              Llevemos tu Negocio al{" "}
              <span className="text-gradient">Siguiente Nivel</span>
            </h2>
            <p className="text-cream/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Agenda una llamada sin compromiso y platiquemos sobre cómo podemos 
              ayudarte a alcanzar tus objetivos digitales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href="mailto:hola@impulsadigital.mx">
                  <Calendar className="w-5 h-5" />
                  Agenda una Llamada
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="border-cream/30 text-cream hover:bg-cream/10"
                asChild
              >
                <a href="mailto:hola@impulsadigital.mx">
                  Envíanos un Email
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
