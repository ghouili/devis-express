import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
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
import { CheckCircle, ArrowLeft } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    organisation: '',
    email: '',
    telephone: '',
    volume: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Demande envoyée !
            </h1>
            <p className="text-muted-foreground mb-8">
              Merci pour votre intérêt. Notre équipe vous recontactera sous 24h pour 
              organiser une démonstration personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Retour à l'accueil
                </Button>
              </Link>
              <Link to="/app/dashboard">
                <Button>Explorer le prototype</Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Demander une démo
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Découvrez comment la plateforme peut transformer votre gestion des demandes de devis.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Vos coordonnées</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom et prénom *</Label>
                    <Input
                      id="nom"
                      required
                      placeholder="Jean Dupont"
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organisation">Organisation *</Label>
                    <Input
                      id="organisation"
                      required
                      placeholder="Bailleur Social ABC"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email professionnel *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="jean.dupont@organisation.fr"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telephone">Téléphone</Label>
                    <Input
                      id="telephone"
                      type="tel"
                      placeholder="01 23 45 67 89"
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="volume">Volume mensuel de demandes *</Label>
                  <Select
                    value={formData.volume}
                    onValueChange={(value) => setFormData({ ...formData, volume: value })}
                  >
                    <SelectTrigger id="volume">
                      <SelectValue placeholder="Sélectionner une tranche" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="moins-50">Moins de 50 demandes/mois</SelectItem>
                      <SelectItem value="50-100">50 à 100 demandes/mois</SelectItem>
                      <SelectItem value="100-200">100 à 200 demandes/mois</SelectItem>
                      <SelectItem value="plus-200">Plus de 200 demandes/mois</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (optionnel)</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Décrivez votre besoin ou posez vos questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Envoyer ma demande
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.
                  Vos données sont traitées conformément à notre{' '}
                  <Link to="/confidentialite" className="underline hover:text-foreground">
                    politique de confidentialité
                  </Link>
                  .
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
