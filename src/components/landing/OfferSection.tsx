import { Check, Star, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'MENSAL',
    description: 'Ideal para testar o serviço',
    price: '29,90',
    period: '/mês',
    features: [
      'Use 3 telas simultaneamente',
      'Mais de 60.000 conteúdos',
      'Qualidade SD/HD/FHD/4K',
      'Guia de Programação [EPG]',
      'Assista no Smartphone/Tablet',
      'Assista na Smart TV',
      'Assista no Computador',
      'Suporte 24/7',
    ],
    popular: false,
  },
  {
    name: 'ANUAL',
    description: 'O MAIS VENDIDO! Melhor custo-benefício',
    price: '14,99',
    period: '/mês',
    totalPrice: '12x R$ 14,99',
    features: [
      'Use 3 telas simultaneamente',
      'Mais de 60.000 conteúdos',
      'Qualidade SD/HD/FHD/4K',
      'Guia de Programação [EPG]',
      'Assista no Smartphone/Tablet',
      'Assista na Smart TV',
      'Assista no Computador',
      'Suporte 24/7',
      'Pacote Filmes e Séries Premium',
    ],
    popular: true,
  },
  {
    name: 'SEMESTRAL',
    description: 'Economia de 6 meses',
    price: '89,90',
    period: '/6 meses',
    features: [
      'Use 3 telas simultaneamente',
      'Mais de 60.000 conteúdos',
      'Qualidade SD/HD/FHD/4K',
      'Guia de Programação [EPG]',
      'Assista no Smartphone/Tablet',
      'Assista na Smart TV',
      'Assista no Computador',
      'Suporte 24/7',
    ],
    popular: false,
  },
];

export function OfferSection() {
  return (
    <section id="oferta" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            ESCOLHA SEU <span className="text-primary">PLANO</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Se fosse para pagar todas as plataformas separadas, você gastaria mais de R$500 por mês!
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
                plan.popular
                  ? 'gradient-card border-primary shadow-glow-strong'
                  : 'bg-card border-border hover:border-primary/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="px-4 py-1 bg-background border border-primary rounded-full text-xs font-bold text-primary flex items-center gap-1">
                    <Crown className="h-3 w-3" />
                    MAIS VENDIDO
                  </div>
                </div>
              )}

              <div className="p-6 md:p-8">
                {/* Plan Header */}
                <div className="text-center mb-6 pt-4">
                  <p className="text-xs tracking-[0.3em] text-muted-foreground mb-1">P L A N O</p>
                  <h3 className="text-2xl font-black text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-check shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="text-center mb-6">
                  {plan.totalPrice && (
                    <p className="text-sm text-muted-foreground mb-1">{plan.totalPrice}</p>
                  )}
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-lg text-muted-foreground">R$</span>
                    <span className="text-4xl font-black text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  variant={plan.popular ? 'cta' : 'outline'} 
                  className="w-full"
                  size="lg"
                >
                  QUERO ESSE!
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Security Badge */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <div className="flex items-center gap-2 text-muted-foreground">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Pagamento 100% Seguro</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-4 w-4 text-gold fill-gold" />
            ))}
            <span className="text-sm text-muted-foreground ml-2">4.9/5</span>
          </div>
        </div>
      </div>
    </section>
  );
}
