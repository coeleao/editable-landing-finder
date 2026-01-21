import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'O método funciona para qualquer pessoa?',
    answer: 'Sim! O método foi desenvolvido para funcionar com qualquer pessoa, independente da idade ou condição física. As estratégias são adaptáveis ao seu estilo de vida e rotina.',
  },
  {
    question: 'Em quanto tempo verei resultados?',
    answer: 'A maioria dos nossos alunos começa a ver resultados já nas primeiras 2 semanas. Resultados mais expressivos costumam aparecer entre 30 e 60 dias seguindo o método corretamente.',
  },
  {
    question: 'Preciso fazer exercícios pesados?',
    answer: 'Não! Os exercícios são simples, de apenas 15 minutos, e podem ser feitos em casa sem nenhum equipamento. São perfeitos para iniciantes.',
  },
  {
    question: 'Como funciona a garantia?',
    answer: 'Você tem 7 dias para testar todo o conteúdo. Se não gostar por qualquer motivo, basta enviar um e-mail que devolvemos 100% do valor pago, sem perguntas.',
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas antes de começar
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 data-[state=open]:shadow-soft transition-all"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
