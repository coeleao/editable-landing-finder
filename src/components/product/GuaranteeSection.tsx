import { ShieldCheck } from 'lucide-react';

export function GuaranteeSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Shield Icon */}
            <div className="shrink-0">
              <div className="w-32 h-32 rounded-full bg-green-check/10 flex items-center justify-center">
                <ShieldCheck className="h-16 w-16 text-green-check" />
              </div>
            </div>

            {/* Guarantee Text */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                Garantia Incondicional de{' '}
                <span className="text-green-check">7 Dias</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Se por qualquer motivo você não ficar satisfeito com o conteúdo, 
                basta enviar um e-mail em até 7 dias após a compra que devolvemos 
                100% do seu investimento. Sem perguntas, sem burocracia.
              </p>
              <p className="text-foreground font-semibold">
                Seu risco é ZERO. Quem corre o risco somos nós.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
