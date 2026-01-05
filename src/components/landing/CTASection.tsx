import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Monitor } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary opacity-10 -z-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Réduisez les erreurs.
          <br />
          Accélérez les devis.
          <br />
          <span className="text-primary">Suivez tout en temps réel.</span>
        </h2>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Rejoignez les équipes qui ont transformé leur gestion de demandes.
          Passez de l'artisanal au structuré, sans complexité.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" className="w-full sm:w-auto gap-2 text-base px-8">
              Demander une démo
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/app/dashboard">
            <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 text-base px-8">
              <Monitor className="h-5 w-5" />
              Ouvrir le prototype
            </Button>
          </Link>
        </div>

        {/* Trust elements */}
        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground mb-6">
            Conçu pour le volume et la traçabilité
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">200+</span>
              demandes/mois gérables
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">100%</span>
              traçabilité
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">0</span>
              demande oubliée
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
