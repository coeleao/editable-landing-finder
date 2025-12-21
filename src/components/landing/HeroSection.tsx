import { Button } from '@/components/ui/button';
import { Play, Tv, Smartphone, Monitor } from 'lucide-react';

export function HeroSection() {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="relative container max-w-6xl mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-green-check animate-pulse" />
          <span className="text-sm font-medium text-foreground">+10.000 clientes satisfeitos</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 animate-fade-up leading-tight" style={{ animationDelay: '0.1s' }}>
          CHEGA DE PAGAR CARO
          <br />
          <span className="text-primary">POR POUCO CONTEÚDO</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Tenha acesso a <span className="text-foreground font-semibold">mais de 2.000 canais</span>, filmes, séries e todos os streamings em um único lugar. 
          Assista na TV, celular ou computador!
        </p>

        {/* CTA Button */}
        <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <Button 
            variant="cta" 
            size="xl" 
            onClick={scrollToOffer}
            className="animate-pulse-glow"
          >
            <Play className="h-5 w-5 mr-2" />
            QUERO MEU ACESSO AGORA!
          </Button>
        </div>

        {/* Devices */}
        <div className="flex items-center justify-center gap-8 mt-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <Tv className="h-8 w-8" />
            <span className="text-xs">Smart TV</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <Smartphone className="h-8 w-8" />
            <span className="text-xs">Celular</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <Monitor className="h-8 w-8" />
            <span className="text-xs">Computador</span>
          </div>
        </div>

        {/* Hero Image/Mockup */}
        <div className="mt-16 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl rounded-3xl" />
            <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 md:p-8 shadow-card">
              <div className="aspect-video bg-secondary rounded-xl overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Veja como funciona</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
