import { Wallet, Clock, AlertCircle } from 'lucide-react';

const problems = [
  {
    icon: Wallet,
    title: 'Dinheiro Sempre Curto?',
    description: 'O salário acaba antes do mês e você vive contando centavos para pagar as contas básicas.',
  },
  {
    icon: Clock,
    title: 'Trabalha Demais e Ganha Pouco?',
    description: 'Você se dedica o dia inteiro, mas parece que nunca sobra nada no final do mês.',
  },
  {
    icon: AlertCircle,
    title: 'Medo de Perder o Emprego?',
    description: 'A insegurança financeira te preocupa e você sabe que precisa de uma alternativa.',
  },
];

export function ProblemsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Você Se <span className="text-accent">Identifica</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Se você respondeu sim para alguma dessas situações, esse método foi feito para você.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 text-center hover:border-accent/50 transition-all duration-300 hover:shadow-card"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
