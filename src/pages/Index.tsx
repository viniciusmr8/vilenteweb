import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Landing } from "@/components/portfolio/Landing";
import { TopNav } from "@/components/portfolio/TopNav";
import { useAntiCopy } from "@/hooks/use-anti-copy";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/ui/animated-footer";

const Index = () => {
  const [section, setSection] = useState("home");
  const navigate = useNavigate();
  useAntiCopy();

  const handleNavigate = (section: string, id?: string) => {
    switch (section) {
      case "home":
        setSection(section);
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
      default:
        setSection(section);
    }
  };
  return (
    <div className="min-h-screen bg-background text-foreground no-select">
      <TopNav
        onHome={() => handleNavigate("home")}
        section={section}
        onToPhoto={() => handleNavigate("photo")}
        onToWriting={() => handleNavigate("writing")}
        onToAbout={() => handleNavigate("about")}
        onToContact={() => handleNavigate("contact")}
        onNavigate={handleNavigate}
      />
      
      <div className="pt-[180px] lg:pt-[180px] md:pt-[160px] sm:pt-[120px]">{/* Spacer for fixed header */}</div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {section === "home" && <Landing onNavigate={handleNavigate} />}
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer
        leftLinks={[
          { href: "/sobre-mim", label: "Sobre Mim" },
          { href: "/literatura", label: "Literatura" },
        ]}
        rightLinks={[
          { href: "/fotografia", label: "Fotografia" },
        ]}
        copyrightText={`© ${new Date().getFullYear()} VILENTE • Literatura & Fotografia — Todos os direitos reservados`}
        barCount={23}
      />
    </div>
  );
};
export default Index;