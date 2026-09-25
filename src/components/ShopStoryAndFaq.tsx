import React, { useState } from 'react';
import {
  ChevronDown,
  Star,
  Sparkles,
  HelpCircle,
  Quote,
  ShieldCheck,
  CheckCircle,
  Heart,
} from 'lucide-react';
import { ShopConfig } from '../config/shopConfig';
import { FAQ_LIST, SAMPLE_REVIEWS, FaqItem } from '../data/faqsAndReviews';

interface ShopStoryAndFaqProps {
  config: ShopConfig;
  lang: 'hi' | 'en';
  onOpenReviewModal: () => void;
  onOpenBulkModal: () => void;
}

export const ShopStoryAndFaq: React.FC<ShopStoryAndFaqProps> = ({
  config,
  lang,
  onOpenReviewModal,
  onOpenBulkModal,
}) => {
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? '' : id);
  };

  return (
    <div className="bg-[#FFFDF7] space-y-12 py-8">
      {/* 1. OUR STORY SECTION (हमारी दुकान की कहानी) */}
      <section className="max-w-6xl mx-auto px-3 sm:px-4">
        <div className="relative rounded-3xl bg-gradient-to-br from-amber-900/90 via-[#800020] to-[#580c1f] text-white p-5 sm:p-8 shadow-xl overflow-hidden border-2 border-amber-400/30">
          {/* Subtle Rajasthani motif background */}
          <div className="absolute inset-0 opacity-10 bg-lehariya-pattern pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-yellow-300 text-xs font-bold border border-amber-300/40 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === 'hi' ? 'शेखावाटी हस्तकला परंपरा' : 'Authentic Shekhawati Heritage'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white tracking-tight leading-tight">
                {lang === 'hi' ? config.shopStory.titleHi : config.shopStory.titleEn}
              </h2>

              <p className="mt-3 text-sm sm:text-base text-amber-100/95 leading-relaxed font-normal">
                {lang === 'hi' ? config.shopStory.contentHi : config.shopStory.contentEn}
              </p>

              {/* Highlights row */}
              <div className="mt-6 pt-5 border-t border-amber-500/30 grid grid-cols-3 gap-3 text-center">
                <div className="bg-black/20 p-2.5 rounded-xl border border-amber-400/20">
                  <span className="block text-xl sm:text-2xl font-black text-amber-300 font-serif">
                    {config.shopStory.artisanLegacyYears}+
                  </span>
                  <span className="text-[11px] text-amber-100 font-medium">
                    {lang === 'hi' ? 'वर्षों का विश्वास' : 'Years of Trust'}
                  </span>
                </div>
                <div className="bg-black/20 p-2.5 rounded-xl border border-amber-400/20">
                  <span className="block text-xl sm:text-2xl font-black text-amber-300 font-serif">
                    100%
                  </span>
                  <span className="text-[11px] text-amber-100 font-medium">
                    {lang === 'hi' ? 'शुद्ध लाख व नक्काशी' : 'Handcrafted Lac'}
                  </span>
                </div>
                <div className="bg-black/20 p-2.5 rounded-xl border border-amber-400/20">
                  <span className="block text-xl sm:text-2xl font-black text-amber-300 font-serif">
                    2.2 - 2.10
                  </span>
                  <span className="text-[11px] text-amber-100 font-medium">
                    {lang === 'hi' ? 'सारे नाप' : 'All Sizes'}
                  </span>
                </div>
              </div>
            </div>

            {/* Shop Interior Photograph with Traditional Jharokha Styling */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-t-[3rem] rounded-b-2xl overflow-hidden border-2 border-amber-400/60 shadow-2xl relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3">
                <img
                  src="/src/assets/images/bangle_shop_display_1790311348086.jpg"
                  alt="Mugal Bangels Shop Interior Jhunjhunu"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-bold text-amber-200">
                    {lang === 'hi'
                      ? 'मुगल बैंगल्स • नेहरू मार्केट, झुंझुनूं'
                      : 'Mugal Bangels • Nehru Market, Jhunjhunu'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CUSTOMER REVIEWS (Google समीक्षाएँ - Marked clearly as sample) */}
      <section className="max-w-6xl mx-auto px-3 sm:px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>{lang === 'hi' ? 'ग्राहकों का अनुभव' : 'Customer Reviews'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif">
              {lang === 'hi' ? 'झुंझुनूं वासियों की पसंदीदा दुकान' : 'Loved by Families in Jhunjhunu'}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-rose-800 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200 font-medium">
              {lang === 'hi' ? 'सैंपल समीक्षाएँ (Sample Reviews)' : 'Sample Data'}
            </span>
            <button
              onClick={onOpenReviewModal}
              className="text-xs text-[#800020] hover:text-[#991b1b] font-bold underline underline-offset-2 ml-1"
            >
              {lang === 'hi' ? '+ समीक्षा लिखें' : '+ Add Review'}
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SAMPLE_REVIEWS.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-xs flex flex-col justify-between hover:border-amber-400 transition-colors"
            >
              <div>
                {/* Rating stars & verified badge */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-400">{rev.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal italic">
                  &quot;{lang === 'hi' ? rev.commentHi : rev.commentEn}&quot;
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-2.5">
                <div
                  className={`w-8 h-8 rounded-full ${rev.avatarBg} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs`}
                >
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-900 leading-tight">
                    {rev.name}
                  </h4>
                  <p className="text-[11px] text-stone-500">{rev.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="max-w-4xl mx-auto px-3 sm:px-4">
        <div className="text-center max-w-xl mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'अक्सर पूछे जाने वाले सवाल' : 'Got Questions?'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif">
            {lang === 'hi' ? 'चूड़ी खरीदारी से जुड़े सामान्य प्रश्न' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            {lang === 'hi'
              ? 'नाप, एक्सचेंज, डिलीवरी और थोक ऑर्डर के बारे में पूरी जानकारी'
              : 'Details on sizing, exchanges, pan-India delivery & bulk wedding orders'}
          </p>
        </div>

        <div className="space-y-2.5">
          {FAQ_LIST.map((faq: FaqItem) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full min-h-[50px] p-3.5 sm:p-4 text-left font-bold text-xs sm:text-sm text-stone-900 flex items-center justify-between gap-3 hover:bg-stone-50 transition-colors"
                >
                  <span className="font-serif">
                    {lang === 'hi' ? faq.questionHi : faq.questionEn}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-amber-800 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#800020]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-3.5 sm:px-4 pb-4 pt-1 text-xs sm:text-sm text-stone-600 border-t border-stone-100 bg-stone-50/50 leading-relaxed">
                    <p>{lang === 'hi' ? faq.answerHi : faq.answerEn}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
