import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Download, Smartphone, Store } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Download,
      title: "1. Analyse de votre WooCommerce",
      description: "Nous analysons votre boutique existante et ses fonctionnalités",
      duration: "Jour 1"
    },
    {
      icon: Smartphone,
      title: "2. Développement de l'app",
      description: "Création de votre application mobile avec tous vos produits et fonctionnalités",
      duration: "Jours 2-10"
    },
    {
      icon: CheckCircle,
      title: "3. Tests et optimisation",
      description: "Tests complets sur iOS et Android, optimisation des performances",
      duration: "Jours 11-12"
    },
    {
      icon: Store,
      title: "4. Publication sur les stores",
      description: "Soumission et publication sur l'App Store et Google Play Store",
      duration: "Jours 13-14"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Notre processus en 4 étapes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un processus rodé et efficace pour transformer votre WooCommerce en application mobile en seulement 2 semaines
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-brand/20 hidden md:block"></div>
            
            {steps.map((step, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand rounded-full border-4 border-background hidden md:block z-10"></div>
                
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-brand text-brand-foreground rounded-full flex items-center justify-center">
                            <step.icon className="w-6 h-6" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                            <span className="text-sm font-medium text-brand bg-brand/10 px-3 py-1 rounded-full">
                              {step.duration}
                            </span>
                          </div>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-16 text-center bg-brand/5 rounded-2xl p-8">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">Garantie de délai</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Si nous ne respectons pas le délai de 2 semaines, nous vous remboursons intégralement. 
            C'est notre engagement qualité.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;