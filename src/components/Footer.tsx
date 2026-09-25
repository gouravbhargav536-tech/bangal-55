import React from 'react';
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  ShieldCheck,
  Lock,
  BookOpen,
  Share2,
  Heart,
  QrCode,
} from 'lucide-react';
import { ShopConfig } from '../config/shopConfig';

interface FooterProps {
  config: ShopConfig;
  lang: 'hi' | 'en';
  onOpenOwnerGuide: () => void;
  onOpenAdmin: () => void;
  onOpenReviewModal: () => void;
  onShareApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  config,
  lang,
  onOpenOwnerGuide,
  onOpenAdmin,
  onOpenReviewModal,
  onShareApp,
}) => {
  return (
    <footer className="bg-royal-maroon text-amber-100/90 pt-10 pb-28 border-t-4 border-[#D4AF37]">
      {/* Wedding & Festive discount highlight strip */}
      <div className="bg-[#691415] border-b border-amber-500/30 py-3 px-4 -mt-10 mb-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-2 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎁</span>
            <span className="font-bold text-amber-200">
              {lang === 'hi'
                ? 'शादी-बरात व सामूहिक उपहार के लिए विशेष छूट एवं थोक पैकेज उपलब्ध हैं'
                : 'Special discounts & bulk packages available for weddings & celebrations'}
            </span>
          </div>
          <a
            href={`https://wa.me/${config.whatsapp.rawNumber}?text=${encodeURIComponent(
              lang === 'hi'
                ? 'नमस्ते, मुझे शादी व सामूहिक उपहार के लिए थोक चूड़ियों की छूट के बारे में जानकारी चाहिए।'
                : 'Hello, I want to inquire about bulk wedding discounts on bangles.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-lg text-xs"
          >
            <span>{lang === 'hi' ? 'व्हाट्सएप पर छूट जानें' : 'Get Bulk Quote'}</span>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-xs sm:text-sm">
          {/* Col 1: Shop Brand & Address */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl" role="img" aria-label="Bangles">
                📿
              </span>
              <h3 className="text-xl font-bold font-serif text-white">
                {lang === 'hi' ? config.name.hi : config.name.en}
              </h3>
            </div>
            <p className="text-xs text-amber-200/80 leading-relaxed max-w-md">
              {lang === 'hi' ? config.name.taglineHi : config.name.taglineEn}
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-start gap-2 text-amber-100">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{config.address.fullFormattedHi}</span>
              </div>
              <div className="flex items-center gap-2 text-amber-100">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{config.phone.display}</span>
              </div>
              <div className="flex items-center gap-2 text-amber-100">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{config.timing.allDaysSchedule}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Useful Customer Links */}
          <div className="space-y-2.5">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider font-serif">
              {lang === 'hi' ? 'महत्वपूर्ण लिंक' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-xs text-amber-200/90">
              <li>
                <a
                  href={config.links.googleBusinessProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'hi' ? 'Google Business Profile' : 'Google Profile'}</span>
                </a>
              </li>
              <li>
                <a
                  href={config.links.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'hi' ? 'Google Maps दिशा-निर्देश' : 'Maps Directions'}</span>
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenReviewModal}
                  className="hover:text-white flex items-center gap-1.5 transition-colors text-left"
                >
                  <QrCode className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'hi' ? 'काउंटर QR व समीक्षा' : 'Counter QR & Review'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onShareApp}
                  className="hover:text-white flex items-center gap-1.5 transition-colors text-left"
                >
                  <Share2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'hi' ? 'फ़ोन पर भेजें (Send to phone)' : 'Send to Phone'}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Owner Tools & Guidance */}
          <div className="space-y-2.5">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider font-serif">
              {lang === 'hi' ? 'दुकान मालिक अनुभाग' : 'Owner Area'}
            </h4>
            <ul className="space-y-2 text-xs text-amber-200/90">
              <li>
                <button
                  onClick={onOpenOwnerGuide}
                  className="text-left text-amber-200 hover:text-white flex items-center gap-1.5 transition-colors font-medium bg-white/5 hover:bg-white/10 p-2 rounded-lg w-full border border-amber-500/20"
                >
                  <BookOpen className="w-4 h-4 text-yellow-400 shrink-0" />
                  <div>
                    <span className="block font-bold">
                      {lang === 'hi' ? 'दुकान मालिक गाइड' : 'Owner How-To Guide'}
                    </span>
                    <span className="text-[10px] text-amber-300/80">
                      {lang === 'hi' ? 'Google प्रोफाइल व रिव्यू बढ़ाने की विधि' : 'GMB growth instructions'}
                    </span>
                  </div>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAdmin}
                  className="text-left text-amber-200 hover:text-white flex items-center gap-1.5 transition-colors font-medium bg-white/5 hover:bg-white/10 p-2 rounded-lg w-full border border-amber-500/20"
                >
                  <Lock className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="block font-bold">
                      {lang === 'hi' ? 'मालिक सेटिंग्स (/admin)' : 'Admin Dashboard'}
                    </span>
                    <span className="text-[10px] text-amber-300/80">
                      {lang === 'hi' ? 'रेटिंग, मूल्य व स्टॉक बदलें' : 'Edit info, prices & stock'}
                    </span>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Footer Disclaimer per prompt */}
        <div className="pt-6 border-t border-amber-500/30 text-center space-y-2">
          <p className="text-[11px] text-amber-200/80 max-w-2xl mx-auto leading-relaxed bg-black/20 p-2.5 rounded-xl border border-amber-500/20">
            ⚠️ <strong>डिस्क्लेमर (Disclaimer):</strong>{' '}
            {lang === 'hi'
              ? 'वेबसाइट पर दिखाए गए मूल्य, फोटो और 5.0 स्टार (10 रिव्यू) की रेटिंग सैंपल डेटा हैं जब तक दुकान मालिक इन्हें अपने एडमिन पैनल से लाइव वास्तविक विवरण से अपडेट न कर लें।'
              : 'Prices, photographs, and the 5.0-star (10 reviews) rating shown are sample placeholders until updated by the shop owner in their admin dashboard.'}
          </p>

          <p className="text-xs text-amber-300/70 pt-2 flex items-center justify-center gap-1">
            <span>© {new Date().getFullYear()} Mugal Bangels (मुगल बैंगल्स), Jhunjhunu, Rajasthan.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
