import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Silva',
    location: 'São Paulo, SP',
    avatar: 'CS',
    rating: 5,
    text: 'Incrível! Cancelei todos os streamings e agora pago muito menos. A qualidade é excelente e funciona perfeitamente na minha Smart TV.',
  },
  {
    name: 'Maria Santos',
    location: 'Rio de Janeiro, RJ',
    avatar: 'MS',
    rating: 5,
    text: 'Melhor investimento que fiz! Tenho acesso a tudo que preciso por um preço justo. O suporte é muito atencioso também.',
  },
  {
    name: 'João Oliveira',
    location: 'Belo Horizonte, MG',
    avatar: 'JO',
    rating: 5,
    text: 'Minha família inteira usa e adoramos! Cada um assiste o que quer em dispositivos diferentes sem problema nenhum.',
  },
  {
    name: 'Ana Paula',
    location: 'Curitiba, PR',
    avatar: 'AP',
    rating: 5,
    text: 'Recomendo demais! Economia absurda comparado a assinar todas as plataformas separadas. Qualidade 4K impecável.',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            O QUE NOSSOS <span className="text-primary">CLIENTES DIZEM</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Mais de 10.000 clientes satisfeitos em todo o Brasil
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold shrink-0">
                  {testimonial.avatar}
                </div>

                <div className="flex-1">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <Quote className="h-8 w-8 text-primary/30" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-gold fill-gold" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
