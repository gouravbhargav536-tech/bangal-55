import React from 'react';
import { Phone, Navigation, Share2, Sparkles } from 'lucide-react';
import { ShopConfig } from '../config/shopConfig';
import { WhatsAppBadge, WhatsAppIcon } from './WhatsAppIcon';

interface StickyBottomBarProps {
  config: ShopConfig;
  lang: 'hi' | 'en';
  onOpenBulkOrder: () => void;
  onShareApp: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  config,
  lang,
  onOpenBulkOrder,
  onShareApp,
}) => {
  const whatsappUrl = `https://wa.me/${config.whatsapp.rawNumber}?text=${encodeURIComponent(
    lang === 'hi' ? config.whatsapp.defaultMessageHi : config.whatsapp.defaultMessageEn
  )}`;

  return (
    <nav
      aria-label="Mobile actions bar"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#7f1a1b] border-t-2 border-[#D4AF37] shadow-2xl safe-bottom transition-all"
    >
      {/* Quick wedding / bulk inquiry banner on top of the bar */}
      <div className="bg-[#691415] px-3 py-1.5 text-center text-xs text-amber-200 border-b border-amber-900/50 flex items-center justify-between">
        <div className="flex items-center gap-1.5 truncate">
          <Sparkles className="w-3.5 h-3.5 text-yellow-400 shrink-0 animate-pulse" />
          <span className="truncate font-semibold text-amber-100">
            {lang === 'hi'
              ? 'शादी-बरात व सामूहिक उपहार के लिए विशेष छूट'
              : 'Special bulk & bridal discounts available'}
          </span>
        </div>
        <button
          onClick={onOpenBulkOrder}
          className="shrink-0 text-yellow-300 font-bold underline underline-offset-2 ml-2 hover:text-white"
        >
          {lang === 'hi' ? 'थोक फॉर्म' : 'Bulk Form'}
        </button>
      </div>

      <div className="max-w-md mx-auto px-2 py-2 grid grid-cols-4 gap-2">
        {/* 1. CALL BUTTON */}
        <a
          href={`tel:${config.phone.raw}`}
          className="flex flex-col items-center justify-center min-h-[48px] px-1 py-1 bg-[#691415] hover:bg-[#581112] active:bg-[#4a0e0f] text-white font-medium rounded-xl border border-amber-400/40 shadow transition-all active:scale-95 touch-manipulation select-none"
        >
          <Phone className="w-5 h-5 text-amber-300 mb-0.5 fill-current" />
          <span className="text-[11px] font-bold tracking-tight">
            {lang === 'hi' ? 'कॉल करें' : 'Call'}
          </span>
        </a>

        {/* 2. WHATSAPP BUTTON (Authentic WhatsApp Green #25D366 & Gold Trim) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 flex items-center justify-center min-h-[48px] px-2 py-1.5 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white font-bold rounded-xl border-2 border-yellow-200 shadow-lg transition-all active:scale-95 touch-manipulation select-none"
        >
          <WhatsAppIcon className="w-5 h-5 mr-1.5 text-white shrink-0" />
          <div className="text-left leading-tight">
            <span className="block text-xs uppercase tracking-wider text-white font-black">
              {lang === 'hi' ? 'व्हाट्सएप चैट' : 'WhatsApp'}
            </span>
            <span className="block text-[10px] text-yellow-100 font-medium">
              {lang === 'hi' ? 'तुरंत जवाब पाएँ' : 'Instant Reply'}
            </span>
          </div>
        </a>

        {/* 3. DIRECTIONS BUTTON */}
        <a
          href={config.links.googleMapsDirections}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center min-h-[48px] px-1 py-1 bg-gradient-to-br from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 active:from-amber-500 active:to-yellow-600 text-stone-950 font-black rounded-xl border border-yellow-200 shadow transition-all active:scale-95 touch-manipulation select-none"
        >
          <Navigation className="w-5 h-5 text-stone-950 mb-0.5 fill-current" />
          <span className="text-[11px] font-bold tracking-tight">
            {lang === 'hi' ? 'रास्ता देखें' : 'Map'}
          </span>
        </a>
      </div>
    </nav>
  );
};
