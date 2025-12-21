import { Mail, Phone, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-black text-foreground mb-4">
              STREAM<span className="text-primary">FLIX</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A melhor plataforma de streaming do Brasil. 
              Mais de 10.000 clientes satisfeitos em todo o país.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Política de Reembolso
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:contato@exemplo.com" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  contato@exemplo.com
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5511999999999" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp: (11) 99999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} StreamFlix. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
