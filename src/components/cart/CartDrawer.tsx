import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onCheckout: () => void;
}

const brl = (n: number) => `R$ ${n.toFixed(2).replace('.', ',')}`;

export function CartDrawer({ open, onOpenChange, onCheckout }: Props) {
  const { items, setQty, remove, total } = useCart();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="max-w-md mx-auto h-[85vh] rounded-t-3xl flex flex-col p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" /> Sua sacola
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 && (
            <p className="text-center text-muted-foreground py-10 text-sm">Sua sacola está vazia.</p>
          )}
          {items.map((item) => (
            <div key={item.id} className="flex gap-3 items-center border-b pb-3">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
              <div className="flex-1">
                <p className="text-sm font-semibold leading-tight">{item.name}</p>
                <p className="text-sm text-primary font-bold mt-1">{brl(item.price)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQty(item.id, item.quantity - 1)}
                  className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center"
                  aria-label="Diminuir"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-sm font-semibold w-5 text-center">{item.quantity}</span>
                <button
                  onClick={() => setQty(item.id, item.quantity + 1)}
                  className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
                  aria-label="Aumentar"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => remove(item.id)}
                  className="ml-1 text-muted-foreground hover:text-destructive"
                  aria-label="Remover"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div className="border-t p-4 space-y-3 bg-card">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Total</span>
              <span className="font-bold text-lg text-foreground">{brl(total)}</span>
            </div>
            <Button className="w-full h-12 rounded-xl text-base font-bold" onClick={onCheckout}>
              Pagar com PIX
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
