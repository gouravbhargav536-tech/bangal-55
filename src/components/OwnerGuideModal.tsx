import React, { useState } from 'react';
import { X, BookOpen, Check, Copy, ExternalLink, HelpCircle, MessageSquare } from 'lucide-react';
import { ShopConfig } from '../config/shopConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

interface OwnerGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ShopConfig;
  lang: 'hi' | 'en';
}

export const OwnerGuideModal: React.FC<OwnerGuideModalProps> = ({
  isOpen,
  onClose,
  config,
  lang,
}) => {
  const [copiedMsg, setCopiedMsg] = useState(false);

  if (!isOpen) return null;

  // The ready-to-send WhatsApp message template for happy customers
  const reviewMessageTemplate = `नमस्ते जी! मुगल बैंगल्स (झुंझुनूं) से खरीदारी करने के लिए आपका बहुत-बहुत धन्यवाद। 🙏

आशा है आपको हमारी लाख व ब्राइडल चूड़ियाँ पसंद आई होंगी। यदि आप अपना 1 मिनट निकालकर Google पर हमारे लिए 5-स्टार रेटिंग व प्यारा सा रिव्यू देंगे, तो हमें बहुत खुशी होगी:

👉 रिव्यू लिंक: ${config.links.googleReviewDirect}

आपका आशीर्वाद हमारे शेखावाटी के कारीगरों के लिए अनमोल है!
- मुगल बैंगल्स, नेहरू मार्केट, झुंझुनूं`;

  const handleCopyReviewMessage = () => {
    navigator.clipboard.writeText(reviewMessageTemplate);
    setCopiedMsg(true);
    setTimeout(() => setCopiedMsg(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#FFFDF7] rounded-3xl border-2 border-amber-500/40 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#800020] text-amber-50 px-4 py-3.5 flex items-center justify-between border-b border-amber-500/30">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-300" />
            <div>
              <h3 className="font-bold text-base font-serif">
                {lang === 'hi' ? 'दुकान मालिक गाइड - Google Business Profile' : 'Shop Owner Guide - Google Business'}
              </h3>
              <p className="text-[11px] text-amber-200">
                {lang === 'hi'
                  ? 'झुंझुनूं में अपनी दुकान की ऑनलाइन उपस्थिति व ग्राहक बढ़ाने की सरल विधि'
                  : 'Step-by-step instructions to grow your local presence'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-amber-200 hover:text-white hover:bg-white/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 text-stone-800 text-xs sm:text-sm">
          {/* Step 1 */}
          <div className="p-4 bg-white rounded-2xl border border-amber-200 shadow-xs">
            <div className="flex items-center gap-2 font-bold text-[#800020] text-sm mb-1.5">
              <span className="w-6 h-6 rounded-full bg-[#800020] text-white flex items-center justify-center text-xs">
                1
              </span>
              <h4>Google Business Profile कैसे क्लेम और वेरीफ़ाई करें?</h4>
            </div>
            <p className="text-stone-600 leading-relaxed pl-8">
              अपने मोबाइल या कंप्यूटर पर <strong>business.google.com</strong> खोलें या Google Maps पर अपनी दुकान &quot;Mugal Bangels Jhunjhunu&quot; खोजें। &quot;Claim this business&quot; (यह मेरा व्यवसाय है) पर क्लिक करें। Google आपके रजिस्टर्ड नंबर पर SMS या वीडियो वेरिफिकेशन के माध्यम से प्रोफाइल वेरीफाई कर देगा।
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-4 bg-white rounded-2xl border border-amber-200 shadow-xs">
            <div className="flex items-center gap-2 font-bold text-[#800020] text-sm mb-1.5">
              <span className="w-6 h-6 rounded-full bg-[#800020] text-white flex items-center justify-center text-xs">
                2
              </span>
              <h4>फ़ोटो, समय और पता हमेशा अपडेट कैसे रखें?</h4>
            </div>
            <p className="text-stone-600 leading-relaxed pl-8">
              हर हफ्ते तीज, करवा चौथ, और शादी सीजन पर नई चूड़ियों और दुकान के काउंटर की 3-4 साफ तस्वीरें अपलोड करें। त्योहारों पर समय (जैसे रात 8 बजे तक) अपडेट करें। दुकान का पता वेबसाइट और Google Maps दोनों पर एक जैसा रखें ताकि Google सर्च में आपकी दुकान सबसे ऊपर आए।
            </p>
          </div>

          {/* Step 3: Review WhatsApp template with copy */}
          <div className="p-4 bg-amber-50/80 rounded-2xl border-2 border-amber-300 shadow-xs">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2 font-bold text-[#800020] text-sm">
                <span className="w-6 h-6 rounded-full bg-[#800020] text-white flex items-center justify-center text-xs">
                  3
                </span>
                <h4>ग्राहकों से 5-स्टार रिव्यू कैसे मंगाएँ?</h4>
              </div>
              <span className="text-[11px] bg-amber-200/80 text-amber-900 px-2 py-0.5 rounded-full font-semibold">
                व्हाट्सएप टेम्पलेट
              </span>
            </div>
            <p className="text-stone-700 leading-relaxed pl-8 mb-3">
              जब भी कोई ग्राहक दुकान से चूड़ियाँ ले जाए या डिलीवरी प्राप्त करे, उन्हें नीचे दिया गया संदेश व्हाट्सएप पर भेजें। एक क्लिक में लिंक पर जाकर 5-स्टार देना बहुत आसान हो जाता है:
            </p>

            <div className="ml-8 p-3 bg-white rounded-xl border border-stone-300 font-mono text-xs text-stone-800 leading-relaxed whitespace-pre-wrap select-all">
              {reviewMessageTemplate}
            </div>

            <div className="ml-8 mt-2.5 flex flex-wrap gap-2">
              <button
                onClick={handleCopyReviewMessage}
                className="min-h-[42px] px-4 py-2 bg-stone-800 hover:bg-stone-900 text-white font-bold rounded-xl flex items-center gap-2 shadow transition-all active:scale-95 text-xs sm:text-sm"
              >
                {copiedMsg ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>मैसेज कॉपी हो गया!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-amber-300" />
                    <span>व्हाट्सएप रिव्यू मैसेज कॉपी करें</span>
                  </>
                )}
              </button>

              <a
                href={`https://wa.me/?text=${encodeURIComponent(reviewMessageTemplate)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[42px] px-4 py-2 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white font-bold rounded-xl flex items-center gap-2 shadow transition-all active:scale-95 text-xs sm:text-sm"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>व्हाट्सएप पर शेयर करें</span>
              </a>
            </div>
          </div>

          {/* Step 4: Send to phone & Directions features */}
          <div className="p-4 bg-white rounded-2xl border border-amber-200 shadow-xs">
            <div className="flex items-center gap-2 font-bold text-[#800020] text-sm mb-1.5">
              <span className="w-6 h-6 rounded-full bg-[#800020] text-white flex items-center justify-center text-xs">
                4
              </span>
              <h4>&quot;Send to Phone&quot; और &quot;Directions&quot; फीचर ग्राहकों के लिए कैसे काम करते हैं?</h4>
            </div>
            <p className="text-stone-600 leading-relaxed pl-8">
              • <strong>Send to Phone (फ़ोन पर भेजें):</strong> ग्राहक एक क्लिक से वेबसाइट लिंक अपने व्हाट्सएप या परिवार के साथ शेयर कर सकते हैं, जिससे घर बैठे महिलाएं चूड़ियों के डिज़ाइन चुन सकें।<br />
              • <strong>Directions (रास्ता देखें):</strong> जब झुंझुनूं शहर, मंडावा, नवलगढ़ या बाहर से कोई ग्राहक दुकान आना चाहता है, तो यह बटन सीधे Google Maps पर दुकान का सटीक मोड़ और नेविगेशन शुरू कर देता है।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
