import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';

// Mapeia status do Mercado Pago -> status interno
function mapStatus(mpStatus: string): string {
  switch (mpStatus) {
    case 'approved':
      return 'paid';
    case 'pending':
    case 'in_process':
    case 'authorized':
      return 'pending';
    case 'rejected':
    case 'cancelled':
      return 'failed';
    case 'refunded':
    case 'charged_back':
      return 'refunded';
    default:
      return mpStatus;
  }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const mpToken = Deno.env.get('MERCADO_PAGO_ACCESS_TOKEN');
    if (!mpToken) return new Response('missing token', { status: 500 });

    // Mercado Pago envia payment_id via query ou body
    const url = new URL(req.url);
    let paymentId = url.searchParams.get('data.id') ?? url.searchParams.get('id');
    let topic = url.searchParams.get('type') ?? url.searchParams.get('topic');

    if (!paymentId) {
      try {
        const body = await req.json();
        paymentId = body?.data?.id ?? body?.id ?? null;
        topic = body?.type ?? body?.topic ?? topic;
      } catch (_) {
        // ignore
      }
    }

    if (!paymentId || (topic && topic !== 'payment')) {
      // Confirma recebimento mesmo assim (evita retry infinito)
      return new Response('ok', { status: 200, headers: corsHeaders });
    }

    // Busca o pagamento na API do MP para validar
    const res = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: { Authorization: `Bearer ${mpToken}` },
    });

    if (!res.ok) {
      console.error('Failed to fetch MP payment', paymentId, await res.text());
      return new Response('mp fetch failed', { status: 200 });
    }

    const payment = await res.json();
    const orderId: string | undefined = payment.external_reference;
    const status = mapStatus(payment.status);

    if (!orderId) {
      console.warn('Payment without external_reference', paymentId);
      return new Response('ok', { status: 200 });
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    const update: Record<string, unknown> = {
      status,
      payment_id: String(payment.id),
    };
    if (status === 'paid') update.paid_at = new Date().toISOString();

    const { error } = await supabase.from('orders').update(update).eq('id', orderId);
    if (error) {
      console.error('DB update error', error);
      return new Response('db error', { status: 500 });
    }

    return new Response('ok', { status: 200, headers: corsHeaders });
  } catch (e) {
    console.error(e);
    return new Response('error', { status: 500 });
  }
});
