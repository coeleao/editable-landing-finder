import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Como funciona o serviço?',
    answer: 'Após a confirmação do pagamento, você recebe seus dados de acesso por e-mail e WhatsApp. É só instalar o aplicativo no seu dispositivo (TV, celular, computador) e começar a assistir imediatamente.',
  },
  {
    question: 'Posso assistir em quantos dispositivos?',
    answer: 'Você pode assistir em até 3 dispositivos simultaneamente. Isso significa que toda sua família pode aproveitar ao mesmo tempo em TVs, celulares e computadores diferentes.',
  },
  {
    question: 'Qual a qualidade da transmissão?',
    answer: 'Oferecemos transmissão em SD, HD, Full HD e 4K. A qualidade se adapta automaticamente à sua velocidade de internet para garantir a melhor experiência possível.',
  },
  {
    question: 'Como funciona a garantia de 7 dias?',
    answer: 'Se por qualquer motivo você não ficar satisfeito nos primeiros 7 dias, basta entrar em contato conosco que devolvemos 100% do valor pago. Sem perguntas, sem burocracia.',
  },
  {
    question: 'O pagamento é seguro?',
    answer: 'Sim! Utilizamos as principais plataformas de pagamento do Brasil com criptografia SSL. Aceitamos cartão de crédito, PIX e boleto bancário. Seus dados estão 100% protegidos.',
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container max-w-3xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            PERGUNTAS <span className="text-primary">FREQUENTES</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas antes de assinar
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 data-[state=open]:shadow-glow transition-all"
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
