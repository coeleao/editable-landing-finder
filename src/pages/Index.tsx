import { TopBanner } from '@/components/product/TopBanner';
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
import { PurchasePopup } from '@/components/product/PurchasePopup';

export default function Index() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Content */}
      <div className="relative z-10">
        <TopBanner />
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
      <PurchasePopup />
    </div>
  );
}
