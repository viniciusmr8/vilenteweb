import { motion } from "framer-motion";
import { LiteraryCard } from "@/components/ui/literary-card";
import { LiteraturaSection } from "@/components/portfolio/LiteraturaSection";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface WritingPost {
  id: string;
  title: string;
  type: string;
  reading: string;
  image?: string;
  excerpt: string;
}

interface Category {
  id: string;
  title: string;
  description: string;
  posts: WritingPost[];
}

const categories: Category[] = [
  {
    id: "contos",
    title: "Meus contos",
    description: "Narrativas curtas sobre memória, espaço urbano e o silêncio entre as coisas.",
    posts: [
      {
        id: "cavalo-de-pijamas",
        title: "Cavalo de Pijamas",
        type: "Conto",
        reading: "12 min",
        image: "/lovable-uploads/circus-image.png",
        excerpt: "Podia-se ouvir a música de felicidade, a agitação dos animais ansiosos para o início do grande espetáculo, o aroma de criança sorrindo, o gosto de pipoca voando no ar, o tumulto da multidão se aproximando e várias outras coisas imperceptíveis aos outros, mas sensíveis àqueles olhos de dragão. Era assim que Raul percebia tudo. E foi assim a chegada do circo na cidade."
      },
      {
        id: "ultima-memoria",
        title: "A última memória antes do fim",
        type: "Conto",
        reading: "4 min",
        image: "/lovable-uploads/0bb0ed33-6470-43b8-9d76-534feea7093e.png",
        excerpt: "Eram os minutos finais de toda existência. Sentado em um bloco de pedra, abrigado pela sombra reconfortante de um jacarandá florido, Luiz teve pouco tempo para refletir sobre a efemeridade da vida."
      },
      {
        id: "tempo-suficiente",
        title: "Tempo Suficiente",
        type: "Conto",
        reading: "15 min",
        image: "/lovable-uploads/5f7df7ca-80f7-420f-b883-66e3bbae2e3e.png",
        excerpt: "Imagine ter tempo mais que suficiente para observar o céu e fazer conclusões astronômicas. Esse pensamento intrusivo ocupou a mente de Almir enquanto ele, num movimento automático, percorria com o dedo indicador os vídeos do TikTok."
      }
    ]
  },
  {
    id: "resenhas",
    title: "Resenha crítica",
    description: "Leituras atentas sobre romances, ensaios e poesia que marcaram descobertas.",
    posts: [
      {
        id: "revolucao-dos-bichos",
        title: "A Revolução dos Bichos",
        type: "Resenha",
        reading: "8 min",
        image: "/lovable-uploads/revolucao-dos-bichos-cover.jpeg",
        excerpt: "Uma análise crítica da obra de George Orwell e seus paralelos com o cenário político brasileiro contemporâneo, explorando temas de poder, corrupção e manipulação da linguagem."
      }
    ]
  }
];

export const Writing = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();
  
  // Check URL to determine initial category
  useEffect(() => {
    const currentPath = window.location.pathname;
    const initialCategory = currentPath === '/meus-contos' || currentPath === '/literatura/meus-contos' ? 'contos' : 
                           currentPath === '/resenha-critica' || currentPath === '/literatura/resenha-critica' ? 'resenhas' : null;
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, []);

  if (selectedCategory) {
    const category = categories.find(cat => cat.id === selectedCategory);
    if (!category) return null;

    return (
      <section className="no-select">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-center"
          >
            <button
              onClick={() => navigate('/literatura')}
              className="text-primary hover:text-primary/80 transition-colors mb-4 flex items-center mx-auto gap-2"
            >
              ← Voltar às categorias
            </button>
            <h1 className="text-3xl font-bold" style={{ fontFamily: 'Didot, serif' }}>
              {category.title}
            </h1>
            <p className="mt-1 text-muted-foreground">{category.description}</p>
          </motion.header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <LiteraryCard
                  image={post.image}
                  title={post.title}
                  excerpt={post.excerpt}
                  link={selectedCategory === 'resenhas' ? `/literatura/resenha/${post.id}` : `/literatura/${post.id}`}
                  className={selectedCategory === 'resenhas' ? 'book-cover' : ''}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const literaturaCards = categories.map((category, index) => {
    const textCount = category.posts.length;
    const countLabel =
      category.id === "resenhas"
        ? `${textCount} ${textCount === 1 ? "resenha" : "resenhas"}`
        : `${textCount} ${textCount === 1 ? "texto" : "textos"}`;

    return {
      id: category.id,
      href:
        category.id === "contos"
          ? "/literatura/meus-contos"
          : "/literatura/resenha-critica",
      num: String(index + 1).padStart(2, "0"),
      label: category.id === "contos" ? "Ficção breve" : "Análise crítica",
      title: category.title,
      description: category.description,
      countLabel,
      illustration: category.id === "contos" ? ("books" as const) : ("open-book" as const),
    };
  });

  return (
    <section className="no-select bg-[#fafaf8] min-h-[calc(100vh-180px)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-[1200px] px-4 py-10"
      >
        <LiteraturaSection cards={literaturaCards} />
      </motion.div>
    </section>
  );
};