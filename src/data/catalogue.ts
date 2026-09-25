/**
 * @file catalogue.ts
 * -----------------------------------------------------------------
 * MUGAL BANGELS CATALOGUE (मुगल बैंगल्स कैटलॉग)
 * 
 * Shop owner can modify prices, photos, set sizes, and stock availability
 * in this single file or via the built-in /admin dashboard.
 * -----------------------------------------------------------------
 */

export type MaterialType = 'lac' | 'glass' | 'metal' | 'silver' | 'brass';

export interface BangleItem {
  id: string;
  name: {
    hi: string;
    en: string;
  };
  category: string; // 'lac' | 'kada' | 'bridal' | 'meenakari' | 'silver' | 'glass' | 'kids' | 'lac_art'
  material: MaterialType;
  setSize: number; // e.g. 2 bangles, 4 bangles, 12, 24 bangles
  pricePerSet: number; // in INR
  originalPrice?: number; // MRP for festive discounts
  colors: string[];
  occasionTags: string[];
  sizesAvailable: string[]; // e.g. ['2.2', '2.4', '2.6', '2.8']
  inStock: boolean;
  isBestSeller?: boolean;
  isNew?: boolean;
  image: string;
  description: {
    hi: string;
    en: string;
  };
}

export interface CategoryMeta {
  id: string;
  nameHi: string;
  nameEn: string;
  iconTag: string;
  descriptionHi: string;
  descriptionEn: string;
  defaultMaterial: MaterialType;
  accentColor: string;
}

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'all',
    nameHi: 'सभी डिज़ाइन',
    nameEn: 'All Designs',
    iconTag: '✨',
    descriptionHi: 'दुकान का संपूर्ण संग्रह',
    descriptionEn: 'Browse the entire catalogue',
    defaultMaterial: 'lac',
    accentColor: '#800020',
  },
  {
    id: 'lac',
    nameHi: 'लाख की चूड़ियाँ',
    nameEn: 'Lac Bangles',
    iconTag: '📿',
    descriptionHi: 'शुद्ध राजस्थानी लाख से निर्मित पारंपरिक चूड़ियाँ',
    descriptionEn: 'Handmade authentic lac bangles of Rajasthan',
    defaultMaterial: 'lac',
    accentColor: '#b45309',
  },
  {
    id: 'kada',
    nameHi: 'रजवाड़ी कड़ा',
    nameEn: 'Rajputi Kada',
    iconTag: '👑',
    descriptionHi: 'शाही पीतल व लाख जड़ाऊ भारी कड़े',
    descriptionEn: 'Royal heavyweight kadas with kundan work',
    defaultMaterial: 'brass',
    accentColor: '#d97706',
  },
  {
    id: 'bridal',
    nameHi: 'दुल्हन चूड़ा (Bridal)',
    nameEn: 'Bridal Chooda Sets',
    iconTag: '👰',
    descriptionHi: 'शादी के लिए स्पेशल मारवाड़ी व पंजाबी चूड़ा सेट',
    descriptionEn: 'Bespoke bridal chooda with custom latkan',
    defaultMaterial: 'lac',
    accentColor: '#991b1b',
  },
  {
    id: 'meenakari',
    nameHi: 'मीनाकारी चूड़ियाँ',
    nameEn: 'Meenakari Bangles',
    iconTag: '🎨',
    descriptionHi: 'जयपुर व शेखावाटी की बारीक रंगीन मीना नक्काशी',
    descriptionEn: 'Intricate enamel artwork with floral motifs',
    defaultMaterial: 'metal',
    accentColor: '#0f766e',
  },
  {
    id: 'glass',
    nameHi: 'काँच की चूड़ियाँ',
    nameEn: 'Glass Bangles',
    iconTag: '💎',
    descriptionHi: 'खनकदार कांच की चूड़ियाँ, जरकन व वेलवेट कोटिंग',
    descriptionEn: 'Melodious glass bangles with matte & glitter finish',
    defaultMaterial: 'glass',
    accentColor: '#7c2d12',
  },
  {
    id: 'silver',
    nameHi: 'चाँदी की चूड़ियाँ',
    nameEn: 'Silver Bangles',
    iconTag: '💍',
    descriptionHi: 'ऑक्सीडाइज्ड जर्मन सिल्वर व एंटीक कंगन',
    descriptionEn: 'Oxidized antique silver & tribal Shekhawati kada',
    defaultMaterial: 'silver',
    accentColor: '#475569',
  },
  {
    id: 'kids',
    nameHi: 'बच्चों की चूड़ियाँ',
    nameEn: "Kids' Bangles",
    iconTag: '👶',
    descriptionHi: 'नन्हे हाथों के लिए हल्की, सुरक्षित व आकर्षक चूड़ियाँ',
    descriptionEn: 'Lightweight, smooth-edged bangles for children',
    defaultMaterial: 'lac',
    accentColor: '#ec4899',
  },
  {
    id: 'lac_art',
    nameHi: 'राजस्थानी लाख कला',
    nameEn: 'Rajasthani Lac Art',
    iconTag: '🏺',
    descriptionHi: 'हाथ की बारीक कारीगरी वाले नवरत्न व कुंदन पीस',
    descriptionEn: 'Artisan mastercraft bangles with uncut stones',
    defaultMaterial: 'lac',
    accentColor: '#854d0e',
  },
];

