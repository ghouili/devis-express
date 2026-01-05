import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  FileText,
  Clock,
  CheckCircle,
  AlertTriangle,
  Plus,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import { stats, demandes } from '@/data/mockData';

const Dashboard = () => {
  const kpis = [
    {
      title: 'Demandes ce mois',
      value: stats.demandesCeMois,
      icon: FileText,
      color: 'bg-primary/10 text-primary',
      trend: '+12%',
    },
    {
      title: 'À chiffrer',
      value: stats.aChiffrer,
      icon: Clock,
      color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    },
    {
      title: 'En cours',
      value: stats.enCours,
      icon: TrendingUp,
      color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    },
    {
      title: 'Devis envoyés',
      value: stats.devisEnvoyes,
      icon: CheckCircle,
      color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    },
  ];

  const recentDemandes = demandes.slice(0, 5);
  const urgentDemandes = demandes.filter((d) => d.urgence !== 'Standard').slice(0, 3);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Vue globale de votre activité</p>
        </div>
        <Link to="/app/demandes/nouvelle">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Nouvelle demande
          </Button>
        </Link>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <Card key={kpi.title} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{kpi.title}</p>
                  <p className="text-3xl font-bold text-foreground mt-1">{kpi.value}</p>
                  {kpi.trend && (
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                      {kpi.trend} vs mois dernier
                    </p>
                  )}
                </div>
                <div className={`p-3 rounded-lg ${kpi.color}`}>
                  <kpi.icon className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent requests */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Dernières demandes</CardTitle>
            <Link to="/app/demandes">
              <Button variant="ghost" size="sm" className="gap-1">
                Voir tout
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentDemandes.map((demande) => (
                <Link
                  key={demande.id}
                  to={`/app/demandes/${demande.id}`}
                  className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-foreground truncate">
                        {demande.client}
                      </div>
                      <div className="text-sm text-muted-foreground truncate">
                        {demande.travaux}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <Badge
                      variant="secondary"
                      className={
                        demande.statut === 'À chiffrer'
                          ? 'status-a-chiffrer'
                          : demande.statut === 'Devis en cours'
                          ? 'status-en-cours'
                          : 'status-envoye'
                      }
                    >
                      {demande.statut}
                    </Badge>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              Demandes urgentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            {urgentDemandes.length > 0 ? (
              <div className="space-y-3">
                {urgentDemandes.map((demande) => (
                  <Link
                    key={demande.id}
                    to={`/app/demandes/${demande.id}`}
                    className="block p-3 rounded-lg border border-destructive/20 bg-destructive/5 hover:bg-destructive/10 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-foreground text-sm">
                        {demande.id}
                      </span>
                      <Badge variant="destructive" className="text-xs">
                        {demande.urgence}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      {demande.client} — {demande.travaux}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <CheckCircle className="h-8 w-8 mx-auto mb-2 text-emerald-500" />
                <p className="text-sm">Aucune demande urgente</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Mini Kanban preview */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Aperçu Kanban</CardTitle>
          <Link to="/app/kanban">
            <Button variant="ghost" size="sm" className="gap-1">
              Ouvrir le Kanban
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            {['À chiffrer', 'Devis en cours', 'Devis envoyé'].map((status) => {
              const count = demandes.filter((d) => d.statut === status).length;
              return (
                <div key={status} className="text-center p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="text-2xl font-bold text-foreground">{count}</div>
                  <div
                    className={`text-sm mt-1 ${
                      status === 'À chiffrer'
                        ? 'text-amber-600 dark:text-amber-400'
                        : status === 'Devis en cours'
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-emerald-600 dark:text-emerald-400'
                    }`}
                  >
                    {status}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
