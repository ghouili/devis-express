import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Kanban,
  Users,
  BarChart3,
  Download,
  Bell,
  Mail,
  HelpCircle,
  Settings,
  LogOut,
} from 'lucide-react';

const AppSidebar = () => {
  const location = useLocation();

  const mainLinks = [
    { name: 'Dashboard', href: '/app/dashboard', icon: LayoutDashboard },
    { name: 'Demandes', href: '/app/demandes', icon: FileText },
    { name: 'Kanban', href: '/app/kanban', icon: Kanban },
    { name: 'Clients', href: '/app/clients', icon: Users },
    { name: 'Stats', href: '/app/stats', icon: BarChart3 },
    { name: 'Exports', href: '/app/exports', icon: Download },
  ];

  const secondaryLinks = [
    { name: 'Notifications', href: '/app/notifications', icon: Bell },
    { name: 'Bot email', href: '/app/regles-email-bot', icon: Mail, badge: 'Option' },
    { name: 'Aide', href: '/app/aide', icon: HelpCircle },
    { name: 'Paramètres', href: '/app/parametres', icon: Settings },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border h-screen flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">DP</span>
          </div>
          <span className="font-semibold text-sidebar-foreground">DevisPeinture</span>
        </Link>
      </div>

      {/* Main navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
          Principal
        </div>
        {mainLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
              isActive(link.href)
                ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
            }`}
          >
            <link.icon className="h-4 w-4" />
            {link.name}
          </Link>
        ))}

        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-6 mb-3">
          Autres
        </div>
        {secondaryLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
              isActive(link.href)
                ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
            }`}
          >
            <link.icon className="h-4 w-4" />
            <span className="flex-1">{link.name}</span>
            {link.badge && (
              <span className="px-1.5 py-0.5 text-xs rounded bg-primary/10 text-primary">
                {link.badge}
              </span>
            )}
          </Link>
        ))}
      </nav>

      {/* User section */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-medium text-primary">AS</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-sidebar-foreground truncate">
              Assistante Demo
            </div>
            <div className="text-xs text-muted-foreground">Rôle: Assistante</div>
          </div>
        </div>
        <Link
          to="/login"
          className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-sidebar-accent/50 transition-colors"
        >
          <LogOut className="h-4 w-4" />
          Déconnexion
        </Link>
      </div>
    </aside>
  );
};

export default AppSidebar;
