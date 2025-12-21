import { Tv, Film, Zap, Shield, Clock, Headphones, MonitorPlay, Wifi } from 'lucide-react';

const features = [
  {
    icon: Tv,
    title: '+2.000 Canais',
    description: 'Canais abertos e fechados de todo o mundo, incluindo esportes, filmes e séries.',
  },
  {
    icon: Film,
    title: '+60.000 Conteúdos',
    description: 'Filmes e séries atualizados diariamente. Catálogo completo sempre disponível.',
  },
  {
    icon: Zap,
    title: 'Qualidade 4K',
    description: 'Transmissão em SD, HD, Full HD e 4K. Qualidade adaptativa para sua conexão.',
  },
  {
    icon: MonitorPlay,
    title: '3 Telas Simultâneas',
    description: 'Toda sua família pode assistir ao mesmo tempo em dispositivos diferentes.',
  },
  {
    icon: Clock,
    title: 'Disponível 24/7',
    description: 'Assista quando quiser, onde estiver. Conteúdo disponível a qualquer momento.',
  },
  {
    icon: Headphones,
    title: 'Suporte Dedicado',
    description: 'Equipe de suporte pronta para ajudar via WhatsApp a qualquer hora.',
  },
  {
    icon: Wifi,
    title: 'Conexão Estável',
    description: 'Servidores otimizados para garantir a melhor experiência sem travamentos.',
  },
  {
    icon: Shield,
    title: '100% Seguro',
    description: 'Seus dados protegidos com criptografia de ponta. Pagamento seguro.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            POR QUE <span className="text-primary">ESCOLHER</span> A GENTE?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos a melhor experiência de entretenimento com recursos premium
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
