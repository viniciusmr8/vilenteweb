import React, { useState, useEffect } from "react";
import { Home, User, FileText, Camera, Mail, Search } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { SearchDialog } from "./SearchDialog";
interface TopNavProps {
  onHome: () => void;
  section: string;
  onToPhoto: () => void;
  onToWriting: () => void;
  onToAbout: () => void;
  onToContact: () => void;
  onNavigate: (section: string, id?: string) => void;
}
export const TopNav = ({
  onHome,
  section,
  onToPhoto,
  onToWriting,
  onToAbout,
  onToContact,
  onNavigate
}: TopNavProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY === 0) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  const navItems = [{
    name: 'Início',
    onClick: onHome,
    icon: Home,
    isActive: section === "home"
  }, {
    name: 'Literatura',
    onClick: onToWriting,
    icon: FileText,
    isActive: section === "writing"
  }, {
    name: 'Fotografia',
    onClick: onToPhoto,
    icon: Camera,
    isActive: section === "photo"
  }, {
    name: 'Sobre mim',
    onClick: onToAbout,
    icon: User,
    isActive: section === "about"
  }, {
    name: 'Contato',
    onClick: onToContact,
    icon: Mail,
    isActive: section === "contact"
  }, {
    name: '',
    onClick: () => setSearchOpen(true),
    icon: Search,
    isActive: false
  }];
  return <>
      <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/95 border-b border-black/20 h-[180px] lg:h-[180px] md:h-[160px] sm:h-[120px] transition-transform duration-300 ease-in-out ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="mx-auto max-w-6xl px-4 h-full flex flex-col justify-center items-center pt-5 pb-5">
          <div className="mb-[15px]">
            <img 
              src="/lovable-uploads/76374d1b-f037-43ad-aa2f-2442a001a147.png" 
              alt="Vi Lente Logo" 
              className="h-[80px] lg:h-[80px] md:h-[70px] sm:h-[55px] object-contain"
            />
          </div>
          <nav className="flex items-center h-[45px]">
            <NavBar items={navItems} />
          </nav>
        </div>
      </header>
      
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} onNavigate={onNavigate} />
    </>;
};