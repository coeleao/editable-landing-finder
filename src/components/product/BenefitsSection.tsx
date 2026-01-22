import { CheckCircle, Smartphone, TrendingUp, Clock, Wallet, Users } from 'lucide-react';

const benefits = [
  {
    icon: Smartphone,
    title: 'Trabalhe do Celular',
    description: 'Tudo que você precisa é seu smartphone e conexão com internet.',
  },
  {
    icon: TrendingUp,
    title: 'Escale Seus Ganhos',
    description: 'Aprenda a multiplicar seus resultados mês após mês.',
  },
  {
    icon: Clock,
    title: 'Horários Flexíveis',
    description: 'Trabalhe quando quiser, sem chefe e sem horário fixo.',
  },
  {
    icon: Wallet,
    title: 'Baixo Investimento',
    description: 'Comece com menos de R$100 ou até mesmo sem investir nada.',
  },
  {
    icon: Users,
    title: 'Comunidade Ativa',
    description: 'Grupo exclusivo com suporte e networking entre alunos.',
  },
  {
    icon: CheckCircle,
    title: 'Método Testado',
    description: 'Estratégias validadas por milhares de alunos reais.',
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 bg-secondary/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            O Que Você Vai <span className="text-primary">Conquistar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um método completo para criar sua liberdade financeira
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
