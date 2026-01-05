import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowLeft, Upload, Plus, X } from 'lucide-react';
import { clients } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

const NouvelleDemande = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    client: '',
    locataire: '',
    adresse: '',
    ville: '',
    typeTravaux: '',
    autreTypeTravaux: '',
    urgence: 'Standard',
    delai: '',
    commentaires: '',
  });

  const [piecesJointes, setPiecesJointes] = useState<string[]>([]);

  const typesTravauxOptions = [
    'Peinture séjour',
    'Peinture chambre(s)',
    'Peinture cuisine',
    'Peinture couloir/entrée',
    'Peinture WC/SDB',
    'Rafraîchissement complet',
    'Reprise dégâts des eaux',
    'Autre',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    toast({
      title: 'Demande créée avec succès',
      description: 'La demande D-1008 a été enregistrée.',
    });

    // Redirect to demands list
    setTimeout(() => {
      navigate('/app/demandes');
    }, 1000);
  };

  const handleAddFile = () => {
    // Simulate file upload
    const mockFiles = ['document.pdf', 'photo_1.jpg', 'plan.pdf', 'email_client.msg'];
    const randomFile = mockFiles[Math.floor(Math.random() * mockFiles.length)];
    if (!piecesJointes.includes(randomFile)) {
      setPiecesJointes([...piecesJointes, randomFile]);
    }
  };

  const handleRemoveFile = (file: string) => {
    setPiecesJointes(piecesJointes.filter((f) => f !== file));
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link to="/app/demandes">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Nouvelle demande</h1>
          <p className="text-muted-foreground">Créez une nouvelle demande de devis</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Client section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Informations client</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="client">Client *</Label>
                <Select
                  value={formData.client}
                  onValueChange={(value) => setFormData({ ...formData, client: value })}
                >
                  <SelectTrigger id="client">
                    <SelectValue placeholder="Sélectionner un client" />
                  </SelectTrigger>
                  <SelectContent>
                    {clients.map((client) => (
                      <SelectItem key={client.id} value={client.name}>
                        {client.name} ({client.type})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="locataire">Locataire / Occupant *</Label>
                <Input
                  id="locataire"
                  placeholder="Nom du locataire ou référence"
                  value={formData.locataire}
                  onChange={(e) => setFormData({ ...formData, locataire: e.target.value })}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2 space-y-2">
                <Label htmlFor="adresse">Adresse *</Label>
                <Input
                  id="adresse"
                  placeholder="Numéro et rue"
                  value={formData.adresse}
                  onChange={(e) => setFormData({ ...formData, adresse: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ville">Ville</Label>
                <Input
                  id="ville"
                  placeholder="Ville"
                  value={formData.ville}
                  onChange={(e) => setFormData({ ...formData, ville: e.target.value })}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Works section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Description des travaux</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="typeTravaux">Type de travaux *</Label>
                <Select
                  value={formData.typeTravaux}
                  onValueChange={(value) => setFormData({ ...formData, typeTravaux: value })}
                >
                  <SelectTrigger id="typeTravaux">
                    <SelectValue placeholder="Sélectionner le type" />
                  </SelectTrigger>
                  <SelectContent>
                    {typesTravauxOptions.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {formData.typeTravaux === 'Autre' && (
                <div className="space-y-2">
                  <Label htmlFor="autreTypeTravaux">Précisez *</Label>
                  <Input
                    id="autreTypeTravaux"
                    placeholder="Décrivez les travaux"
                    value={formData.autreTypeTravaux}
                    onChange={(e) => setFormData({ ...formData, autreTypeTravaux: e.target.value })}
                  />
                </div>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="urgence">Niveau d'urgence</Label>
                <Select
                  value={formData.urgence}
                  onValueChange={(value) => setFormData({ ...formData, urgence: value })}
                >
                  <SelectTrigger id="urgence">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Standard">Standard</SelectItem>
                    <SelectItem value="Urgent">Urgent</SelectItem>
                    <SelectItem value="Très urgent">Très urgent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="delai">Délai souhaité</Label>
                <Input
                  id="delai"
                  type="date"
                  value={formData.delai}
                  onChange={(e) => setFormData({ ...formData, delai: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="commentaires">Commentaires internes</Label>
              <Textarea
                id="commentaires"
                placeholder="Informations complémentaires, contraintes d'accès, etc."
                rows={4}
                value={formData.commentaires}
                onChange={(e) => setFormData({ ...formData, commentaires: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>

        {/* Attachments section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Pièces jointes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground mb-4">
                Glissez-déposez vos fichiers ou
              </p>
              <Button type="button" variant="outline" onClick={handleAddFile}>
                <Plus className="h-4 w-4 mr-2" />
                Ajouter un fichier (simulé)
              </Button>
            </div>

            {piecesJointes.length > 0 && (
              <div className="space-y-2">
                {piecesJointes.map((file) => (
                  <div
                    key={file}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border"
                  >
                    <span className="text-sm text-foreground">{file}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleRemoveFile(file)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Submit */}
        <div className="flex items-center justify-end gap-4">
          <Link to="/app/demandes">
            <Button type="button" variant="outline">
              Annuler
            </Button>
          </Link>
          <Button type="submit">Créer la demande</Button>
        </div>
      </form>
    </div>
  );
};

export default NouvelleDemande;
