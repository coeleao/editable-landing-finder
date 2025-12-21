import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { OfferSection } from '@/components/landing/OfferSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { GuaranteeSection } from '@/components/landing/GuaranteeSection';
import { FAQSection } from '@/components/landing/FAQSection';
import { Footer } from '@/components/landing/Footer';
import { FloatingCTA } from '@/components/landing/FloatingCTA';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <OfferSection />
      <FeaturesSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <FAQSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
