import { Frown, TrendingDown, AlertCircle } from 'lucide-react';

const problems = [
  {
    icon: Frown,
    title: 'Cansado de Dietas que Não Funcionam?',
    description: 'Você já tentou de tudo: dietas restritivas, remédios, chás milagrosos... mas o peso sempre volta.',
  },
  {
    icon: TrendingDown,
    title: 'Autoestima Abalada?',
    description: 'Evita fotos, não se sente bem com suas roupas e perdeu a confiança em si mesmo.',
  },
  {
    icon: AlertCircle,
    title: 'Saúde em Risco?',
    description: 'Sente cansaço, falta de disposição e preocupação com problemas de saúde futuros.',
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