export const INITIAL_CATALOGUE: BangleItem[] = [
  {
    id: 'mb-lac-01',
    name: {
      hi: 'शाही राजस्थानी लाख कंगन (नवरत्न कुंदन)',
      en: 'Royal Rajasthani Lac Kada (Navratna Kundan)',
    },
    category: 'lac',
    material: 'lac',
    setSize: 2,
    pricePerSet: 650,
    originalPrice: 850,
    colors: ['लाल (Red)', 'गोल्ड (Gold)', 'हरा (Green)'],
    occasionTags: ['शादी-ब्याह (Wedding)', 'करवा चौथ (Karva Chauth)', 'तीज (Teej)'],
    sizesAvailable: ['2.4', '2.6', '2.8'],
    inStock: true,
    isBestSeller: true,
    image: '/src/assets/images/rajasthani_lac_bangles_1790311299986.jpg',
    description: {
      hi: 'शुद्ध लाख पर हाथ से जड़े गए कुंदन और मीना नगीने। यह कड़ा हर पारंपरिक साड़ी और लहंगे के साथ बेहद खूबसूरत लगता है।',
      en: 'Handcrafted pure lac pair embellished with uncut stones and royal golden beads. Perfect complement to heavy lehengas and festive poshak.',
    },
  },
  {
    id: 'mb-bridal-01',
    name: {
      hi: 'शाही मारवाड़ी दुल्हन चूड़ा सेट (लटकन व कलीरे मैचिंग)',
      en: 'Royal Marwari Bridal Chooda Set with Latkan',
    },
    category: 'bridal',
    material: 'lac',
    setSize: 24,
    pricePerSet: 2800,
    originalPrice: 3400,
    colors: ['लाल (Crimson Red)', 'महरून (Maroon)', 'गोल्ड (Gold)'],
    occasionTags: ['शादी-ब्याह (Wedding)', 'सगाई (Engagement)'],
    sizesAvailable: ['2.4', '2.6', '2.8'],
    inStock: true,
    isBestSeller: true,
    isNew: true,
    image: '/src/assets/images/bridal_chooda_set_1790311312916.jpg',
    description: {
      hi: '24 चूड़ियों का संपूर्ण दुल्हन सेट। इसमें आगे-पीछे भारी रजवाड़ी कड़े, बीच में कुंदन चूड़ियाँ और विशेष लटकन शामिल हैं। दूल्हा-दुल्हन का नाम भी लिखवाया जा सकता है।',
      en: 'Comprehensive 24-piece bridal chooda set featuring ornate front & back kadas, center kundan bangles, and delicate latkan bells. Custom groom/bride names available.',
    },
  },
  {
    id: 'mb-kada-01',
    name: {
      hi: 'राजपूती हाथी-मुख पीतल व लाख कड़ा जोड़ी',
      en: 'Rajputi Elephant Face Brass & Lac Kada Pair',
    },
    category: 'kada',
    material: 'brass',
    setSize: 2,
    pricePerSet: 1250,
    originalPrice: 1500,
    colors: ['एंटीक गोल्ड (Antique Gold)', 'लाल (Ruby Red)'],
    occasionTags: ['शादी-ब्याह (Wedding)', 'गणगौर (Gangaur)', 'पार्टी (Party)'],
    sizesAvailable: ['2.4', '2.6', '2.8', '2.10'],
    inStock: true,
    isBestSeller: true,
    image: '/src/assets/images/rajputi_kada_pair_1790311324843.jpg',
    description: {
      hi: 'शेखावाटी की राजसी विरासत से प्रेरित नक्काशीदार हाथी मुख वाला कड़ा। वजनदार और टिकाऊ सोने जैसी पॉलिश।',
      en: 'Regal carved elephant finial kada crafted with brass core and lac core settings. Rich micro-gold plating with long-lasting luster.',
    },
  },
  {
    id: 'mb-lac-02',
    name: {
      hi: 'हरियाली तीज लहरिया लाख चूड़ी सेट',
      en: 'Hariyali Teej Lehariya Lac Bangles Set',
    },
    category: 'lac',
    material: 'lac',
    setSize: 12,
    pricePerSet: 550,
    originalPrice: 700,
    colors: ['मोरपंखी हरा (Peacock Green)', 'पीला (Yellow)', 'गुलाबी (Rani Pink)'],
    occasionTags: ['तीज (Teej)', 'सावन (Sawan)', 'दैनिक उपयोग (Daily Wear)'],
    sizesAvailable: ['2.2', '2.4', '2.6', '2.8'],
    inStock: true,
    isNew: true,
    image: '/src/assets/images/festive_lehariya_bangles_1790311336234.jpg',
    description: {
      hi: 'सावन और तीज के लिए विशेष तीन रंगों का लहरिया पैटर्न। शुद्ध लाख से बनी खनकती और हाथ में आरामदायक चूड़ियाँ।',
      en: 'Signature 3-shade festive lehariya pattern hand-drawn on pure lac. Lightweight, smooth edges and auspicious for Sawan celebrations.',
    },
  },
  {
    id: 'mb-meenakari-01',
    name: {
      hi: 'शेखावाटी फ्लोरल मीनाकारी कंगन जोड़ी',
      en: 'Shekhawati Floral Meenakari Kada Pair',
    },
    category: 'meenakari',
    material: 'metal',
    setSize: 2,
    pricePerSet: 850,
    originalPrice: 1100,
    colors: ['मोरपंखी नीला (Royal Blue)', 'सफेद (Pearl White)', 'गोल्ड (Gold)'],
    occasionTags: ['त्योहार (Festival)', 'रक्षाबंधन (Rakhi)', 'दैनिक उपयोग (Daily Wear)'],
    sizesAvailable: ['2.4', '2.6', '2.8'],
    inStock: true,
    image: '/src/assets/images/festive_lehariya_bangles_1790311336234.jpg',
    description: {
      hi: 'हाथ की बारीक मीना नक्काशी के साथ कमल और मोर की आकृतियाँ। कभी भी रंग नहीं उड़ता, पानी में सुरक्षित।',
      en: 'Finely enameled with traditional peacock and lotus motifs. Fade-resistant ceramic coating over polished base metal.',
    },
  },
  {
    id: 'mb-glass-01',
    name: {
      hi: 'खनकदार कांच चूड़ी सेट - जरकन कटिंग (24 चूड़ियाँ)',
      en: 'Crystal Cut Velvet Glass Bangles (Box of 24)',
    },
    category: 'glass',
    material: 'glass',
    setSize: 24,
    pricePerSet: 350,
    originalPrice: 450,
    colors: ['लाल (Red)', 'महरून (Maroon)', 'हरा (Green)', 'गोल्डन (Golden)'],
    occasionTags: ['करवा चौथ (Karva Chauth)', 'दैनिक उपयोग (Daily Wear)', 'पूजा (Puja)'],
    sizesAvailable: ['2.2', '2.4', '2.6', '2.8'],
    inStock: true,
    image: '/src/assets/images/festive_lehariya_bangles_1790311336234.jpg',
    description: {
      hi: 'मजबूत टेम्पर्ड कांच की 24 चूड़ियाँ जिनमें बारीक जरकन का काम है। हाथ में पहनते ही सुहाग की मधुर खनक पैदा करती हैं।',
      en: 'High-strength tempered glass bangles embedded with fine micro-crystal sparkles. Traditional resonant chime and rich festive colors.',
    },
  },
  {
    id: 'mb-silver-01',
    name: {
      hi: 'एंटीक जर्मन सिल्वर घुँघरू कड़ा जोड़ी',
      en: 'Antique Oxidized German Silver Ghungroo Kada',
    },
    category: 'silver',
    material: 'silver',
    setSize: 2,
    pricePerSet: 950,
    originalPrice: 1250,
    colors: ['सिल्वर (Oxidized Silver)'],
    occasionTags: ['कॉलेज/ऑफिस (College/Office)', 'उत्सव (Festive)', 'दैनिक उपयोग (Daily Wear)'],
    sizesAvailable: ['2.4', '2.6', '2.8'],
    inStock: true,
    isNew: true,
    image: '/src/assets/images/rajputi_kada_pair_1790311324843.jpg',
    description: {
      hi: 'राजस्थानी ट्राइबल लुक वाला नक्काशीदार सिल्वर कड़ा, जिसमें महीन घुँघरू लगे हैं। कुर्ती और इंडो-वेस्टर्न ड्रेस के साथ शानदार मैच।',
      en: 'Tribal Rajasthani oxidized silver cuffs lined with delicate melodic ghungroo bells. Stunning with fusion wear and cotton kurtas.',
    },
  },
  {
    id: 'mb-lac-art-01',
    name: {
      hi: 'मास्टरपीस राजस्थानी लाख कला कंगन (हस्तनिर्मित)',
      en: 'Masterpiece Handcarved Rajasthani Lac Art Kada',
    },
    category: 'lac_art',
    material: 'lac',
    setSize: 2,
    pricePerSet: 1450,
    originalPrice: 1800,
    colors: ['शाही महरून (Imperial Maroon)', 'कुंदन गोल्ड (Kundan Gold)'],
    occasionTags: ['शादी-ब्याह (Wedding)', 'करवा चौथ (Karva Chauth)', 'गिफ्ट (Gift)'],
    sizesAvailable: ['2.4', '2.6', '2.8'],
    inStock: true,
    isBestSeller: true,
    image: '/src/assets/images/rajasthani_lac_bangles_1790311299986.jpg',
    description: {
      hi: 'झुंझुनूं के पुराने लाख शिल्पकारों द्वारा हाथ से तराशा गया अद्वितीय कंगन। इसमें शीशे (shisha mirror) और कुंदन का संयोजन है।',
      en: 'Collector heirloom grade lac work created by senior artisans in Jhunjhunu. Integrates miniature hand-cut glass mirrors and gold foil.',
    },
  },
  {
    id: 'mb-kids-01',
    name: {
      hi: 'नन्ही गुड़िया स्पेशल लाख चूड़ी सेट (सुरक्षित व मुलायम)',
      en: "Little Princess Smooth Lac Bangles Set (Kids')",
    },
    category: 'kids',
    material: 'lac',
    setSize: 4,
    pricePerSet: 250,
    originalPrice: 320,
    colors: ['गुलाबी (Baby Pink)', 'पीला (Sunny Yellow)', 'लाल (Cherry Red)'],
    occasionTags: ['जन्मदिन (Birthday)', 'त्योहार (Festivals)', 'गिफ्ट (Gift)'],
    sizesAvailable: ['1.12', '2.0', '2.2'],
    inStock: true,
    image: '/src/assets/images/rajasthani_lac_bangles_1790311299986.jpg',
    description: {
      hi: 'बच्चों की कोमल त्वचा के लिए विशेष चिकनी लाख से बनी बिना किसी चुभन वाली चूड़ियाँ। हल्के वजन में आकर्षक चमक।',
      en: 'Ultra-smooth rounded edge lac bangles formulated specifically for delicate kids wrists. Completely safe, lightweight and colorful.',
    },
  },
  {
    id: 'mb-bridal-02',
    name: {
      hi: 'रजवाड़ी पचरंगी दुल्हन चूड़ा (राजपूती पोशाक मैचिंग)',
      en: 'Rajputi Pachrangi Poshaak Matching Bridal Set',
    },
    category: 'bridal',
    material: 'lac',
    setSize: 18,
    pricePerSet: 2200,
    originalPrice: 2650,
    colors: ['पचरंगी (Multicolor 5-Shades)', 'गोल्ड (Gold)'],
    occasionTags: ['शादी-ब्याह (Wedding)', 'गणगौर (Gangaur)'],
    sizesAvailable: ['2.4', '2.6', '2.8'],
    inStock: true,
    image: '/src/assets/images/bridal_chooda_set_1790311312916.jpg',
    description: {
      hi: 'पारंपरिक 5 रंगों (लाल, हरा, पीला, नारंगी, नीला) का शाही मारवाड़ी मेल। राजपूती पोशाक और भारी चुनरी के साथ पूर्ण दुल्हन रूप।',
      en: 'Auspicious five-color royal marwari arrangement crafted for royal wedding processions and traditional poshaak attire.',
    },
  },
  {
    id: 'mb-glass-02',
    name: {
      hi: 'वेलवेट मैट कांच की चूड़ियाँ (12 चूड़ियों का पैक)',
      en: 'Velvet Matte Finish Glass Bangles (Pack of 12)',
    },
    category: 'glass',
    material: 'glass',
    setSize: 12,
    pricePerSet: 220,
    originalPrice: 280,
    colors: ['वाइन (Wine Red)', 'मोरपंखी (Teal)', 'मस्टर्ड (Mustard Yellow)'],
    occasionTags: ['दैनिक उपयोग (Daily Wear)', 'ऑफिस (Office)', 'पार्टी (Party)'],
    sizesAvailable: ['2.2', '2.4', '2.6', '2.8'],
    inStock: true,
    image: '/src/assets/images/festive_lehariya_bangles_1790311336234.jpg',
    description: {
      hi: 'मखमली फिनिश वाली कांच की चूड़ियाँ, जो हाथों में बहुत सभ्य और सुंदर दिखती हैं। किसी भी साड़ी या कुर्ती के साथ मिक्स-मैच करें।',
      en: 'Soft-touch velvet textured glass bangles offering an understated elegant look for daily elegance and mix-matching.',
    },
  },
  {
    id: 'mb-kada-02',
    name: {
      hi: 'गोल्ड प्लेटेड लटकन कड़ा जोड़ी (घुँघरू व नगीने)',
      en: 'Gold Plated Latkan Kada Pair with Crystal Drops',
    },
    category: 'kada',
    material: 'metal',
    setSize: 2,
    pricePerSet: 990,
    originalPrice: 1290,
    colors: ['गोल्ड (Royal Gold)', 'रूबी (Ruby Red)'],
    occasionTags: ['शादी-ब्याह (Wedding)', 'करवा चौथ (Karva Chauth)'],
    sizesAvailable: ['2.4', '2.6', '2.8'],
    inStock: true,
    isNew: true,
    image: '/src/assets/images/rajputi_kada_pair_1790311324843.jpg',
    description: {
      hi: 'नीचे झूलते हुए बारीक नगीने व लटकन जो हाथों के हिलने पर झंकार और चमक बिखेरते हैं।',
      en: 'Features cascading micro-jhumka pendants that catch candlelight and reflect shimmer during festive sangeet and weddings.',
    },
  },
];

const CATALOGUE_STORAGE_KEY = 'mugal_bangels_catalogue_v2';

export function getStoredCatalogue(): BangleItem[] {
  try {
    const raw = localStorage.getItem(CATALOGUE_STORAGE_KEY);
    if (!raw) return INITIAL_CATALOGUE;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_CATALOGUE;
  } catch {
    return INITIAL_CATALOGUE;
  }
}

export function saveCatalogue(items: BangleItem[]): void {
  try {
    localStorage.setItem(CATALOGUE_STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    console.error('Failed to save catalogue in localStorage', e);
  }
}

export function resetCatalogue(): BangleItem[] {
  try {
    localStorage.removeItem(CATALOGUE_STORAGE_KEY);
  } catch {}
  return INITIAL_CATALOGUE;
}

/**
 * Format Indian Rupee currency (e.g. ₹1,250)
 */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}
