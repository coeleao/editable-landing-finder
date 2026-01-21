import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carla Mendes',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'Perdi 12kg em 3 meses! O método é simples e fácil de seguir. Finalmente encontrei algo que funciona de verdade.',
    result: '-12kg em 3 meses',
  },
  {
    name: 'Roberto Silva',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'Depois de anos tentando, consegui emagrecer sem passar fome. Minha energia melhorou muito também!',
    result: '-8kg em 2 meses',
  },
  {
    name: 'Fernanda Costa',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'O melhor investimento que fiz em mim mesma. As receitas são deliciosas e práticas para o dia a dia.',
    result: '-15kg em 4 meses',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Histórias de <span className="text-accent">Transformação</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja o que nossos alunos estão conquistando
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-gold fill-gold" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-semibold rounded-full text-sm">
                {testimonial.result}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
