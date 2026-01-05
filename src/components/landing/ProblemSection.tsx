import { AlertTriangle, Mail, FileSpreadsheet, Clock, Users } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: Mail,
      title: 'Demandes par email',
      description: 'Recopie manuelle dans Excel, risque d\'oubli',
    },
    {
      icon: FileSpreadsheet,
      title: 'Tableau jamais à jour',
      description: 'Décalage entre Excel et la réalité terrain',
    },
    {
      icon: AlertTriangle,
      title: 'Informations manquantes',
      description: 'Métreur bloqué si saisie incomplète',
    },
    {
      icon: Clock,
      title: 'Pas de visibilité temps réel',
      description: 'Relances internes, stress et retards',
    },
    {
      icon: Users,
      title: 'Dépendance humaine',
      description: 'Process non scalable avec le volume',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Le problème aujourd'hui
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Avec 100–200 demandes par mois, le process manuel atteint ses limites
          </p>
        </div>

        {/* Problem flow visualization */}
        <div className="relative mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
            {['Email', '→', 'Excel', '→', 'Email', '→', 'Excel', '→', '?'].map((item, i) => (
              <div
                key={i}
                className={`${
                  item === '→' || item === '?'
                    ? 'text-muted-foreground text-xl'
                    : 'px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium'
                } ${item === '?' ? 'text-destructive text-2xl font-bold' : ''}`}
              >
                {item}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Un cycle sans fin qui génère erreurs et frustrations
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-destructive/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
