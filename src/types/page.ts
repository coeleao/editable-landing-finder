export interface PageBlock {
  id: string;
  type: 'hero' | 'text' | 'features' | 'cta';
  content: Record<string, string>;
}

export interface ConvertedPage {
  id: string;
  title: string;
  description: string;
  slug: string;
  blocks: PageBlock[];
  createdAt: Date;
  updatedAt: Date;
  thumbnail?: string;
}
