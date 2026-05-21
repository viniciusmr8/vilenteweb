import { Photography as PhotographyComponent } from "@/components/portfolio/Photography";
import { TopNav } from "@/components/portfolio/TopNav";
import { useNavigate } from "react-router-dom";

const Photography = () => {
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

  return (
    <>
      <TopNav
        onHome={() => handleNavigate("home")}
        section="photo"
        onToPhoto={() => handleNavigate("photo")}
        onToWriting={() => handleNavigate("writing")}
        onToAbout={() => handleNavigate("about")}
        onToContact={() => handleNavigate("contact")}
        onNavigate={handleNavigate}
      />
      
      <main className="min-h-screen pt-[180px] lg:pt-[180px] md:pt-[160px] sm:pt-[120px]">
        <PhotographyComponent />
      </main>
    </>
  );
};

export default Photography;