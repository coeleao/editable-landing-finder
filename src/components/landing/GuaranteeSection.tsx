import { Shield, RefreshCw, Lock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function GuaranteeSection() {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center">
          {/* Shield Icon */}
          <div className="w-24 h-24 rounded-full gradient-primary mx-auto flex items-center justify-center mb-8 shadow-glow-strong">
            <Shield className="h-12 w-12 text-primary-foreground" />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            GARANTIA DE <span className="text-primary">7 DIAS</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Teste nosso serviço por 7 dias. Se não ficar 100% satisfeito, devolvemos seu dinheiro. 
            Sem perguntas, sem burocracia.
          </p>

          {/* Guarantee Points */}
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="flex flex-col items-center gap-3 p-4">
              <RefreshCw className="h-8 w-8 text-green-check" />
              <span className="font-semibold text-foreground">Reembolso Integral</span>
              <span className="text-sm text-muted-foreground">100% do valor devolvido</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4">
              <Lock className="h-8 w-8 text-green-check" />
              <span className="font-semibold text-foreground">Pagamento Seguro</span>
              <span className="text-sm text-muted-foreground">Criptografia SSL</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4">
              <Award className="h-8 w-8 text-green-check" />
              <span className="font-semibold text-foreground">Satisfação Garantida</span>
              <span className="text-sm text-muted-foreground">+10.000 clientes felizes</span>
            </div>
          </div>

          {/* CTA */}
          <Button variant="cta" size="xl" onClick={scrollToOffer} className="animate-pulse-glow">
            QUERO TESTAR AGORA!
          </Button>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
              </svg>
              <span>Cartão de Crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
              </svg>
              <span>PIX</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
              <span>Compra Segura</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
