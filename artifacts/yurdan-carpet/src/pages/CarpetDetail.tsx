import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { carpets } from "@/data/carpets";
import { useEffect } from "react";

const getCarpetImage = (id: string, index: number) => {
  return new URL(`../assets/images/${id}-${index}.png`, import.meta.url).href;
};

export default function CarpetDetail() {
  const { id } = useParams();
  const carpet = carpets.find(c => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!carpet) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-serif mb-4">Piece Not Found</h1>
          <Link href="/collection" className="text-sm uppercase tracking-widest border-b border-foreground pb-1">Return to Archive</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-background min-h-screen pt-24">
      {/* Top Gallery */}
      <div className="w-full flex flex-col md:flex-row h-auto md:h-[80vh]">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 h-[50vh] md:h-full p-4 md:p-8 pb-0 md:pr-4"
        >
          <img 
            src={getCarpetImage(carpet.id, 1)} 
            alt={`${carpet.name} detail`}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full md:w-1/2 h-[50vh] md:h-full p-4 md:p-8 pt-4 md:pl-4"
        >
          <img 
            src={getCarpetImage(carpet.id, 2)} 
            alt={`${carpet.name} full view`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-24 flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full lg:w-2/3"
        >
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-4">{carpet.origin}</span>
            <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-6 font-light">{carpet.name}</h1>
            <p className="text-2xl text-muted-foreground font-light italic">"{carpet.tagline}"</p>
          </div>

          <div className="prose prose-stone prose-lg max-w-none text-foreground/80 font-light leading-relaxed mb-16">
            <p>{carpet.story}</p>
          </div>

          <div className="bg-secondary/30 p-8 md:p-12 mb-16">
            <h3 className="text-2xl font-serif mb-8 text-foreground">Curatorial Details</h3>
            <p className="text-foreground/80 font-light leading-relaxed">{carpet.details}</p>
          </div>
        </motion.div>

        {/* Sidebar Data & Inquiry */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full lg:w-1/3"
        >
          <div className="sticky top-32">
            <div className="border-b border-border pb-8 mb-8">
              <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Specifications</h4>
              <dl className="space-y-4">
                <div className="flex justify-between">
                  <dt className="text-sm text-muted-foreground">Dimensions</dt>
                  <dd className="text-sm text-foreground text-right">{carpet.dimensions}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-muted-foreground">Material</dt>
                  <dd className="text-sm text-foreground text-right">{carpet.material}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-muted-foreground">Style</dt>
                  <dd className="text-sm text-foreground text-right">{carpet.style}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-muted-foreground">Age</dt>
                  <dd className="text-sm text-foreground text-right">{carpet.age}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-muted-foreground">Mood</dt>
                  <dd className="text-sm text-foreground text-right">{carpet.mood}</dd>
                </div>
              </dl>
            </div>

            <div className="border-b border-border pb-8 mb-8">
              <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Color Palette</h4>
              <div className="flex flex-wrap gap-2">
                {carpet.colors.map(color => (
                  <span key={color} className="text-xs border border-border px-3 py-1 rounded-full text-foreground/80">
                    {color}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-serif text-foreground mb-4">Acquisition Inquiry</h4>
              <p className="text-sm text-muted-foreground mb-8 font-light">
                Prices are available strictly upon private inquiry. Our curators are available to discuss provenance, arrange a private viewing, or provide high-resolution archival imagery.
              </p>
              
              <div className="flex flex-col gap-4">
                <a 
                  href={`mailto:info@yurdancarpet.com?subject=Inquiry: ${carpet.name} (${carpet.id})`}
                  className="w-full bg-primary text-primary-foreground text-center py-4 uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors"
                >
                  Email Curator
                </a>
                <a 
                  href={`https://wa.me/905551234567?text=I am inquiring about the ${carpet.name} piece.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-primary text-primary text-center py-4 uppercase tracking-widest text-sm hover:bg-secondary transition-colors"
                >
                  WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
