import { useState } from 'react';
import { PageBlock } from '@/types/page';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { GripVertical, Trash2, Check, X } from 'lucide-react';

interface EditableBlockProps {
  block: PageBlock;
  onUpdate: (block: PageBlock) => void;
  onDelete: (id: string) => void;
}

export function EditableBlock({ block, onUpdate, onDelete }: EditableBlockProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(block.content);

  const handleSave = () => {
    onUpdate({ ...block, content: editContent });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditContent(block.content);
    setIsEditing(false);
  };

  const renderBlockContent = () => {
    switch (block.type) {
      case 'hero':
        return (
          <div className="text-center py-12 px-6 gradient-hero rounded-xl">
            {isEditing ? (
              <div className="space-y-4 max-w-lg mx-auto">
                <Input
                  value={editContent.title || ''}
                  onChange={(e) => setEditContent({ ...editContent, title: e.target.value })}
                  placeholder="Título principal"
                  className="text-center text-2xl font-bold"
                />
                <Textarea
                  value={editContent.subtitle || ''}
                  onChange={(e) => setEditContent({ ...editContent, subtitle: e.target.value })}
                  placeholder="Subtítulo"
                  className="text-center"
                />
              </div>
            ) : (
              <>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {block.content.title || 'Título do Hero'}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {block.content.subtitle || 'Subtítulo do hero'}
                </p>
              </>
            )}
          </div>
        );
      
      case 'text':
        return (
          <div className="py-8 px-6">
            {isEditing ? (
              <Textarea
                value={editContent.text || ''}
                onChange={(e) => setEditContent({ ...editContent, text: e.target.value })}
                placeholder="Texto do bloco"
                className="min-h-32"
              />
            ) : (
              <p className="text-foreground leading-relaxed">
                {block.content.text || 'Texto do bloco'}
              </p>
            )}
          </div>
        );
      
      case 'features':
        return (
          <div className="py-8 px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {['feature1', 'feature2', 'feature3'].map((key) => (
                <div key={key} className="p-6 rounded-xl bg-card border border-border/50 shadow-soft">
                  {isEditing ? (
                    <Input
                      value={editContent[key] || ''}
                      onChange={(e) => setEditContent({ ...editContent, [key]: e.target.value })}
                      placeholder={`Feature ${key.slice(-1)}`}
                      className="text-center"
                    />
                  ) : (
                    <p className="text-center font-medium text-foreground">
                      {block.content[key] || `Feature ${key.slice(-1)}`}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'cta':
        return (
          <div className="text-center py-12 px-6 gradient-primary rounded-xl">
            {isEditing ? (
              <div className="space-y-4 max-w-lg mx-auto">
                <Input
                  value={editContent.buttonText || ''}
                  onChange={(e) => setEditContent({ ...editContent, buttonText: e.target.value })}
                  placeholder="Texto do botão"
                  className="text-center bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
              </div>
            ) : (
              <Button variant="secondary" size="lg">
                {block.content.buttonText || 'Clique Aqui'}
              </Button>
            )}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="group relative border border-border/50 rounded-xl overflow-hidden bg-card shadow-soft hover:shadow-card transition-shadow">
      {/* Toolbar */}
      <div className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        {isEditing ? (
          <>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleSave}>
              <Check className="h-4 w-4 text-green-500" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleCancel}>
              <X className="h-4 w-4 text-destructive" />
            </Button>
          </>
        ) : (
          <>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8" 
              onClick={() => setIsEditing(true)}
            >
              <GripVertical className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-destructive hover:text-destructive"
              onClick={() => onDelete(block.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>

      {/* Block type label */}
      <div className="absolute top-2 left-2 px-2 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
        {block.type.toUpperCase()}
      </div>

      {renderBlockContent()}
    </div>
  );
}
