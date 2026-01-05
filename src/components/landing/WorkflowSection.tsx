import { FileText, Database, ClipboardCheck, UserCircle, Server, Eye } from 'lucide-react';

const WorkflowSection = () => {
  const lanes = [
    {
      role: 'Assistante',
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200 dark:border-blue-800',
      icon: UserCircle,
      steps: [
        { icon: FileText, title: 'Créer la demande', desc: 'Formulaire structuré' },
        { icon: Database, title: 'Joindre documents', desc: 'Photos, plans, mails' },
        { icon: ClipboardCheck, title: 'Valider', desc: 'Dossier créé' },
      ],
    },
    {
      role: 'Plateforme',
      color: 'bg-primary',
      bgColor: 'bg-accent',
      borderColor: 'border-primary/20',
      icon: Server,
      steps: [
        { icon: Database, title: 'Centralise', desc: 'Base unique' },
        { icon: Eye, title: 'Met à jour', desc: 'Temps réel' },
        { icon: FileText, title: 'Trace', desc: 'Journal d\'activité' },
      ],
    },
    {
      role: 'Métreur',
      color: 'bg-emerald-500',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
      borderColor: 'border-emerald-200 dark:border-emerald-800',
      icon: UserCircle,
      steps: [
        { icon: Eye, title: 'Consulter', desc: 'Demandes à chiffrer' },
        { icon: ClipboardCheck, title: 'Changer statut', desc: 'En cours → Envoyé' },
        { icon: FileText, title: 'Déposer devis', desc: 'Avec date d\'envoi' },
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Un workflow clair et traçable
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            De la création de la demande jusqu'à l'envoi du devis, chaque étape est suivie
          </p>
        </div>

        {/* Swimlane diagram */}
        <div className="space-y-6">
          {lanes.map((lane, laneIndex) => (
            <div
              key={lane.role}
              className={`rounded-xl border ${lane.borderColor} ${lane.bgColor} p-6 transition-all duration-300`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Lane header */}
                <div className="flex items-center gap-3 lg:w-40 flex-shrink-0">
                  <div className={`w-10 h-10 rounded-lg ${lane.color} flex items-center justify-center`}>
                    <lane.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-semibold text-foreground">{lane.role}</span>
                </div>

                {/* Steps */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {lane.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="relative">
                      <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:shadow-md transition-shadow">
                        <div className={`w-8 h-8 rounded-md ${lane.color}/10 flex items-center justify-center flex-shrink-0`}>
                          <step.icon className={`h-4 w-4`} style={{ color: `hsl(var(--primary))` }} />
                        </div>
                        <div>
                          <div className="font-medium text-sm text-foreground">{step.title}</div>
                          <div className="text-xs text-muted-foreground">{step.desc}</div>
                        </div>
                      </div>

                      {/* Arrow between steps */}
                      {stepIndex < lane.steps.length - 1 && (
                        <div className="hidden sm:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-muted-foreground z-10">
                          →
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow between lanes */}
              {laneIndex < lanes.length - 1 && (
                <div className="flex justify-center mt-4 -mb-10 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center shadow-sm">
                    <span className="text-muted-foreground">↓</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Result */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <span className="font-medium text-primary">
              Résultat : traçabilité complète, zéro perte, délais maîtrisés
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
