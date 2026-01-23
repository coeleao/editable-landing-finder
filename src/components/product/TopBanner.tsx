import { Sparkles, Clock, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

export function TopBanner() {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 46, seconds: 53 });
  const [spots, setSpots] = useState(23);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="bg-gradient-to-r from-primary via-primary to-accent py-3 px-4">
      <div className="container max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-8">
        {/* Últimas Vagas */}
        <div className="flex items-center gap-2 text-white font-bold">
          <Sparkles className="h-5 w-5 text-yellow-300" />
          <span className="text-sm md:text-base">⚠️ ÚLTIMAS VAGAS!</span>
        </div>

        {/* Countdown */}
        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5">
          <Clock className="h-4 w-4 text-lime" />
          <span className="font-mono font-bold text-white text-sm md:text-base">
            {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
          </span>
        </div>

        {/* Vagas Restantes */}
        <div className="flex items-center gap-2 bg-lime text-gray-900 rounded-full px-4 py-1.5 font-bold text-sm">
          <Users className="h-4 w-4" />
          <span>Apenas <span className="text-primary">{spots}</span> vagas restantes</span>
        </div>
      </div>
    </div>
  );
}
