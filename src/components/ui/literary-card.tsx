import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LiteraryCardProps {
  image?: string;
  title: string;
  excerpt: string;
  link: string;
  className?: string;
}

interface BookCoverProps {
  isBookCover?: boolean;
}

export const LiteraryCard = ({ image, title, excerpt, link, className }: LiteraryCardProps & BookCoverProps) => {
  const isBookCover = className?.includes('book-cover');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "bg-card rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group",
        className
      )}
      onClick={() => window.location.href = link}
    >
      {isBookCover && image ? (
        // Book cover layout: image on left, content on right
        <div className="flex p-6 gap-4">
          <div className="flex-shrink-0">
            <img
              src={image}
              alt={title}
              className="w-16 h-24 object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 
              className="text-lg font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300"
              style={{ fontFamily: 'Didot, serif' }}
            >
              {title}
            </h3>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              {excerpt}
            </p>
            
            <div className="flex justify-end">
              <span className="text-primary text-sm font-medium hover:underline transition-all duration-300">
                Ler mais
              </span>
            </div>
          </div>
        </div>
      ) : (
        // Original layout for regular content
        <>
          {image && (
            <div className="aspect-video overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
          
          <div className="p-6">
            <h3 
              className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300"
              style={{ fontFamily: 'Didot, serif' }}
            >
              {title}
            </h3>
            
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
              {excerpt}
            </p>
            
            <div className="flex justify-end">
              <span className="text-primary text-sm font-medium hover:underline transition-all duration-300">
                Ler mais
              </span>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};