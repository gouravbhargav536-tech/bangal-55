import React, { useState } from 'react';
import {
  MapPin,
  Star,
  ExternalLink,
  QrCode,
  Share2,
  Copy,
  Check,
  Clock,
  Phone,
  Navigation,
  Sparkles,
} from 'lucide-react';
import { ShopConfig } from '../config/shopConfig';

interface GoogleProfileSectionProps {
  config: ShopConfig;
  lang: 'hi' | 'en';
  onOpenReviewModal: () => void;
  onShareApp: () => void;
  onOpenOwnerGuide: () => void;
}

export const GoogleProfileSection: React.FC<GoogleProfileSectionProps> = ({
  config,
  lang,
  onOpenReviewModal,
  onShareApp,
  onOpenOwnerGuide,
}) => {
  const [copiedGmb, setCopiedGmb] = useState(false);

  // Exact text for owner to copy-paste onto Google Business Profile
  const gmbCopyText = `Mugal Bangels (मुगल बैंगल्स)
Address: ${config.address.fullFormattedEn}
Phone: ${config.phone.display}
Category: ${config.category.en}
Hours: ${config.timing.allDaysSchedule}`;

  const handleCopyGmbData = () => {
    navigator.clipboard.writeText(gmbCopyText);
    setCopiedGmb(true);
    setTimeout(() => setCopiedGmb(false), 2500);
  };

  return (
    <section className="bg-gradient-to-b from-[#FFFDF7] to-amber-50/50 py-8 px-3 sm:px-4 border-t border-b border-amber-900/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-[#800020] text-xs font-bold border border-amber-300/60 mb-2">
            <span className="text-blue-600 font-bold">G</span>
            <span>{lang === 'hi' ? 'Google Business Profile' : 'Verified Google Profile'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif">
            {lang === 'hi' ? 'हमें Google Maps पर खोजें व रेट करें' : 'Find & Review Us on Google Maps'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            {lang === 'hi'
              ? 'झुंझुनूं के नेहरू मार्केट में स्थित प्रामाणिक दुकान, ग्राहक रेटिंग व दिशा-निर्देश'
              : 'Authentic store in Nehru Market Jhunjhunu with verified directions & ratings'}
          </p>
        </div>

        {/* Main Google Profile Box */}
        <div className="bg-white rounded-3xl border-2 border-amber-900/15 shadow-md p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {/* Left Column: Big Google Rating Badge */}
            <div className="flex flex-col items-center justify-center p-5 bg-gradient-to-br from-amber-50 to-orange-50/60 rounded-2xl border border-amber-200/70 text-center">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-3xl font-black text-stone-900">
                  {config.rating.stars.toFixed(1)}
                </span>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <p className="text-sm font-bold text-stone-800">
                {config.rating.reviewCount} Google{' '}
                {lang === 'hi' ? 'समीक्षाएँ (Reviews)' : 'Reviews'}
              </p>

              {config.rating.isSample && (
                <span className="mt-1 text-[11px] font-semibold text-rose-800 bg-rose-100 px-2 py-0.5 rounded-full border border-rose-200">
                  {lang === 'hi'
                    ? '⚠️ सैंपल रेटिंग (मालिक इसे अपडेट कर सकते हैं)'
                    : '⚠️ Sample Data (Editable by owner)'}
                </span>
              )}

              <a
                href={config.links.googleBusinessProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs text-blue-700 hover:text-blue-900 font-bold underline underline-offset-2"
              >
                <span>{lang === 'hi' ? 'Google पर सभी रिव्यू देखें' : 'View all Google reviews'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Leave Review CTA Button */}
              <button
                onClick={onOpenReviewModal}
                className="mt-4 w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow transition-all active:scale-95"
              >
                <Star className="w-4 h-4 fill-amber-200 text-amber-200" />
                <span>{lang === 'hi' ? 'समीक्षा दीजिए (Leave a Review)' : 'Leave a Google Review'}</span>
              </button>

              <button
                onClick={onOpenReviewModal}
                className="mt-2 text-[11px] text-stone-600 hover:text-stone-900 font-medium flex items-center gap-1"
              >
                <QrCode className="w-3.5 h-3.5 text-amber-700" />
                <span>{lang === 'hi' ? 'दुकान काउंटर हेतु QR कोड देखें' : 'View Shop Counter QR'}</span>
              </button>
            </div>

            {/* Middle Column: Exact Location, Timings & Services */}
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-800 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                    {lang === 'hi' ? 'दुकान का सही पता' : 'Exact Address'}
                  </h4>
                  <p className="text-sm font-bold text-stone-900 leading-snug mt-0.5">
                    {config.address.fullFormattedHi}
                  </p>
                  <p className="text-xs text-stone-600 mt-0.5 font-medium">
                    {lang === 'hi'
                      ? 'लैंडमार्क: सिद्धि विनायक कॉम्प्लेक्स, नेहरू मार्केट'
                      : 'Landmark: Sidhi Vinayak Complex, Nehru Market'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                    {lang === 'hi' ? 'समय (Timings)' : 'Operating Hours'}
                  </h4>
                  <p className="text-sm font-semibold text-emerald-800 mt-0.5">
                    {lang === 'hi' ? config.timing.currentStatusHi : config.timing.currentStatusEn}
                  </p>
                  <p className="text-xs text-stone-600">
                    {config.timing.allDaysSchedule}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                    {lang === 'hi' ? 'फ़ोन व सहायता' : 'Phone & Support'}
                  </h4>
                  <p className="text-sm font-bold text-stone-900 mt-0.5">
                    {config.phone.display}
                  </p>
                  <p className="text-xs text-stone-600">
                    {lang === 'hi' ? 'कॉल व व्हाट्सएप दोनों उपलब्ध' : 'Available for Call & WhatsApp'}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Google Actions & Send to Phone */}
            <div className="flex flex-col gap-2.5 bg-stone-50 p-4 rounded-2xl border border-stone-200">
              <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-0.5">
                {lang === 'hi' ? 'त्वरित लिंक व नेविगेशन' : 'Google Profile Actions'}
              </h4>

              {/* 1. "हमें Google पर देखें" Button */}
              <a
                href={config.links.googleBusinessProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-sm transition-all active:scale-95"
              >
                <span className="font-serif">G</span>
                <span>{lang === 'hi' ? 'हमें Google पर देखें' : 'See Us on Google'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* 2. Direct Maps Directions Button */}
              <a
                href={config.links.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex items-center justify-center gap-2 px-3 py-2 bg-white hover:bg-stone-100 text-stone-900 border border-stone-300 font-bold rounded-xl text-xs sm:text-sm transition-all active:scale-95"
              >
                <Navigation className="w-4 h-4 text-rose-600 fill-rose-600" />
                <span>{lang === 'hi' ? 'दुकान का रास्ता (Google Maps)' : 'Directions to Shop'}</span>
              </a>

              {/* 3. "Send to phone" / Share Catalogue */}
              <button
                onClick={onShareApp}
                className="min-h-[44px] flex items-center justify-center gap-2 px-3 py-2 bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-300 font-bold rounded-xl text-xs sm:text-sm transition-all active:scale-95"
              >
                <Share2 className="w-4 h-4 text-amber-800" />
                <span>{lang === 'hi' ? 'फ़ोन पर भेजें (Send to phone)' : 'Send to Phone / Share'}</span>
              </button>

              {/* Owner Sync Helper tool */}
              <div className="pt-2 mt-1 border-t border-stone-200">
                <button
                  onClick={handleCopyGmbData}
                  className="w-full py-1.5 px-2 text-[11px] text-stone-600 hover:text-stone-900 bg-white hover:bg-stone-100 border border-stone-200 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                  title="दुकान मालिक: इस विवरण को Google Business Profile पर कॉपी-पेस्ट करें"
                >
                  {copiedGmb ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">
                        {lang === 'hi' ? 'Google Profile विवरण कॉपी हो गया!' : 'Copied for Google Profile!'}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-500" />
                      <span>
                        {lang === 'hi'
                          ? 'GMB हेतु पता कॉपी करें'
                          : 'Copy Details for Google Profile'}
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
