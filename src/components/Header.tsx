import React from 'react';
import { MapPin, Phone, Star, QrCode, Ruler, Globe, ExternalLink } from 'lucide-react';
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
    <header className="relative bg-[#800020] text-amber-50 shadow-lg border-b border-amber-500/30">
      {/* Top Rajasthani Gold decorative border strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600" />

      {/* Notice strip: Live Status & Google Rating */}
      <div className="bg-[#630419] px-3 py-1.5 text-xs text-amber-100/90 border-b border-amber-900/40">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-2">
          {/* Status badge */}
          <div className="flex items-center gap-1.5 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-300 font-semibold">
              {lang === 'hi' ? config.timing.currentStatusHi : config.timing.currentStatusEn}
            </span>
            <span className="text-amber-200/50 hidden sm:inline">•</span>
            <span className="hidden sm:inline text-amber-200/90">
              {config.address.market}, {config.address.city}
            </span>
          </div>

          {/* Quick utility links & Language Switcher */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenSizingModal}
              className="flex items-center gap-1 text-amber-200 hover:text-white transition-colors py-1 px-1.5 rounded active:bg-white/10"
              title={lang === 'hi' ? 'नाप चार्ट' : 'Size Chart'}
            >
              <Ruler className="w-3.5 h-3.5 text-amber-300" />
              <span className="underline decoration-amber-400/60 underline-offset-2">
                {lang === 'hi' ? 'नाप चार्ट (2.2-2.10)' : 'Size Guide'}
              </span>
            </button>

            <span className="text-amber-200/40">|</span>

            {/* Language Toggle Button */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 px-2.5 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-400/40 rounded-full font-semibold transition-all active:scale-95"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-yellow-300" />
              <span>{lang === 'hi' ? 'English' : 'हिंदी'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Branding Section */}
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3">
          {/* Logo & Shop Name */}
          <div className="flex items-center gap-3">
            {/* Traditional Bangle Crown Emblem */}
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-700 p-0.5 shadow-md shrink-0 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#800020] flex items-center justify-center border border-amber-300/40">
                <span className="text-xl sm:text-2xl select-none" role="img" aria-label="Bangles">
                  📿
                </span>
              </div>
              {/* Shisha mirror highlight dot */}
              <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-yellow-200 rounded-full border border-[#800020] shadow-sm flex items-center justify-center text-[8px] font-bold text-[#800020]">
                ✨
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-serif drop-shadow-sm">
                  {lang === 'hi' ? config.name.hi : config.name.en}
                </h1>
                <span className="bg-amber-500/20 text-amber-300 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-amber-400/30">
                  झुंझुनूं
                </span>
              </div>
              <p className="text-xs text-amber-200/90 line-clamp-1 mt-0.5">
                {lang === 'hi' ? config.name.taglineHi : config.name.taglineEn}
              </p>
            </div>
          </div>

          {/* Desktop Call, WhatsApp & Google Profile Badges */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={`https://wa.me/${config.whatsapp.rawNumber}?text=${encodeURIComponent(
                lang === 'hi' ? config.whatsapp.defaultMessageHi : config.whatsapp.defaultMessageEn
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-lg shadow transition-all active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${config.phone.raw}`}
              className="flex items-center gap-2 px-3 py-2 bg-amber-500 hover:bg-amber-400 text-[#630419] font-bold rounded-lg shadow transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>{config.phone.display}</span>
            </a>

            <button
              onClick={onOpenReviewModal}
              className="flex items-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/15 text-amber-200 border border-amber-300/30 rounded-lg text-xs font-medium transition-all"
            >
              <QrCode className="w-4 h-4 text-amber-300" />
              <span>{lang === 'hi' ? 'काउंटर QR कोड' : 'Counter QR'}</span>
            </button>
          </div>
        </div>

        {/* Address and Google Review rating chip bar */}
        <div className="mt-3 pt-2.5 border-t border-amber-500/20 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5 text-amber-100/90">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="line-clamp-1">{config.address.fullFormattedHi}</span>
          </div>

          {/* Prominent Google Rating link */}
          <div className="flex items-center gap-2">
            <a
              href={config.links.googleBusinessProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-amber-400/15 hover:bg-amber-400/25 text-amber-200 border border-amber-400/30 px-2 py-0.5 rounded transition-colors group"
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white">{config.rating.stars.toFixed(1)}</span>
              <span className="text-[11px] text-amber-200 underline decoration-amber-400/40">
                ({config.rating.reviewCount} {lang === 'hi' ? 'रिव्यू' : 'Reviews'})
              </span>
              {config.rating.isSample && (
                <span className="text-[9px] bg-red-950/80 text-amber-300 px-1 py-0.2 rounded border border-amber-500/20">
                  {lang === 'hi' ? 'सैंपल' : 'Sample'}
                </span>
              )}
              <ExternalLink className="w-3 h-3 text-amber-300 opacity-70 group-hover:opacity-100 ml-0.5" />
            </a>

            <button
              onClick={onOpenReviewModal}
              className="text-[11px] text-amber-300 hover:text-white font-medium underline underline-offset-2 ml-1"
            >
              {lang === 'hi' ? '★ समीक्षा दें' : '★ Write Review'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
