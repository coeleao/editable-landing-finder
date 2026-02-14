import { useEffect, useState } from 'react';
import { CheckCircle, ShoppingBag } from 'lucide-react';

const buyers = [
  { name: 'Rafael S.', city: 'São Paulo, SP' },
  { name: 'Ana Paula R.', city: 'Rio de Janeiro, RJ' },
  { name: 'Carlos M.', city: 'Belo Horizonte, MG' },
  { name: 'Fernanda L.', city: 'Curitiba, PR' },
  { name: 'Lucas O.', city: 'Salvador, BA' },
  { name: 'Patrícia A.', city: 'Brasília, DF' },
  { name: 'Marcos F.', city: 'Fortaleza, CE' },
  { name: 'Juliana B.', city: 'Recife, PE' },
  { name: 'Pedro C.', city: 'Porto Alegre, RS' },
  { name: 'Aline D.', city: 'Goiânia, GO' },
  { name: 'Bruno K.', city: 'Florianópolis, SC' },
  { name: 'Gabriela P.', city: 'Manaus, AM' },
  { name: 'Diego T.', city: 'Campinas, SP' },
  { name: 'Carla N.', city: 'Belém, PA' },
  { name: 'Thiago V.', city: 'Vitória, ES' },
];

function getRandomMinutes() {
  return Math.floor(Math.random() * 10) + 1;
}

export function PurchasePopup() {
  const [visible, setVisible] = useState(false);
  const [buyer, setBuyer] = useState(buyers[0]);
  const [minutes, setMinutes] = useState(3);

  useEffect(() => {
    let index = 0;

    const show = () => {
      index = (index + 1) % buyers.length;
      setBuyer(buyers[index]);
      setMinutes(getRandomMinutes());
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    };

    const interval = setInterval(show, 30000);
    const firstTimeout = setTimeout(show, 8000);

    return () => {
      clearInterval(interval);
      clearTimeout(firstTimeout);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 max-w-xs transition-all duration-500 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-8 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white border border-border rounded-xl shadow-xl p-4 flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-green-check/20 flex items-center justify-center shrink-0">
          <ShoppingBag className="h-5 w-5 text-green-check" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="font-bold text-foreground text-sm truncate">{buyer.name}</span>
            <CheckCircle className="h-3.5 w-3.5 text-green-check fill-green-check shrink-0" />
          </div>
          <p className="text-xs text-muted-foreground">
            Acabou de comprar o <span className="font-semibold text-primary">Método Renda Extra</span>
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            {buyer.city} • há {minutes} min
          </p>
        </div>
      </div>
    </div>
  );
}
