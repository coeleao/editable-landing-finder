import { Edit2, Trash2, ExternalLink, Calendar } from 'lucide-react';
import { ConvertedPage } from '@/types/page';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface PageCardProps {
  page: ConvertedPage;
  onEdit: (page: ConvertedPage) => void;
  onDelete: (id: string) => void;
  onView: (page: ConvertedPage) => void;
}

export function PageCard({ page, onEdit, onDelete, onView }: PageCardProps) {
  return (
    <Card className="group gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg text-foreground truncate group-hover:text-primary transition-colors">
              {page.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">/{page.slug}</p>
          </div>
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-primary"
              onClick={() => onView(page)}
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pb-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {page.description}
        </p>
        
        <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          <span>
            Atualizado {formatDistanceToNow(page.updatedAt, { addSuffix: true, locale: ptBR })}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={() => onEdit(page)}
        >
          <Edit2 className="h-4 w-4 mr-2" />
          Editar
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-destructive hover:text-destructive hover:bg-destructive/10"
          onClick={() => onDelete(page.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
