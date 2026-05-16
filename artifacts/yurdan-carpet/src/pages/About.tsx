import { motion } from "framer-motion";
import heroImg from "@/assets/images/hero.png";
import medallion from "@assets/Çalışma_Yüzeyi_17@3x_1778942870049.png";

export default function About() {
  return (
    <div className="w-full bg-background min-h-screen pt-24">
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <img src={medallion} alt="Yurdan Medallion" className="h-16 w-16 mx-auto mb-10 opacity-80" />
          <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-8 font-light">Centuries of Heritage, Hours of Human Skill</h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Yurdan Carpet is not a store. We are a private archive dedicated to the preservation and appreciation of the world's finest handmade carpets.
          </p>
        </motion.div>
      </section>

      {/* Full Width Image */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="w-full h-[60vh] md:h-[80vh]"
      >
        <img src={heroImg} alt="Gallery view" className="w-full h-full object-cover grayscale opacity-80" />
      </motion.section>

      {/* Philosophy */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto space-y-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-serif text-foreground mb-6">The Philosophy</h2>
              <p className="text-lg text-foreground/80 font-light leading-relaxed">
                We believe that a masterwork carpet is a living document. It records the landscape it was born in, the cultural memory of its weavers, and the slow, deliberate passage of time. In an era of instant gratification and mass production, we source pieces that demand patience. A true carpet cannot be rushed; it can only unfold knot by knot.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-serif text-foreground mb-6">The Archive</h2>
              <p className="text-lg text-foreground/80 font-light leading-relaxed">
                Our collection is meticulously curated for luxury homes, architects, private collectors, and boutique hospitality spaces. We reject the concept of inventory in favor of the archive. We do not carry thousands of pieces; we carry only those pieces that possess a soul, a story, and undeniable artistic merit.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-serif text-foreground mb-6">Private Acquisitions</h2>
              <p className="text-lg text-foreground/80 font-light leading-relaxed">
                Yurdan operates on a model of absolute discretion. We do not display prices publicly. We work directly with our clients and their design teams to ensure that each piece finds its proper context. Our curators are available for private consultations, sourcing requests, and architectural integration planning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-secondary/30 text-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-serif text-foreground mb-8">Begin a Conversation</h2>
          <p className="text-muted-foreground mb-10 font-light">
            Whether you are seeking a specific piece or wishing to explore our archive, our curators are at your disposal.
          </p>
          <a href="mailto:info@yurdancarpet.com" className="inline-block border border-foreground text-foreground px-10 py-4 uppercase tracking-widest text-sm hover:bg-foreground hover:text-background transition-colors duration-500">
            Contact Curators
          </a>
        </motion.div>
      </section>
    </div>
  );
}
