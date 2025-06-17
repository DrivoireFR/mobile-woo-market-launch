import { Button } from "@/components/ui/button";
import { Smartphone, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transformez votre WooCommerce dès aujourd'hui
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Rejoignez les centaines de boutiques qui ont déjà fait le choix du mobile
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Devis gratuit en 24h
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Voir nos réalisations
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="w-8 h-8" />
              <span className="text-2xl font-bold">MobileConvert</span>
            </div>
            <p className="text-primary-foreground/70 mb-4 max-w-md">
              L'agence spécialisée dans la conversion de boutiques WooCommerce vers des applications mobiles. 
              Simplicité, rapidité et efficacité garanties.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>En ligne</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>Conversion WooCommerce</li>
              <li>App iOS</li>
              <li>App Android</li>
              <li>Publication stores</li>
              <li>Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@mobileconvert.fr</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>01 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 MobileConvert. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-foreground transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">CGV</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;