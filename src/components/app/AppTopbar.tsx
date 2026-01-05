import { useState } from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface AppTopbarProps {
  onMenuClick?: () => void;
}

const AppTopbar = ({ onMenuClick }: AppTopbarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-4 lg:px-6">
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={onMenuClick}
        aria-label="Toggle menu"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Search */}
      <div className="flex-1 max-w-md mx-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Rechercher une demande, un client..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-muted/50 border-border"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        {/* Quick filters */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" size="sm" className="text-xs">
            Urgent
          </Button>
          <Button variant="ghost" size="sm" className="text-xs">
            Aujourd'hui
          </Button>
        </div>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-destructive" />
        </Button>
      </div>
    </header>
  );
};

export default AppTopbar;
