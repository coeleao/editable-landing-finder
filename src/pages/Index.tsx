import { Header } from '@/components/product/Header';
import { HeroSection } from '@/components/product/HeroSection';
import { ProblemsSection } from '@/components/product/ProblemsSection';
import { BenefitsSection } from '@/components/product/BenefitsSection';
import { TestimonialsSection } from '@/components/product/TestimonialsSection';
import { AuthorSection } from '@/components/product/AuthorSection';
import { OfferSection } from '@/components/product/OfferSection';
import { GuaranteeSection } from '@/components/product/GuaranteeSection';
import { FAQSection } from '@/components/product/FAQSection';
import { Footer } from '@/components/product/Footer';
import { UrgencyBanner } from '@/components/product/UrgencyBanner';
import bgPattern from '@/assets/bg-pattern.png';

export default function Index() {
  return (
    <>
      <UrgencyBanner />
      <div 
        className="min-h-screen bg-background pt-20 md:pt-16"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
      <Header />
      <HeroSection />
      <ProblemsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <AuthorSection />
      <OfferSection />
      <GuaranteeSection />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
}
