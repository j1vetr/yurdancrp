export interface Carpet {
  id: string;
  folderNum: number;
  imageCount: number;
  name: string;
  tagline: string;
  origin: string;
  material: string;
  style: string;
  dimensions: string;
  totalArea: string;
  colors: string[];
  story: string;
  details: string;
  mood: string;
}

export const carpets: Carpet[] = [
  {
    id: "isfahan-no-1",
    folderNum: 1,
    imageCount: 8,
    name: "Isfahan No. I",
    tagline: "A silence woven from two worlds",
    origin: "Isfahan Tradition",
    material: "Silk & Wool Blend",
    style: "Isfahan Silk-Wool",
    dimensions: "1.80 × 1.11 m",
    totalArea: "2.00 m²",
    colors: ["Deep Crimson", "Ivory", "Antique Gold", "Midnight Blue"],
    story: "The workshops of Isfahan have produced the world's most refined carpets for over five centuries. This piece is a quiet witness to that tradition. The union of silk and wool creates a continuous play of light — shifting between shine and matte throughout the day, the same carpet revealing a different character with each passing hour. Morning light draws out the silk motifs; as evening softens, the wool surface takes over. Every motif is the memory of a garden — the geometric record of flowers, flowing water, and shadow in Isfahan's great courtyards.",
    details: "Hand-knotted technique. Silk and wool blend creates a perfect balance between surface luminosity and matte depth. Arabesque motifs and central medallion composition typical of the Isfahan style. Natural vegetable dye. Over 350 knots per square inch.",
    mood: "Ceremonial, quiet, weighty"
  },
  {
    id: "turkish-silk-no-2",
    folderNum: 2,
    imageCount: 8,
    name: "Turkish Silk No. II",
    tagline: "A thousand years of Anatolian patience, paused in a single weave",
    origin: "Turkish Silk Tradition",
    material: "Pure Silk",
    style: "Turkish Silk",
    dimensions: "1.87 × 1.20 m",
    totalArea: "2.24 m²",
    colors: ["Saffron", "Navy", "Gold", "Antique White"],
    story: "Turkish silk carpet-making is a rare universe where floral, geometric, and celestial motifs coexist. In this piece, the luminosity inherent to silk thread spreads as though lit from within, between the motifs. Cool to the touch, warm to the eye — this duality is the ineffable quality that separates a true silk carpet from all other textiles. The master's hands worked here like a musician's; every knot placed with the precision of a deliberate note. The piece will continue speaking with the same brilliance decades from now.",
    details: "Pure silk, hand-knotted. Surface shifts in colour with light, offering a velvet-like depth. Medallion-centred composition, completed with corner palmettes. Vegetable dye. 400 knots per square inch.",
    mood: "Luminous, elegant, vivid"
  },
  {
    id: "turk-ipek-no-3",
    folderNum: 3,
    imageCount: 8,
    name: "Turkish Silk No. III",
    tagline: "Every knot carries a master's breath within it",
    origin: "Turkish Silk Tradition",
    material: "Pure Silk",
    style: "Turkish Silk",
    dimensions: "1.82 × 1.21 m",
    totalArea: "2.20 m²",
    colors: ["Burgundy", "Ivory", "Copper", "Anthracite"],
    story: "In Anatolian silk carpet-making, there is a secret passed from master to apprentice: motifs are not taught — they are felt. This piece reveals that consciousness, carried through generations. When the depths of red come to the surface, the room's centre of gravity shifts — wherever the carpet rests, attention follows. The geometric border frame holds the seemingly infinite movement of the central field; at the centre, time stops. Ivory touches open in the dark ground like breaths — each glance discovers a new detail.",
    details: "Hand-knotted pure silk. Red tone achieved with root dye; deepens further with age. Turkish knot technique (Gördes knot). Strong contrasting border and central medallion structure.",
    mood: "Authoritative, warm, deeply rooted"
  },
  {
    id: "iran-ipek-no-4",
    folderNum: 4,
    imageCount: 8,
    name: "Persian Silk No. IV",
    tagline: "The poetry of a Persian garden, made permanent in silk thread",
    origin: "Persian Silk Tradition",
    material: "Pure Silk",
    style: "Persian Silk",
    dimensions: "1.86 × 1.27 m",
    totalArea: "2.36 m²",
    colors: ["Deep Emerald", "Golden Yellow", "Crimson", "Cream"],
    story: "Persian carpet-making holds one of the world's richest traditions of ornamental art. In this piece, the floral language of the Persian garden tradition — palm, lotus, arabesque — forms an intertwined network. The ground colour redefines itself with every light that falls upon it: emerald in the morning sun, moss by afternoon, velvet-dark by evening. Simply looking is not enough; this carpet wants to be observed, walked around. Whichever angle you approach from, at least one motif appears to look back at you alone.",
    details: "Hand-knotted pure Persian silk. Over 400 knots per square inch. Floral arabesque motifs and corner compositions. Mixed vegetable and mineral dye. Curved vine motif unique to Persian origin.",
    mood: "Regal, botanical, multi-layered"
  },
  {
    id: "turkish-carpet-no-5",
    folderNum: 5,
    imageCount: 8,
    name: "Turkish Silk No. V",
    tagline: "The collection's widest voice, its deepest silence",
    origin: "Turkish Carpet Tradition",
    material: "Pure Silk",
    style: "Turkish Silk",
    dimensions: "1.99 × 1.39 m",
    totalArea: "2.76 m²",
    colors: ["Amber", "Navy", "Agate Red", "Beige"],
    story: "The largest silk piece in the collection. Across its 2.76 square metres, each region speaks its own language — yet all these languages form a single poem. The large format reveals that the carpet is not merely floor covering but a space-defining object. In any room where it is placed, the walls recede; architecture reorganises itself around the carpet. The amber tones warm and cool in different ways throughout the day — it breathes like a living thing. Producing silk at this scale requires the collaborative work of at least three masters over a full year.",
    details: "The collection's largest silk piece. Hand-knotted, pure silk. Wide central composition with mirror symmetry at all four corners. Colour transitions are not sharp; each tone flows, melting into its neighbour. Natural light refraction across the horizontal surface.",
    mood: "Expansive, breathing, space-defining"
  },
  {
    id: "hereke-ipek-no-6",
    folderNum: 6,
    imageCount: 8,
    name: "Hereke Silk",
    tagline: "Heir to the Ottoman palace, today in only a handful of hands",
    origin: "Hereke, Turkey",
    material: "Pure Silk",
    style: "Hereke Silk",
    dimensions: "1.93 × 1.33 m",
    totalArea: "2.56 m²",
    colors: ["Cream", "Gold", "Rose", "Silver Grey"],
    story: "Hereke is a small Anatolian town that, in the 19th century, produced the exclusive carpets of the Ottoman palace. Pieces woven there were not made for export but for specific palace rooms — each designed for a particular room, a particular rank. This piece is one of the rare surviving examples of that tradition reaching our time. The Hereke master's signature is unmistakable: the ground, soft as untouched garden soil; the motifs, by complete contrast — sharp, prominent, sovereign. This opposition gives the piece the atmosphere of palace protocol.",
    details: "Genuine Hereke silk, hand-knotted. Extraordinary knot density: at least 36 knots per square centimetre. Ottoman palace motif repertoire: tulip, carnation, cypress. Natural cream ground with gold border.",
    mood: "Palace, refined, untouchable"
  },
  {
    id: "turk-ipek-no-7",
    folderNum: 7,
    imageCount: 7,
    name: "Turkish Silk No. VII",
    tagline: "Where light decides to stop",
    origin: "Turkish Silk Tradition",
    material: "Pure Silk",
    style: "Turkish Silk",
    dimensions: "1.86 × 1.24 m",
    totalArea: "2.31 m²",
    colors: ["Navy", "Golden Yellow", "Crimson", "White"],
    story: "In some carpets, light reflects. In this one, light stops. The gold-yellow motifs on the navy ground are placed like a star chart — each spinning in its own orbit, yet the gravitational pull between them holds the entire composition as a single whole. This meeting of night colour and day colour gives the carpet an existence independent of the hour. Even in a dark room, it appears to be illuminated from within. It is impossible to pass before this carpet without pausing for a moment.",
    details: "Pure silk, hand-knotted. Navy ground in lapis lazuli tone. Gold motifs achieve a metallic effect by refracting light through high silk density. Strong geometric border system. Vegetable dye.",
    mood: "Night sky, star-bright, serene"
  },
  {
    id: "isfahan-no-8",
    folderNum: 8,
    imageCount: 8,
    name: "Isfahan No. VIII",
    tagline: "Twin born of the same loom, carrying a different soul",
    origin: "Isfahan Tradition",
    material: "Silk & Wool Blend",
    style: "Isfahan Silk-Wool",
    dimensions: "1.80 × 1.11 m",
    totalArea: "2.00 m²",
    colors: ["Terracotta", "Ivory", "Copper", "Forest Green"],
    story: "It gives the feeling of emerging from the same tradition, the same master's hands as No. I — yet this piece seems to have been woven in a different season. The terracotta and copper tones carry a more earthly, more intimate resonance than No. I's ceremonial air. The union of silk and wool establishes a different balance here; inviting for a daytime room, mysterious for night. The same language, a different poem. Seeing these two pieces together reveals how a master can create two entirely distinct characters with the same technique.",
    details: "Hand-knotted silk-wool blend. Isfahan medallion composition with arabesque corner fills. Terracotta tone achieved with root dye. Silk thread luminosity cuts through the matte texture of wool.",
    mood: "Earthy, intimate, warm"
  },
  {
    id: "sultani-no-10",
    folderNum: 10,
    imageCount: 8,
    name: "Sultani",
    tagline: "The last great utterance of the Ottomans",
    origin: "Ottoman Tradition",
    material: "Wool & Cotton Blend",
    style: "Sultani",
    dimensions: "1.80 × 1.24 m",
    totalArea: "2.23 m²",
    colors: ["Deep Crimson", "Gold", "Navy", "Cream"],
    story: "The Sultani style is the Ottoman palace aesthetic translated into the language of carpet. Density of pattern and boldness of colour coexist; yet this is not a crowd — it is a disciplined display. Each element reigns in its assigned space. In this piece, the cotton and wool blend creates a slightly matte surface — there is no shine, but there is depth. Finding direction without being lost in the intense colour rewards the eye that grows in understanding over time. Sultani speaks to those who already know.",
    details: "Hand-knotted wool-cotton blend. Ottoman Sultani motif system: flower, cloud, palmette geometry. Deep crimson ground root dye. Cotton weft provides durability, wool pile provides softness.",
    mood: "Ottoman, magnificent, generous"
  },
  {
    id: "sal-hali-no-11",
    folderNum: 11,
    imageCount: 8,
    name: "Shawl Carpet",
    tagline: "The lightness of cloth, met with the permanence of carpet",
    origin: "Shawl Carpet Tradition",
    material: "Wool & Cotton Blend",
    style: "Shawl Carpet",
    dimensions: "1.82 × 1.29 m",
    totalArea: "2.33 m²",
    colors: ["Saffron Yellow", "Warm Brown", "Khaki", "Beige"],
    story: "The shawl carpet tradition draws inspiration from the great shawl weaving of the East. The delicacy of the patterns and the softness of the colour transitions give the carpet a sense of lightness like cloth — yet beneath lies a heavy, solid structure. This contradiction makes the shawl carpet the longest to understand, but once understood, impossible to abandon. The dialogue of saffron and brown carries the colour memory of the Central Asian steppe. Its timelessness comes precisely from this naturalness.",
    details: "Hand-knotted wool-cotton blend. Fine patterning technique inspired by the shawl fabric sensibility. Saffron tone vegetable dye. Composition is symmetrical; pattern continuity from corner to corner.",
    mood: "Delicate, deceptively light, natural"
  },
  {
    id: "ogul-ipegi-no-12",
    folderNum: 12,
    imageCount: 7,
    name: "Cocoon Silk — Antique",
    tagline: "The triple seal of raw silk, time, and the master's hand",
    origin: "Antique — Turkish Tradition",
    material: "Cocoon Silk — Antique",
    style: "Antique Cocoon Silk",
    dimensions: "1.70 × 1.30 m",
    totalArea: "2.21 m²",
    colors: ["Faded Gold", "Beige", "Tea", "Cream"],
    story: "Cocoon silk — the rawest, most natural form of cocoon thread — is a material increasingly rare in the world. This antique piece presents an even rarer form of that rare material: matured over time, its colours softened, its surface burnished. The aged brilliance that antique carpets possess cannot be imitated with any new material; it is earned only by waiting decades. To hold this piece in your hands is like holding history. This is precisely what collectors seek — this density of character.",
    details: "Cocoon silk hand-knotted, antique. Colours naturally faded and merged over time. Surface luminosity exceptional — the original brilliance of raw silk has transformed into a deep glow over the years. Collector's piece.",
    mood: "Antique, enigmatic, alive within time"
  },
  {
    id: "turk-ipek-no-13",
    folderNum: 13,
    imageCount: 8,
    name: "Turkish Silk No. XIII",
    tagline: "The collection's last word, but its quietest one",
    origin: "Turkish Silk Tradition",
    material: "Pure Silk",
    style: "Turkish Silk",
    dimensions: "1.92 × 1.25 m",
    totalArea: "2.40 m²",
    colors: ["Faded Rose", "Gold", "Cream", "Antique Beige"],
    story: "One of the largest silk pieces in the collection, this carpet, unlike the others, does not raise its voice. The motifs above the faded rose ground are heard like a whisper — not powerful, but insistent. The longer you look, the deeper the pattern becomes; details you couldn't see at first glance slowly reveal themselves. This is a piece made not for the impatient, but for those who know how to sit and look. The largeness of its dimensions is not a contradiction with its quietness — it is a completion. The most powerful words are sometimes spoken most quietly.",
    details: "Pure silk, hand-knotted. Faded rose ground achieved through refined dosing of silk dye. Motifs fine and detailed; high knot density. Large format, soft compositional balance.",
    mood: "Quiet, deep, unfolding over time"
  },
];
