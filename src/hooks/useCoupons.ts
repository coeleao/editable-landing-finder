import { useCallback, useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Coupon {
  id: string;
  code: string;
  description: string | null;
  discount_type: string;
  discount_value: number;
  min_order: number;
  valid_until: string | null;
  quantity: number;
  used_count: number;
  active: boolean;
}

export type CouponInput = Omit<Coupon, 'id' | 'used_count'>;

export function isCouponAvailable(c: Coupon) {
  if (!c.active) return false;
  if (c.valid_until && new Date(c.valid_until) < new Date()) return false;
  if (c.quantity > 0 && c.used_count >= c.quantity) return false;
  return true;
}

export function couponLabel(c: Coupon) {
  if (c.discount_type === 'free_shipping') return 'FRETE GRÁTIS';
  if (c.discount_type === 'percent') return `${Number(c.discount_value)}% OFF`;
  return `R$ ${Number(c.discount_value).toFixed(2).replace('.', ',')} OFF`;
}

export function useCoupons(onlyAvailable = false) {
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase.from('coupons').select('*').order('created_at', { ascending: false });
    const list = (data ?? []) as Coupon[];
    setCoupons(onlyAvailable ? list.filter(isCouponAvailable) : list);
    setLoading(false);
  }, [onlyAvailable]);

  useEffect(() => {
    load();
  }, [load]);

  const create = async (input: CouponInput) => {
    const { error } = await supabase.from('coupons').insert(input);
    if (!error) await load();
    return error;
  };

  const update = async (id: string, patch: Partial<Coupon>) => {
    const { error } = await supabase.from('coupons').update(patch).eq('id', id);
    if (!error) await load();
    return error;
  };

  const remove = async (id: string) => {
    const { error } = await supabase.from('coupons').delete().eq('id', id);
    if (!error) await load();
    return error;
  };

  return { coupons, loading, reload: load, create, update, remove };
}
