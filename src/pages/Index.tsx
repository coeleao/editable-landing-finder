import { useState } from 'react';
import { usePages } from '@/hooks/usePages';
import { SearchBar } from '@/components/SearchBar';
import { PageCard } from '@/components/PageCard';
import { PageEditor } from '@/components/PageEditor';
import { CreatePageDialog } from '@/components/CreatePageDialog';
import { EmptyState } from '@/components/EmptyState';
import { ConvertedPage } from '@/types/page';
import { toast } from '@/hooks/use-toast';
import { Layers, Sparkles } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export default function Index() {
  const { pages, searchQuery, setSearchQuery, isLoading, addPage, updatePage, deletePage } = usePages();
  const [editingPage, setEditingPage] = useState<ConvertedPage | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const handleEdit = (page: ConvertedPage) => {
    setEditingPage(page);
  };

  const handleView = (page: ConvertedPage) => {
    toast({
      title: 'Visualização',
      description: `Abrindo preview de "${page.title}"`,
    });
  };

  const handleDelete = (id: string) => {
    setDeleteConfirm(id);
  };

  const confirmDelete = () => {
    if (deleteConfirm) {
      deletePage(deleteConfirm);
      toast({
        title: 'Página excluída',
        description: 'A página foi removida com sucesso.',
      });
      setDeleteConfirm(null);
    }
  };

  const handleSave = (page: ConvertedPage) => {
    updatePage(page.id, page);
    setEditingPage(null);
  };

  const handleCreatePage = (newPage: Omit<ConvertedPage, 'id' | 'createdAt' | 'updatedAt'>) => {
    const created = addPage(newPage);
    toast({
      title: 'Página criada!',
      description: `"${created.title}" foi criada com sucesso.`,
    });
    setEditingPage(created);
  };

  if (editingPage) {
    return (
      <PageEditor
        page={editingPage}
        onSave={handleSave}
        onBack={() => setEditingPage(null)}
      />
    );
  }

  return (
    <div className="min-h-screen gradient-hero">
      {/* Hero Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
        
        <div className="relative container max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="flex items-center justify-center gap-3 mb-6 animate-fade-up">
            <div className="p-3 rounded-2xl gradient-primary shadow-glow">
              <Layers className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">
              Page<span className="text-gradient">Builder</span>
            </h1>
          </div>
          
          <p className="text-center text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Crie, edite e gerencie suas landing pages convertidas em um só lugar
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <CreatePageDialog onCreatePage={handleCreatePage} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-6xl mx-auto px-4 pb-16">
        {/* Stats */}
        <div className="flex items-center gap-6 mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              {pages.length} {pages.length === 1 ? 'página encontrada' : 'páginas encontradas'}
            </span>
          </div>
        </div>

        {/* Pages Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 rounded-xl bg-card/50 animate-pulse" />
            ))}
          </div>
        ) : pages.length === 0 ? (
          searchQuery ? (
            <EmptyState
              title="Nenhum resultado encontrado"
              description={`Não encontramos páginas para "${searchQuery}". Tente outro termo.`}
            />
          ) : (
            <EmptyState
              title="Nenhuma página ainda"
              description="Crie sua primeira landing page para começar!"
            />
          )
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((page, index) => (
              <div
                key={page.id}
                className="animate-fade-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <PageCard
                  page={page}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onView={handleView}
                />
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteConfirm} onOpenChange={() => setDeleteConfirm(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir página?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta ação não pode ser desfeita. A página será permanentemente removida.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
