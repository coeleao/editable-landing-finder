CREATE TABLE public.coupons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text NOT NULL UNIQUE,
  description text,
  discount_type text NOT NULL DEFAULT 'percent',
  discount_value numeric NOT NULL DEFAULT 0,
  min_order numeric NOT NULL DEFAULT 0,
  valid_until timestamptz,
  quantity integer NOT NULL DEFAULT 0,
  used_count integer NOT NULL DEFAULT 0,
  active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.coupons TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.coupons TO authenticated;
GRANT ALL ON public.coupons TO service_role;

ALTER TABLE public.coupons ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read coupons" ON public.coupons FOR SELECT USING (true);
CREATE POLICY "Anyone can create coupons" ON public.coupons FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update coupons" ON public.coupons FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Anyone can delete coupons" ON public.coupons FOR DELETE USING (true);

CREATE TRIGGER update_coupons_updated_at BEFORE UPDATE ON public.coupons
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();