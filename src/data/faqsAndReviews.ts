/**
 * @file faqsAndReviews.ts
 * -------------------------------------------------------------
 * FAQs and Sample Google Reviews for Mugal Bangels, Jhunjhunu.
 * All sample reviews are explicitly labeled as sample data.
 * -------------------------------------------------------------
 */

export interface CustomerReview {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  commentHi: string;
  commentEn: string;
  verifiedBuyer: boolean;
  avatarBg: string;
}

export interface FaqItem {
  id: string;
  questionHi: string;
  questionEn: string;
  answerHi: string;
  answerEn: string;
  category: 'sizing' | 'order' | 'delivery' | 'care';
}

export const SAMPLE_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'सुमन शेखावत (Suman Shekhawat)',
    location: 'मंडावा रोड, झुंझुनूं',
    rating: 5,
    date: '2 सप्ताह पहले',
    commentHi: 'मेरी शादी के लिए मुगल बैंगल्स से कस्टमाइज्ड ब्राइडल चूड़ा बनवाया था। शुद्ध लाख का काम और लहंगे से मिलता हुआ रंग बिल्कुल सटीक था। नेहरू मार्केट में सबसे विश्वसनीय दुकान है!',
    commentEn: 'Ordered a customized bridal chooda set for my wedding. The pure lac work and color matching with my poshaak was flawless. Most trusted shop in Nehru Market!',
    verifiedBuyer: true,
    avatarBg: 'bg-rose-700',
  },
  {
    id: 'rev-2',
    name: 'पूजा शर्मा (Pooja Sharma)',
    location: 'नवलगढ़, शेखावाटी',
    rating: 5,
    date: '1 माह पहले',
    commentHi: 'तीज के अवसर पर लहरिया लाख चूड़ियों के 6 सेट लिए थे। बहुत ही खनकदार और चिकनी फिनिश है। फोन पर व्हाट्सएप करके ऑर्डर दिया और समय पर मिल गया।',
    commentEn: 'Bought 6 sets of lehariya lac bangles for Teej. The chime and smooth finish are top notch. Ordered easily via WhatsApp and received promptly.',
    verifiedBuyer: true,
    avatarBg: 'bg-emerald-700',
  },
  {
    id: 'rev-3',
    name: 'अनीता कंवर (Anita Kanwar)',
    location: 'काजीवाड़ा, झुंझुनूं',
    rating: 5,
    date: '3 सप्ताह पहले',
    commentHi: 'रजवाड़ी हाथी-मुख कड़ा लिया। वजनदार और सोने जैसी चमक है। दुकान मालिक का व्यवहार बहुत विनम्र है और बैठने की अच्छी व्यवस्था है।',
    commentEn: 'Purchased the Rajputi elephant-face brass and lac kada. Feels heavy and premium like real gold. Owner is very courteous and welcoming.',
    verifiedBuyer: true,
    avatarBg: 'bg-amber-700',
  },
  {
    id: 'rev-4',
    name: 'रेखा अग्रवाल (Rekha Agarwal)',
    location: 'चिड़ावा रोड, झुंझुनूं',
    rating: 5,
    date: '1 माह पहले',
    commentHi: 'मेरी बिटिया के लिए छोटे नाप (1.12) की लाख की चूड़ियाँ कहीं नहीं मिल रही थीं, यहाँ तुरंत सटीक नाप की मिल गईं। बिल्कुल सुरक्षित और हल्की हैं।',
    commentEn: 'Couldn’t find pure lac bangles in small kids size (1.12) anywhere, but found the perfect fit here immediately. Very lightweight and safe.',
    verifiedBuyer: true,
    avatarBg: 'bg-purple-700',
  },
  {
    id: 'rev-5',
    name: 'मोनिका जांगिड़ (Monika Jangid)',
    location: 'सीकर / जयपुर',
    rating: 5,
    date: '2 माह पहले',
    commentHi: 'पार्सल से मंगवाया था, पैकिंग इतनी सुरक्षित थी कि एक भी चूड़ी को खरोंच नहीं आई। Google पर 5 स्टार रेटिंग देने लायक दुकान है।',
    commentEn: 'Ordered for parcel delivery to Sikar. The packaging was so secure that not a single piece was scratched. Truly deserves 5-star rating.',
    verifiedBuyer: true,
    avatarBg: 'bg-teal-700',
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'sizing',
    questionHi: 'चूड़ी का सही नाप (Size 2.2, 2.4, 2.6, 2.8) कैसे पता करें?',
    questionEn: 'How do I determine my exact bangle size (2.2, 2.4, 2.6, 2.8)?',
    answerHi: 'अपनी किसी भी पुरानी सही नाप वाली गोल चूड़ी के अंदर का व्यास (Inner Diameter) स्केल या टेप से नापें: 2.2 = 2.12 इंच (54 मिमी), 2.4 = 2.25 इंच (57 मिमी), 2.6 = 2.37 इंच (60 मिमी), 2.8 = 2.50 इंच (64 मिमी)। आप हमें अपनी चूड़ी का फोटो सिक्के या स्केल के साथ व्हाट्सएप भी कर सकते हैं।',
    answerEn: 'Measure the inside diameter of your best-fitting round bangle using a ruler: 2.2 = 54mm (2.12 in), 2.4 = 57mm (2.25 in), 2.6 = 60mm (2.37 in), 2.8 = 64mm (2.50 in). You can also send a photo of your existing bangle next to a ruler on WhatsApp.',
  },
  {
    id: 'faq-2',
    category: 'order',
    questionHi: 'शादी-ब्याह व सामूहिक कार्यक्रम (Bulk Orders) के लिए ऑर्डर कैसे दें?',
    questionEn: 'How can I place bulk orders for weddings, sangeet, or return gifts?',
    answerHi: 'शादी में बरी, भात या महिला संगीत में उपहार देने के लिए हम 20 से लेकर 500 सेट तक विशेष रियायती थोक दरों (Wholesale Rates) पर तैयार करते हैं। हमारी वेबसाइट पर "थोक ऑर्डर फॉर्म" भरें या सीधे व्हाट्सएप पर शादी की तारीख व बजट भेजें।',
    answerEn: 'For weddings, Bhat ceremonies, and Sangeet return gifting, we manufacture 20 to 500+ customized sets at discounted bulk rates. Submit our Bulk Order form or message us your event date and budget on WhatsApp.',
  },
  {
    id: 'faq-3',
    category: 'delivery',
    questionHi: 'झुंझुनूं, शेखावाटी और बाहर डिलीवरी में कितना समय लगता है?',
    questionEn: 'How long does delivery take in Jhunjhunu, Shekhawati, and pan-India?',
    answerHi: 'झुंझुनूं शहर में सेम-डे (उसी दिन) डिलीवरी या दुकान के बाहर कर्बसाइड पिकअप उपलब्ध है। शेखावाटी (सीकर, चूरू, चिड़ावा, खेतड़ी) में 1-2 दिन और जयपुर/दिल्ली या पूरे भारत में 3-5 दिन में स्पीड पोस्ट या सुरक्षित कूरियर से पार्सल पहुँच जाता है।',
    answerEn: 'Same-day delivery and curbside pickup are available within Jhunjhunu city. Deliveries across Shekhawati (Sikar, Churu, Nawalgarh, Khetri) take 1-2 days, while pan-India delivery arrives in 3-5 business days via tracked parcel.',
  },
  {
    id: 'faq-4',
    category: 'order',
    questionHi: 'अगर नाप सही नहीं आया तो क्या एक्सचेंज (बदलाव) संभव है?',
    questionEn: 'Is size exchange possible if the bangles do not fit comfortably?',
    answerHi: 'हाँ! यदि चूड़ियाँ बिना किसी टूट-फूट के मूल स्थिति में हैं, तो आप दुकान पर आकर या कूरियर द्वारा 7 दिनों के भीतर साइज बदल सकते हैं। कस्टमाइज्ड नाम वाले चूड़े पर नाप पहले ही व्हाट्सएप पर 100% कन्फर्म किया जाता है।',
    answerEn: 'Yes! Unworn bangles in original condition can be exchanged for size within 7 days at our shop or via courier. For custom bridal chooda with names, we verify measurements beforehand via WhatsApp.',
  },
  {
    id: 'faq-5',
    category: 'care',
    questionHi: 'शुद्ध राजस्थानी लाख की चूड़ियों की देखभाल कैसे करें?',
    questionEn: 'How should I care for authentic Rajasthani pure lac bangles?',
    answerHi: 'लाख एक प्राकृतिक और पवित्र पदार्थ है। इसे अत्यधिक गर्मी (जैसे गर्म प्रेस या सीधी धूप) और पानी में लंबे समय तक भिगोने से बचाएं। पहनने के बाद मुलायम कपड़े से पोंछकर डिब्बे में मखमली कपड़े में लपेटकर रखें। यह पीढ़ियों तक चलती हैं।',
    answerEn: 'Lac is an organic natural resin. Keep it away from intense direct heat (hot ovens, irons) and prolonged water submersion. Wipe gently with a dry micro-fiber cloth after use and store in a velvet-lined box.',
  },
];
