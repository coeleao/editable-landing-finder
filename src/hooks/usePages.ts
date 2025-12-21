import { useState, useEffect, useMemo } from 'react';
import { ConvertedPage } from '@/types/page';

const STORAGE_KEY = 'converted-pages';

const defaultPages: ConvertedPage[] = [
  {
    id: '1',
    title: 'Página de Vendas Premium',
    description: 'Landing page otimizada para conversão com foco em produtos digitais',
    slug: 'vendas-premium',
    blocks: [
      {
        id: 'hero-1',
        type: 'hero',
        content: {
          title: 'Transforme Visitantes em Clientes',
          subtitle: 'A solução completa para aumentar suas vendas online',
        },
      },
      {
        id: 'features-1',
        type: 'features',
        content: {
          feature1: 'Alta Conversão',
          feature2: 'Design Responsivo',
          feature3: 'SEO Otimizado',
        },
      },
    ],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-20'),
  },
  {
    id: '2',
    title: 'Captura de Leads',
    description: 'Página focada em captura de emails e geração de leads qualificados',
    slug: 'captura-leads',
    blocks: [
      {
        id: 'hero-2',
        type: 'hero',
        content: {
          title: 'Receba Conteúdo Exclusivo',
          subtitle: 'Cadastre-se e tenha acesso a materiais gratuitos',
        },
      },
    ],
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-02-12'),
  },
  {
    id: '3',
    title: 'Evento Online',
    description: 'Landing page para webinars e eventos ao vivo',
    slug: 'evento-online',
    blocks: [
      {
        id: 'hero-3',
        type: 'hero',
        content: {
          title: 'Webinar Gratuito',
          subtitle: 'Aprenda as estratégias que vão revolucionar seu negócio',
        },
      },
    ],
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-03-05'),
  },
];

export function usePages() {
  const [pages, setPages] = useState<ConvertedPage[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      setPages(parsed.map((p: ConvertedPage) => ({
        ...p,
        createdAt: new Date(p.createdAt),
        updatedAt: new Date(p.updatedAt),
      })));
    } else {
      setPages(defaultPages);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPages));
    }
    setIsLoading(false);
  }, []);

  const filteredPages = useMemo(() => {
    if (!searchQuery.trim()) return pages;
    
    const query = searchQuery.toLowerCase();
    return pages.filter(
      (page) =>
        page.title.toLowerCase().includes(query) ||
        page.description.toLowerCase().includes(query) ||
        page.slug.toLowerCase().includes(query)
    );
  }, [pages, searchQuery]);

  const addPage = (page: Omit<ConvertedPage, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newPage: ConvertedPage = {
      ...page,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const updated = [...pages, newPage];
    setPages(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return newPage;
  };

  const updatePage = (id: string, updates: Partial<ConvertedPage>) => {
    const updated = pages.map((p) =>
      p.id === id ? { ...p, ...updates, updatedAt: new Date() } : p
    );
    setPages(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const deletePage = (id: string) => {
    const updated = pages.filter((p) => p.id !== id);
    setPages(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return {
    pages: filteredPages,
    allPages: pages,
    searchQuery,
    setSearchQuery,
    isLoading,
    addPage,
    updatePage,
    deletePage,
  };
}
