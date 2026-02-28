import { Link } from "react-router";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl tracking-wide">
                Sustenta o Look
              </span>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed max-w-xs">
              Moda autoral independente com curadoria vintage e upcycling. 
              Vista-se com consciência, conforto e identidade.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-widest text-background/50">
              Navegação
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/sobre"
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                Sobre Nós
              </Link>
              <Link
                to="/autorais"
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                Autorais
              </Link>
              <Link
                to="/brecho"
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                Brechó
              </Link>
              <Link
                to="/contato"
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                Contato
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-widest text-background/50">
              Contato
            </h4>
            <div className="space-y-2">
              <a
                href="https://instagram.com/sustentaolook"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-background/70 hover:text-background transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@sustentaolook</span>
              </a>
              <p className="text-sm text-background/70">
                contato@sustentaolook.com
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <p className="text-center text-xs text-background/50">
            © {new Date().getFullYear()} Sustenta o Look. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
