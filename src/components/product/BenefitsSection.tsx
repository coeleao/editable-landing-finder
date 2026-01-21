import { CheckCircle, Utensils, Dumbbell, Brain, Clock, Heart } from 'lucide-react';

const benefits = [
  {
    icon: Utensils,
    title: 'Cardápio Completo',
    description: 'Receitas simples e deliciosas para cada refeição do dia.',
  },
  {
    icon: Dumbbell,
    title: 'Exercícios Práticos',
    description: 'Treinos de 15 minutos que você pode fazer em casa.',
  },
  {
    icon: Brain,
    title: 'Mentalidade Vencedora',
    description: 'Técnicas para manter a motivação e não desistir.',
  },
  {
    icon: Clock,
    title: 'Resultados Rápidos',
    description: 'Veja mudanças visíveis já nas primeiras semanas.',
  },
  {
    icon: Heart,
    title: 'Mais Saúde',
    description: 'Melhore sua disposição, energia e qualidade de vida.',
  },
  {
    icon: CheckCircle,
    title: 'Método Validado',
    description: 'Baseado em ciência e aprovado por nutricionistas.',
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 bg-secondary/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            O Que Você Vai <span className="text-primary">Aprender</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um método completo para transformar seu corpo e sua vida
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
