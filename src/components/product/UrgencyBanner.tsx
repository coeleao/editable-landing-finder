import { Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

function useCountdown() {
  const getInitialTime = () => {
    const saved = localStorage.getItem('countdown-end');
    if (saved) {
      const endTime = parseInt(saved, 10);
      const remaining = Math.max(0, endTime - Date.now());
      if (remaining > 0) return remaining;
    }
    const endTime = Date.now() + 24 * 60 * 60 * 1000;
    localStorage.setItem('countdown-end', endTime.toString());
    return 24 * 60 * 60 * 1000;
  };

  const [timeLeft, setTimeLeft] = useState(getInitialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1000) {
          const newEndTime = Date.now() + 24 * 60 * 60 * 1000;
          localStorage.setItem('countdown-end', newEndTime.toString());
          return 24 * 60 * 60 * 1000;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return { hours, minutes, seconds };
}

export function UrgencyBanner() {
  const { hours, minutes, seconds } = useCountdown();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-destructive to-destructive/90 text-destructive-foreground py-3 shadow-lg">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
          <div className="text-center md:text-left">
            <p className="font-bold text-sm md:text-base">
              🔥 Garanta Seu Acesso Agora
            </p>
            <p className="text-xs md:text-sm opacity-90">
              Oferta especial por tempo limitado
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 animate-pulse" />
            <span className="text-xs font-semibold uppercase hidden sm:inline">Expira em:</span>
            <div className="flex gap-1">
              <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded min-w-[40px] text-center">
                <div className="text-lg font-black leading-none">{String(hours).padStart(2, '0')}</div>
                <div className="text-[8px] uppercase tracking-wide opacity-80">hrs</div>
              </div>
              <span className="font-bold self-center">:</span>
              <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded min-w-[40px] text-center">
                <div className="text-lg font-black leading-none">{String(minutes).padStart(2, '0')}</div>
                <div className="text-[8px] uppercase tracking-wide opacity-80">min</div>
              </div>
              <span className="font-bold self-center">:</span>
              <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded min-w-[40px] text-center">
                <div className="text-lg font-black leading-none">{String(seconds).padStart(2, '0')}</div>
                <div className="text-[8px] uppercase tracking-wide opacity-80">seg</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
