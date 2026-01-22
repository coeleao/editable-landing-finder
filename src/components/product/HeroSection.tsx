import { Button } from '@/components/ui/button';
import { Play, CheckCircle, TrendingUp } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 gradient-hero">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="h-4 w-4" />
              +2.500 alunos faturando
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6">
              Ganhe{' '}
              <span className="text-primary">R$3.000 a R$10.000</span>{' '}
              Extra Por Mês Trabalhando de Casa
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Descubra o método comprovado para criar uma renda extra sólida 
              usando apenas seu celular, mesmo sem experiência ou investimento inicial.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Comece ainda hoje, sem precisar largar seu emprego',
                'Método validado por mais de 2.500 pessoas',
                'Resultados já nas primeiras semanas',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 justify-center md:justify-start">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" variant="gradient" className="text-lg px-8 py-6 shadow-glow hover:shadow-glow-strong transition-all duration-300">
              Quero Garantir Minha Vaga
            </Button>
          </div>

          {/* Video/Image Placeholder */}
          <div className="relative">
            <div className="aspect-video bg-card rounded-2xl shadow-card border border-border overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                <button className="w-20 h-20 rounded-full gradient-accent flex items-center justify-center shadow-glow hover:shadow-glow-strong transition-all duration-300 hover:scale-105">
                  <Play className="h-8 w-8 text-accent-foreground ml-1" fill="currentColor" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-border">
                  <p className="text-sm text-muted-foreground">
                    🎬 Assista como a Maria fez R$5.000 no primeiro mês
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
