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
    name: "Isfahan — No. I",
    tagline: "İki dünyanın ipliğinden dokunmuş bir sessizlik",
    origin: "İsfahan Geleneği",
    material: "İpek — Yün Karışım",
    style: "İsfahan İpek Yün Karışımı",
    dimensions: "1,80 × 1,11 m",
    totalArea: "2,00 m²",
    colors: ["Derin Kırmızı", "Krem İvory", "Antik Altın", "Gece Mavisi"],
    story: "Isfahan'ın atölyeleri, beş yüz yılı aşkın bir süredir dünyanın en rafine halılarını üretmektedir. Bu parça, o geleneğin sessiz bir tanığıdır. İpek ve yünün birlikteliği, parlak ile mat arasında sürekli değişen bir ışık oyununa zemin hazırlar — gün içinde farklı saatlerde aynı halı farklı bir karakter sunar. Sabah ışığında ipek motifleri öne çıkar, akşam yumuşayan ışıkla yün yüzeyi devralır. Her motif, bir bahçenin anısıdır — Isfahan'ın büyük avlularında açan çiçeklerin, akan suyun ve gölgenin geometrik hafızası.",
    details: "El düğümü tekniği. İpek ve yün karışımı, zemin parlaklığı ile yüzeyde mat derinlik arasında mükemmel bir denge kurar. Isfahan stiline özgü arabesk motifler ve merkezi madalyon kompozisyonu. Doğal bitkisel boya. Kare başına 350'nin üzerinde düğüm.",
    mood: "Törensel, sessiz, ağırlıklı"
  },
  {
    id: "turkish-silk-no-2",
    folderNum: 2,
    imageCount: 8,
    name: "Turkish Silk — No. II",
    tagline: "Anadolu'nun bin yıllık sabrı, tek bir dokumada duraksadı",
    origin: "Türk İpek Geleneği",
    material: "Saf İpek",
    style: "Turkish Silk",
    dimensions: "1,87 × 1,20 m",
    totalArea: "2,24 m²",
    colors: ["Safran", "Lacivert", "Altın", "Kırık Beyaz"],
    story: "Türk ipek halıcılığı; çiçek, yıldız ve geometrinin bir arada yaşadığı nadir bir evrendir. Bu parçada ipek ipliğinin doğasından gelen eşsiz parlaklık, motifler arasında sanki içeriden aydınlanıyormuş gibi yayılır. Dokunuşta serin, bakışta sıcak — bu ikili çelişki, gerçek ipek halıyı tüm kumaşlardan ayıran o tarif edilemez özelliktir. Ustanın elleri burada birer müzisyen gibi çalışmış; her düğüm titiz bir nota gibi yerli yerine oturtulmuş. Eser, onlarca yıl sonra da aynı parlaklıkla konuşmaya devam eder.",
    details: "Saf ipek, el düğümü. Yüzey ışığa göre renk değiştiren kadife benzeri bir derinlik sunar. Madalyon merkezli kompozisyon, köşe palmetleri ile tamamlanmış. Bitkisel boya. Kare başına 400 düğüm.",
    mood: "Parlak, zarif, canlı"
  },
  {
    id: "turk-ipek-no-3",
    folderNum: 3,
    imageCount: 8,
    name: "Türk İpek — No. III",
    tagline: "Her düğüm, bir ustanın nefesini içinde taşır",
    origin: "Türk İpek Geleneği",
    material: "Saf İpek",
    style: "Türk İpek",
    dimensions: "1,82 × 1,21 m",
    totalArea: "2,20 m²",
    colors: ["Bordo", "Fildişi", "Bakır", "Antrasit"],
    story: "Anadolu'nun ipek halıcılığında ustadan çırağa geçen bir sır vardır: motifler öğretilmez, hissedilir. Bu parçada, nesiller boyunca taşınan o bilinç kendini gösterir. Kırmızının derinlikleri yüzeye çıktığında, odanın ağırlık merkezi kayar — halı nereye yerleşirse, dikkatler oraya akar. Geometrik bordür çerçevesi orta alanın sonsuz gibi görünen hareketini tutar; merkezde zaman durur. Fildişi dokunuşlar, koyu zeminde birer nefes gibi açılır — her bakışta yeni bir ayrıntı keşfedilir.",
    details: "El düğümü saf ipek. Kırmızı tonu kök boya ile elde edilmiş; zamanla daha da derinleşir. Türk düğüm tekniği (Gördes düğümü). Güçlü kontrast bordür ve merkezi madalyon yapısı.",
    mood: "Otoriter, sıcak, köklü"
  },
  {
    id: "iran-ipek-no-4",
    folderNum: 4,
    imageCount: 8,
    name: "İran İpek — No. IV",
    tagline: "Pers bahçesinin şiiri, ipek iplikle kalıcı hale geldi",
    origin: "İran İpek Geleneği",
    material: "Saf İpek",
    style: "İran İpek",
    dimensions: "1,86 × 1,27 m",
    totalArea: "2,36 m²",
    colors: ["Koyu Zümrüt", "Altın Sarısı", "Kırmızı", "Krem"],
    story: "İran halıcılığı, dünyanın en zengin desenli sanatlarından birini barındırır. Bu parçada, Pers bahçe geleneğinin çiçeksel dili — palmiye, lotus, arabesk — birbirine dolanmış bir ağ oluşturur. Zemin rengi, üzerine düşen her ışıkla yeniden tanımlanır: sabah güneşinde zümrüt, öğleden sonra yosun, akşamüstü kadife gibi koyu. Yalnızca bakmak bile yetmez; bu halı izlenmek, etrafında yürünmek ister. Hangi açıdan bakılırsa bakılsın, en az bir motif sadece size bakıyormuş gibi görünür.",
    details: "El düğümü saf İran ipeği. Kare başına 400'ün üzerinde düğüm. Çiçeksel arabesk motifler ve köşe kompozisyonları. Bitkisel ve mineral boya karışımı. İran kökenine özgü kıvrımlı dal motifi.",
    mood: "Kraliyet gibi, botanik, çok katmanlı"
  },
  {
    id: "turkish-carpet-no-5",
    folderNum: 5,
    imageCount: 8,
    name: "Türk Halı — No. V",
    tagline: "Koleksiyonun en geniş sesi, en derin sessizliği",
    origin: "Türk Halı Geleneği",
    material: "Saf İpek",
    style: "Turkish Carpet",
    dimensions: "1,99 × 1,39 m",
    totalArea: "2,76 m²",
    colors: ["Kehribar", "Lacivert", "Akik Kırmızısı", "Bej"],
    story: "Koleksiyonun en geniş ipek parçası. 2,76 metrekarelik yüzeyinde her bölge kendi dilini konuşur; ancak tüm bu diller tek bir şiiri oluşturur. Büyük boyut, halının yalnızca zemin kaplama değil, mekan kuran bir nesne olduğunu ortaya koyar. Yerleştirildiği odada duvarlar bile geri çekilir; mimari halının etrafında yeniden organize olur. Kehribar tonları gün boyu farklı biçimlerde ısınır ve soğur — canlı bir nesne gibi nefes alır. Bu ölçüde ipek üretmek, en az üç ustanın yıl boyu ortak çalışmasını gerektirir.",
    details: "Koleksiyonun en büyük ipek parçası. El düğümü, saf ipek. Geniş merkezi kompozisyon, dört köşede ayna simetrisi. Renk geçişleri keskin değil; her ton komşusuna eriyerek akar. Yatay yüzeyde doğal işık kırılması.",
    mood: "Geniş, nefes alan, mekan kurucu"
  },
  {
    id: "hereke-ipek-no-6",
    folderNum: 6,
    imageCount: 8,
    name: "Hereke İpek",
    tagline: "Osmanlı sarayının mirasçısı, bugün yalnızca birkaç elde",
    origin: "Hereke, Türkiye",
    material: "Saf İpek",
    style: "Hereke İpek",
    dimensions: "1,93 × 1,33 m",
    totalArea: "2,56 m²",
    colors: ["Krem", "Altın", "Gül Pembesi", "Gümüş Gri"],
    story: "Hereke; 19. yüzyılda Osmanlı sarayının özel halılarını üreten küçük bir Anadolu şehridir. Burada üretilen halılar ihracat için değil, saray odaları için dokunurdu — her parça belirli bir oda, belirli bir makam için tasarlanırdı. Bu parça, o geleneğin günümüze ulaşan nadir örneklerinden biridir. Hereke ustalarının imzası açıktır: zemin, sanki dokunulmamış bahçe toprağı gibi yumuşak; motifler ise tam tersi — keskin, belirgin, egemen. Bu zıtlık, parçaya saray protokolünün atmosferini verir.",
    details: "Gerçek Hereke ipeği, el düğümü. Düğüm yoğunluğu olağanüstü: kare santimetre başına en az 36 düğüm. Osmanlı saray motif repertuarı: lale, karanfil, selvi. Doğal krem zemin üzerine altın bordür.",
    mood: "Saray, rafine, dokunulmaz"
  },
  {
    id: "turk-ipek-no-7",
    folderNum: 7,
    imageCount: 7,
    name: "Türk İpek — No. VII",
    tagline: "Işığın durduğu yer",
    origin: "Türk İpek Geleneği",
    material: "Saf İpek",
    style: "Türk İpek",
    dimensions: "1,86 × 1,24 m",
    totalArea: "2,31 m²",
    colors: ["Lacivert", "Altın Sarısı", "Kırmızı", "Beyaz"],
    story: "Bazı halılarda ışık yansır; bu halıda ışık durur. Lacivert zemin üzerindeki altın sarısı motifler, bir yıldız haritası gibi yerleşmiş — her biri kendi yörüngesinde döner, ama aralarındaki çekim kuvveti tüm kompozisyonu tek bir bütün olarak tutar. Gece rengiyle gündüz renginin bu kavuşması, halıya saat bağımsız bir varlık kazandırır. Karanlık bir odada bile, sanki içinden aydınlanıyormuş gibi parlar. Bu halının önünde bir an duraklamadan geçmek mümkün değildir.",
    details: "Saf ipek, el düğümü. Lacivert zemin lapis lazuli tonunda. Altın motifler yüksek ipek yoğunluğuyla ışığı kırarak metalik etki yaratır. Güçlü geometrik bordür sistemi. Bitkisel boya.",
    mood: "Gece göğü, yıldız gibi parıldayan, huzurlu"
  },
  {
    id: "isfahan-no-8",
    folderNum: 8,
    imageCount: 8,
    name: "Isfahan — No. VIII",
    tagline: "Aynı tezgahtan doğan, farklı ruhlar taşıyan ikiz",
    origin: "İsfahan Geleneği",
    material: "İpek — Yün Karışım",
    style: "İsfahan İpek Yün Karışımı",
    dimensions: "1,80 × 1,11 m",
    totalArea: "2,00 m²",
    colors: ["Terrakota", "Fildişi", "Bakır", "Gece Yeşili"],
    story: "No. I ile aynı geleneğin, aynı ustanın ellerinden çıktığı hissini verir — ama bu parça farklı bir mevsimde dokunmuş gibidir. Terrakota ve bakır tonları, No. I'ın seremonyal havasına karşın daha toprak, daha mahrem bir çağrışım taşır. İpek ve yünün birlikteliği burada farklı bir denge kurar; gündüz odası için davetkar, gece için gizemli. Aynı dil, farklı bir şiir. Bu iki parçayı birlikte görmek, bir ustanın aynı teknikle nasıl iki ayrı karakter yaratabileceğini ortaya koyar.",
    details: "El düğümü ipek-yün karışım. İsfahan madalyon kompozisyonu, arabesk köşe doldurmaları. Terrakota tonu kök boya ile elde edilmiş. İpek iplik parlaklığı, yünün mat dokusunu keser.",
    mood: "Toprak, mahrem, sıcak"
  },
  {
    id: "sultani-no-10",
    folderNum: 10,
    imageCount: 8,
    name: "Sultani",
    tagline: "Osmanlı'nın son büyük söyleyişi",
    origin: "Osmanlı Geleneği",
    material: "Yün — Pamuk Karışım",
    style: "Sultani",
    dimensions: "1,80 × 1,24 m",
    totalArea: "2,23 m²",
    colors: ["Derin Kırmızı", "Altın", "Lacivert", "Krem"],
    story: "Sultani stili, Osmanlı saray zevkinin halı diline çevrilmiş halidir. Desen yoğunluğu ve renk cüretkarlığı bir arada var olur; ancak bu bir kalabalık değil, disiplinli bir gösteridir. Her element, kendine tahsis edilmiş alanda egemendir. Bu parçada pamuk ve yün karışımı, hafif mat bir yüzey yaratır — parlaklık yoktur ama derinlik vardır. Yoğun rengin içinde kaybolmadan yön bulmak, zamanla daha iyi anlayan gözü ödüllendirir. Sultani, zaten bilenlere konuşur.",
    details: "El düğümü yün-pamuk karışım. Osmanlı Sultani motif sistemi: çiçek, bulut, palmet geometrisi. Derin kırmızı zemin kök boyası. Pamuk atkı sağlamlık, yün hav yumuşaklık sağlar.",
    mood: "Osmanlı, görkemli, cömert"
  },
  {
    id: "sal-hali-no-11",
    folderNum: 11,
    imageCount: 8,
    name: "Şal Halı",
    tagline: "Kumaşın hafifliği, halının kalıcılığıyla buluştu",
    origin: "Şal Halı Geleneği",
    material: "Yün — Pamuk Karışım",
    style: "Şal Halı",
    dimensions: "1,82 × 1,29 m",
    totalArea: "2,33 m²",
    colors: ["Safran Sarısı", "Kahverengi", "Haki", "Bej"],
    story: "Şal halı geleneği, Doğu'nun büyük şal dokumacılığından ilham almıştır. Desenlerin narinliği ve renk geçişlerinin yumuşaklığı, halıya kumaş gibi bir hafiflik hissi verir — oysa altında ağır, sağlam bir yapı yatar. Bu çelişki, şal halıyı anlaması en uzun süren ama bir kez anlaşıldığında bırakılmayan bir parça yapar. Safran ve kahverenginin diyalogu, Orta Asya bozkırlarının renk hafızasını taşır. Zamansızlığı, tam da bu doğallığından gelir.",
    details: "El düğümü yün-pamuk karışım. İnce desenleme tekniği şal kumaş anlayışından ilham alır. Safran tonu bitkisel boya. Kompozisyon simetrik; köşeden köşeye desen sürekliliği.",
    mood: "Narin, hafif görünen ağır, doğal"
  },
  {
    id: "ogul-ipegi-no-12",
    folderNum: 12,
    imageCount: 7,
    name: "Ogul İpeği — Antika",
    tagline: "Ham ipeğin, zamanın ve ustanın üçlü mührü",
    origin: "Antika — Türk Geleneği",
    material: "İpek — Antika (Ogul İpeği)",
    style: "Ogul İpeği Antika",
    dimensions: "1,70 × 1,30 m",
    totalArea: "2,21 m²",
    colors: ["Soluk Altın", "Bej", "Çay Rengi", "Krem"],
    story: "Ogul ipeği — koza ipliğinin en ham, en doğal hali — dünyada giderek azalan bir malzemedir. Bu antika parça, o nadir malzemenin çok daha nadir bir formunu sunar: zamanla olgunlaşmış, renklerini yumuşatmış, yüzeyini perdahlamış. Antika halıların verdiği bu yaşlı parlaklık hiçbir yeni malzemeyle taklit edilemez; yalnızca onlarca yıl bekleyerek kazanılır. Bu parçayı elinizde tutmak, tarihi tutmak gibidir. Koleksiyonerlerin aradığı şey, tam da bu karakter yoğunluğudur.",
    details: "Ogul ipeği el düğümü, antika. Renkler zamanla doğal olarak solmuş ve birbirine karışmış. Yüzey ışığı olağanüstü — ham ipeğin özgün parlaklığı yıllar içinde derin bir glow'a dönüşmüş. Koleksiyoner parçası.",
    mood: "Antik, gizemli, zaman içinde yaşayan"
  },
  {
    id: "turk-ipek-no-13",
    folderNum: 13,
    imageCount: 8,
    name: "Türk İpek — No. XIII",
    tagline: "Koleksiyonun son sözü, ama en sessiz olanı",
    origin: "Türk İpek Geleneği",
    material: "Saf İpek",
    style: "Türk İpek",
    dimensions: "1,92 × 1,25 m",
    totalArea: "2,40 m²",
    colors: ["Soluk Gül", "Altın", "Krem", "Antik Bej"],
    story: "Koleksiyonun en büyük ipek parçalarından biri olan bu halı, diğerlerinin aksine sesini yükseltmez. Soluk gül zemininin üzerindeki motifler, bir fısıltı gibi duyulur — güçlü değil, ısrarcı. Uzun süre baktıkça desen derinleşir; ilk bakışta göremeyeceğiniz ayrıntılar yavaşça kendilerini açar. Bu, sabırsızlar için değil, oturup bakmasını bilenler için yapılmış bir parçadır. Ölçüsünün büyüklüğü sessizliğiyle bir çelişki değil, bir tamamlanmadır. En güçlü sözler, bazen en sessiz şekilde söylenir.",
    details: "Saf ipek, el düğümü. Soluk gül zemin, ipek boyasının zarifçe dozlanmasıyla elde edilmiş. Motifler ince ve detaylı; düğüm yoğunluğu yüksek. Büyük boyut, yumuşak kompozisyon dengesi.",
    mood: "Sessiz, derin, zamanla açılan"
  },
];
