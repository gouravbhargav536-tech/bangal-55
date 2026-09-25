import React, { useState } from 'react';
import { Sparkles, ChevronRight, Gift, Calendar, ArrowRight, Check } from 'lucide-react';
import { FestivalBanner, ShopConfig } from '../config/shopConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeroFestivalBannerProps {
  config: ShopConfig;
  lang: 'hi' | 'en';
  onSelectCategory: (categoryId: string) => void;
  onOpenBulkOrder: () => void;
}

const FESTIVAL_IMAGES: Record<string, string> = {
  teej: '/src/assets/images/festive_lehariya_bangles_1790311336234.jpg',
  karva_chauth: '/src/assets/images/bridal_chooda_set_1790311312916.jpg',
  gangaur: '/src/assets/images/rajputi_kada_pair_1790311324843.jpg',
  wedding: '/src/assets/images/bridal_chooda_set_1790311312916.jpg',
  rakshabandhan: '/src/assets/images/rajasthani_lac_bangles_1790311299986.jpg',
};

export const HeroFestivalBanner: React.FC<HeroFestivalBannerProps> = ({
  config,
  lang,
  onSelectCategory,
  onOpenBulkOrder,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const festivals = config.festivals;
  const current = festivals[activeTab] || festivals[0];
  const activeImage = FESTIVAL_IMAGES[current.id] || FESTIVAL_IMAGES.teej;

  const handleWhatsAppFestivalInquiry = (fest: FestivalBanner) => {
    const text = `${fest.whatsappPromptHi} (Mugal Bangels Jhunjhunu)`;
    const url = `https://wa.me/${config.whatsapp.rawNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-royal-maroon text-white pt-3 pb-8 px-3 sm:px-4 border-b-2 border-amber-500/30">
      {/* Decorative Lehariya background accent */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-lehariya-pattern" />

      {/* Traditional Rajasthani Shisha Mirror-work SVG Top Trim */}
      <div className="relative max-w-6xl mx-auto mb-3">
        <div className="flex items-center justify-between text-xs text-amber-300 font-medium pb-2 border-b border-amber-500/30">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span className="font-semibold uppercase tracking-wider text-[11px]">
              {lang === 'hi' ? 'राजस्थानी पारंपरिक उत्सव व त्यौहार संग्रह' : 'Rajasthani Festive Bangle Editions'}
            </span>
          </div>
          <span className="text-amber-200/90 text-[11px] font-medium hidden xs:inline">
            {lang === 'hi' ? 'सीधा कारीगर से • शुद्ध लाख हस्तकला' : 'Direct Artisans • Pure Lac Handcraft'}
          </span>
        </div>
      </div>

      {/* Horizontal Festival Selector Chips (Exact match with reference screenshot) */}
      <div className="max-w-6xl mx-auto mb-4">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 scroll-smooth">
          {festivals.map((fest, idx) => {
            const isActive = idx === activeTab;
            return (
              <button
                key={fest.id}
                onClick={() => setActiveTab(idx)}
                className={`shrink-0 min-h-[42px] px-4 py-1.5 rounded-full text-xs font-bold transition-all border flex items-center gap-2 active:scale-95 shadow-sm touch-manipulation select-none ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-stone-950 border-yellow-200 shadow-md ring-2 ring-yellow-400/50 scale-[1.02]'
                    : 'bg-[#691415]/80 hover:bg-[#691415] text-amber-100 border-amber-400/40 hover:border-amber-300'
                }`}
              >
                <span className="text-sm">
                  {fest.id === 'teej'
                    ? '🌿'
                    : fest.id === 'karva_chauth'
                    ? '🌙'
                    : fest.id === 'gangaur'
                    ? '📿'
                    : fest.id === 'wedding'
                    ? '👰'
                    : '🎁'}
                </span>
                <span>{lang === 'hi' ? fest.badgeHi : fest.badgeEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Festival Spotlight Card with High-Res Image (Matches screenshot) */}
      <div className="max-w-6xl mx-auto">
        <div
          className={`relative rounded-3xl p-5 sm:p-7 bg-gradient-to-br from-[#691415] via-[#520e11] to-[#3a090b] border-2 border-[#D4AF37] shadow-2xl overflow-hidden`}
        >
          {/* Subtle gold floral watermark in background */}
          <div className="absolute right-0 bottom-0 text-white/5 text-9xl font-serif pointer-events-none select-none -mb-6 -mr-6">
            ॐ
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Content Area */}
            <div className="md:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400/25 to-yellow-400/25 text-[#F5C252] text-xs font-bold border border-amber-400/50">
                <Calendar className="w-3.5 h-3.5" />
                <span>{lang === 'hi' ? current.badgeHi : current.badgeEn}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-serif drop-shadow-md">
                {lang === 'hi' ? current.nameHi : current.nameEn}
              </h2>

              <p className="text-sm sm:text-base text-amber-100/95 leading-relaxed font-medium">
                {lang === 'hi' ? current.taglineHi : current.taglineEn}
              </p>

              {/* Verified Checklist as shown in reference */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-amber-200/95 pt-1">
                <span className="flex items-center gap-1.5 font-semibold">
                  <span className="w-4 h-4 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center text-[10px]">
                    ✓
                  </span>
                  <span>{lang === 'hi' ? 'सटीक नाप (2.2 से 2.10)' : 'All Sizes 2.2 to 2.10'}</span>
                </span>
                <span className="flex items-center gap-1.5 font-semibold">
                  <span className="w-4 h-4 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center text-[10px]">
                    ✓
                  </span>
                  <span>{lang === 'hi' ? 'शुद्ध लाख व मीनाकारी' : 'Pure Lac & Meenakari'}</span>
                </span>
                <span className="flex items-center gap-1.5 font-semibold">
                  <span className="w-4 h-4 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center text-[10px]">
                    ✓
                  </span>
                  <span>{lang === 'hi' ? 'पोशाक से मैचिंग' : 'Dress Matching'}</span>
                </span>
              </div>

              {/* Action Buttons: WhatsApp green, View designs, Bulk order */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
                <button
                  onClick={() => handleWhatsAppFestivalInquiry(current)}
                  className="min-h-[46px] flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white font-bold rounded-xl shadow-lg border border-emerald-400 active:scale-95 transition-all text-xs sm:text-sm"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
                  <span>{lang === 'hi' ? 'व्हाट्सएप पर ऑर्डर करें' : 'Order on WhatsApp'}</span>
                </button>

                <button
                  onClick={() => {
                    onSelectCategory(current.recommendedCategory);
                    const el = document.getElementById('bangle-catalogue-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="min-h-[46px] flex items-center justify-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-stone-950 border border-yellow-200 rounded-xl text-xs sm:text-sm font-black active:scale-95 transition-all shadow-md"
                >
                  <span>{lang === 'hi' ? 'डिज़ाइन देखें' : 'View Designs'}</span>
                  <ChevronRight className="w-4 h-4 text-stone-950" />
                </button>

                <button
                  onClick={onOpenBulkOrder}
                  className="min-h-[46px] flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 rounded-xl text-xs sm:text-sm font-semibold active:scale-95 transition-all"
                >
                  <Gift className="w-4 h-4 text-yellow-300" />
                  <span>{lang === 'hi' ? 'शादी थोक' : 'Bulk Order'}</span>
                </button>
              </div>
            </div>

            {/* Right Bangle Photography Frame (Traditional Scalloped Jharokha Arch) */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <div className="relative w-full max-w-[290px] sm:max-w-[330px] aspect-4/3 sm:aspect-square rounded-t-[3.5rem] rounded-b-2xl overflow-hidden border-3 border-amber-400/80 shadow-2xl bg-stone-900 group">
                {/* Traditional shisha mirror dots */}
                <div className="absolute top-2.5 left-4 w-3.5 h-3.5 rounded-full bg-amber-200 border border-amber-700 shadow-md z-10" />
                <div className="absolute top-2.5 right-4 w-3.5 h-3.5 rounded-full bg-amber-200 border border-amber-700 shadow-md z-10" />

                <img
                  src={activeImage}
                  alt={lang === 'hi' ? current.nameHi : current.nameEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-3.5">
                  <span className="text-[10px] text-yellow-300 font-bold uppercase tracking-wider">
                    {lang === 'hi' ? 'हस्तनिर्मित स्पेशल' : 'Handcrafted Special'}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white leading-tight font-serif">
                    {lang === 'hi' ? current.nameHi : current.nameEn}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
