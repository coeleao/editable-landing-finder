import { useState, useRef } from 'react';
import { Star, Clock, MapPin, Search, ChevronLeft, Heart } from 'lucide-react';

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

const menuItems = [
  {
    id: 1, category: 'destaques', name: 'Smash Burger Duplo', description: 'Dois smash de carne 90g, cheddar, bacon crocante, picles e molho especial no brioche.',
    price: 32.90, originalPrice: 39.90, image: burgerClassic, badge: 'Mais Pedido',
  },
  {
    id: 2, category: 'destaques', name: 'Combo Família', description: '4 Smash Burgers + 2 Batatas Grandes + 4 Refrigerantes.',
    price: 99.90, originalPrice: 139.90, image: burgerBacon, badge: 'Economia',
  },
  {
    id: 3, category: 'burgers', name: 'Classic Smash', description: 'Smash 120g, queijo americano, alface, tomate e maionese da casa.',
    price: 24.90, image: burgerClassic,
  },
  {
    id: 4, category: 'burgers', name: 'Chicken Crispy', description: 'Frango empanado crocante, coleslaw, picles e molho ranch.',
    price: 28.90, image: burgerChicken,
  },
  {
    id: 5, category: 'burgers', name: 'Bacon BBQ', description: 'Triplo smash, bacon, cebola caramelizada, cheddar e molho BBQ.',
    price: 36.90, image: burgerBacon, badge: 'Novo',
  },
  {
    id: 6, category: 'acompanhamentos', name: 'Batata Frita', description: 'Porção generosa de batatas fritas crocantes com ketchup.',
    price: 14.90, image: friesImg,
  },
  {
    id: 7, category: 'acompanhamentos', name: 'Onion Rings', description: 'Anéis de cebola empanados e crocantes.',
    price: 16.90, image: onionRingsImg,
  },
  {
    id: 8, category: 'bebidas', name: 'Milkshake Chocolate', description: 'Milkshake cremoso de chocolate com chantilly.',
    price: 18.90, image: milkshakeImg,
  },
  {
    id: 9, category: 'bebidas', name: 'Refrigerante 500ml', description: 'Coca-Cola, Guaraná ou Fanta.',
    price: 8.90, image: sodaImg,
  },
  {
    id: 10, category: 'combos', name: 'Combo Classic', description: 'Classic Smash + Batata Média + Refri 500ml.',
    price: 39.90, originalPrice: 48.70, image: burgerClassic, badge: 'Economia',
  },
  {
    id: 11, category: 'combos', name: 'Combo Bacon BBQ', description: 'Bacon BBQ + Onion Rings + Milkshake.',
    price: 59.90, originalPrice: 72.70, image: burgerBacon, badge: 'Mais Pedido',
  },
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState('destaques');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

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
      {/* Banner */}
      <div className="relative h-48">
        <img src={bannerImg} alt="Banner" className="w-full h-full object-cover" width={1200} height={512} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <button className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow">
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <div className="flex gap-2">
            <button onClick={() => setSearchOpen(!searchOpen)} className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow">
              <Search className="w-5 h-5 text-foreground" />
            </button>
            <button className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow">
              <Heart className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="bg-card rounded-t-3xl -mt-6 relative z-10 px-4 pt-4 pb-3">
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="Logo" className="w-14 h-14 rounded-full border-2 border-card shadow-md object-cover" width={512} height={512} />
          <div className="flex-1">
            <h1 className="text-lg font-bold text-foreground">Smash & Co. Burger</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="font-semibold text-foreground">4.8</span>
              <span>• Hamburgueria</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 30-45 min</span>
          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> 2.3 km</span>
          <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full font-semibold">Aberto</span>
          <span className="ml-auto text-primary font-semibold">Entrega grátis</span>
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
            className="w-full h-10 bg-secondary rounded-xl px-4 text-sm placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30"
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
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
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
      <div className="px-4 pb-24 pt-2">
        {filteredItems ? (
          <div className="space-y-3">
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
              <h2 className="text-base font-bold text-foreground mb-3 pt-2">{cat.label}</h2>
              <div className="space-y-3">
                {cat.items.map(item => (
                  <MenuItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function MenuItem({ item }: { item: typeof menuItems[0] }) {
  return (
    <div className="bg-card rounded-2xl overflow-hidden flex shadow-sm border border-border hover:shadow-md transition-shadow">
      <div className="flex-1 p-3 flex flex-col justify-between">
        <div>
          {item.badge && (
            <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-1 ${
              item.badge === 'Mais Pedido' ? 'bg-primary/10 text-primary' :
              item.badge === 'Novo' ? 'bg-green-100 text-green-700' :
              'bg-accent/10 text-accent'
            }`}>
              {item.badge}
            </span>
          )}
          <h3 className="font-semibold text-sm text-foreground leading-tight">{item.name}</h3>
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{item.description}</p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm font-bold text-primary">
            R$ {item.price.toFixed(2).replace('.', ',')}
          </span>
          {item.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              R$ {item.originalPrice.toFixed(2).replace('.', ',')}
            </span>
          )}
        </div>
      </div>
      <div className="w-28 h-28 relative flex-shrink-0">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" width={512} height={512} />
        <button className="absolute bottom-2 right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold shadow-lg hover:scale-110 transition-transform">
          +
        </button>
      </div>
    </div>
  );
}
