import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carla Mendes',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'Comecei sem saber nada e hoje faturo R$4.500 por mês só com o celular! Mudou completamente minha vida financeira.',
    result: 'R$4.500/mês',
  },
  {
    name: 'Roberto Lima',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'Estava desempregado e em 3 meses já estava ganhando mais do que no meu antigo emprego. Método incrível!',
    result: 'R$6.200/mês',
  },
  {
    name: 'Patrícia Souza',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'Mãe de 2 filhos, consigo trabalhar de casa nos meus horários. A renda extra paga as atividades das crianças!',
    result: 'R$3.800/mês',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Alunos <span className="text-accent">Faturando</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja quanto nossos alunos estão ganhando por mês
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
