import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  try {
    const { order_id, access_token } = (await req.json()) as {
      order_id?: string;
      access_token?: string;
    };

    if (!order_id || !access_token || !UUID_RE.test(order_id) || !UUID_RE.test(access_token)) {
      return json({ error: 'Requisição inválida' }, 400);
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    const { data, error } = await supabase
      .from('orders')
      .select('status')
      .eq('id', order_id)
      .eq('access_token', access_token)
      .maybeSingle();

    if (error) {
      console.error('DB error', error);
      return json({ error: 'Erro ao consultar pedido' }, 500);
    }
    if (!data) return json({ error: 'Pedido não encontrado' }, 404);

    return json({ status: data.status });
  } catch (e) {
    console.error(e);
    return json({ error: 'Erro inesperado' }, 500);
  }
});
