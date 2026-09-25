import React, { useState } from 'react';
import { Sparkles, ChevronRight, Gift, Calendar, ArrowRight } from 'lucide-react';
import { FestivalBanner, ShopConfig } from '../config/shopConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeroFestivalBannerProps {
  config: ShopConfig;
  lang: 'hi' | 'en';
  onSelectCategory: (categoryId: string) => void;
  onOpenBulkOrder: () => void;
}

export const HeroFestivalBanner: React.FC<HeroFestivalBannerProps> = ({
  config,
  lang,
  onSelectCategory,
  onOpenBulkOrder,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const festivals = config.festivals;
  const current = festivals[activeTab] || festivals[0];

  const handleWhatsAppFestivalInquiry = (fest: FestivalBanner) => {
    const text = `${fest.whatsappPromptHi} (Mugal Bangels Jhunjhunu)`;
    const url = `https://wa.me/${config.whatsapp.rawNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#800020] via-[#630419] to-[#4d0718] text-white pt-4 pb-6 px-3 sm:px-4">
      {/* Decorative Lehariya background accent */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-lehariya-pattern" />

      {/* Traditional Rajasthani Shisha Mirror-work SVG Top Trim */}
      <div className="relative max-w-6xl mx-auto mb-3">
        <div className="flex items-center justify-between text-xs text-amber-300 font-medium pb-2 border-b border-amber-500/30">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span className="font-semibold uppercase tracking-wider text-[11px]">
              {lang === 'hi' ? 'राजस्थानी पारंपरिक उत्सव संग्रह' : 'Rajasthani Festive Bangle Editions'}
            </span>
          </div>
          <span className="text-amber-200/80 text-[11px]">
            {lang === 'hi' ? 'सीधा कारीगर से' : 'Direct Artisans'}
          </span>
        </div>
      </div>

      {/* Horizontal Festival Selector Chips (Thumb-friendly swipe on mobile) */}
      <div className="max-w-6xl mx-auto mb-4">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 scroll-smooth">
          {festivals.map((fest, idx) => {
            const isActive = idx === activeTab;
            return (
              <button
                key={fest.id}
                onClick={() => setActiveTab(idx)}
                className={`shrink-0 min-h-[44px] px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border flex items-center gap-1.5 active:scale-95 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-stone-950 border-yellow-200 shadow-lg scale-[1.02]'
                    : 'bg-black/30 hover:bg-black/50 text-amber-100 border-amber-400/30'
                }`}
              >
                <span>{fest.id === 'teej' ? '🌿' : fest.id === 'karva_chauth' ? '🌙' : fest.id === 'gangaur' ? '📿' : fest.id === 'wedding' ? '👰' : '🎁'}</span>
                <span>{lang === 'hi' ? fest.badgeHi : fest.badgeEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Festival Spotlight Card with Jharokha Motif */}
      <div className="max-w-6xl mx-auto">
        <div className={`relative rounded-2xl p-4 sm:p-6 bg-gradient-to-br ${current.colorScheme} border-2 border-amber-400/40 shadow-xl overflow-hidden`}>
          {/* Subtle gold floral watermark in background */}
          <div className="absolute right-0 bottom-0 text-white/5 text-9xl font-serif pointer-events-none select-none -mb-6 -mr-6">
            ॐ
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-yellow-300 text-xs font-semibold border border-amber-300/30">
                <Calendar className="w-3 h-3" />
                <span>{lang === 'hi' ? current.badgeHi : current.badgeEn}</span>
              </div>

              <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight font-serif drop-shadow">
                {lang === 'hi' ? current.nameHi : current.nameEn}
              </h2>

              <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed font-medium">
                {lang === 'hi' ? current.taglineHi : current.taglineEn}
              </p>

              {/* Trust perks list */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-amber-200/90 pt-1">
                <span className="flex items-center gap-1">
                  ✓ {lang === 'hi' ? 'सटीक नाप (2.2 से 2.10)' : 'All Sizes 2.2-2.10'}
                </span>
                <span className="flex items-center gap-1">
                  ✓ {lang === 'hi' ? 'शुद्ध लाख व मीनाकारी' : 'Pure Lac & Enamel'}
                </span>
                <span className="flex items-center gap-1">
                  ✓ {lang === 'hi' ? 'पोशाक से मैचिंग' : 'Dress Matching'}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0 pt-2 sm:pt-0">
              <button
                onClick={() => handleWhatsAppFestivalInquiry(current)}
                className="min-h-[46px] flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white font-bold rounded-xl shadow-lg border border-yellow-200 active:scale-95 transition-all text-sm"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
                <span>{lang === 'hi' ? 'इस कलेक्शन का फोटो मंगाएँ' : 'Ask on WhatsApp'}</span>
              </button>

              <div className="flex gap-2">
                <button
                  onClick={() => onSelectCategory(current.recommendedCategory)}
                  className="flex-1 min-h-[44px] flex items-center justify-center gap-1.5 px-3 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-300/40 rounded-xl text-xs font-semibold active:scale-95 transition-all"
                >
                  <span>{lang === 'hi' ? 'डिज़ाइन देखें' : 'View Designs'}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-amber-300" />
                </button>

                <button
                  onClick={onOpenBulkOrder}
                  className="min-h-[44px] flex items-center justify-center gap-1 px-3 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl text-xs font-medium active:scale-95 transition-all"
                >
                  <Gift className="w-3.5 h-3.5 text-yellow-300" />
                  <span>{lang === 'hi' ? 'शादी थोक' : 'Bulk Order'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
