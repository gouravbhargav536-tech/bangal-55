import React, { useState } from 'react';
import { Check, Sparkles, Tag, Eye } from 'lucide-react';
import { BangleItem, formatINR } from '../data/catalogue';
import { ShopConfig } from '../config/shopConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

interface BangleCardProps {
  item: BangleItem;
  config: ShopConfig;
  lang: 'hi' | 'en';
  onQuickView: (item: BangleItem) => void;
}

export const BangleCard: React.FC<BangleCardProps> = ({
  item,
  config,
  lang,
  onQuickView,
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Material labels in Hindi and English
  const materialLabels: Record<string, { hi: string; en: string; bg: string }> = {
    lac: { hi: 'शुद्ध लाख (Pure Lac)', en: 'Pure Lac', bg: 'bg-amber-100 text-amber-900 border-amber-300' },
    glass: { hi: 'काँच (Glass)', en: 'Glass Bangles', bg: 'bg-rose-100 text-rose-900 border-rose-300' },
    metal: { hi: 'धातु (Alloy)', en: 'Alloy/Metal', bg: 'bg-blue-100 text-blue-900 border-blue-300' },
    silver: { hi: 'चाँदी लुक (Silver Look)', en: 'Oxidized Silver', bg: 'bg-slate-100 text-slate-800 border-slate-300' },
    brass: { hi: 'पीतल/कड़ा (Brass Kada)', en: 'Brass Kada', bg: 'bg-yellow-100 text-yellow-900 border-yellow-300' },
  };

  const mat = materialLabels[item.material] || materialLabels.lac;

  const handleAskOnWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const itemName = lang === 'hi' ? item.name.hi : item.name.en;
    const formattedPrice = formatINR(item.pricePerSet);
    const msg = `नमस्ते मुगल बैंगल्स! मुझे इस डिज़ाइन के बारे में पूछना है:\n\n*${itemName}*\n*मूल्य:* ${formattedPrice} (${item.setSize} चूड़ियों का सेट)\n*आईडी:* ${item.id}\n\nक्या यह 2.4 / 2.6 / 2.8 साइज में उपलब्ध है?`;

    const url = `https://wa.me/${config.whatsapp.rawNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <article
      onClick={() => onQuickView(item)}
      className="group relative bg-white rounded-2xl border-2 border-amber-900/15 hover:border-[#800020] shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden cursor-pointer"
    >
      {/* Top Banner Badges */}
      <div className="absolute top-2.5 left-2.5 z-20 flex flex-col gap-1">
        {item.isBestSeller && (
          <span className="inline-flex items-center gap-1 bg-[#800020] text-amber-200 text-[10px] font-bold px-2 py-0.5 rounded-full shadow border border-amber-400/40">
            <Sparkles className="w-2.5 h-2.5 text-yellow-400" />
            <span>{lang === 'hi' ? 'लोकप्रिय' : 'Bestseller'}</span>
          </span>
        )}
        {item.isNew && (
          <span className="inline-flex items-center bg-emerald-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow border border-emerald-400/40">
            {lang === 'hi' ? 'नया डिज़ाइन' : 'New Arrival'}
          </span>
        )}
      </div>

      {/* Stock Pill on Right */}
      <div className="absolute top-2.5 right-2.5 z-20">
        <span
          className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shadow-xs ${
            item.inStock
              ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
              : 'bg-red-50 text-red-800 border-red-300'
          }`}
        >
          {item.inStock
            ? lang === 'hi'
              ? 'उपलब्ध (In Stock)'
              : 'In Stock'
            : lang === 'hi'
            ? 'जल्द उपलब्ध'
            : 'Out of Stock'}
        </span>
      </div>

      {/* Compact Rajasthani Jharokha Arch Frame for Photography */}
      <div className="relative w-full pt-[82%] bg-[#FFFDF7] p-2 overflow-hidden flex items-center justify-center">
        {/* Jharokha arch shape container */}
        <div className="absolute inset-2 rounded-t-[2.5rem] rounded-b-xl overflow-hidden border-2 border-amber-700/20 bg-stone-100 flex items-center justify-center shadow-inner">
          {/* Shisha / Mirror work corner accents */}
          <div className="absolute top-1 left-2 w-2 h-2 rounded-full bg-amber-300 border border-amber-600/30 z-10 opacity-70" />
          <div className="absolute top-1 right-2 w-2 h-2 rounded-full bg-amber-300 border border-amber-600/30 z-10 opacity-70" />

          {/* Lazy loaded image */}
          <img
            src={
              imgError
                ? '/src/assets/images/rajasthani_lac_bangles_1790311299986.jpg'
                : item.image
            }
            alt={lang === 'hi' ? item.name.hi : item.name.en}
            loading="lazy"
            referrerPolicy="no-referrer"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
              imgLoaded ? 'opacity-100' : 'opacity-40 blur-xs'
            }`}
          />

          {/* Quick view overlay icon on desktop hover */}
          <div className="absolute inset-0 bg-stone-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span className="px-3 py-1.5 bg-white/95 text-stone-900 text-xs font-bold rounded-full shadow flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-[#800020]" />
              <span>{lang === 'hi' ? 'बड़ा देखें' : 'View Full'}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Material Chip & Set Size */}
          <div className="flex items-center justify-between gap-1.5 mb-1 text-[11px]">
            <span className={`px-2 py-0.5 rounded-md font-semibold border ${mat.bg}`}>
              {lang === 'hi' ? mat.hi : mat.en}
            </span>
            <span className="text-stone-700 font-semibold bg-stone-100 px-1.5 py-0.5 rounded border border-stone-200">
              {item.setSize} {lang === 'hi' ? 'चूड़ियों का सेट' : 'bangles/set'}
            </span>
          </div>

          {/* Product Title (High Contrast Serif font for Devanagari) */}
          <h3 className="font-bold text-base sm:text-lg text-stone-950 font-serif leading-snug line-clamp-2 mt-1">
            {lang === 'hi' ? item.name.hi : item.name.en}
          </h3>

          {/* Available Sizes row */}
          <div className="flex items-center gap-1 mt-2 text-xs text-stone-700">
            <span className="font-medium text-stone-500 text-[11px]">
              {lang === 'hi' ? 'साइज:' : 'Sizes:'}
            </span>
            <div className="flex flex-wrap gap-1">
              {item.sizesAvailable.map((sz) => (
                <span
                  key={sz}
                  className="bg-amber-50 text-amber-950 font-bold px-1.5 py-0.2 rounded text-[11px] border border-amber-200"
                >
                  {sz}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing and Action Area */}
        <div className="mt-3 pt-2.5 border-t border-stone-100">
          <div className="flex items-baseline justify-between mb-2.5">
            <div>
              <span className="text-lg sm:text-xl font-black text-[#800020]">
                {formatINR(item.pricePerSet)}
              </span>
              {item.originalPrice && item.originalPrice > item.pricePerSet && (
                <span className="ml-2 text-xs text-stone-400 line-through">
                  {formatINR(item.originalPrice)}
                </span>
              )}
            </div>
            <span className="text-[11px] text-stone-500 font-medium">
              {lang === 'hi' ? 'प्रति सेट' : 'per set'}
            </span>
          </div>

          {/* "इस डिज़ाइन को पूछें" WhatsApp Button - High Tap Target (min 44px) */}
          <button
            onClick={handleAskOnWhatsApp}
            className="w-full min-h-[44px] flex items-center justify-center gap-1.5 px-3 py-2 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white font-bold rounded-xl shadow-sm border border-emerald-600 text-xs sm:text-sm active:scale-[0.98] transition-all touch-manipulation select-none"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
            <span className="truncate">
              {lang === 'hi' ? 'इस डिज़ाइन को पूछें' : 'Ask about this design'}
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};
