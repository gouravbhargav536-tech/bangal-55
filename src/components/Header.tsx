import React from 'react';
import { MapPin, Phone, Star, QrCode, Ruler, Globe, ExternalLink, ArrowRight } from 'lucide-react';
import { ShopConfig } from '../config/shopConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeaderProps {
  config: ShopConfig;
  lang: 'hi' | 'en';
  onToggleLang: () => void;
  onOpenReviewModal: () => void;
  onOpenSizingModal: () => void;
  onOpenAdmin: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  config,
  lang,
  onToggleLang,
  onOpenReviewModal,
  onOpenSizingModal,
  onOpenAdmin,
}) => {
  return (
    <header className="relative bg-royal-maroon text-amber-50 shadow-xl border-b-2 border-amber-500/40">
      {/* Top Rajasthani Gold decorative border strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 shadow-xs" />

      {/* Top Announcement Strip: Status, Google 5.0★ Rating, Size Chart, Language */}
      <div className="bg-[#691415] px-3 sm:px-4 py-1.5 text-xs text-amber-100/90 border-b border-amber-900/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-2">
          {/* Live Status & Location */}
          <div className="flex items-center gap-2 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-300 font-semibold text-[11px] sm:text-xs">
              {lang === 'hi' ? config.timing.currentStatusHi : config.timing.currentStatusEn}
            </span>
            <span className="text-amber-200/40 hidden sm:inline">•</span>
            <span className="hidden sm:inline text-amber-200/90 text-xs">
              {config.address.market}, {config.address.city}
            </span>
          </div>

          {/* Google 5.0 Rating Chip + Size Chart + Language Switcher */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={config.links.googleBusinessProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-amber-400/20 hover:bg-amber-400/30 text-amber-200 px-2 py-0.5 rounded-full border border-amber-400/40 text-[11px] transition-colors"
            >
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white">5.0</span>
              <span className="text-amber-200/90">
                ({config.rating.reviewCount} {lang === 'hi' ? 'रिव्यू' : 'Reviews'})
              </span>
            </a>

            <button
              onClick={onOpenSizingModal}
              className="hidden xs:flex items-center gap-1 text-amber-200 hover:text-white transition-colors py-0.5 px-1.5 rounded active:bg-white/10 text-[11px] sm:text-xs"
              title={lang === 'hi' ? 'नाप चार्ट' : 'Size Chart'}
            >
              <Ruler className="w-3.5 h-3.5 text-amber-300" />
              <span className="underline decoration-amber-400/60 underline-offset-2">
                {lang === 'hi' ? 'नाप चार्ट' : 'Size Chart'}
              </span>
            </button>

            <span className="text-amber-200/40">|</span>

            {/* Language Toggle Button */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 px-2.5 py-0.5 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-400/50 rounded-full font-bold text-xs transition-all active:scale-95"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-yellow-300" />
              <span>{lang === 'hi' ? 'English' : 'हिंदी'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Branding Section (Direct match to reference screenshot) */}
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Left Brand Identity: Ornate Emblem + Big Golden Typography */}
          <div className="flex items-center gap-3.5 sm:gap-5">
            {/* Ornate Circular Emblem */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-700 p-0.5 shadow-xl shrink-0 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#691415] flex flex-col items-center justify-center border-2 border-yellow-300/60 shadow-inner">
                <span className="text-2xl sm:text-3xl select-none filter drop-shadow" role="img" aria-label="Bangles">
                  📿
                </span>
                <span className="text-[8px] sm:text-[9px] font-black text-amber-300 tracking-widest uppercase">
                  MUGAL
                </span>
              </div>
              {/* Shisha mirror highlight dots around emblem */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-200 rounded-full border-2 border-[#7f1a1b] shadow-md flex items-center justify-center text-[9px] font-bold text-[#7f1a1b]">
                ✨
              </div>
            </div>

            {/* Shop Titles and Subtitles in Rich Royal Gold */}
            <div>
              <div className="flex items-baseline gap-2.5 flex-wrap">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#D4AF37] font-serif drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  मुगल बैंगल्स
                </h1>
                <span className="text-xs sm:text-base font-serif font-bold text-amber-200/90 tracking-[0.15em] uppercase">
                  Mugal Bangels
                </span>
              </div>

              <p className="text-xs sm:text-sm text-amber-100/95 font-medium mt-1 leading-snug max-w-xl">
                {lang === 'hi' ? config.name.taglineHi : config.name.taglineEn}
              </p>

              <div className="flex items-center gap-2 mt-1.5 text-xs text-amber-200/80">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="line-clamp-1">{config.address.market}, {config.address.city} (राज.)</span>
                <span className="text-amber-400/50 hidden xs:inline">•</span>
                <span className="hidden xs:inline text-amber-300 font-semibold">G-5 सिद्धि विनायक कॉम्प्लेक्स</span>
              </div>
            </div>
          </div>

          {/* Right Action Buttons: WhatsApp & Call */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <a
              href={`https://wa.me/${config.whatsapp.rawNumber}?text=${encodeURIComponent(
                lang === 'hi' ? config.whatsapp.defaultMessageHi : config.whatsapp.defaultMessageEn
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white font-bold rounded-xl shadow-lg border border-emerald-400/50 transition-all active:scale-95 text-xs sm:text-sm min-h-[44px]"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${config.phone.raw}`}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-stone-950 font-black rounded-xl shadow-lg border border-yellow-200 transition-all active:scale-95 text-xs sm:text-sm min-h-[44px]"
            >
              <Phone className="w-4 h-4 fill-current shrink-0" />
              <span>{lang === 'hi' ? 'कॉल करें' : 'Call'}</span>
            </a>

            <button
              onClick={onOpenReviewModal}
              className="hidden lg:flex items-center gap-1.5 px-3.5 py-2.5 bg-white/10 hover:bg-white/15 text-amber-200 border border-amber-300/30 rounded-xl text-xs font-semibold transition-all min-h-[44px]"
            >
              <QrCode className="w-4 h-4 text-amber-300" />
              <span>{lang === 'hi' ? 'काउंटर QR' : 'Counter QR'}</span>
            </button>
          </div>
        </div>

        {/* Address and Google Review rating chip bar */}
        <div className="mt-4 pt-3 border-t border-amber-500/30 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5 text-amber-100/90">
            <span className="font-semibold text-yellow-300">
              {lang === 'hi' ? 'दुकान का पूरा पता:' : 'Store Address:'}
            </span>
            <span className="line-clamp-1">{config.address.fullFormattedHi}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={config.links.googleBusinessProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-amber-400/15 hover:bg-amber-400/25 text-amber-200 border border-amber-400/30 px-2.5 py-1 rounded-lg transition-colors group"
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white">5.0 ★★★★★</span>
              <span className="text-[11px] text-amber-200 underline decoration-amber-400/40">
                (10 Google Reviews)
              </span>
              <ExternalLink className="w-3 h-3 text-amber-300 opacity-70 group-hover:opacity-100 ml-0.5" />
            </a>

            <button
              onClick={onOpenReviewModal}
              className="text-[11px] text-yellow-300 hover:text-white font-bold underline underline-offset-2 ml-1"
            >
              {lang === 'hi' ? '★ समीक्षा दें' : '★ Leave Review'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
