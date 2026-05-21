import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="no-select">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Didot, serif' }}>Sobre mim</h1>
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-primary to-primary-glow">
            <img
              src="/lovable-uploads/camera-portrait.png"
              alt="Foto do autor"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-lg max-w-none"
        >
          <div className="space-y-6 text-center">
            <p className="text-lg text-muted-foreground">
              Fotógrafo e escritor, capturando momentos e palavras que atravessam o tempo.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Fotografia</h3>
                <p className="text-muted-foreground">
                  Há mais de uma década documentando luz, sombra e silêncio através das lentes. 
                  Cada imagem é um recorte temporal, uma tentativa de eternizar o efêmero.
                </p>
                <p className="text-muted-foreground mt-4">
                  Trabalho principalmente com fotografia urbana, retratos e paisagens, 
                  sempre em busca das linhas que se cruzam sem se ferir.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Literatura</h3>
                <p className="text-muted-foreground">
                  As palavras são minha segunda lente. Escrevo contos, crônicas e ensaios 
                  que buscam fotografar aquilo que o olho ainda não alcançou.
                </p>
                <p className="text-muted-foreground mt-4">
                  Acredito que escrever é como fotografar: ambos capturam instantes, 
                  preservam memórias e revelam verdades escondidas no cotidiano.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-secondary/50 rounded-2xl">
              <blockquote className="text-lg italic text-foreground">
                "Às vezes, escrever é fotografar o que o olho ainda não alcançou. 
                E fotografar é escrever com luz aquilo que as palavras não conseguem dizer."
              </blockquote>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};