import React from "react";
import { motion } from "framer-motion";
import { PhotoCarousel } from "@/components/ui/photo-carousel";
import { LiteraturaCarousel } from "@/components/ui/literatura-carousel";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

interface LandingProps {
  onNavigate: (section: string) => void;
}

export const Landing = ({ onNavigate }: LandingProps) => {
  const storyData = [
    {
      id: "ultima-memoria",
      title: "A última memória antes do fim",
      category: "Conto",
      preview: "00:59. Eram os minutos finais de toda existência. Sentado em um bloco de pedra, abrigado pela sombra reconfortante de um jacarandá florido, Luiz teve pouco tempo para refletir sobre a efemeridade da vida, enquanto enxugava o suor e as lágrimas misturados de maneira irremediável em seu rosto.",
      image: "/lovable-uploads/0bb0ed33-6470-43b8-9d76-534feea7093e.png",
      link: "/literatura/ultima-memoria"
    },
    {
      id: "tempo-suficiente",
      title: "Tempo Suficiente",
      category: "Conto",
      preview: "Imagine ter tempo mais que suficiente para observar o céu e fazer conclusões astronômicas? Esse pensamento intrusivo ocupou a mente de Almir enquanto ele, num movimento automático, percorria com o dedo indicador os vídeos do TikTok.",
      image: "/lovable-uploads/5f7df7ca-80f7-420f-b883-66e3bbae2e3e.png",
      link: "/literatura/tempo-suficiente"
    },
    {
      id: "cavalo-de-pijamas",
      title: "Cavalo de Pijamas",
      category: "Conto",
      preview: "Raul era cego. Apesar disso, ou talvez por isso mesmo, os contornos eram vistos com clareza. Não apenas contornos físicos - esses ele tatateava -, mas contornos de personalidade, de intenção, de caráter.",
      image: "/lovable-uploads/ea329aab-a5af-48ec-8724-c842df1148ca.png",
      link: "/literatura/cavalo-de-pijamas"
    }
  ];

  const photographyImages = [
    { src: "/lovable-uploads/ed194791-0563-4d55-83ff-4803bebf756a.png", alt: "Simetria Sagrada" },
    { src: "/lovable-uploads/d792fed9-cddd-4420-882d-dc8ebeb6ac80.png", alt: "Caminhos Serpenteantes" },
    { src: "/lovable-uploads/d9836227-7562-49de-8d74-47d47ec3887c.png", alt: "Movimento Suspenso" },
    { src: "/lovable-uploads/18ebb55b-91bf-4284-9904-d82216f15796.png", alt: "Retrato Urbano" },
    { src: "/lovable-uploads/d0263766-1eab-44a0-aea5-5aeaacaffa15.png", alt: "Perspectiva Infinita" },
    { src: "/lovable-uploads/fcddc391-ede7-42c5-ba0b-3aae2fa77672.png", alt: "Nostalgia Cromada" },
    { src: "/lovable-uploads/01a0f87d-2e08-4b71-a477-ed81ebed19b8.png", alt: "Reflexos do Tempo" },
    { src: "/lovable-uploads/7cd4e275-28dc-4a08-9b21-bb79e370cb90.png", alt: "Catedral Moderna" },
    { src: "/lovable-uploads/32fa3b12-d862-416a-9f1b-61e750327738.png", alt: "Voo de Cabos" },
    { src: "/lovable-uploads/c1cb81d0-25f8-49d0-abfe-daeaefe0de17.png", alt: "Memórias Líquidas" },
    { src: "/lovable-uploads/b470ef91-3a97-40d0-919f-9bd5204606ee.png", alt: "Círculo da Vida" },
    { src: "/lovable-uploads/0e78f6f7-336f-4f28-ba20-d3713421d9f9.png", alt: "Natureza Flutuante" },
    { src: "/lovable-uploads/bc1535d6-c89a-4d97-a793-0e5240b50e01.png", alt: "Juventude Urbana" },
    { src: "/lovable-uploads/b7ce6046-54ef-4231-b6b9-2ac33a8aaeca.png", alt: "Arquitetura Orgânica" },
    { src: "/lovable-uploads/76731e5d-ff55-4dab-88bd-9532ac2ce043.png", alt: "Tradição do Pão" },
    { src: "/lovable-uploads/170b987d-aad7-4a7e-9dd5-40e131efa763.png", alt: "Cozinha Sagrada" }
  ];

  return (
    <main className="no-select">
      <section className="w-full">
        <motion.div
          className="flex flex-col gap-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.8,
            staggerChildren: 0.2
          }}
        >
          {/* Photography Card */}
          <motion.div 
            className="w-full bg-background border-b border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="container mx-auto px-4 py-16">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Didot, serif' }}>Fotografia</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                  Um universo preto e branco através de minhas lentes.
                </p>
                <InteractiveHoverButton 
                  text="Portfolio"
                  onClick={() => onNavigate("photo")}
                  className="scale-75"
                />
              </div>
              
              <PhotoCarousel images={photographyImages} />
            </div>
          </motion.div>

          {/* Literature Grid */}
          <motion.div 
            className="w-full bg-background"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="container mx-auto px-4 py-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Didot, serif' }}>Literatura</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Às vezes, escrever é fotografar o que o olho ainda não alcançou.</p>
              </div>
              <LiteraturaCarousel stories={storyData} />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};