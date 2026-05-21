import { TopNav } from "@/components/portfolio/TopNav";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { TextRevealByWord } from "@/components/ui/text-reveal";
const About = () => {
  const navigate = useNavigate();
  const handleNavigate = (section: string) => {
    switch (section) {
      case "home":
        navigate("/");
        break;
      case "about":
        navigate("/sobre-mim");
        break;
      case "photo":
        navigate("/fotografia");
        break;
      case "writing":
        navigate("/literatura");
        break;
      case "contact":
        navigate("/contato");
        break;
    }
  };
  return <>
      <TopNav onHome={() => handleNavigate("home")} section="about" onToPhoto={() => handleNavigate("photo")} onToWriting={() => handleNavigate("writing")} onToAbout={() => handleNavigate("about")} onToContact={() => handleNavigate("contact")} onNavigate={handleNavigate} />
      
      <main className="min-h-screen pt-[180px] lg:pt-[180px] md:pt-[160px] sm:pt-[120px]">
        <motion.section initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="mx-auto max-w-4xl px-4 py-16">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Didot, serif' }}>Sobre mim</h1>
            <div className="flex flex-col items-center gap-8">
              <img src="/lovable-uploads/f0b5a8ec-0ff5-4674-b0df-91c65aa07cb5.png" alt="Retrato do autor" className="w-64 h-64 object-cover rounded-full shadow-lg" />
            </div>
          </header>

          <div className="text-center px-4">
            <div className="max-w-2xl mx-auto p-11 text-lg leading-relaxed whitespace-pre-line" style={{ fontFamily: 'Courier, monospace' }}>
              {`Registro o mundo
em pequenos fragmentos mal elaborados 
de luz e sombra
palavras e silêncio
rascunho do olhar 
gravados quase sem querer 
em dias de tempestades 
ou noites escuras 
observando pela janela vazia
a beleza confusa da vida
e os sussurros do mundo inquieto
que só existem em mim
e mais ninguém.`}
            </div>
            
            <div className="mt-16">
              <p className="text-xl" style={{ fontFamily: 'Homemade Apple, cursive' }}>
                Vinicius Resende
              </p>
            </div>
          </div>
        </motion.section>
      </main>
    </>;
};
export default About;