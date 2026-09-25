/**
 * @file shopConfig.ts
 * -------------------------------------------------------------
 * MUGAL BANGELS (मुगल बैंगल्स) - MASTER SHOP CONFIGURATION
 * 
 * NOTE FOR SHOP OWNER / DEVELOPER:
 * Keep the shop name, address, phone number, and operating hours
 * in this single object exactly synchronized with your official
 * Google Business Profile (Google My Business / Google Maps).
 * 
 * Copy and paste these exact text blocks into Google Maps / GMB
 * to ensure maximum local SEO visibility in Jhunjhunu & Shekhawati!
 * -------------------------------------------------------------
 */

export interface ShopHours {
  dayHi: string;
  dayEn: string;
  time: string;
  isOpen: boolean;
}

export interface TrustService {
  id: string;
  iconName: 'store' | 'car' | 'truck' | 'accessibility';
  labelHi: string;
  labelEn: string;
  descHi: string;
  descEn: string;
}

export interface FestivalBanner {
  id: string;
  nameHi: string;
  nameEn: string;
  taglineHi: string;
  taglineEn: string;
  badgeHi: string;
  badgeEn: string;
  colorScheme: string; // Tailwind gradient classes
  bgAccent: string;
  recommendedCategory: string;
  whatsappPromptHi: string;
}

export interface ShopConfig {
  name: {
    hi: string;
    en: string;
    taglineHi: string;
    taglineEn: string;
  };
  category: {
    hi: string;
    en: string;
  };
  rating: {
    stars: number;
    reviewCount: number;
    isSample: boolean; // Marked clearly as sample data per instructions
  };
  phone: {
    display: string;
    raw: string; // e.g. +919414000000 (tel link)
  };
  whatsapp: {
    display: string;
    rawNumber: string; // numeric with country code, e.g. 919414000000
    defaultMessageHi: string;
    defaultMessageEn: string;
  };
  address: {
    shopNo: string;
    complex: string;
    market: string;
    mohalla: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    landmark: string;
    fullFormattedHi: string;
    fullFormattedEn: string;
  };
  timing: {
    currentStatusHi: string;
    currentStatusEn: string;
    closesAt: string;
    opensAt: string;
    allDaysSchedule: string;
  };
  links: {
    googleBusinessProfile: string;
    googleMapsDirections: string;
    googleReviewDirect: string;
  };
  services: TrustService[];
  shopStory: {
    titleHi: string;
    titleEn: string;
    contentHi: string;
    contentEn: string;
    artisanLegacyYears: number;
  };
  festivals: FestivalBanner[];
}

