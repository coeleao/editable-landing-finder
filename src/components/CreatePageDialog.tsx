import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus } from 'lucide-react';
import { ConvertedPage } from '@/types/page';

interface CreatePageDialogProps {
  onCreatePage: (page: Omit<ConvertedPage, 'id' | 'createdAt' | 'updatedAt'>) => void;
}

export function CreatePageDialog({ onCreatePage }: CreatePageDialogProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [slug, setSlug] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    onCreatePage({
      title,
      description,
      slug: slug || title.toLowerCase().replace(/\s+/g, '-'),
      blocks: [
        {
          id: crypto.randomUUID(),
          type: 'hero',
          content: {
            title: title,
            subtitle: description,
          },
        },
      ],
    });

    setTitle('');
    setDescription('');
    setSlug('');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="gradient" size="lg" className="gap-2">
          <Plus className="h-5 w-5" />
          Nova Página
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Criar Nova Página</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Título
            </label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Minha Landing Page"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Descrição
            </label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Uma breve descrição da página"
              rows={3}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Slug (opcional)
            </label>
            <div className="flex items-center">
              <span className="text-muted-foreground mr-1">/</span>
              <Input
                value={slug}
                onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'))}
                placeholder="minha-landing-page"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit" variant="gradient">
              Criar Página
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
