import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchResult {
  id: string;
  title: string;
  content: string;
  section: string;
  onClick: () => void;
}

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigate: (section: string, id?: string) => void;
}

export const SearchDialog = ({ open, onOpenChange, onNavigate }: SearchDialogProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  // Mock search data - in a real app, this would come from your content database
  const searchData = [
    {
      id: "1",
      title: "A janela e o mar",
      content: "O dia começou com uma maré discreta de ruído. O que atravessou a janela foi menos a luz do que a vontade dela de se deitar sobre a mesa.",
      section: "writing"
    },
    {
      id: "2", 
      title: "Rua sem semáforo",
      content: "Conto sobre uma rua sem semáforo onde o tempo parece suspenso.",
      section: "writing"
    },
    {
      id: "3",
      title: "Pequeno tratado sobre a espera",
      content: "Ensaio sobre a natureza da espera e do tempo suspenso.",
      section: "writing"
    },
    {
      id: "photo-1",
      title: "Retrato em Silêncio",
      content: "São Paulo, 2024 - Fotografia urbana",
      section: "photo"
    },
    {
      id: "photo-2",
      title: "Chuva sobre o Mármore",
      content: "Lisboa, 2023 - Arquitetura e natureza",
      section: "photo"
    }
  ];

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    
    if (searchQuery.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = searchData.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase())
    ).map(item => ({
      ...item,
      onClick: () => {
        onNavigate(item.section, item.id);
        onOpenChange(false);
        setQuery("");
        setResults([]);
      }
    }));

    setResults(filtered);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search size={20} />
            Buscar no portfólio
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="Digite sua busca..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full"
            autoFocus
          />
          
          {results.length > 0 && (
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {results.map((result) => (
                <Button
                  key={result.id}
                  variant="ghost"
                  className="w-full justify-start h-auto p-3 text-left"
                  onClick={result.onClick}
                >
                  <div>
                    <div className="font-medium">{result.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {result.section === "writing" ? "Literatura" : "Fotografia"} • {result.content.substring(0, 60)}...
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          )}
          
          {query && results.length === 0 && (
            <div className="text-center text-muted-foreground py-4">
              Nenhum resultado encontrado
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};