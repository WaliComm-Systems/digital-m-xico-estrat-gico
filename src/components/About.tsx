import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-dark overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border-8 border-primary/30 rounded-full animate-float" />
                <div className="absolute w-48 h-48 border-8 border-gold-light/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
                <div className="absolute w-32 h-32 bg-gradient-gold rounded-full glow-gold" />
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-background rounded-2xl p-6 shadow-card">
              <div className="text-4xl font-display font-bold text-gradient">+50</div>
              <div className="text-sm text-muted-foreground">Proyectos Exitosos</div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-4 block">
              Sobre Nosotros
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Tu Socio Tecnológico,{" "}
              <span className="text-gradient">No Solo un Proveedor</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Somos una agencia de desarrollo y automatización digital que ayuda 
              a empresas mexicanas a modernizar sus operaciones y transformar 
              sus ideas en realidad.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Combinamos desarrollo personalizado, automatización potenciada por IA 
              y acompañamiento estratégico para entregar soluciones que realmente 
              funcionan. Desde la primera conversación hasta escalar tu sistema, 
              caminamos contigo en cada paso.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="#contacto">
                Contáctanos
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
