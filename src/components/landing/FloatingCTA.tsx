import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-6 md:bottom-6">
      <Button 
        variant="cta" 
        size="lg" 
        onClick={scrollToOffer}
        className="w-full md:w-auto shadow-glow-strong animate-pulse-glow"
      >
        <Zap className="h-5 w-5 mr-2" />
        ASSINAR AGORA
      </Button>
    </div>
  );
}
