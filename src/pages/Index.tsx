import { useState, useRef, useMemo } from 'react';
import { Star, Clock, MapPin, Search, ChevronLeft, Heart, ShoppingBag, Tag, Truck } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { PixCheckoutDialog } from '@/components/cart/PixCheckoutDialog';

import bannerImg from '@/assets/restaurant-banner.jpg';
import logoImg from '@/assets/restaurant-logo.png';
import burgerClassic from '@/assets/menu/burger-classic.jpg';
import burgerChicken from '@/assets/menu/burger-chicken.jpg';
import burgerBacon from '@/assets/menu/burger-bacon.jpg';
import friesImg from '@/assets/menu/fries.jpg';
import onionRingsImg from '@/assets/menu/onion-rings.jpg';
import milkshakeImg from '@/assets/menu/milkshake.jpg';
import sodaImg from '@/assets/menu/soda.jpg';

const categories = [
  { id: 'destaques', label: '⭐ Destaques' },
  { id: 'burgers', label: '🍔 Burgers' },
  { id: 'acompanhamentos', label: '🍟 Acompanhamentos' },
  { id: 'bebidas', label: '🥤 Bebidas' },
  { id: 'combos', label: '🎯 Combos' },
];

type BadgeType = 'MAIS VENDIDO' | 'OFERTA DO DIA' | 'ÚLTIMAS UNIDADES' | 'Novo' | 'Mais Pedido' | 'Economia';

