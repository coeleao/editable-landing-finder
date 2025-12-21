import { FileX2 } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  description: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center animate-fade-up">
      <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 shadow-glow">
        <FileX2 className="h-8 w-8 text-primary-foreground" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-sm">{description}</p>
    </div>
  );
}
