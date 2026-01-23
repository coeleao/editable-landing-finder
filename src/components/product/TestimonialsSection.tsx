import { Star, Sparkles, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    initial: 'C',
    name: 'Cláudia M.',
    location: 'São Paulo, SP',
    result: 'Perdeu 4,5kg em 12 dias',
    text: 'Eu não acreditava que seria possível! Em menos de 2 semanas já estava usando meu biquíni favorito. O método é simples e fácil de seguir.',
  },
  {
    initial: 'F',
    name: 'Fernanda S.',
    location: 'Rio de Janeiro, RJ',
    result: 'Perdeu 5,2kg em 15 dias',
    text: 'O melhor investimento que fiz! Consegui entrar no vestido do Carnaval que tinha desistido. Minhas amigas não acreditaram na transformação.',
  },
  {
    initial: 'J',
    name: 'Juliana R.',
    location: 'Belo Horizonte, MG',
    result: 'Perdeu 3,8kg em 10 dias',
    text: 'Finalmente um método que funciona de verdade! Sem passar fome, sem treinos loucos. O cronograma de chás fez toda diferença.',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Mulheres <span className="text-primary">Transformadas</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja os resultados reais de quem seguiu o protocolo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border-t-4 border-t-primary border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary/20 text-5xl font-serif">
                "
              </div>

              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                {/* Avatar Initial */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shrink-0">
                  {testimonial.initial}
                </div>
                
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
                    <CheckCircle className="h-4 w-4 text-lime fill-lime" />
                  </div>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>

              {/* Result Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/20 text-lime-dark rounded-full text-sm font-bold mb-4">
                <Sparkles className="h-4 w-4 text-lime" />
                {testimonial.result}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed mb-4">
                "{testimonial.text}"
              </p>
              
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-lime fill-lime" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}