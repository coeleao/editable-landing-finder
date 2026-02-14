import { Frown, CreditCard, Clock, AlertTriangle } from 'lucide-react';

const problems = [
  {
    icon: CreditCard,
    title: 'Contas Acumulando',
    description: 'O salário acaba antes do mês terminar e as dívidas só aumentam. Parece que nunca sobra nada.',
  },
  {
    icon: Clock,
    title: 'Sem Tempo Livre',
    description: 'Trabalha o dia inteiro no emprego e ainda não consegue ter a vida que merece.',
  },
  {
    icon: Frown,
    title: 'Medo do Futuro',
    description: 'A insegurança de depender de um único salário e não saber o que vai acontecer amanhã.',
  },
];

export function ProblemsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Cansado de <span className="text-primary">não ter dinheiro</span> no final do mês?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Se você se identifica com alguma dessas situações, esse método foi feito para você.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-card"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Icon className="h-10 w-10 text-destructive" />
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
