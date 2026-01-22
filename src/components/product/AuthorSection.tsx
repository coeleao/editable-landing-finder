export function AuthorSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Author Photo */}
            <div className="shrink-0">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                  alt="Rafael Oliveira"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Author Bio */}
            <div className="text-center md:text-left">
              <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                Conheça o Mentor
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-foreground mt-2 mb-4">
                Rafael Oliveira
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Empreendedor digital desde 2018, saiu de um emprego CLT que pagava R$2.500 
                para faturar mais de R$100.000 por mês. Já ajudou mais de 2.500 pessoas a 
                criarem suas próprias fontes de renda extra trabalhando de casa.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  +R$3M faturados
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  +6 anos de experiência
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  +2.500 alunos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
