ALTER TABLE public.orders ADD COLUMN IF NOT EXISTS access_token uuid NOT NULL DEFAULT gen_random_uuid();

DROP POLICY IF EXISTS "Read order by id" ON public.orders;

REVOKE ALL ON public.orders FROM anon;
REVOKE ALL ON public.orders FROM authenticated;
GRANT ALL ON public.orders TO service_role;

ALTER PUBLICATION supabase_realtime DROP TABLE public.orders;