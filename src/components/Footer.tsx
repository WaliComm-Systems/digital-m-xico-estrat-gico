import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="font-display text-2xl font-bold text-cream mb-4 block">
              Impulsa<span className="text-gradient">Digital</span>
            </a>
            <p className="text-cream/60 leading-relaxed mb-6 max-w-md">
              Transformamos negocios mexicanos con soluciones digitales innovadoras. 
              Desarrollo, automatización y estrategia — todo en un solo lugar.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Linkedin className="w-5 h-5 text-cream" />
              </a>
              <a href="#" className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Instagram className="w-5 h-5 text-cream" />
              </a>
              <a href="#" className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Twitter className="w-5 h-5 text-cream" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-cream mb-4">Navegación</h4>
            <ul className="space-y-3">
              <li>
                <a href="#servicios" className="text-cream/60 hover:text-primary transition-colors duration-300">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-cream/60 hover:text-primary transition-colors duration-300">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#portafolio" className="text-cream/60 hover:text-primary transition-colors duration-300">
                  Portafolio
                </a>
              </li>
              <li>
                <a href="#proceso" className="text-cream/60 hover:text-primary transition-colors duration-300">
                  Proceso
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-cream mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hola@impulsadigital.mx" className="text-cream/60 hover:text-primary transition-colors duration-300 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  hola@impulsadigital.mx
                </a>
              </li>
              <li>
                <a href="tel:+525512345678" className="text-cream/60 hover:text-primary transition-colors duration-300 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +52 55 1234 5678
                </a>
              </li>
              <li>
                <span className="text-cream/60 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Ciudad de México, MX
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-sm">
            © {currentYear} ImpulsaDigital. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-cream/40 hover:text-cream transition-colors duration-300">
              Aviso de Privacidad
            </a>
            <a href="#" className="text-cream/40 hover:text-cream transition-colors duration-300">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
