// Mock data for the paint quote platform

export interface Client {
  id: string;
  name: string;
  type: 'Bailleur' | 'Collectivité';
  sla_days: number;
  contacts?: string;
}

export interface Demande {
  id: string;
  client: string;
  locataire: string;
  adresse: string;
  travaux: string;
  urgence: 'Standard' | 'Urgent' | 'Très urgent';
  statut: 'À chiffrer' | 'Devis en cours' | 'Devis envoyé';
  metreur: string;
  created_at: string;
  devis_sent_at: string | null;
  piecesJointes?: string[];
  commentaires?: string;
}

export const clients: Client[] = [
  { id: 'C-001', name: 'Bailleur Social A', type: 'Bailleur', sla_days: 5, contacts: 'contact@bailleur-a.fr' },
  { id: 'C-002', name: 'Ville de Lyon', type: 'Collectivité', sla_days: 7, contacts: 'technique@lyon.fr' },
  { id: 'C-003', name: 'Habitat 75', type: 'Bailleur', sla_days: 4, contacts: 'devis@habitat75.fr' },
  { id: 'C-004', name: 'Commune de Villeurbanne', type: 'Collectivité', sla_days: 6, contacts: 'patrimoine@villeurbanne.fr' },
  { id: 'C-005', name: 'Office HLM Sud', type: 'Bailleur', sla_days: 5, contacts: 'technique@hlm-sud.fr' },
];

export const demandes: Demande[] = [
  {
    id: 'D-1001',
    client: 'Bailleur Social A',
    locataire: 'Mme Ben Ali',
    adresse: '12 Rue de la République, 69001 Lyon',
    travaux: 'Peinture séjour + couloir',
    urgence: 'Standard',
    statut: 'À chiffrer',
    metreur: '—',
    created_at: '2026-01-03',
    devis_sent_at: null,
    piecesJointes: ['photo_sejour.jpg', 'plan_appartement.pdf'],
  },
  {
    id: 'D-1002',
    client: 'Ville de Lyon',
    locataire: 'Logement communal - Rue Garibaldi',
    adresse: '45 Avenue Garibaldi, 69003 Lyon',
    travaux: 'Reprise peinture 2 chambres + dégâts des eaux',
    urgence: 'Urgent',
    statut: 'Devis en cours',
    metreur: 'M. Martin',
    created_at: '2026-01-02',
    devis_sent_at: null,
    commentaires: 'Dégât des eaux côté fenêtre - intervention rapide souhaitée',
  },
  {
    id: 'D-1003',
    client: 'Bailleur Social A',
    locataire: 'M. Dubois',
    adresse: '8 Impasse Verte, 31000 Toulouse',
    travaux: 'Peinture cuisine complète',
    urgence: 'Standard',
    statut: 'Devis envoyé',
    metreur: 'Mme Leclerc',
    created_at: '2025-12-28',
    devis_sent_at: '2026-01-02',
  },
  {
    id: 'D-1004',
    client: 'Habitat 75',
    locataire: 'M. et Mme Nguyen',
    adresse: '156 Boulevard Voltaire, 75011 Paris',
    travaux: 'Rafraîchissement complet T3',
    urgence: 'Standard',
    statut: 'À chiffrer',
    metreur: '—',
    created_at: '2026-01-04',
    devis_sent_at: null,
  },
  {
    id: 'D-1005',
    client: 'Commune de Villeurbanne',
    locataire: 'École Jean Jaurès',
    adresse: '23 Rue Jean Jaurès, 69100 Villeurbanne',
    travaux: 'Peinture 3 salles de classe',
    urgence: 'Très urgent',
    statut: 'Devis en cours',
    metreur: 'M. Martin',
    created_at: '2026-01-01',
    devis_sent_at: null,
    commentaires: 'Travaux à réaliser pendant vacances scolaires',
  },
  {
    id: 'D-1006',
    client: 'Office HLM Sud',
    locataire: 'Mme Garcia',
    adresse: '34 Avenue du Soleil, 13008 Marseille',
    travaux: 'Peinture entrée + WC',
    urgence: 'Standard',
    statut: 'Devis envoyé',
    metreur: 'Mme Leclerc',
    created_at: '2025-12-20',
    devis_sent_at: '2025-12-28',
  },
  {
    id: 'D-1007',
    client: 'Ville de Lyon',
    locataire: 'Médiathèque Part-Dieu',
    adresse: '30 Boulevard Vivier-Merle, 69003 Lyon',
    travaux: 'Reprise peinture hall accueil',
    urgence: 'Standard',
    statut: 'À chiffrer',
    metreur: '—',
    created_at: '2026-01-05',
    devis_sent_at: null,
  },
];

export const metreurs = [
  { id: 'M-001', name: 'M. Martin', specialites: ['Résidentiel', 'Tertiaire'] },
  { id: 'M-002', name: 'Mme Leclerc', specialites: ['Résidentiel'] },
  { id: 'M-003', name: 'M. Bernard', specialites: ['Tertiaire', 'ERP'] },
];

export const notifications = [
  { id: 1, type: 'urgent', message: 'Demande D-1005 (École) - Délai dépassé', date: '2026-01-05' },
  { id: 2, type: 'info', message: 'Nouveau devis envoyé pour D-1003', date: '2026-01-02' },
  { id: 3, type: 'warning', message: 'D-1002 en attente depuis 48h', date: '2026-01-04' },
];

export const stats = {
  demandesCeMois: 47,
  aChiffrer: 12,
  enCours: 8,
  devisEnvoyes: 27,
  delaiMoyen: 3.2,
  tauxConversion: 78,
};
