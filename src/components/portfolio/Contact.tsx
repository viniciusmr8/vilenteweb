import { motion } from "framer-motion";
import { Mail, Instagram } from "lucide-react";
import { useState } from "react";
export const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText('viniciusmr8@proton.me');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
      window.location.href = 'mailto:viniciusmr8@proton.me';
    }
  };
  const handleTitleClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount === 2) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 4000);
      setClickCount(0);
    }
  };
  return <>
      <style dangerouslySetInnerHTML={{
      __html: `
          .contact-container {
            --accent-color: hsl(var(--primary));
            --text-color: hsl(var(--foreground));
            --text-muted: hsl(var(--muted-foreground));
            --bg-color: hsl(var(--background));
            --border-color: hsl(var(--border));
          }
          
          .email-link {
            position: relative;
            color: var(--text-color);
            text-decoration: none;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .email-link::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -4px;
            left: 0;
            background: var(--accent-color);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .email-link:hover::after {
            transform: scaleX(1);
          }
          
          .instagram-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 1.5rem;
            border: 2px solid var(--border-color);
            border-radius: 9999px;
            color: var(--text-color);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            background: var(--bg-color);
          }
          
          .instagram-link:hover {
            transform: scale(1.05);
            border-color: transparent;
            background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
            color: white;
          }
          
          .easter-egg {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--accent-color);
            color: white;
            padding: 1.5rem 2rem;
            border-radius: 1rem;
            font-weight: 500;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            animation: easterEggPop 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          
          @keyframes easterEggPop {
            0% {
              transform: translate(-50%, -50%) scale(0.8);
              opacity: 0;
            }
            100% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 1;
            }
          }
          
          .copied-feedback {
            position: absolute;
            top: -3rem;
            left: 50%;
            transform: translateX(-50%);
            background: var(--accent-color);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            white-space: nowrap;
            animation: copyFeedback 2s ease-out;
          }
          
          @keyframes copyFeedback {
            0% {
              opacity: 0;
              transform: translateX(-50%) translateY(10px);
            }
            10%, 90% {
              opacity: 1;
              transform: translateX(-50%) translateY(0);
            }
            100% {
              opacity: 0;
              transform: translateX(-50%) translateY(-10px);
            }
          }
          
          @media (max-width: 768px) {
            .contact-grid {
              gap: 2rem;
            }
            
            .contact-card {
              padding: 2rem 1.5rem;
            }
          }
        `
    }} />
      
      <section className="contact-container no-select min-h-[80vh] flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          {/* Header with fade-in animation */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          ease: "easeOut"
        }} className="mb-16">
            <h1 className="text-4xl font-bold mb-6 cursor-pointer select-none" style={{
            fontFamily: 'Didot, serif'
          }} onClick={handleTitleClick}>
              Contato
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Vamos conversar sobre fotografia, literatura ou projetos criativos
            </p>
          </motion.div>

          {/* Contact methods with staggered animation */}
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2,
          ease: "easeOut"
        }} className="contact-grid space-y-12">
            {/* Email Section */}
            <div className="contact-card bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Mail size={24} className="text-primary" />
                <h3 className="text-2xl font-semibold">Email</h3>
              </div>
              <div className="relative">
                <button onClick={handleEmailClick} className="email-link text-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded" tabIndex={0}>
                  viniciusmr8@proton.me
                </button>
                {emailCopied && <div className="copied-feedback">
                    Email copiado! ✓
                  </div>}
              </div>
              <p className="text-muted-foreground mt-3 text-sm">
                Clique para copiar ou enviar email
              </p>
            </div>

            {/* Instagram Section */}
            <div className="contact-card bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Instagram size={24} className="text-primary" />
                <h3 className="text-2xl font-semibold">Instagram</h3>
              </div>
              <a href="https://www.instagram.com/vi.lente/" target="_blank" rel="noopener noreferrer" className="instagram-link focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" tabIndex={0}>
                <Instagram size={20} />
                @vi.lente
              </a>
              <p className="text-muted-foreground mt-4 text-sm">
                Acompanhe meu trabalho fotográfico
              </p>
            </div>
          </motion.div>

          {/* Subtle footer text */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.8
        }} className="mt-16 text-muted-foreground text-sm">Respondo sempre com carinho e atenção </motion.div>
        </div>

        {/* Easter Egg */}
        {showEasterEgg && <div className="easter-egg">
            Você encontrou o segredo! Pessoas curiosas como você são sempre bem-vindas 😊
          </div>}
      </section>
    </>;
};