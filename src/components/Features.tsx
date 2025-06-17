import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Smartphone, Clock, ShoppingCart, Star, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Simplicité absolue",
      description: "Pas de codage, pas de complications. Nous nous occupons de tout pendant que vous continuez à vendre.",
      color: "text-yellow-500"
    },
    {
      icon: Smartphone,
      title: "iOS & Android",
      description: "Une seule conversion, deux plateformes. Votre app sera disponible sur l'App Store et Google Play.",
      color: "text-blue-500"
    },
    {
      icon: Clock,
      title: "2 semaines chrono",
      description: "Du WooCommerce à l'app store en 14 jours. Votre boutique mobile sera opérationnelle en un temps record.",
      color: "text-green-500"
    }
  ];

  const benefits = [
    {
      icon: ShoppingCart,
      title: "Ventes mobiles x3",
      description: "Les apps mobiles convertissent 3x mieux que les sites web mobiles"
    },
    {
      icon: Star,
      title: "Expérience premium",
      description: "Push notifications, paiements intégrés, navigation fluide"
    },
    {
      icon: Users,
      title: "Fidélisation client",
      description: "Les utilisateurs d'apps reviennent 8x plus souvent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Main Features */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pourquoi choisir notre solution ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nous avons simplifié le processus de conversion pour que vous puissiez vous concentrer sur votre business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 border-2 hover:border-brand/20">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Les avantages d'une app mobile
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand text-brand-foreground mb-4">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Prêt à transformer votre boutique ?
          </h3>
          <Button size="lg" className="text-lg px-8 py-6 bg-brand hover:bg-brand/90">
            Commencer maintenant
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;