import { Award, Briefcase, Users, Sparkles } from 'lucide-react';

export function AuthorSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Author Photo */}
            <div className="shrink-0 relative">
              <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-primary shadow-glow">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face"
                  alt="Lucas Andrade"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Award className="h-3 w-3" />
                Top Mentor
              </div>
            </div>

            {/* Author Bio */}
            <div className="text-center md:text-left flex-1">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                <Sparkles className="h-4 w-4" />
                Conheça seu Mentor
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                Lucas Andrade
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Especialista em marketing digital e empreendedorismo online. 
                Saiu de um emprego CLT que pagava R$2.500 e hoje fatura mais de R$150.000 por mês. 
                Já ajudou milhares de pessoas a conquistarem sua liberdade financeira 
                com estratégias simples e comprovadas.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-sm bg-white/80 px-4 py-2 rounded-full border border-border">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="font-medium">+5.800 alunos</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-white/80 px-4 py-2 rounded-full border border-border">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="font-medium">Top 1% Hotmart</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-white/80 px-4 py-2 rounded-full border border-border">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span className="font-medium">6+ anos de experiência</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
