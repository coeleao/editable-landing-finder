import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export function HeroSection() {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-28 pb-20 gradient-hero">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full text-sm mb-6">
              🔥 Método Comprovado por +5.000 Alunos
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6">
              Emagreça de Forma{' '}
              <span className="text-primary">Saudável</span> e{' '}
              <span className="text-accent">Definitiva</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Descubra o passo a passo que já transformou milhares de vidas. 
              Sem dietas malucas, sem passar fome.
            </p>
            
            <Button 
              variant="cta" 
              size="xl" 
              onClick={scrollToOffer}
              className="w-full sm:w-auto"
            >
              Quero Garantir Minha Vaga
            </Button>
            
            <p className="mt-4 text-sm text-muted-foreground">
              ✓ Acesso imediato &nbsp; ✓ Garantia de 7 dias
            </p>
          </div>

          {/* Video/Image Placeholder */}
          <div className="relative">
            <div className="aspect-video bg-card rounded-2xl shadow-card border border-border overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop"
                alt="Guia de Emagrecimento"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full gradient-accent flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-accent-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-card p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                  4.9
                </div>
                <div>
                  <div className="flex text-gold text-sm">★★★★★</div>
                  <p className="text-xs text-muted-foreground">+500 avaliações</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
