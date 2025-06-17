import { Button } from "@/components/ui/button";
import { Smartphone, Zap, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-hero to-brand overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIi8+Cjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Smartphone className="w-16 h-16 text-hero-foreground drop-shadow-lg" />
              <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center">
                <Zap className="w-3 h-3 text-yellow-800" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-hero-foreground mb-6 leading-tight">
            Transformez votre
            <span className="text-white block bg-gradient-to-r from-white to-hero-foreground bg-clip-text text-transparent">
              WooCommerce
            </span>
            en App Mobile
          </h1>

          <p className="text-xl md:text-2xl text-hero-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Simplicité garantie • iOS & Android • Seulement 2 semaines pour conquérir les stores
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-brand hover:bg-white/90 shadow-xl">
              Demander un devis gratuit
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-brand">
              Voir nos réalisations
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-hero-foreground/80">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-medium">2 semaines</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              <span className="font-medium">iOS + Android</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span className="font-medium">Installation simple</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;