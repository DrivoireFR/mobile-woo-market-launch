import { Check, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Comparison = () => {
  const features = [
    {
      feature: "Performance",
      native: true,
      hybrid: false,
      description: "Applications fluides et réactives"
    },
    {
      feature: "Accès complet aux fonctionnalités",
      native: true,
      hybrid: false,
      description: "Caméra, GPS, notifications push natives"
    },
    {
      feature: "Expérience utilisateur optimale",
      native: true,
      hybrid: false,
      description: "Interface conforme aux standards de la plateforme"
    },
    {
      feature: "Sécurité renforcée",
      native: true,
      hybrid: false,
      description: "Chiffrement et protection des données"
    },
    {
      feature: "Pas de dépendance internet",
      native: true,
      hybrid: false,
      description: "Fonctionne même hors ligne"
    },
    {
      feature: "Validation App Store facilitée",
      native: true,
      hybrid: false,
      description: "Respect des guidelines Apple et Google"
    },
    {
      feature: "Maintenance simplifiée",
      native: true,
      hybrid: false,
      description: "Moins de bugs et problèmes de compatibilité"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pourquoi choisir le natif ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les avantages concrets d'une application native par rapport à une solution hybride
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="text-left font-semibold text-foreground">
                    Fonctionnalité
                  </TableHead>
                  <TableHead className="text-center font-semibold text-brand">
                    App Native
                  </TableHead>
                  <TableHead className="text-center font-semibold text-muted-foreground">
                    App Hybride
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((item, index) => (
                  <TableRow key={index} className="hover:bg-muted/30 transition-colors">
                    <TableCell className="font-medium text-foreground">
                      <div>
                        <div className="font-semibold">{item.feature}</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {item.description}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/20">
                          <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/20">
                          <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="text-center mt-12">
            <div className="bg-brand/10 border border-brand/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Le choix évident
              </h3>
              <p className="text-muted-foreground">
                Une application native offre une expérience utilisateur supérieure, 
                des performances optimales et un accès complet aux fonctionnalités du téléphone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;