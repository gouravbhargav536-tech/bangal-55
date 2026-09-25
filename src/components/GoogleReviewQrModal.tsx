import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { X, Star, Printer, ExternalLink, Download, Sparkles } from 'lucide-react';
import { ShopConfig } from '../config/shopConfig';

interface GoogleReviewQrModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ShopConfig;
  lang: 'hi' | 'en';
}

export const GoogleReviewQrModal: React.FC<GoogleReviewQrModalProps> = ({
  isOpen,
  onClose,
  config,
  lang,
}) => {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      // Generate scannable QR Code for Google Review / Profile URL
      QRCode.toDataURL(config.links.googleReviewDirect, {
        width: 320,
        margin: 2,
        color: {
          dark: '#741028',
          light: '#FFFFFF',
        },
      })
        .then((url) => setQrDataUrl(url))
        .catch((err) => console.error('QR code generation error', err));
    }
  }, [isOpen, config.links.googleReviewDirect]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-md bg-[#FFFDF7] rounded-3xl border-2 border-amber-500/40 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#800020] text-amber-50 px-4 py-3.5 flex items-center justify-between border-b border-amber-500/30">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-amber-400 text-[#800020] flex items-center justify-center font-bold">
              ★
            </div>
            <div>
              <h3 className="font-bold text-base font-serif">
                {lang === 'hi' ? 'Google समीक्षा व काउंटर QR' : 'Google Review & Counter QR'}
              </h3>
              <p className="text-[11px] text-amber-200">
                {lang === 'hi' ? 'दुकान काउंटर पर लगाने हेतु प्रिंट करें' : 'Printable poster for shop checkout counter'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-amber-200 hover:text-white hover:bg-white/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Printable Standee Card */}
        <div className="p-4 sm:p-5 overflow-y-auto text-center space-y-4">
          <div className="border-4 border-amber-600/40 rounded-2xl p-4 bg-white shadow-sm relative overflow-hidden">
            {/* Corner Decorative Dots */}
            <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-amber-400 border border-amber-700/30" />
            <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-amber-400 border border-amber-700/30" />
            <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-amber-400 border border-amber-700/30" />
            <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-amber-400 border border-amber-700/30" />

            <div className="flex items-center justify-center gap-1 text-amber-500 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <h4 className="text-xl font-black text-[#800020] font-serif">
              {config.name.hi}
            </h4>
            <p className="text-xs font-semibold text-stone-700">
              {config.name.en} • झुंझुनूं
            </p>

            <div className="my-3 flex justify-center">
              {qrDataUrl ? (
                <div className="p-2 bg-white rounded-xl border-2 border-stone-200 shadow-inner">
                  <img
                    src={qrDataUrl}
                    alt="Google Review QR Code"
                    className="w-48 h-48 mx-auto"
                  />
                </div>
              ) : (
                <div className="w-48 h-48 bg-stone-100 flex items-center justify-center text-xs text-stone-400">
                  QR कोड जनरेट हो रहा है...
                </div>
              )}
            </div>

            <p className="text-xs font-bold text-stone-900 uppercase tracking-wide">
              {lang === 'hi'
                ? 'कैमरे से स्कैन करें और Google पर 5-स्टार रिव्यू दें'
                : 'Scan with Camera to Review Us on Google'}
            </p>
            <p className="text-[11px] text-stone-500 mt-1">
              {config.address.market}, {config.address.city}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            {/* Direct Google Review link */}
            <a
              href={config.links.googleReviewDirect}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[46px] flex items-center justify-center gap-2 bg-[#800020] hover:bg-[#991b1b] text-white font-bold rounded-xl shadow transition-all active:scale-95 text-xs sm:text-sm"
            >
              <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
              <span>{lang === 'hi' ? 'सीधे Google पर रिव्यू लिखें' : 'Write Review on Google Directly'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Print Standee Button */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={handlePrint}
                className="min-h-[42px] flex items-center justify-center gap-1.5 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold rounded-xl border border-stone-300 text-xs transition-all active:scale-95"
              >
                <Printer className="w-4 h-4 text-stone-600" />
                <span>{lang === 'hi' ? 'प्रिंट करें' : 'Print Standee'}</span>
              </button>

              <a
                href={qrDataUrl}
                download="mugal-bangels-google-review-qr.png"
                className="min-h-[42px] flex items-center justify-center gap-1.5 px-3 py-2 bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold rounded-xl border border-amber-300 text-xs transition-all active:scale-95"
              >
                <Download className="w-4 h-4 text-amber-700" />
                <span>{lang === 'hi' ? 'QR डाउनलोड' : 'Save QR'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
