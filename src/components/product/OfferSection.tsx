import { Button } from '@/components/ui/button';
import { Check, ShieldCheck, Lock, CreditCard, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

const included = [
  'Treinamento Completo Renda Extra Online',
  'Módulo de Vendas pelo WhatsApp',
  'Templates de Copy Prontos para Usar',
  'Planilha de Controle Financeiro',
  'Bônus: Curso de Tráfego Pago',
  'Bônus: Mentoria em Grupo Semanal',
  'Bônus: Comunidade VIP no Telegram',
  'Acesso Vitalício + Atualizações',
];

function useCountdown() {
  const getInitialTime = () => {
    const saved = localStorage.getItem('countdown-end');
    if (saved) {
      const endTime = parseInt(saved, 10);
      const remaining = Math.max(0, endTime - Date.now());
      if (remaining > 0) return remaining;
    }
    const endTime = Date.now() + 24 * 60 * 60 * 1000;
    localStorage.setItem('countdown-end', endTime.toString());
    return 24 * 60 * 60 * 1000;
  };

  const [timeLeft, setTimeLeft] = useState(getInitialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1000) {
          const newEndTime = Date.now() + 24 * 60 * 60 * 1000;
          localStorage.setItem('countdown-end', newEndTime.toString());
          return 24 * 60 * 60 * 1000;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return { hours, minutes, seconds };
}

export function OfferSection() {
  const { hours, minutes, seconds } = useCountdown();

  return (
    <section id="oferta" className="py-20 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Sua <span className="text-primary">Liberdade Financeira</span> Começa Aqui
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Oferta especial por tempo limitado
          </p>

          {/* Countdown Timer */}
          <div className="inline-flex items-center gap-3 bg-destructive/10 border border-destructive/30 rounded-xl px-6 py-4">
            <Clock className="h-5 w-5 text-destructive animate-pulse" />
            <span className="text-sm font-semibold text-destructive">OFERTA EXPIRA EM:</span>
            <div className="flex gap-2">
              <div className="bg-destructive text-destructive-foreground px-3 py-2 rounded-lg min-w-[50px]">
                <div className="text-xl font-black">{String(hours).padStart(2, '0')}</div>
                <div className="text-[10px] uppercase tracking-wide">horas</div>
              </div>
              <div className="text-destructive font-bold text-xl self-center">:</div>
              <div className="bg-destructive text-destructive-foreground px-3 py-2 rounded-lg min-w-[50px]">
                <div className="text-xl font-black">{String(minutes).padStart(2, '0')}</div>
                <div className="text-[10px] uppercase tracking-wide">min</div>
              </div>
              <div className="text-destructive font-bold text-xl self-center">:</div>
              <div className="bg-destructive text-destructive-foreground px-3 py-2 rounded-lg min-w-[50px]">
                <div className="text-xl font-black">{String(seconds).padStart(2, '0')}</div>
                <div className="text-[10px] uppercase tracking-wide">seg</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border-2 border-primary rounded-3xl p-8 md:p-12 shadow-card relative overflow-hidden">
          {/* Badge */}
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-6 py-2 rounded-bl-2xl font-bold text-sm">
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
              <p className="text-muted-foreground mb-2">De <span className="line-through">R$ 497,00</span></p>
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
                Quero Começar a Faturar
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
