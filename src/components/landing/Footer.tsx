import { Link } from 'react-router-dom';

const Footer = () => {
  const links = {
    product: [
      { name: 'Solution', href: '/solution' },
      { name: 'Fonctionnalités', href: '/fonctionnalites' },
      { name: 'Tarifs', href: '/tarifs' },
      { name: 'FAQ', href: '/faq' },
    ],
    resources: [
      { name: 'Contact', href: '/contact' },
      { name: 'Ressources', href: '/ressources' },
      { name: 'Aide', href: '/app/aide' },
    ],
    legal: [
      { name: 'Mentions légales', href: '/mentions-legales' },
      { name: 'Confidentialité', href: '/confidentialite' },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">DP</span>
              </div>
              <span className="font-semibold text-foreground">DevisPeinture</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              La plateforme de suivi des demandes de devis pour les métiers de la peinture.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Produit</h4>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Ressources</h4>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Légal</h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 DevisPeinture. Tous droits réservés.
          </p>
          <p className="text-sm text-muted-foreground">
            Fait avec ❤️ pour les équipes terrain
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
