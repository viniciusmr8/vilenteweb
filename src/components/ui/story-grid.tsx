import { motion } from "framer-motion";

interface Story {
  id: string;
  title: string;
  type: string;
  reading: string;
  image: string;
  snippet: string;
}

interface StoryGridProps {
  stories: Story[];
}

export const StoryGrid = ({ stories }: StoryGridProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Didot, serif' }}>Literatura</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Às vezes, escrever é fotografar o que o olho ainda não alcançou.
          </p>
          {/* Subtle separator line */}
          <div className="w-20 h-px bg-black/10 mx-auto mt-5 mb-10"></div>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="story-card group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              onClick={() => window.location.href = `/literatura/${story.id}`}
            >
              {/* Story Image */}
              <div className="story-card-image relative overflow-hidden h-48">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Story Content */}
              <div className="story-card-content p-6">
                <h3 className="story-card-title text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {story.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{story.type}</p>
                <p className="story-card-snippet text-sm leading-relaxed text-gray-600 mb-4">
                  {story.snippet}
                </p>
                <div className="story-card-cta text-right">
                  <a 
                    href={`/literatura/${story.id}`}
                    className="text-sm font-medium text-primary hover:text-primary-glow transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    Ler mais →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};