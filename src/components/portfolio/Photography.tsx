import React, { useState } from "react";
import { FocusCards } from "@/components/ui/focus-cards";
import { X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Photography = () => {
  const [selectedImage, setSelectedImage] = useState<{title: string; src: string; description: string} | null>(null);
  const [likes, setLikes] = useState<Record<string, number>>({
    "Simetria Sagrada": 42,
    "Caminhos Serpenteantes": 28,
    "Movimento Suspenso": 35,
    "Retrato Urbano": 51,
    "Perspectiva Infinita": 39,
    "Nostalgia Cromada": 44,
    "Reflexos do Tempo": 67,
    "Catedral Moderna": 53,
    "Voo de Cabos": 41,
    "Memórias Líquidas": 38,
    "Círculo da Vida": 49,
    "Natureza Flutuante": 31,
    "Juventude Urbana": 45,
    "Arquitetura Orgânica": 56,
    "Tradição do Pão": 29,
    "Cozinha Sagrada": 37
  });

  const cards = [
    {
      title: "Simetria Sagrada",
      src: "/lovable-uploads/ed194791-0563-4d55-83ff-4803bebf756a.png",
      description: "A harmonia encontrada nas formas geométricas urbanas, onde cada linha conta uma história de equilíbrio perfeito."
    },
    {
      title: "Caminhos Serpenteantes", 
      src: "/lovable-uploads/d792fed9-cddd-4420-882d-dc8ebeb6ac80.png",
      description: "As curvas sinuosas que nos levam a destinos desconhecidos, capturando a essência do movimento e da direção."
    },
    {
      title: "Movimento Suspenso",
      src: "/lovable-uploads/d9836227-7562-49de-8d74-47d47ec3887c.png",
      description: "O instante congelado no tempo, onde a ação se transforma em arte e a velocidade encontra a eternidade."
    },
    {
      title: "Retrato Urbano",
      src: "/lovable-uploads/18ebb55b-91bf-4284-9904-d82216f15796.png",
      description: "A alma da cidade revelada através de seus detalhes mais íntimos, onde cada textura narra uma história urbana."
    },
    {
      title: "Perspectiva Infinita",
      src: "/lovable-uploads/d0263766-1eab-44a0-aea5-5aeaacaffa15.png",
      description: "O horizonte que se estende além do visível, convidando o olhar a explorar as profundezas da imaginação."
    },
    {
      title: "Nostalgia Cromada",
      src: "/lovable-uploads/fcddc391-ede7-42c5-ba0b-3aae2fa77672.png",
      description: "Reflexos metálicos que espelham memórias do passado, criando uma ponte temporal através da luz e da sombra."
    },
    {
      title: "Reflexos do Tempo",
      src: "/lovable-uploads/01a0f87d-2e08-4b71-a477-ed81ebed19b8.png",
      description: "Silhuetas perdidas em reflexos de luz e água, onde o tempo se estende em ecos visuais infinitos."
    },
    {
      title: "Catedral Moderna",
      src: "/lovable-uploads/7cd4e275-28dc-4a08-9b21-bb79e370cb90.png",
      description: "A arquitetura contemporânea elevada ao sagrado, onde concreto e ferro encontram a transcendência."
    },
    {
      title: "Voo de Cabos",
      src: "/lovable-uploads/32fa3b12-d862-416a-9f1b-61e750327738.png",
      description: "Linhas suspensas no ar cortam o céu, conectando pontos distantes em uma dança aérea silenciosa."
    },
    {
      title: "Memórias Líquidas",
      src: "/lovable-uploads/c1cb81d0-25f8-49d0-abfe-daeaefe0de17.png",
      description: "Garrafas antigas guardam histórias em suas formas, testemunhas silenciosas de tempos passados."
    },
    {
      title: "Círculo da Vida",
      src: "/lovable-uploads/b470ef91-3a97-40d0-919f-9bd5204606ee.png",
      description: "Esculturas humanas em movimento perpetuo, celebrando a energia e a alegria da existência urbana."
    },
    {
      title: "Natureza Flutuante",
      src: "/lovable-uploads/0e78f6f7-336f-4f28-ba20-d3713421d9f9.png",
      description: "Estruturas tradicionais emergem das águas, onde cultura e natureza se encontram em harmonia ancestral."
    },
    {
      title: "Juventude Urbana",
      src: "/lovable-uploads/bc1535d6-c89a-4d97-a793-0e5240b50e01.png",
      description: "O brilho da infância capturado em gestos espontâneos, revelando a pureza em meio ao caos urbano."
    },
    {
      title: "Arquitetura Orgânica",
      src: "/lovable-uploads/b7ce6046-54ef-4231-b6b9-2ac33a8aaeca.png",
      description: "Formas curvilíneas e natureza se entrelaçam, criando um diálogo visual entre crescimento e construção."
    },
    {
      title: "Tradição do Pão",
      src: "/lovable-uploads/76731e5d-ff55-4dab-88bd-9532ac2ce043.png",
      description: "As mãos experientes moldam a massa, perpetuando tradições que alimentam tanto o corpo quanto a alma."
    },
    {
      title: "Cozinha Sagrada",
      src: "/lovable-uploads/170b987d-aad7-4a7e-9dd5-40e131efa763.png",
      description: "O ritual da preparação dos alimentos, onde cada gesto carrega o peso da tradição e do cuidado."
    }
  ];

  const handleImageClick = (card: typeof cards[0]) => {
    setSelectedImage({
      title: card.title,
      src: card.src,
      description: card.description
    });
  };

  const handleLike = (title: string) => {
    setLikes(prev => ({
      ...prev,
      [title]: (prev[title] || 0) + 1
    }));
  };

  return (
    <>
      <section className="no-select">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-bold" style={{ fontFamily: 'Didot, serif' }}>Fotografia</h1>
            <p className="mt-2 text-muted-foreground">
              Uma coleção de momentos capturados em preto e branco
            </p>
          </header>
          
          <FocusCards cards={cards} onImageClick={handleImageClick} />
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full w-full">
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:bg-white/10 z-10"
            >
              <X className="h-6 w-6" />
            </Button>
            
            {/* Two-column layout */}
            <div className="flex flex-col lg:flex-row bg-white rounded-xl overflow-hidden max-h-[85vh]">
              {/* Left column - Image (70%) */}
              <div className="lg:w-[70%] flex items-center justify-center bg-gray-50 p-4">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
              
              {/* Right column - Description (30%) */}
              <div className="lg:w-[30%] p-6 flex flex-col justify-start overflow-y-auto">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {selectedImage.title}
                </h3>
                
                <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow">
                  {selectedImage.description}
                </p>
                
                {/* Like button and counter */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLike(selectedImage.title)}
                    className="text-gray-700 hover:bg-gray-100 hover:text-red-500 transition-colors"
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Gostei
                  </Button>
                  <span className="text-gray-500 text-sm font-medium">
                    {likes[selectedImage.title] || 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};