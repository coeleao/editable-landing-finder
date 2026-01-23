import { Award, Heart, Users, Sparkles } from 'lucide-react';

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
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=200&h=200&fit=crop&crop=face"
                  alt="Dra. Carolina Vieira"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-lime text-gray-900 px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Award className="h-3 w-3" />
                CRN Ativo
              </div>
            </div>

            {/* Author Bio */}
            <div className="text-center md:text-left flex-1">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                <Sparkles className="h-4 w-4" />
                Conheça sua Mentora
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                Dra. Carolina Vieira
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nutricionista especializada em emagrecimento saudável e desintoxicação corporal. 
                Com mais de 8 anos de experiência, desenvolveu o Protocolo Seca Carnaval após 
                ajudar centenas de mulheres a recuperarem a autoestima e conquistarem o corpo 
                dos sonhos sem dietas restritivas.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-sm bg-white/80 px-4 py-2 rounded-full border border-border">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="font-medium">+2.800 alunas</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-white/80 px-4 py-2 rounded-full border border-border">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="font-medium">Pós em Nutrição Funcional</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-white/80 px-4 py-2 rounded-full border border-border">
                  <Heart className="h-4 w-4 text-primary" />
                  <span className="font-medium">8+ anos de experiência</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}