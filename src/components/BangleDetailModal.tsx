import React from 'react';
import { X, Ruler, Sparkles, Check, Share2 } from 'lucide-react';
import { BangleItem, formatINR } from '../data/catalogue';
import { ShopConfig } from '../config/shopConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

interface BangleDetailModalProps {
  item: BangleItem | null;
  isOpen: boolean;
  onClose: () => void;
  config: ShopConfig;
  lang: 'hi' | 'en';
  onOpenSizingModal: () => void;
}

export const BangleDetailModal: React.FC<BangleDetailModalProps> = ({
  item,
  isOpen,
  onClose,
  config,
  lang,
  onOpenSizingModal,
}) => {
  if (!isOpen || !item) return null;

  const handleAskOnWhatsApp = () => {
    const itemName = lang === 'hi' ? item.name.hi : item.name.en;
    const formattedPrice = formatINR(item.pricePerSet);
    const msg = `नमस्ते मुगल बैंगल्स! मुझे इस डिज़ाइन के बारे में पूछना है:\n\n*${itemName}*\n*मूल्य:* ${formattedPrice} (${item.setSize} चूड़ियों का सेट)\n*आईडी:* ${item.id}\n*सामग्री:* ${item.material}\n\nकृपया मुझे इसकी और तस्वीरें व उपलब्ध साइज बताएं।`;

    const url = `https://wa.me/${config.whatsapp.rawNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const handleShare = () => {
    const title = lang === 'hi' ? item.name.hi : item.name.en;
    const text = `मुगल बैंगल्स (झुंझुनूं) - ${title} | ${formatINR(item.pricePerSet)}`;
    if (navigator.share) {
      navigator.share({ title, text, url: window.location.href }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${text} - ${window.location.href}`);
      alert(lang === 'hi' ? 'लिंक कॉपी हो गया!' : 'Link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#FFFDF7] rounded-3xl border-2 border-amber-500/40 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#800020] text-amber-50 px-4 py-3 flex items-center justify-between border-b border-amber-500/30">
          <div className="flex items-center gap-1.5 text-xs text-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span className="font-semibold uppercase tracking-wider text-[11px]">
              {lang === 'hi' ? 'मुगल बैंगल्स एक्सक्लूसिव' : 'Mugal Bangels Exclusive'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-amber-200 hover:text-white hover:bg-white/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4">
          {/* Jharokha Photo Container */}
          <div className="relative rounded-t-[3rem] rounded-b-2xl overflow-hidden border-2 border-amber-600/30 shadow-md bg-stone-100 aspect-4/3 flex items-center justify-center">
            <img
              src={item.image}
              alt={lang === 'hi' ? item.name.hi : item.name.en}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {/* Shisha Mirror accents */}
            <div className="absolute top-2 left-4 w-3 h-3 rounded-full bg-amber-200 border border-amber-600 shadow-sm" />
            <div className="absolute top-2 right-4 w-3 h-3 rounded-full bg-amber-200 border border-amber-600 shadow-sm" />
          </div>

          <div>
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
                {item.setSize} {lang === 'hi' ? 'चूड़ियों का सेट' : 'bangles set'}
              </span>
              <span
                className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                  item.inStock
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {item.inStock
                  ? lang === 'hi'
                    ? 'दुकान में उपलब्ध'
                    : 'In Stock'
                  : lang === 'hi'
                  ? 'ऑर्डर पर तैयार'
                  : 'Made to Order'}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
              {lang === 'hi' ? item.name.hi : item.name.en}
            </h3>

            {/* Price display */}
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-black text-[#800020]">
                {formatINR(item.pricePerSet)}
              </span>
              {item.originalPrice && (
                <span className="text-sm text-stone-400 line-through">
                  {formatINR(item.originalPrice)}
                </span>
              )}
              <span className="text-xs text-stone-500">
                {lang === 'hi' ? '(प्रति सेट कीमत)' : '(per set price)'}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <p>{lang === 'hi' ? item.description.hi : item.description.en}</p>
          </div>

          {/* Sizes available & size guide button */}
          <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-stone-700">
                {lang === 'hi' ? 'उपलब्ध साइज:' : 'Available Sizes:'}
              </span>
              <div className="flex gap-1">
                {item.sizesAvailable.map((sz) => (
                  <span
                    key={sz}
                    className="px-2 py-0.5 text-xs font-bold bg-amber-50 border border-amber-300 rounded text-amber-950"
                  >
                    {sz}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenSizingModal}
              className="text-xs text-[#800020] font-bold underline flex items-center gap-1"
            >
              <Ruler className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'नाप कैसे लें?' : 'Sizing Guide'}</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 grid grid-cols-4 gap-2">
            <button
              onClick={handleAskOnWhatsApp}
              className="col-span-3 min-h-[46px] flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white font-bold rounded-xl shadow-lg border border-emerald-600 active:scale-95 transition-all text-xs sm:text-sm"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
              <span>
                {lang === 'hi'
                  ? 'इस डिज़ाइन को व्हाट्सएप पर पूछें'
                  : 'Ask about this design on WhatsApp'}
              </span>
            </button>

            <button
              onClick={handleShare}
              className="min-h-[46px] flex items-center justify-center bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl border border-stone-300 active:scale-95 transition-all"
              title="Share"
            >
              <Share2 className="w-4 h-4 text-stone-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
