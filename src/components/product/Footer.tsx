export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-black mb-4">
              GUIA<span className="text-accent">FIT</span>
            </h3>
            <p className="text-background/70 text-sm">
              Transformando vidas através de uma alimentação saudável e equilibrada.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:contato@guiafit.com.br" 
                  className="text-background/70 hover:text-background text-sm transition-colors"
                >
                  contato@guiafit.com.br
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5511999999999" 
                  className="text-background/70 hover:text-background text-sm transition-colors"
                >
                  WhatsApp: (11) 99999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} GuiaFit. Todos os direitos reservados.
          </p>
          <p className="text-xs text-background/40 mt-2">
            Este produto não substitui acompanhamento médico ou nutricional.
          </p>
        </div>
      </div>
    </footer>
  );
}
