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
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face"
                  alt="Dra. Ana Beatriz"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Author Bio */}
            <div className="text-center md:text-left">
              <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                Conheça a Autora
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-foreground mt-2 mb-4">
                Dra. Ana Beatriz
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nutricionista formada pela USP com mais de 15 anos de experiência em 
                emagrecimento saudável. Já ajudou mais de 5.000 pessoas a transformarem 
                suas vidas através de uma alimentação equilibrada e um estilo de vida ativo.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  CRN: 12345
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  +15 anos de experiência
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  +5.000 alunos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