export const DEFAULT_SHOP_CONFIG: ShopConfig = {
  name: {
    hi: 'मुगल बैंगल्स',
    en: 'Mugal Bangels',
    taglineHi: 'पारंपरिक राजस्थानी लाख, रजवाड़ी कड़ा व ब्राइडल चूड़ा का विश्वसनीय प्रतिष्ठान',
    taglineEn: 'Authentic Rajasthani Lac, Rajputi Kada & Bridal Chooda Collection',
  },
  category: {
    hi: 'चूड़ी व कंगन की दुकान (Bangle Shop)',
    en: 'Bangle Shop & Bridal Jewelry',
  },
  rating: {
    stars: 5.0,
    reviewCount: 10,
    isSample: true, // Will display "(सैंपल रेटिंग / Sample Data)" clearly
  },
  phone: {
    display: '+91 94140 12345',
    raw: '+919414012345',
  },
  whatsapp: {
    display: '+91 94140 12345',
    rawNumber: '919414012345',
    defaultMessageHi: 'नमस्ते मुगल बैंगल्स! मुझे आपकी दुकान की चूड़ियों के बारे में जानकारी चाहिए।',
    defaultMessageEn: 'Hello Mugal Bangels! I would like to inquire about your bangle collection.',
  },
  address: {
    shopNo: 'G-5',
    complex: 'सिद्धि विनायक कॉम्प्लेक्स (Sidhi Vinayak Complex)',
    market: 'नेहरू मार्केट (Nehru Market)',
    mohalla: 'काजीवाड़ा मोहल्ला (Kajiwada Mohalla)',
    city: 'झुंझुनूं (Jhunjhunu)',
    district: 'झुंझुनूं',
    state: 'राजस्थान (Rajasthan)',
    pincode: '333001',
    landmark: 'नेहरू मार्केट, काजीवाड़ा के पास',
    fullFormattedHi: 'G-5, सिद्धि विनायक कॉम्प्लेक्स, नेहरू मार्केट, काजीवाड़ा मोहल्ला, झुंझुनूं, राजस्थान 333001',
    fullFormattedEn: 'G-5, Sidhi Vinayak Complex, Nehru Market, Kajiwada Mohalla, Jhunjhunu, Rajasthan 333001',
  },
  timing: {
    currentStatusHi: 'खुला है • शाम 7:30 बजे बंद होगा',
    currentStatusEn: 'Open • Closes 7:30 PM',
    opensAt: '10:00 AM',
    closesAt: '7:30 PM',
    allDaysSchedule: 'सोमवार - रविवार: प्रातः 10:00 बजे से सायं 7:30 बजे तक',
  },
  links: {
    googleBusinessProfile: 'https://maps.google.com/?q=Mugal+Bangels+Sidhi+Vinayak+Complex+Nehru+Market+Jhunjhunu+Rajasthan+333001',
    googleMapsDirections: 'https://www.google.com/maps/dir/?api=1&destination=28.1289,75.3995&destination_place_id=Mugal+Bangels+Jhunjhunu',
    googleReviewDirect: 'https://search.google.com/local/writereview?placeid=ChIJw7t9rJhunjhunuSamplePlaceId',
  },
  services: [
    {
      id: 'in_store',
      iconName: 'store',
      labelHi: 'दुकान पर खरीदारी',
      labelEn: 'In-store shopping',
      descHi: 'दुकान पर आकर हाथ से नाप लें और मनपसंद मैचिंग चूड़ियाँ चुनें',
      descEn: 'Visit in person, try sizes and customize your matching bangles',
    },
    {
      id: 'pickup',
      iconName: 'car',
      labelHi: 'कर्बसाइड पिकअप',
      labelEn: 'Kerbside pickup',
      descHi: 'व्हाट्सएप पर ऑर्डर बुक करें, दुकान के बाहर बिना उतरे प्राप्त करें',
      descEn: 'Book on WhatsApp, pick up outside the shop without parking hassle',
    },
    {
      id: 'delivery',
      iconName: 'truck',
      labelHi: 'सुरक्षित होम डिलीवरी',
      labelEn: 'Safe Delivery',
      descHi: 'झुंझुनूं शहर, शेखावाटी क्षेत्र और पूरे भारत में सुरक्षित पार्सल',
      descEn: 'Delivery across Jhunjhunu, Shekhawati, Jaipur and all India',
    },
    {
      id: 'wheelchair',
      iconName: 'accessibility',
      labelHi: 'सुलभ प्रवेश द्वार',
      labelEn: 'Wheelchair Accessible',
      descHi: 'ग्राउंड फ्लोर पर आसान प्रवेश और बुजुर्गों के लिए बैठने की उत्तम व्यवस्था',
      descEn: 'Ground floor step-free entrance with comfortable seating',
    },
  ],
  shopStory: {
    titleHi: 'हमारी दुकान की कहानी - विरासत और विश्वास',
    titleEn: 'Our Story - Heritage of Shekhawati',
    contentHi: 'झुंझुनूं के ऐतिहासिक नेहरू मार्केट में स्थित "मुगल बैंगल्स" वर्षों से पारंपरिक राजस्थानी लाख की चूड़ियों, मारवाड़ी दुल्हन चूड़ा, मीनाकारी कंगन और उत्सवों की शोभा बढ़ाने वाले अनूठे आभूषणों का प्रमुख केंद्र रहा है। हमारे कुशल कारीगर शुद्ध लाख और कुंदन-नगीनों से हर सेट को आपके हाथ के सटीक नाप (2.2 से 2.10) के अनुसार विशेष रूप से तैयार करते हैं। गणगौर, हरियाली तीज, करवा चौथ से लेकर शादी-ब्याह तक—हम हर सुहागिन और दुल्हन के लिए खुशियों के रंग सजाते हैं।',
    contentEn: 'Nestled in the bustling Nehru Market of Jhunjhunu, Mugal Bangels has been synonymous with the time-honored art of Rajasthani handcrafted lac bangles, royal kada, and bespoke bridal chooda sets. Our dedicated master artisans craft each piece with precision to match your attire, saree, or lehenga, custom-sized from 2.2 to 2.10. From vibrant Teej and Gangaur celebrations to royal wedding ensembles, we bring tradition, purity, and festive elegance to every woman.',
    artisanLegacyYears: 25,
  },
  festivals: [
    {
      id: 'teej',
      nameHi: 'हरियाली व कजरी तीज स्पेशल',
      nameEn: 'Hariyali & Kajari Teej Special',
      taglineHi: 'लहरिया, मोरपंखी हरा और मारवाड़ी सुहाग चूड़ियाँ',
      taglineEn: 'Emerald greens, lehariya waves & festive lac sets',
      badgeHi: 'तीज स्पेशल',
      badgeEn: 'Teej Special',
      colorScheme: 'from-emerald-800 via-teal-900 to-green-950',
      bgAccent: '#065f46',
      recommendedCategory: 'lac',
      whatsappPromptHi: 'नमस्ते, मुझे तीज उत्सव के लिए हरे और लहरिया चूड़ा सेट देखने हैं।',
    },
    {
      id: 'karva_chauth',
      nameHi: 'करवा चौथ - अखंड सौभाग्य संग्रह',
      nameEn: 'Karva Chauth - Regal Suhagan Sets',
      taglineHi: 'शाही महरून, लाल कुंदन और झिलमिलाता लाख चूड़ा',
      taglineEn: 'Royal crimson lac bangles with kundan & zircon shimmer',
      badgeHi: 'करवा चौथ',
      badgeEn: 'Karva Chauth',
      colorScheme: 'from-rose-900 via-red-950 to-amber-950',
      bgAccent: '#881337',
      recommendedCategory: 'bridal',
      whatsappPromptHi: 'नमस्ते, मुझे करवा चौथ के लिए लाल/महरून कुंदन चूड़ा सेट चाहिए।',
    },
    {
      id: 'gangaur',
      nameHi: 'गणगौर उत्सव - ईसर-गौर चूड़ा',
      nameEn: 'Gangaur Festival Collection',
      taglineHi: 'पारंपरिक राजपूती लाख के कड़े व रंग-बिरंगे गोटेदार सेट',
      taglineEn: 'Traditional Rajputi lac kada with mirror-work accents',
      badgeHi: 'गणगौर उत्सव',
      badgeEn: 'Gangaur Collection',
      colorScheme: 'from-amber-800 via-orange-900 to-red-950',
      bgAccent: '#9a3412',
      recommendedCategory: 'kada',
      whatsappPromptHi: 'नमस्ते, मुझे गणगौर पूजा के लिए पारंपरिक राजस्थानी कड़े और चूड़ियां देखनी हैं।',
    },
    {
      id: 'wedding',
      nameHi: 'शादी-ब्याह व दुल्हन चूड़ा (Bridal Chooda)',
      nameEn: 'Royal Wedding & Bridal Chooda',
      taglineHi: 'रजवाड़ी कड़े, लटकन, कलीरे मैचिंग और कस्टमाइज्ड नाम चूड़ा',
      taglineEn: 'Customized bridal sets with latkan, kundan and bridal name charms',
      badgeHi: 'ब्राइडल स्पेशल',
      badgeEn: 'Bridal Special',
      colorScheme: 'from-red-950 via-purple-950 to-amber-950',
      bgAccent: '#581c87',
      recommendedCategory: 'bridal',
      whatsappPromptHi: 'नमस्ते, मुझे शादी के लिए ब्राइडल चूड़ा सेट और कलीरे कस्टमाइज करवाने हैं।',
    },
    {
      id: 'rakshabandhan',
      nameHi: 'रक्षाबंधन व त्योहार उपहार',
      nameEn: 'Rakshabandhan & Festive Gifting',
      taglineHi: 'बहनों के लिए खूबसूरत मीनाकारी व काँच की चूड़ियों के डिब्बे',
      taglineEn: 'Handpicked gift boxes of meenakari & glass bangles for sisters',
      badgeHi: 'त्योहार उपहार',
      badgeEn: 'Festive Gift Box',
      colorScheme: 'from-fuchsia-950 via-rose-900 to-amber-900',
      bgAccent: '#701a75',
      recommendedCategory: 'meenakari',
      whatsappPromptHi: 'नमस्ते, मुझे त्योहार पर गिफ्ट करने के लिए चूड़ी गिफ्ट सेट चाहिए।',
    },
  ],
};

const STORAGE_KEY = 'mugal_bangels_config_v1';

export function getStoredShopConfig(): ShopConfig {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_SHOP_CONFIG;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_SHOP_CONFIG, ...parsed };
  } catch {
    return DEFAULT_SHOP_CONFIG;
  }
}

export function saveShopConfig(config: ShopConfig): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (e) {
    console.error('Failed to save config in localStorage', e);
  }
}

export function resetShopConfig(): ShopConfig {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
  return DEFAULT_SHOP_CONFIG;
}
