import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Preciso ter experiência para começar?',
    answer: 'Não! O método foi criado para iniciantes. Você vai aprender do zero, passo a passo, mesmo que nunca tenha trabalhado online antes.',
  },
  {
    question: 'Quanto preciso investir para começar?',
    answer: 'Você pode começar com menos de R$100 ou até mesmo sem nenhum investimento inicial. Ensinamos estratégias gratuitas e pagas para todos os bolsos.',
  },
  {
    question: 'Em quanto tempo vou começar a ganhar dinheiro?',
    answer: 'Nossos alunos mais dedicados começam a ver resultados já na primeira semana. Em média, a maioria consegue sua primeira venda em 15 a 30 dias.',
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
