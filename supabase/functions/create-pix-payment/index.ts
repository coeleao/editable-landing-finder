import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';

interface CartItem {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
}

interface Payload {
  items: CartItem[];
  customer: {
    name: string;
    email: string;
    phone?: string;
  };
}

function badRequest(msg: string) {
  return new Response(JSON.stringify({ error: msg }), {
    status: 400,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const body = (await req.json()) as Payload;
    if (!body?.items?.length) return badRequest('Carrinho vazio');
    if (!body.customer?.name || !body.customer?.email) return badRequest('Dados do cliente obrigatórios');

    const total = body.items.reduce((sum, i) => sum + Number(i.price) * Number(i.quantity), 0);
    if (total <= 0) return badRequest('Valor inválido');

    const mpToken = Deno.env.get('MERCADO_PAGO_ACCESS_TOKEN');
    if (!mpToken) return badRequest('MERCADO_PAGO_ACCESS_TOKEN não configurado');

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    // 1) Cria pedido pendente
    const { data: order, error: orderErr } = await supabase
      .from('orders')
      .insert({
        customer_name: body.customer.name,
        customer_email: body.customer.email,
        customer_phone: body.customer.phone ?? null,
        items: body.items,
        total_amount: total.toFixed(2),
        status: 'pending',
      })
      .select()
      .single();

    if (orderErr || !order) {
      console.error('DB insert error', orderErr);
      return new Response(JSON.stringify({ error: 'Erro ao criar pedido' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // 2) Cria pagamento PIX no Mercado Pago
    const [firstName, ...rest] = body.customer.name.trim().split(' ');
    const lastName = rest.join(' ') || firstName;

    const mpRes = await fetch('https://api.mercadopago.com/v1/payments', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${mpToken}`,
        'Content-Type': 'application/json',
        'X-Idempotency-Key': order.id,
      },
      body: JSON.stringify({
        transaction_amount: Number(total.toFixed(2)),
        description: `Pedido ${order.id.slice(0, 8)} - Smash & Co.`,
        payment_method_id: 'pix',
        external_reference: order.id,
        notification_url: `${Deno.env.get('SUPABASE_URL')}/functions/v1/mercadopago-webhook`,
        payer: {
          email: body.customer.email,
          first_name: firstName,
          last_name: lastName,
        },
      }),
    });

    const mpData = await mpRes.json();
    if (!mpRes.ok) {
      console.error('MP error', mpData);
      await supabase.from('orders').update({ status: 'failed' }).eq('id', order.id);
      return new Response(JSON.stringify({ error: mpData?.message ?? 'Erro no Mercado Pago', details: mpData }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const txn = mpData.point_of_interaction?.transaction_data ?? {};
    const qrCode: string = txn.qr_code ?? '';
    const qrBase64: string = txn.qr_code_base64 ?? '';
    const ticketUrl: string = txn.ticket_url ?? '';
    const expiresAt: string | null = mpData.date_of_expiration ?? null;

    // 3) Atualiza pedido com dados do PIX
    await supabase
      .from('orders')
      .update({
        payment_id: String(mpData.id),
        qr_code: qrCode,
        qr_code_base64: qrBase64,
        ticket_url: ticketUrl,
        expires_at: expiresAt,
      })
      .eq('id', order.id);

    return new Response(
      JSON.stringify({
        order_id: order.id,
        payment_id: mpData.id,
        qr_code: qrCode,
        qr_code_base64: qrBase64,
        ticket_url: ticketUrl,
        expires_at: expiresAt,
        total,
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
