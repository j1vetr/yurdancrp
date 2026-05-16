import { Link } from "wouter";
import { motion } from "framer-motion";
import { carpets } from "@/data/carpets";

const getCarpetImage = (id: string, index: number) => {
  return new URL(`../assets/images/${id}-${index}.png`, import.meta.url).href;
};

export default function Collection() {
  return (
    <div className="w-full bg-background min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6 font-light">The Archive</h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            A curated selection of masterworks. Each piece represents an unrepeatable moment in textile history.
          </p>
        </motion.div>

        <div className="flex flex-col gap-32 md:gap-48">
          {carpets.map((carpet, index) => (
            <motion.div 
              key={carpet.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}
            >
              <div className="w-full md:w-3/5">
                <Link href={`/carpet/${carpet.id}`} className="block overflow-hidden group">
                  <img 
                    src={getCarpetImage(carpet.id, 2)} 
                    alt={carpet.name} 
                    className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                </Link>
              </div>
              <div className="w-full md:w-2/5 flex flex-col items-start">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-[1px] bg-foreground/30"></span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{carpet.origin}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif mb-4 text-foreground">
                  <Link href={`/carpet/${carpet.id}`} className="hover:opacity-70 transition-opacity">
                    {carpet.name}
                  </Link>
                </h2>
                <p className="text-lg text-muted-foreground font-light mb-8 italic">"{carpet.tagline}"</p>
                <div className="space-y-3 mb-10">
                  <p className="text-sm"><span className="uppercase tracking-widest text-xs text-muted-foreground mr-3">Material</span> {carpet.material}</p>
                  <p className="text-sm"><span className="uppercase tracking-widest text-xs text-muted-foreground mr-3">Dimensions</span> {carpet.dimensions}</p>
                  <p className="text-sm"><span className="uppercase tracking-widest text-xs text-muted-foreground mr-3">Style</span> {carpet.style}</p>
                </div>
                <Link href={`/carpet/${carpet.id}`} className="border-b border-foreground text-foreground pb-1 uppercase tracking-widest text-sm hover:text-muted-foreground hover:border-muted-foreground transition-colors">
                  View Details & Inquiry
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
