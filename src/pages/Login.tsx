import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCircle, Briefcase } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleLogin = (role: string) => {
    setSelectedRole(role);
    // Mock: store role in localStorage
    localStorage.setItem('userRole', role);
    // Redirect to dashboard
    setTimeout(() => {
      navigate('/app/dashboard');
    }, 500);
  };

  const roles = [
    {
      id: 'assistante',
      title: 'Assistante',
      description: 'Créer et suivre les demandes de devis',
      icon: UserCircle,
      permissions: ['Créer des demandes', 'Joindre des documents', 'Suivre les statuts'],
    },
    {
      id: 'metreur',
      title: 'Métreur',
      description: 'Chiffrer et envoyer les devis',
      icon: Briefcase,
      permissions: ['Consulter les demandes', 'Chiffrer les travaux', 'Déposer les devis'],
    },
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">DP</span>
            </div>
            <span className="text-xl font-semibold text-foreground">DevisPeinture</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Connexion</h1>
          <p className="text-muted-foreground mt-2">
            Sélectionnez votre profil pour accéder à la plateforme
          </p>
        </div>

        {/* Role selection */}
        <div className="space-y-4">
          {roles.map((role) => (
            <Card
              key={role.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
                selectedRole === role.id
                  ? 'border-primary ring-2 ring-primary/20'
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => handleLogin(role.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <role.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{role.title}</CardTitle>
                    <CardDescription>{role.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1">
                  {role.permissions.map((perm, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {perm}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full mt-4"
                  variant={selectedRole === role.id ? 'default' : 'outline'}
                >
                  {selectedRole === role.id ? 'Connexion en cours...' : `Se connecter en ${role.title}`}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Demo note */}
        <p className="text-center text-sm text-muted-foreground">
          Ceci est une démo. Aucune donnée réelle n'est utilisée.
        </p>
      </div>
    </div>
  );
};

export default Login;
