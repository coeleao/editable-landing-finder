import problemBloat from '@/assets/problem-bloat.png';
import problemClothes from '@/assets/problem-clothes.png';
import problemEnergy from '@/assets/problem-energy.png';

const problems = [
  {
    image: problemBloat,
    title: 'Inchaço Abdominal',
    description: 'A sensação de estar sempre estufada, mesmo comendo pouco. Parece que nada funciona.',
  },
  {
    image: problemClothes,
    title: 'Roupas Apertadas',
    description: 'A frustração de provar o short jeans favorito e ele simplesmente não fechar mais.',
  },
  {
    image: problemEnergy,
    title: 'Vergonha do Corpo',
    description: 'O medo de colocar biquíni na frente dos amigos e se sentir julgada o tempo todo.',
  },
];

export function ProblemsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Cansada de se <span className="text-primary">esconder</span> nas fotos de verão?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Se você respondeu sim para alguma dessas situações, esse desafio foi feito para você.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-card"
            >
              <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-xl">
                <img 
                  src={problem.image} 
                  alt={problem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
