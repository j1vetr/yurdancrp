import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/images/hero.png";
import { carpets } from "@/data/carpets";

// Helper function to dynamically import images based on ID
const getCarpetImage = (id: string, index: number) => {
  return new URL(`../assets/images/${id}-${index}.png`, import.meta.url).href;
};

export default function Home() {
  const featuredCarpets = carpets.slice(0, 3);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="w-full bg-background min-h-screen" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 bg-black" style={{ y }}>
          <img 
            src={heroImg} 
            alt="Yurdan Carpet Gallery" 
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 font-light tracking-tight">
            Where Ancient Craft Meets Modern Luxury
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            A digital art gallery, a textile archive, and a private-collection experience. Not a floor covering — an heirloom.
          </p>
          <Link href="/collection" className="inline-block border border-white/30 text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors duration-500">
            Enter the Gallery
          </Link>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 md:px-12 bg-background">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-foreground">Gallery-like silence. The weight of rare objects.</h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-light">
            Like walking barefoot through a museum that only you were invited to. Yurdan presents unhurried, tactile, timeless pieces for luxury homes, architects, collectors, and boutique hotels.
          </p>
        </motion.div>
      </section>

      {/* Featured Pieces */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl font-serif text-foreground">Selected Works</h2>
            <Link href="/collection" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors border-b border-muted-foreground/30 hover:border-foreground pb-1">
              View All
            </Link>
          </div>

          <div className="flex flex-col gap-32">
            {featuredCarpets.map((carpet, index) => (
              <motion.div 
                key={carpet.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <Link href={`/carpet/${carpet.id}`} className="block overflow-hidden group">
                    <img 
                      src={getCarpetImage(carpet.id, 1)} 
                      alt={carpet.name} 
                      className="w-full h-auto aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                  </Link>
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-start">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4">{carpet.origin}</span>
                  <h3 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">{carpet.name}</h3>
                  <p className="text-lg text-muted-foreground font-light mb-8 italic">"{carpet.tagline}"</p>
                  <p className="text-muted-foreground mb-10 leading-relaxed">{carpet.story.substring(0, 150)}...</p>
                  <Link href={`/carpet/${carpet.id}`} className="border-b border-foreground text-foreground pb-1 uppercase tracking-widest text-sm hover:text-muted-foreground hover:border-muted-foreground transition-colors">
                    Explore Piece
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 text-center bg-primary text-primary-foreground">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-8 font-light">Acquire an Heirloom</h2>
          <p className="text-primary-foreground/70 mb-12 font-light text-lg">
            Our collection is available strictly upon private inquiry. We invite architects, designers, and collectors to request a viewing.
          </p>
          <a href="mailto:info@yurdancarpet.com" className="inline-block border border-primary-foreground/30 px-10 py-4 uppercase tracking-widest text-sm hover:bg-primary-foreground hover:text-primary transition-colors duration-500">
            Contact Curators
          </a>
        </motion.div>
      </section>
    </div>
  );
}
