import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, FileText, CheckCircle, ArrowRight, MoreHorizontal } from 'lucide-react';
import { demandes } from '@/data/mockData';

const Kanban = () => {
  const columns = [
    {
      id: 'a-chiffrer',
      title: 'À chiffrer',
      status: 'À chiffrer',
      icon: Clock,
      color: 'border-amber-300 dark:border-amber-700',
      headerColor: 'bg-amber-50 dark:bg-amber-950/30',
      iconColor: 'text-amber-600 dark:text-amber-400',
    },
    {
      id: 'en-cours',
      title: 'Devis en cours',
      status: 'Devis en cours',
      icon: FileText,
      color: 'border-blue-300 dark:border-blue-700',
      headerColor: 'bg-blue-50 dark:bg-blue-950/30',
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      id: 'envoye',
      title: 'Devis envoyé',
      status: 'Devis envoyé',
      icon: CheckCircle,
      color: 'border-emerald-300 dark:border-emerald-700',
      headerColor: 'bg-emerald-50 dark:bg-emerald-950/30',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Kanban</h1>
        <p className="text-muted-foreground">Visualisez et gérez les statuts des demandes</p>
      </div>

      {/* Kanban board */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {columns.map((column) => {
          const columnDemandes = demandes.filter((d) => d.statut === column.status);

          return (
            <div key={column.id} className="flex flex-col">
              {/* Column header */}
              <div
                className={`flex items-center gap-3 p-4 rounded-t-lg border-t-4 ${column.color} ${column.headerColor}`}
              >
                <column.icon className={`h-5 w-5 ${column.iconColor}`} />
                <h3 className="font-semibold text-foreground">{column.title}</h3>
                <Badge variant="secondary" className="ml-auto">
                  {columnDemandes.length}
                </Badge>
              </div>

              {/* Column content */}
              <div className="flex-1 p-4 bg-muted/30 rounded-b-lg border border-t-0 border-border space-y-3 min-h-[400px]">
                {columnDemandes.map((demande) => (
                  <Card
                    key={demande.id}
                    className="hover:shadow-md transition-shadow cursor-pointer group"
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-sm font-medium">{demande.id}</CardTitle>
                          <p className="text-xs text-muted-foreground mt-1">{demande.client}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-foreground mb-2 line-clamp-2">
                        {demande.travaux}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">{demande.adresse}</p>

                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                        <div className="flex items-center gap-2">
                          {demande.urgence !== 'Standard' && (
                            <Badge variant="destructive" className="text-xs py-0">
                              {demande.urgence}
                            </Badge>
                          )}
                          {demande.metreur !== '—' && (
                            <span className="text-xs text-muted-foreground">
                              {demande.metreur}
                            </span>
                          )}
                        </div>
                        <Link to={`/app/demandes/${demande.id}`}>
                          <Button variant="ghost" size="sm" className="h-6 text-xs gap-1">
                            Voir
                            <ArrowRight className="h-3 w-3" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {columnDemandes.length === 0 && (
                  <div className="flex items-center justify-center h-32 text-muted-foreground text-sm">
                    Aucune demande
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Badge variant="destructive" className="text-xs">Urgent</Badge>
          <span>Demande prioritaire</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs">Glissez-déposez pour changer le statut (fonctionnalité simulée)</span>
        </div>
      </div>
    </div>
  );
};

export default Kanban;