const menuItems = [
  {
    id: 1, category: 'destaques', name: 'Smash Burger Duplo', description: 'Dois smash de carne 90g, cheddar, bacon crocante, picles e molho especial no brioche.',
    price: 18.90, originalPrice: 32.90, image: burgerClassic, badge: 'MAIS VENDIDO' as BadgeType,
  },
  {
    id: 2, category: 'destaques', name: 'Combo Família', description: '4 Smash Burgers + 2 Batatas Grandes + 4 Refrigerantes.',
    price: 45.90, originalPrice: 89.90, image: burgerBacon, badge: 'OFERTA DO DIA' as BadgeType,
  },
  {
    id: 3, category: 'burgers', name: 'Classic Smash', description: 'Smash 120g, queijo americano, alface, tomate e maionese da casa.',
    price: 14.90, originalPrice: 24.90, image: burgerClassic, badge: 'ÚLTIMAS UNIDADES' as BadgeType,
  },
  {
    id: 4, category: 'burgers', name: 'Chicken Crispy', description: 'Frango empanado crocante, coleslaw, picles e molho ranch.',
    price: 19.90, originalPrice: 28.90, image: burgerChicken, badge: 'MAIS VENDIDO' as BadgeType,
  },
  {
    id: 5, category: 'burgers', name: 'Bacon BBQ', description: 'Triplo smash, bacon, cebola caramelizada, cheddar e molho BBQ.',
    price: 24.90, originalPrice: 36.90, image: burgerBacon, badge: 'Novo' as BadgeType,
  },
  {
    id: 6, category: 'acompanhamentos', name: 'Batata Frita', description: 'Porção generosa de batatas fritas crocantes com ketchup.',
    price: 9.90, originalPrice: 14.90, image: friesImg, badge: 'OFERTA DO DIA' as BadgeType,
  },
  {
    id: 7, category: 'acompanhamentos', name: 'Onion Rings', description: 'Anéis de cebola empanados e crocantes.',
    price: 11.90, originalPrice: 16.90, image: onionRingsImg, badge: 'MAIS VENDIDO' as BadgeType,
  },
  {
    id: 8, category: 'bebidas', name: 'Milkshake Chocolate', description: 'Milkshake cremoso de chocolate com chantilly.',
    price: 12.90, originalPrice: 18.90, image: milkshakeImg,
  },
  {
    id: 9, category: 'bebidas', name: 'Refrigerante 500ml', description: 'Coca-Cola, Guaraná ou Fanta.',
    price: 6.90, originalPrice: 8.90, image: sodaImg, badge: 'ÚLTIMAS UNIDADES' as BadgeType,
  },
  {
    id: 10, category: 'combos', name: 'Combo Classic', description: 'Classic Smash + Batata Média + Refri 500ml.',
    price: 24.90, originalPrice: 42.70, image: burgerClassic, badge: 'OFERTA DO DIA' as BadgeType,
  },
  {
    id: 11, category: 'combos', name: 'Combo Bacon BBQ', description: 'Bacon BBQ + Onion Rings + Milkshake.',
    price: 35.90, originalPrice: 62.70, image: burgerBacon, badge: 'MAIS VENDIDO' as BadgeType,
  },
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState('destaques');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const { count, total, add } = useCart();
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const statusText = useMemo(() => {
    const hour = new Date().getHours();
    const isOpen = hour >= 10 && hour < 23;
    return isOpen ? '🟢 Aberto agora • Entrega em 30-45 min' : '🔴 Fechado • Abre amanhã às 10h';
  }, []);

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const filteredItems = searchTerm
    ? menuItems.filter(i => i.name.toLowerCase().includes(searchTerm.toLowerCase()) || i.description.toLowerCase().includes(searchTerm.toLowerCase()))
    : null;

  const groupedCategories = categories.map(cat => ({
    ...cat,
    items: menuItems.filter(i => i.category === cat.id),
  }));

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto relative">
      {/* Promo banner */}
      <div className="bg-accent text-accent-foreground px-4 py-2.5 text-center text-xs font-bold flex items-center justify-center gap-2">
        <Tag className="w-3.5 h-3.5" />
        <span>Cupom de Primeiro Pedido: FRETE GRÁTIS a partir de R$ 30</span>
      </div>

      {/* Banner */}
      <div className="relative h-48">
        <img src={bannerImg} alt="Banner" className="w-full h-full object-cover" width={1200} height={512} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <button className="w-9 h-9 bg-white/95 rounded-full flex items-center justify-center shadow">
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <div className="flex gap-2">
            <button onClick={() => setSearchOpen(!searchOpen)} className="w-9 h-9 bg-white/95 rounded-full flex items-center justify-center shadow">
              <Search className="w-5 h-5 text-foreground" />
            </button>
            <button className="w-9 h-9 bg-white/95 rounded-full flex items-center justify-center shadow">
              <Heart className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="bg-card rounded-t-3xl -mt-8 relative z-10 px-4 pt-4 pb-3 shadow-lg">
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="Logo" className="w-16 h-16 rounded-full border-4 border-card shadow-lg object-cover" width={512} height={512} />
          <div className="flex-1">
            <h1 className="text-lg font-extrabold text-foreground leading-tight">Smash & Co. Burger</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="font-bold text-foreground">4.8</span>
              <span className="text-xs">• Hamburgueria</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 30-45 min</span>
          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> 2.3 km</span>
          <span className="ml-auto text-green-600 font-bold flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
            <Truck className="w-3.5 h-3.5" />
            Grátis
          </span>
        </div>
        <div className="mt-3 text-xs font-semibold text-green-600 bg-green-50 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full">
          {statusText}
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="bg-card px-4 pb-3 border-b border-border">
          <input
            type="text"
            placeholder="Buscar no cardápio..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            autoFocus
            className="w-full h-11 bg-secondary rounded-xl px-4 text-sm placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
      )}

      {/* Category Tabs */}
      <div className="bg-card sticky top-0 z-20 border-b border-border">
        <div className="flex gap-1 px-3 py-2 overflow-x-auto hide-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-secondary text-muted-foreground hover:bg-muted'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Content */}
      <div className="px-3 pb-28 pt-3">
        {filteredItems ? (
          <div className="space-y-4">
            {filteredItems.length === 0 && (
              <p className="text-center text-muted-foreground py-10 text-sm">Nenhum item encontrado.</p>
            )}
            {filteredItems.map(item => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          groupedCategories.map(cat => (
            <div key={cat.id} ref={el => { sectionRefs.current[cat.id] = el; }} className="mb-6">
              <h2 className="text-base font-extrabold text-foreground mb-3 pt-2">{cat.label}</h2>
              <div className="space-y-4">
                {cat.items.map(item => (
                  <MenuItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Floating cart bar */}
      {count > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-30 pointer-events-none">
          <div className="max-w-md mx-auto p-3 pointer-events-auto">
            <button
              onClick={() => setCartOpen(true)}
              className="w-full h-14 bg-primary text-primary-foreground rounded-2xl shadow-2xl flex items-center justify-between px-5 font-bold hover:brightness-110 transition"
            >
              <span className="flex items-center gap-2">
                <span className="relative">
                  <ShoppingBag className="w-5 h-5" />
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {count}
                  </span>
                </span>
                Ver sacola
              </span>
              <span>R$ {total.toFixed(2).replace('.', ',')}</span>
            </button>
          </div>
        </div>
      )}

      <CartDrawer
        open={cartOpen}
        onOpenChange={setCartOpen}
        onCheckout={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
      />
      <PixCheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
    </div>
  );

  function MenuItem({ item }: { item: typeof menuItems[0] }) {
    return (
      <div className="bg-card rounded-2xl overflow-hidden flex shadow-md border border-border hover:shadow-lg transition-shadow">
        <div className="flex-1 p-3.5 flex flex-col justify-between">
          <div>
            {item.badge && (
              <span className={`inline-block text-[10px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-full mb-1.5 ${getBadgeStyle(item.badge)}`}>
                {item.badge}
              </span>
            )}
            <h3 className="font-bold text-sm text-foreground leading-tight">{item.name}</h3>
            <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">{item.description}</p>
          </div>
          <div className="flex items-end gap-2 mt-3">
            <div className="flex flex-col">
              {item.originalPrice && (
                <span className="text-xs text-destructive line-through font-medium">
                  R$ {item.originalPrice.toFixed(2).replace('.', ',')}
                </span>
              )}
              <span className="text-base font-extrabold text-primary">
                R$ {item.price.toFixed(2).replace('.', ',')}
              </span>
            </div>
          </div>
        </div>
        <div className="w-32 h-32 relative flex-shrink-0">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" width={512} height={512} />
          <button
            onClick={() => add({ id: item.id, name: item.name, price: item.price, image: item.image })}
            className="absolute bottom-2 right-2 w-9 h-9 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-extrabold shadow-lg ring-2 ring-white hover:scale-110 active:scale-95 transition-transform"
            aria-label={`Adicionar ${item.name}`}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

function getBadgeStyle(badge: BadgeType) {
  switch (badge) {
    case 'MAIS VENDIDO':
      return 'bg-primary/10 text-primary';
    case 'OFERTA DO DIA':
      return 'bg-accent/15 text-amber-700';
    case 'ÚLTIMAS UNIDADES':
      return 'bg-destructive/10 text-destructive';
    case 'Novo':
      return 'bg-green-100 text-green-700';
    case 'Economia':
      return 'bg-blue-100 text-blue-700';
    default:
      return 'bg-accent/10 text-accent';
  }
}
