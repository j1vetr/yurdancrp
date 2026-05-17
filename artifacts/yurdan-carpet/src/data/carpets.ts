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
    tagline: "A blue hidden inside the red",
    origin: "Isfahan Tradition",
    material: "Silk & Wool Blend",
    style: "Isfahan Silk-Wool",
    dimensions: "1.80 × 1.11 m",
    totalArea: "2.00 m²",
    colors: ["Deep Crimson", "Midnight Blue", "Ivory", "Antique Gold"],
    story: "Deep crimson is the dominant voice of this carpet. Midnight blue is its shadow appearing quietly in the central medallion, the corners, the inner edge of the border, then receding again. Neither colour limits the other; without one, the other would not carry the same weight. Ivory star motifs are scattered across the field as though placed by hand; antique gold accents give the whole composition a different face in morning light, and again at dusk. The silk and wool blend creates a surface that shifts through the hours at times matte, at times barely luminous.",
    details: "Hand-knotted silk and wool blend. Central medallion with arabesque corner composition. Natural vegetable dye. Over 350 knots per square inch.",
    mood: "Ceremonial, quiet, weighty"
  },
  {
    id: "turkish-silk-no-2",
    folderNum: 2,
    imageCount: 8,
    name: "Turkish Silk No. II",
    tagline: "From deep to pale, like a single breath",
    origin: "Turkish Silk Tradition",
    material: "Pure Silk",
    style: "Turkish Silk",
    dimensions: "1.87 × 1.20 m",
    totalArea: "2.24 m²",
    colors: ["Deep Burgundy", "Ice Blue", "Silver Grey", "Ivory"],
    story: "An ice-blue medallion unfolds across a deep burgundy ground as though light were coming from within rather than above. The silver-grey lines of the border frame this transition; ivory details allow the composition to breathe. Pure silk shows colour as something deeper than it is: purplish in the morning, bluish at noon, nearly grey by late afternoon. The same carpet, in the same room, has something different to say depending on the hour.",
    details: "Pure silk, hand-knotted. Central medallion with corner palmette composition. Vegetable dye. 400 knots per square inch.",
    mood: "Luminous, elegant, vivid"
  },
  {
    id: "turk-ipek-no-3",
    folderNum: 3,
    imageCount: 8,
    name: "Turkish Silk No. III",
    tagline: "The colour of night, with the brightness of day",
    origin: "Turkish Silk Tradition",
    material: "Pure Silk",
    style: "Turkish Silk",
    dimensions: "1.82 × 1.21 m",
    totalArea: "2.20 m²",
    colors: ["Midnight Blue", "Sky Blue", "Antique Gold", "Near Black"],
    story: "Midnight blue is the foundation of this carpet. Rising above it, pale blue arches almost architectural in their arrangement add depth to the ground, giving it the feeling of standing beneath a vaulted dome. Antique gold accents thread light through the structure; the near-black border holds everything in, contains without constraining. Whatever room it enters, it makes the space feel larger. Not a floor covering an object that defines the room around it.",
    details: "Pure silk, hand-knotted. Gördes knot technique. Strong geometric border system. Vegetable dye.",
    mood: "Cool, architectural, nocturnal"
  },
  {
    id: "iran-ipek-no-4",
    folderNum: 4,
    imageCount: 8,
    name: "Persian Silk No. IV",
    tagline: "A garden recorded in thread",
    origin: "Persian Silk Tradition",
    material: "Pure Silk",
    style: "Persian Silk",
    dimensions: "1.86 × 1.27 m",
    totalArea: "2.36 m²",
    colors: ["Golden Yellow", "Warm Brown", "Ivory", "Sage Green"],
    story: "At the centre, a bright yellow medallion a tree inside it, birds in its branches, an endless tangle of stem and leaf surrounding everything. This is a record of a garden; even if that garden no longer exists. A warm brown outer field frames it from every direction; ivory blossoms rise between the vines, sage-green leaves carry a freshness that is almost tangible. In the Persian tradition, the tree of life motif is never merely decorative it is an intention, a wish, a narrative woven into the knots.",
    details: "Pure Persian silk, hand-knotted. Over 400 knots per square inch. Arabesque floral composition. Mixed vegetable and mineral dye.",
    mood: "Botanical, layered, regal"
  },
  {
    id: "turkish-carpet-no-5",
    folderNum: 5,
    imageCount: 8,
    name: "Turkish Silk No. V",
    tagline: "Each niche, its own world",
    origin: "Turkish Carpet Tradition",
    material: "Pure Silk",
    style: "Turkish Silk",
    dimensions: "1.99 × 1.39 m",
    totalArea: "2.76 m²",
    colors: ["Ivory", "Navy Blue", "Crimson", "Antique Gold"],
    story: "An ivory ground carries a grid of prayer niches, each given its own colour and voice: one navy, one crimson, one mustard, one pale blue. Each distinct yet viewed together, they say a single thing. This is the largest silk piece in the collection. Whatever its dimensions, the composition never loses its coherence there is order in every corner, meaning within every niche. A carpet that does not merely cover a floor but arranges the room around itself.",
    details: "Pure silk, hand-knotted. Wide central composition with mirror symmetry at all four corners. Natural light refraction across the horizontal surface. The largest silk piece in the collection.",
    mood: "Expansive, breathing, space-defining"
  },
  {
    id: "hereke-ipek-no-6",
    folderNum: 6,
    imageCount: 8,
    name: "Hereke Silk",
    tagline: "A dark ground, infinite detail",
    origin: "Hereke, Turkey",
    material: "Pure Silk",
    style: "Hereke Silk",
    dimensions: "1.93 × 1.33 m",
    totalArea: "2.56 m²",
    colors: ["Near Black", "Deep Crimson", "Ivory", "Deep Navy"],
    story: "From a distance it may read as dark, perhaps plain. Move closer and the ground begins to separate: a near-black field worked so densely with ivory blossoms that the line between ground and motif dissolves. A deep crimson border holds it like a frame; a navy inner stripe softens the transition. The Hereke signature is precisely this density writing that fills every inch of the page without ever feeling crowded. The carpets made for the Ottoman palace were made like this. Distinction carries itself quietly.",
    details: "Genuine Hereke silk, hand-knotted. Extraordinary knot density: at least 36 knots per square centimetre. Ottoman palace motif repertoire: tulip, carnation, cypress.",
    mood: "Palace, refined, untouchable"
  },
  {
    id: "turk-ipek-no-7",
    folderNum: 7,
    imageCount: 7,
    name: "Turkish Silk No. VII",
    tagline: "Worn gold, fresh navy",
    origin: "Turkish Silk Tradition",
    material: "Pure Silk",
    style: "Turkish Silk",
    dimensions: "1.86 × 1.24 m",
    totalArea: "2.31 m²",
    colors: ["Antique Gold", "Navy Blue", "Ivory", "Sand"],
    story: "An antique gold ground not faded, but matured. The colour has not diminished; it has settled. A navy border stands cool and composed against this warmth; the two carry each other without complaint. The central medallion both dissolves into the ground and emerges from it. Ivory and sand details lend the whole composition that characteristic antique light the kind that belongs not in a museum case, but in the room of whoever owns it.",
    details: "Pure silk, hand-knotted. Gold motifs achieve a metallic effect through high silk density. Strong geometric border system. Vegetable dye.",
    mood: "Antique, warm, at rest"
  },
  {
    id: "isfahan-no-8",
    folderNum: 8,
    imageCount: 8,
    name: "Isfahan No. VIII",
    tagline: "The same loom, a different season",
    origin: "Isfahan Tradition",
    material: "Silk & Wool Blend",
    style: "Isfahan Silk-Wool",
    dimensions: "1.80 × 1.11 m",
    totalArea: "2.00 m²",
    colors: ["Midnight Blue", "Deep Crimson", "Ivory", "Near Black"],
    story: "The same dimensions, the same technique as Isfahan No. I but a different spirit. Ivory arabesque scrollwork flows across a midnight blue field; a crimson border confines it to a bounded world without crowding it. A near-black outer frame gathers the whole composition inward. One speaks, the other listens. Placed side by side with No. I, they reveal what the same language can do when spoken in two different tones.",
    details: "Hand-knotted silk and wool blend. Isfahan medallion composition with arabesque corner fills. Root dye. Silk thread luminosity cuts through the matte texture of wool.",
    mood: "Grounded, intimate, cool"
  },
  {
    id: "sultani-no-10",
    folderNum: 10,
    imageCount: 8,
    name: "Sultani",
    tagline: "Every flower on the field carries a story",
    origin: "Ottoman Tradition",
    material: "Wool & Cotton Blend",
    style: "Sultani",
    dimensions: "1.80 × 1.24 m",
    totalArea: "2.23 m²",
    colors: ["Slate Blue", "Ivory", "Crimson", "Golden Yellow"],
    story: "Colourful florals rest freely across a steel-blue ground reds, yellows, creams, touches of green. Not busy; polyphonic. Each tone carries its own weight without bleeding into the next. The wool and cotton surface is slightly matte, not shiny the way silk is but this gives it a particular confidence. Not a carpet that demands to be looked at. One that rewards whoever takes the time.",
    details: "Hand-knotted wool and cotton blend. Ottoman Sultani motif system: flower, cloud, palmette geometry. Root dye. Cotton weft for durability, wool pile for softness.",
    mood: "Ottoman, generous, distinctive"
  },
  {
    id: "sal-hali-no-11",
    folderNum: 11,
    imageCount: 8,
    name: "Shawl Carpet",
    tagline: "A colour history hidden in the stripes",
    origin: "Shawl Carpet Tradition",
    material: "Wool & Cotton Blend",
    style: "Shawl Carpet",
    dimensions: "1.82 × 1.29 m",
    totalArea: "2.33 m²",
    colors: ["Deep Crimson", "Amber Gold", "Teal Blue", "Warm Brown"],
    story: "A deep crimson border sets a strong frame. Inside, horizontal stripes follow one another amber gold, teal, warm brown, each band carrying its own small geometric motifs. The logic of shawl-weaving brought into carpet technique. Every stripe has its own rhythm; together they produce a single rhythm. This carpet carries the colour memory of the Central Asian steppe. Its timelessness comes from exactly that naturalness.",
    details: "Hand-knotted wool and cotton blend. Fine patterning technique drawn from shawl-weaving sensibility. Saffron-tone vegetable dye. Symmetrical composition, continuous pattern from corner to corner.",
    mood: "Delicate, deceptively light, natural"
  },
  {
    id: "ogul-ipegi-no-12",
    folderNum: 12,
    imageCount: 7,
    name: "Cocoon Silk - Antique",
    tagline: "Whatever time does to it, it only improves",
    origin: "Antique - Turkish Tradition",
    material: "Cocoon Silk - Antique",
    style: "Antique Cocoon Silk",
    dimensions: "1.70 × 1.30 m",
    totalArea: "2.21 m²",
    colors: ["Faded Gold", "Slate Blue", "Ivory", "Warm Beige"],
    story: "A faded gold ground carries a central medallion, arabesque fills around it, a slate blue outer border framing the whole. The colours are not vivid they are something better: matured. The surface that raw silk thread builds over decades holds a depth no new material can replicate. Collectors seek precisely this: that heavy luminosity only lived-in time can give.",
    details: "Cocoon silk, hand-knotted, antique. Colours naturally softened and merged over time. Surface luminosity exceptional the original brilliance of raw silk has transformed into a deep, settled glow. Collector's piece.",
    mood: "Antique, enigmatic, alive within time"
  },
  {
    id: "turk-ipek-no-13",
    folderNum: 13,
    imageCount: 8,
    name: "Turkish Silk No. XIII",
    tagline: "Ivory flowing between crimson and black",
    origin: "Turkish Silk Tradition",
    material: "Pure Silk",
    style: "Turkish Silk",
    dimensions: "1.92 × 1.25 m",
    totalArea: "2.40 m²",
    colors: ["Deep Crimson", "Near Black", "Ivory", "Antique Gold"],
    story: "A cream and gold medallion opens across a deep crimson field; a near-black outer border holds everything inside. Three colours, three weights and the balance between them is exact. One of the most classical compositions in the collection. High knot density gives the motif edges their sharpness; the silk surface refracts light to bring the medallion forward like a lens. A carpet that, despite its size, does not raise its voice but fills a room without effort.",
    details: "Pure silk, hand-knotted. Fine and detailed motifs with high knot density. Large format, balanced compositional weight.",
    mood: "Quiet, deep, unfolding over time"
  },
];
