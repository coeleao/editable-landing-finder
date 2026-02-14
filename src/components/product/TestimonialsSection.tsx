import { Star, Sparkles, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    name: 'Rafael M.',
    location: 'São Paulo, SP',
    result: 'Faturou R$8.500 no 1º mês',
    text: 'Eu era cético no começo, mas em 30 dias já tinha pago todas as minhas dívidas. O método é simples e qualquer um consegue seguir.',
  },
  {
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    name: 'Fernanda S.',
    location: 'Rio de Janeiro, RJ',
    result: 'Faturou R$5.200 em 3 semanas',
    text: 'Saí do zero absoluto e hoje tenho minha renda extra garantida. Melhor investimento que fiz na minha vida!',
  },
  {
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    name: 'Carlos R.',
    location: 'Belo Horizonte, MG',
    result: 'Faturou R$12.000 em 2 meses',
    text: 'Largei meu emprego CLT depois de 3 meses. Hoje trabalho de casa e ganho 3x mais. Gratidão eterna!',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Alunos <span className="text-primary">Faturando</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja os resultados reais de quem seguiu o método
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
                <img 
                  src={testimonial.photo} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary shrink-0"
                />
                
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
                    <CheckCircle className="h-4 w-4 text-green-check fill-green-check" />
                  </div>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>

              {/* Result Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-bold mb-4">
                <Sparkles className="h-4 w-4 text-accent" />
                {testimonial.result}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed mb-4">
                "{testimonial.text}"
              </p>
              
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
