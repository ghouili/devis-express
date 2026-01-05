import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-subtle -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-slide-up">
            <Badge variant="secondary" className="px-4 py-1.5">
              ✨ Conçu pour bailleurs sociaux & collectivités
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              De l'email au devis —{' '}
              <span className="text-primary">sans pertes, sans stress</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Centralisez 100–200 demandes/mois, suivez chaque dossier en temps réel, 
              accélérez le chiffrage, et garantissez une traçabilité complète entre 
              assistante et métreur.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  Demander une démo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/workflow">
                <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                  <Play className="h-4 w-4" />
                  Voir le process Avant/Après
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                Suivi temps réel
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                Process traçable
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                Zéro perte de demande
              </div>
            </div>
          </div>

          {/* Right content - Dashboard preview */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-xl border border-border bg-card shadow-lg overflow-hidden">
              {/* Mock browser header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/60" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/60" />
                </div>
                <div className="flex-1 text-center text-xs text-muted-foreground">
                  app.devispeinture.fr/dashboard
                </div>
              </div>

              {/* Mock dashboard content */}
              <div className="p-6 space-y-4">
                {/* KPI row */}
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: 'Ce mois', value: '47', color: 'bg-primary/10 text-primary' },
                    { label: 'À chiffrer', value: '12', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' },
                    { label: 'En cours', value: '8', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
                    { label: 'Envoyés', value: '27', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' },
                  ].map((kpi) => (
                    <div key={kpi.label} className={`rounded-lg p-3 ${kpi.color}`}>
                      <div className="text-2xl font-bold">{kpi.value}</div>
                      <div className="text-xs opacity-80">{kpi.label}</div>
                    </div>
                  ))}
                </div>

                {/* Mini table */}
                <div className="rounded-lg border border-border overflow-hidden">
                  <div className="grid grid-cols-4 gap-2 px-3 py-2 bg-muted/50 text-xs font-medium text-muted-foreground">
                    <span>Client</span>
                    <span>Adresse</span>
                    <span>Travaux</span>
                    <span>Statut</span>
                  </div>
                  {[
                    { client: 'Bailleur A', adresse: '12 Rue...', travaux: 'Peinture', statut: 'À chiffrer' },
                    { client: 'Ville Lyon', adresse: '45 Ave...', travaux: 'Reprise', statut: 'En cours' },
                    { client: 'Habitat 75', adresse: '156 Bd...', travaux: 'Rafraîch.', statut: 'Envoyé' },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-4 gap-2 px-3 py-2 text-xs border-t border-border">
                      <span className="font-medium truncate">{row.client}</span>
                      <span className="text-muted-foreground truncate">{row.adresse}</span>
                      <span className="text-muted-foreground truncate">{row.travaux}</span>
                      <span className={`status-badge ${
                        row.statut === 'À chiffrer' ? 'status-a-chiffrer' :
                        row.statut === 'En cours' ? 'status-en-cours' : 'status-envoye'
                      }`}>
                        {row.statut}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/50 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
