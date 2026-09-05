import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Copy, Check, Loader2, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useCart, CartItem } from '@/hooks/useCart';
import { toast } from '@/hooks/use-toast';

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}

interface PixData {
  order_id: string;
  access_token: string;
  qr_code: string;
  qr_code_base64: string;
  ticket_url: string;
  total: number;
}

const formatCpf = (v: string) =>
  v
    .replace(/\D/g, '')
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');

const brl = (n: number) => `R$ ${n.toFixed(2).replace('.', ',')}`;

export function PixCheckoutDialog({ open, onOpenChange }: Props) {
  const { items, total, clear } = useCart();
  const [step, setStep] = useState<'form' | 'pix' | 'paid'>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [loading, setLoading] = useState(false);
  const [pix, setPix] = useState<PixData | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) {
      setStep('form');
      setPix(null);
      setCopied(false);
    }
  }, [open]);

  // Consulta segura de status (sem expor dados do pedido no cliente)
  useEffect(() => {
    if (!pix?.order_id || step !== 'pix') return;
    let cancelled = false;
    const interval = setInterval(async () => {
      const { data, error } = await supabase.functions.invoke('check-payment-status', {
        body: { order_id: pix.order_id, access_token: pix.access_token },
      });
      if (cancelled || error || !data?.status) return;
      if (data.status === 'paid') {
        setStep('paid');
        clear();
      } else if (data.status === 'failed' || data.status === 'expired') {
        clearInterval(interval);
        toast({ title: 'Pagamento não concluído', description: 'Tente novamente.', variant: 'destructive' });
      }
    }, 5000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [pix?.order_id, pix?.access_token, step, clear]);

  async function generatePix() {
    if (!name || !email) {
      toast({ title: 'Preencha nome e e-mail', variant: 'destructive' });
      return;
    }
    const cpfDigits = cpf.replace(/\D/g, '');
    if (cpfDigits.length !== 11) {
      toast({ title: 'CPF inválido', description: 'Informe os 11 dígitos do CPF.', variant: 'destructive' });
      return;
    }
    setLoading(true);
    try {
      const payload = {
        customer: { name, email, phone, cpf: cpfDigits },
        items: items.map((i: CartItem) => ({ id: i.id, name: i.name, price: i.price, quantity: i.quantity })),
      };
      const { data, error } = await supabase.functions.invoke('create-pix-payment', { body: payload });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setPix(data as PixData);
      setStep('pix');
    } catch (e) {
      toast({ title: 'Erro ao gerar PIX', description: (e as Error).message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  }

  function copyCode() {
    if (!pix?.qr_code) return;
    navigator.clipboard.writeText(pix.qr_code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md mx-auto rounded-2xl">
        <DialogHeader>
          <DialogTitle>
            {step === 'form' && 'Finalizar pedido'}
            {step === 'pix' && 'Pague com PIX'}
            {step === 'paid' && 'Pagamento aprovado!'}
          </DialogTitle>
        </DialogHeader>

        {step === 'form' && (
          <div className="space-y-3">
            <input
              className="w-full h-11 px-3 rounded-lg bg-secondary text-sm outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="Seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="w-full h-11 px-3 rounded-lg bg-secondary text-sm outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              inputMode="numeric"
              className="w-full h-11 px-3 rounded-lg bg-secondary text-sm outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="CPF (obrigatório para o PIX)"
              value={cpf}
              onChange={(e) => setCpf(formatCpf(e.target.value))}
            />
            <input
              className="w-full h-11 px-3 rounded-lg bg-secondary text-sm outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="Telefone (opcional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className="flex justify-between pt-2 text-sm">
              <span className="text-muted-foreground">Total</span>
              <span className="font-bold">{brl(total)}</span>
            </div>
            <Button className="w-full h-12 rounded-xl font-bold" onClick={generatePix} disabled={loading}>
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Gerar QR Code PIX'}
            </Button>
          </div>
        )}

        {step === 'pix' && pix && (
          <div className="space-y-4 text-center">
            {pix.qr_code_base64 ? (
              <img
                src={`data:image/png;base64,${pix.qr_code_base64}`}
                alt="QR Code PIX"
                className="w-64 h-64 mx-auto rounded-lg border"
              />
            ) : (
              <div className="w-64 h-64 mx-auto bg-secondary rounded-lg flex items-center justify-center text-xs text-muted-foreground">
                QR Code indisponível
              </div>
            )}
            <p className="text-sm text-muted-foreground">
              Abra o app do seu banco e escaneie o QR Code, ou copie o código abaixo:
            </p>
            <div className="bg-secondary rounded-lg p-3 text-xs break-all font-mono max-h-24 overflow-y-auto text-left">
              {pix.qr_code}
            </div>
            <Button onClick={copyCode} variant="outline" className="w-full h-11 rounded-xl">
              {copied ? <><Check className="w-4 h-4 mr-2" /> Copiado!</> : <><Copy className="w-4 h-4 mr-2" /> Copiar código PIX</>}
            </Button>
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Loader2 className="w-3 h-3 animate-spin" /> Aguardando confirmação do pagamento…
            </div>
            <p className="text-sm font-bold">Total: {brl(pix.total)}</p>
          </div>
        )}

        {step === 'paid' && (
          <div className="text-center py-6 space-y-3">
            <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto" />
            <p className="text-lg font-bold">Pedido confirmado!</p>
            <p className="text-sm text-muted-foreground">Recebemos seu pagamento. Em breve você receberá seu pedido.</p>
            <Button className="w-full h-11 rounded-xl" onClick={() => onOpenChange(false)}>
              Fechar
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
