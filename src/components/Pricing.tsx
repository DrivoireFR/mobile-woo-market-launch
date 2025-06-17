import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Smartphone, Palette } from "lucide-react";

const Pricing = () => {
  const offers = [
    {
      name: "Offre d'entrée",
      price: "2 000€",
      icon: Smartphone,
      description: "Pour commencer sur une plateforme",
      features: [
        "Application Android OU iOS",
        "Design standard",
        "Livraison en 2 semaines",
        "Formation incluse",
        "Support 30 jours"
      ],
      popular: false,
      buttonText: "Commencer"
    },
    {
      name: "Offre Everywhere",
      price: "3 500€",
      icon: Smartphone,
      description: "La solution complète multi-plateforme",
      features: [
        "Application iOS ET Android",
        "Design optimisé",
        "Livraison en 2 semaines",
        "Formation incluse",
        "Support 60 jours",
        "Push notifications"
      ],
      popular: true,
      buttonText: "Le plus populaire"
    },
    {
      name: "Offre personnalisée",
      price: "6 000€",
      icon: Palette,
      description: "Design sur-mesure et fonctionnalités avancées",
      features: [
        "Application iOS ET Android",
        "Design 100% personnalisé",
        "Animations sur-mesure",
        "Fonctionnalités avancées",
        "Support 90 jours",
        "Formation approfondie"
      ],
      popular: false,
      buttonText: "Personnaliser"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nos offres transparentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choisissez l'offre qui correspond à vos besoins. Tous nos prix sont fixes, sans surprise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offers.map((offer, index) => (
            <Card 
              key={index} 
              className={`relative group hover:shadow-xl transition-all duration-300 ${
                offer.popular 
                  ? 'border-brand scale-105 shadow-lg' 
                  : 'border-2 hover:border-brand/20'
              }`}
            >
              {offer.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand text-brand-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Le plus populaire
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto ${
                  offer.popular ? 'bg-brand text-brand-foreground' : 'bg-muted'
                }`}>
                  <offer.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">{offer.name}</CardTitle>
                <p className="text-muted-foreground">{offer.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{offer.price}</span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {offer.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    offer.popular 
                      ? 'bg-brand hover:bg-brand/90' 
                      : 'bg-primary hover:bg-primary/90'
                  }`}
                  size="lg"
                >
                  {offer.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Une question ? Besoin d'aide pour choisir ?
          </p>
          <Button variant="outline" size="lg">
            Contactez-nous
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;