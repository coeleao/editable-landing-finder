import { Button } from '@/components/ui/button';
import { Check, ShieldCheck, Lock, CreditCard } from 'lucide-react';

const included = [
  'Método Renda Extra Completo (Acesso Digital)',
  'Aulas Passo a Passo em Vídeo',
  'Planilhas de Controle Financeiro',
  'Bônus: 10 Modelos de Mensagens Prontas',
  'Bônus: Grupo VIP de Networking',
  'Bônus: Mentoria ao Vivo Mensal',
  'Acesso Vitalício + Atualizações',
];

export function OfferSection() {
  return (
    <section id="oferta" className="py-20 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Garanta Seu <span className="text-accent">Acesso Agora</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferta especial por tempo limitado
          </p>
        </div>

        <div className="bg-card border-2 border-accent rounded-3xl p-8 md:p-12 shadow-card relative overflow-hidden">
          {/* Badge */}
          <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-6 py-2 rounded-bl-2xl font-bold text-sm">
            MAIS VENDIDO
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* What's Included */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">
                O que você vai receber:
              </h3>
              <ul className="space-y-4">
                {included.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-check/20 flex items-center justify-center shrink-0">
                      <Check className="h-4 w-4 text-green-check" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <div className="text-center">
              <p className="text-muted-foreground mb-2">De <span className="line-through">R$ 297,00</span></p>
              <div className="mb-2">
                <span className="text-sm text-muted-foreground">por apenas</span>
              </div>
              <div className="text-5xl md:text-6xl font-black text-primary mb-2">
                R$ 97
              </div>
              <p className="text-muted-foreground mb-6">
                ou 12x de R$ 9,70
              </p>

              <Button variant="cta" size="xl" className="w-full text-lg">
                Quero Garantir Minha Vaga
              </Button>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-green-check" />
                Garantia de 7 dias ou seu dinheiro de volta
              </div>

              {/* Payment Methods */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground mb-3">Pagamento 100% seguro</p>
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <CreditCard className="h-4 w-4" />
                    <span className="text-xs">Cartão</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Lock className="h-4 w-4" />
                    <span className="text-xs">PIX</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <ShieldCheck className="h-4 w-4" />
                    <span className="text-xs">Boleto</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
