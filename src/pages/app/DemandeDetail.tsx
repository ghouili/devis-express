import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowLeft,
  MapPin,
  User,
  Building,
  FileText,
  Clock,
  Upload,
  Download,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';
import { demandes } from '@/data/mockData';

const DemandeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const demande = demandes.find((d) => d.id === id);

  if (!demande) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <h2 className="text-xl font-semibold text-foreground mb-2">Demande non trouvée</h2>
        <p className="text-muted-foreground mb-4">La demande {id} n'existe pas.</p>
        <Link to="/app/demandes">
          <Button>Retour aux demandes</Button>
        </Link>
      </div>
    );
  }

  const timeline = [
    { date: demande.created_at, event: 'Demande créée', icon: FileText, status: 'done' },
    {
      date: demande.statut !== 'À chiffrer' ? '2026-01-03' : null,
      event: 'Prise en charge par métreur',
      icon: User,
      status: demande.statut === 'À chiffrer' ? 'pending' : 'done',
    },
    {
      date: demande.statut === 'Devis envoyé' ? '2026-01-04' : null,
      event: 'Devis en cours de chiffrage',
      icon: Clock,
      status: demande.statut === 'Devis en cours' ? 'current' : demande.statut === 'Devis envoyé' ? 'done' : 'pending',
    },
    {
      date: demande.devis_sent_at,
      event: 'Devis envoyé',
      icon: CheckCircle,
      status: demande.devis_sent_at ? 'done' : 'pending',
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <Link to="/app/demandes">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl font-bold text-foreground">{demande.id}</h1>
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
            {demande.urgence !== 'Standard' && (
              <Badge variant="destructive">{demande.urgence}</Badge>
            )}
          </div>
          <p className="text-muted-foreground">{demande.client}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Changer le statut</Button>
          {demande.statut === 'Devis envoyé' && (
            <Button className="gap-2">
              <Download className="h-4 w-4" />
              Télécharger devis
            </Button>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Summary card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Informations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Building className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Client</p>
                    <p className="font-medium text-foreground">{demande.client}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Locataire</p>
                    <p className="font-medium text-foreground">{demande.locataire}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:col-span-2">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Adresse</p>
                    <p className="font-medium text-foreground">{demande.adresse}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">Travaux demandés</p>
                <p className="text-foreground">{demande.travaux}</p>
              </div>

              {demande.commentaires && (
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">Commentaires</p>
                  <p className="text-foreground">{demande.commentaires}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Attachments */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Pièces jointes</CardTitle>
              <Button variant="outline" size="sm" className="gap-2">
                <Upload className="h-4 w-4" />
                Ajouter
              </Button>
            </CardHeader>
            <CardContent>
              {demande.piecesJointes && demande.piecesJointes.length > 0 ? (
                <div className="space-y-2">
                  {demande.piecesJointes.map((file, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm text-foreground">{file}</span>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <FileText className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Aucune pièce jointe</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Deposit quote section */}
          {demande.statut !== 'Devis envoyé' && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Déposer le devis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-4">
                    Glissez-déposez le devis PDF ici
                  </p>
                  <Button variant="outline">Sélectionner un fichier</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Historique</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-4 pb-6 last:pb-0">
                    <div className="relative flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          item.status === 'done'
                            ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400'
                            : item.status === 'current'
                            ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        <item.icon className="h-4 w-4" />
                      </div>
                      {i < timeline.length - 1 && (
                        <div className="w-px flex-1 bg-border mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pt-1">
                      <p
                        className={`text-sm font-medium ${
                          item.status === 'pending' ? 'text-muted-foreground' : 'text-foreground'
                        }`}
                      >
                        {item.event}
                      </p>
                      {item.date && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(item.date).toLocaleDateString('fr-FR')}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Détails</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Métreur assigné</p>
                <p className="font-medium text-foreground">{demande.metreur}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date de création</p>
                <p className="font-medium text-foreground">
                  {new Date(demande.created_at).toLocaleDateString('fr-FR')}
                </p>
              </div>
              {demande.devis_sent_at && (
                <div>
                  <p className="text-sm text-muted-foreground">Devis envoyé le</p>
                  <p className="font-medium text-foreground">
                    {new Date(demande.devis_sent_at).toLocaleDateString('fr-FR')}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Alert if urgent */}
          {demande.urgence !== 'Standard' && (
            <Card className="border-destructive/30 bg-destructive/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Demande {demande.urgence.toLowerCase()}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Cette demande nécessite un traitement prioritaire.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemandeDetail;
