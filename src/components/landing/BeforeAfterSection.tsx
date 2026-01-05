import { useState } from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BeforeAfterSection = () => {
  const [showAfter, setShowAfter] = useState(false);

  const beforePoints = [
    { text: 'Saisie manuelle dans Excel', negative: true },
    { text: 'Tableau jamais synchronisé', negative: true },
    { text: 'Statuts non fiables', negative: true },
    { text: 'Relances constantes', negative: true },
    { text: 'Pièces jointes éparpillées', negative: true },
  ];

  const afterPoints = [
    { text: 'Formulaire structuré et guidé', positive: true },
    { text: 'Tableau unique partagé temps réel', positive: true },
    { text: 'Statuts standardisés et traçables', positive: true },
    { text: 'Notifications automatiques', positive: true },
    { text: 'Pièces jointes centralisées', positive: true },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Avant / Après en un coup d'œil
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Comparez votre process actuel avec la plateforme
          </p>

          {/* Toggle button */}
          <div className="inline-flex rounded-lg border border-border p-1 bg-muted/50">
            <Button
              variant={!showAfter ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setShowAfter(false)}
              className="rounded-md"
            >
              Avant (manuel)
            </Button>
            <Button
              variant={showAfter ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setShowAfter(true)}
              className="rounded-md"
            >
              Après (plateforme)
            </Button>
          </div>
        </div>

        {/* Comparison cards */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Before card */}
          <div
            className={`p-8 rounded-2xl border-2 transition-all duration-500 ${
              !showAfter
                ? 'border-destructive/30 bg-destructive/5 scale-100 opacity-100'
                : 'border-border bg-card scale-95 opacity-50'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="h-5 w-5 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Process manuel</h3>
            </div>

            <div className="space-y-4">
              {beforePoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="h-3 w-3 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{point.text}</span>
                </div>
              ))}
            </div>

            {/* Visual representation */}
            <div className="mt-8 p-4 rounded-lg bg-background border border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <span className="font-medium">Excel partagé</span>
                <span className="text-destructive text-xs">(dernière màj: il y a 3 jours)</span>
              </div>
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-6 bg-muted/50 rounded animate-pulse" />
                ))}
              </div>
            </div>
          </div>

          {/* After card */}
          <div
            className={`p-8 rounded-2xl border-2 transition-all duration-500 ${
              showAfter
                ? 'border-primary/30 bg-primary/5 scale-100 opacity-100'
                : 'border-border bg-card scale-95 opacity-50'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Avec la plateforme</h3>
            </div>

            <div className="space-y-4">
              {afterPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground">{point.text}</span>
                </div>
              ))}
            </div>

            {/* Visual representation */}
            <div className="mt-8 p-4 rounded-lg bg-background border border-primary/20">
              <div className="flex items-center gap-2 text-sm mb-3">
                <span className="font-medium text-foreground">Dashboard temps réel</span>
                <span className="text-primary text-xs flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Synchronisé
                </span>
              </div>
              <div className="flex gap-2">
                {['À chiffrer', 'En cours', 'Envoyé'].map((status, i) => (
                  <div
                    key={i}
                    className={`flex-1 p-2 rounded text-xs text-center ${
                      i === 0 ? 'status-a-chiffrer' :
                      i === 1 ? 'status-en-cours' : 'status-envoye'
                    }`}
                  >
                    {status}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="gap-2">
            Voir la démo complète
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
