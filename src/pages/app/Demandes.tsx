import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plus, Search, Filter, Eye, Download } from 'lucide-react';
import { demandes, clients } from '@/data/mockData';

const Demandes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [clientFilter, setClientFilter] = useState<string>('all');

  const filteredDemandes = demandes.filter((d) => {
    const matchesSearch =
      d.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.locataire.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.adresse.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'all' || d.statut === statusFilter;
    const matchesClient = clientFilter === 'all' || d.client === clientFilter;

    return matchesSearch && matchesStatus && matchesClient;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Demandes</h1>
          <p className="text-muted-foreground">
            {filteredDemandes.length} demande{filteredDemandes.length > 1 ? 's' : ''}
          </p>
        </div>
        <Link to="/app/demandes/nouvelle">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Nouvelle demande
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher par ID, client, locataire, adresse..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-44">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Statut" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les statuts</SelectItem>
            <SelectItem value="À chiffrer">À chiffrer</SelectItem>
            <SelectItem value="Devis en cours">Devis en cours</SelectItem>
            <SelectItem value="Devis envoyé">Devis envoyé</SelectItem>
          </SelectContent>
        </Select>

        <Select value={clientFilter} onValueChange={setClientFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Client" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les clients</SelectItem>
            {clients.map((client) => (
              <SelectItem key={client.id} value={client.name}>
                {client.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-24">ID</TableHead>
                <TableHead>Client</TableHead>
                <TableHead className="hidden md:table-cell">Locataire</TableHead>
                <TableHead className="hidden lg:table-cell">Adresse</TableHead>
                <TableHead className="hidden sm:table-cell">Travaux</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="hidden md:table-cell">Métreur</TableHead>
                <TableHead className="hidden lg:table-cell">Date</TableHead>
                <TableHead className="w-20">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDemandes.map((demande) => (
                <TableRow key={demande.id} className="hover:bg-muted/30">
                  <TableCell className="font-mono text-sm">{demande.id}</TableCell>
                  <TableCell className="font-medium">{demande.client}</TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground">
                    {demande.locataire}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-muted-foreground max-w-48 truncate">
                    {demande.adresse}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell text-muted-foreground max-w-32 truncate">
                    {demande.travaux}
                  </TableCell>
                  <TableCell>
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
                      <Badge variant="destructive" className="ml-2 text-xs">
                        {demande.urgence}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground">
                    {demande.metreur}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-muted-foreground">
                    {new Date(demande.created_at).toLocaleDateString('fr-FR')}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Link to={`/app/demandes/${demande.id}`}>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                      {demande.devis_sent_at && (
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Download className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredDemandes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Aucune demande trouvée</p>
            <Link to="/app/demandes/nouvelle">
              <Button variant="outline" className="mt-4 gap-2">
                <Plus className="h-4 w-4" />
                Créer une demande
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Demandes;
