import { useState } from 'react';
import { ConvertedPage, PageBlock } from '@/types/page';
import { EditableBlock } from './EditableBlock';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Save, Plus, Layout, Type, Grid3X3, MousePointerClick } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface PageEditorProps {
  page: ConvertedPage;
  onSave: (page: ConvertedPage) => void;
  onBack: () => void;
}

const blockTypes = [
  { type: 'hero', icon: Layout, label: 'Hero' },
  { type: 'text', icon: Type, label: 'Texto' },
  { type: 'features', icon: Grid3X3, label: 'Features' },
  { type: 'cta', icon: MousePointerClick, label: 'CTA' },
] as const;

export function PageEditor({ page, onSave, onBack }: PageEditorProps) {
  const [editedPage, setEditedPage] = useState<ConvertedPage>(page);
  const [hasChanges, setHasChanges] = useState(false);

  const handleFieldChange = (field: keyof ConvertedPage, value: string) => {
    setEditedPage({ ...editedPage, [field]: value });
    setHasChanges(true);
  };

  const handleBlockUpdate = (updatedBlock: PageBlock) => {
    setEditedPage({
      ...editedPage,
      blocks: editedPage.blocks.map((b) => (b.id === updatedBlock.id ? updatedBlock : b)),
    });
    setHasChanges(true);
  };

  const handleBlockDelete = (blockId: string) => {
    setEditedPage({
      ...editedPage,
      blocks: editedPage.blocks.filter((b) => b.id !== blockId),
    });
    setHasChanges(true);
  };

  const handleAddBlock = (type: PageBlock['type']) => {
    const newBlock: PageBlock = {
      id: crypto.randomUUID(),
      type,
      content: {},
    };
    setEditedPage({
      ...editedPage,
      blocks: [...editedPage.blocks, newBlock],
    });
    setHasChanges(true);
  };

  const handleSave = () => {
    onSave(editedPage);
    setHasChanges(false);
    toast({
      title: 'Página salva!',
      description: 'Suas alterações foram salvas com sucesso.',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={onBack} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
          
          <Button
            variant="gradient"
            onClick={handleSave}
            disabled={!hasChanges}
            className="gap-2"
          >
            <Save className="h-4 w-4" />
            Salvar
          </Button>
        </div>
      </header>

      {/* Editor Content */}
      <main className="container max-w-4xl mx-auto px-4 py-8">
        {/* Page Meta */}
        <div className="space-y-4 mb-8 p-6 bg-card rounded-xl border border-border/50 shadow-soft">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                Título da Página
              </label>
              <Input
                value={editedPage.title}
                onChange={(e) => handleFieldChange('title', e.target.value)}
                placeholder="Título da página"
                className="text-lg font-semibold"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                Slug (URL)
              </label>
              <div className="flex items-center">
                <span className="text-muted-foreground mr-1">/</span>
                <Input
                  value={editedPage.slug}
                  onChange={(e) => handleFieldChange('slug', e.target.value.toLowerCase().replace(/\s+/g, '-'))}
                  placeholder="minha-pagina"
                />
              </div>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Descrição
            </label>
            <Textarea
              value={editedPage.description}
              onChange={(e) => handleFieldChange('description', e.target.value)}
              placeholder="Descrição da página"
              rows={2}
            />
          </div>
        </div>

        {/* Blocks */}
        <div className="space-y-4 mb-8">
          <h2 className="text-lg font-semibold text-foreground">Blocos da Página</h2>
          
          {editedPage.blocks.length === 0 ? (
            <div className="text-center py-12 border-2 border-dashed border-border rounded-xl">
              <p className="text-muted-foreground mb-4">Nenhum bloco adicionado ainda</p>
              <p className="text-sm text-muted-foreground">Use os botões abaixo para adicionar blocos</p>
            </div>
          ) : (
            <div className="space-y-4">
              {editedPage.blocks.map((block) => (
                <EditableBlock
                  key={block.id}
                  block={block}
                  onUpdate={handleBlockUpdate}
                  onDelete={handleBlockDelete}
                />
              ))}
            </div>
          )}
        </div>

        {/* Add Block Buttons */}
        <div className="p-6 bg-card rounded-xl border border-border/50 shadow-soft">
          <h3 className="text-sm font-medium text-muted-foreground mb-4">Adicionar Bloco</h3>
          <div className="flex flex-wrap gap-2">
            {blockTypes.map(({ type, icon: Icon, label }) => (
              <Button
                key={type}
                variant="outline"
                onClick={() => handleAddBlock(type)}
                className="gap-2"
              >
                <Icon className="h-4 w-4" />
                {label}
              </Button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
