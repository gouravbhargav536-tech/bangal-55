import React from 'react';
import { X, Ruler, HelpCircle, Check } from 'lucide-react';
import { ShopConfig } from '../config/shopConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

interface SizingGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ShopConfig;
  lang: 'hi' | 'en';
}

export const SizingGuideModal: React.FC<SizingGuideModalProps> = ({
  isOpen,
  onClose,
  config,
  lang,
}) => {
  if (!isOpen) return null;

  const sizeTable = [
    { size: '2.2 (२-२)', inches: '2.12 इंच', mm: '54 mm', descHi: 'बहुत पतली कलाई / किशोरियों हेतु', descEn: 'Extra small wrists / teenagers' },
    { size: '2.4 (२-४)', inches: '2.25 इंच', mm: '57.2 mm', descHi: 'पतली से मध्यम कलाई (सबसे कॉमन)', descEn: 'Small to medium (Very popular)' },
    { size: '2.6 (२-६)', inches: '2.37 इंच', mm: '60.3 mm', descHi: 'मध्यम से भारी कलाई (मानक साइज)', descEn: 'Standard medium to healthy wrist' },
    { size: '2.8 (२-८)', inches: '2.50 इंच', mm: '63.5 mm', descHi: 'बड़ी व चौड़ी कलाई हेतु', descEn: 'Large wrist size' },
    { size: '2.10 (२-१०)', inches: '2.62 इंच', mm: '66.7 mm', descHi: 'विशेष बड़ा साइज (कस्टमाइज्ड)', descEn: 'Extra large (Custom made)' },
  ];

  const handleAskSizeHelp = () => {
    const text = 'नमस्ते मुगल बैंगल्स! मुझे अपने हाथ की चूड़ी का सही साइज (2.2 / 2.4 / 2.6 / 2.8) जानने में मदद चाहिए।';
    const url = `https://wa.me/${config.whatsapp.rawNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#FFFDF7] rounded-3xl border-2 border-amber-500/40 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#800020] text-amber-50 px-4 py-3.5 flex items-center justify-between border-b border-amber-500/30">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-amber-300" />
            <div>
              <h3 className="font-bold text-base font-serif">
                {lang === 'hi' ? 'चूड़ी साइज गाइड (Bangle Sizing)' : 'Bangle Sizing Guide'}
              </h3>
              <p className="text-[11px] text-amber-200">
                {lang === 'hi' ? 'अपने हाथ का बिल्कुल सही नाप पता करें' : 'Accurate Indian bangle size chart (2.2 to 2.10)'}
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

        {/* Content */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-stone-800 text-xs sm:text-sm">
          {/* Method 1: Existing Bangle */}
          <div className="p-3.5 bg-amber-50/70 rounded-2xl border border-amber-200">
            <h4 className="font-bold text-[#800020] text-sm flex items-center gap-1.5 mb-1">
              <span>📏</span>
              <span>{lang === 'hi' ? 'तरीका 1: अपनी पुरानी चूड़ी से नापें' : 'Method 1: Measure Existing Bangle'}</span>
            </h4>
            <p className="text-stone-700 leading-relaxed text-xs">
              {lang === 'hi'
                ? 'अपनी किसी भी सही फिट आने वाली पुरानी चूड़ी को किसी स्केल पर रखें और उसके अंदरूनी हिस्से (Inner Diameter) की चौड़ाई मिलीमीटर (mm) या इंच में मापें।'
                : 'Place your best-fitting existing bangle flat over a ruler and measure the inside diameter from edge to edge in millimeters or inches.'}
            </p>
          </div>

          {/* Size Chart Table */}
          <div>
            <h4 className="font-bold text-stone-900 mb-2 flex items-center justify-between">
              <span>{lang === 'hi' ? 'भारतीय चूड़ी साइज तालिका' : 'Indian Bangle Size Chart'}</span>
              <span className="text-[11px] text-stone-500 font-normal">
                {lang === 'hi' ? 'व्यास (Inner Diameter)' : 'Inner Diameter'}
              </span>
            </h4>
            <div className="border border-stone-200 rounded-xl overflow-hidden shadow-xs">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-stone-100 text-stone-700 font-bold border-b border-stone-200">
                    <th className="p-2 sm:p-2.5">{lang === 'hi' ? 'साइज' : 'Size'}</th>
                    <th className="p-2 sm:p-2.5">{lang === 'hi' ? 'मिमी' : 'mm'}</th>
                    <th className="p-2 sm:p-2.5">{lang === 'hi' ? 'इंच' : 'Inches'}</th>
                    <th className="p-2 sm:p-2.5 hidden sm:table-cell">{lang === 'hi' ? 'सुझाव' : 'Fit'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white font-medium">
                  {sizeTable.map((row) => (
                    <tr key={row.size} className="hover:bg-amber-50/50">
                      <td className="p-2 sm:p-2.5 font-bold text-[#800020]">{row.size}</td>
                      <td className="p-2 sm:p-2.5 font-semibold text-stone-900">{row.mm}</td>
                      <td className="p-2 sm:p-2.5 text-stone-600">{row.inches}</td>
                      <td className="p-2 sm:p-2.5 text-stone-500 text-[11px] hidden sm:table-cell">
                        {lang === 'hi' ? row.descHi : row.descEn}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Method 2: Hand measurement with thread */}
          <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200">
            <h4 className="font-bold text-stone-900 text-xs sm:text-sm flex items-center gap-1.5 mb-1">
              <span>🧵</span>
              <span>{lang === 'hi' ? 'तरीका 2: धागे से हाथ का नाप' : 'Method 2: Thread & Knuckle Measure'}</span>
            </h4>
            <p className="text-stone-600 text-xs leading-relaxed">
              {lang === 'hi'
                ? 'अपने अँगूठे को छोटी उँगली से छूते हुए हाथ को ऐसे सिकोड़ें जैसे चूड़ी पहनते हैं। फिर सबसे चौड़े जोड़ पर धागा लपेटें और धागे की लंबाई स्केल पर नापकर हमें व्हाट्सएप करें।'
                : 'Bring your thumb and little finger together as if sliding a bangle on. Wrap a thread around the widest knuckles, then measure the thread length on a ruler.'}
            </p>
          </div>

          {/* WhatsApp Size Confirmation CTA */}
          <div className="pt-2">
            <button
              onClick={handleAskSizeHelp}
              className="w-full min-h-[46px] flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white font-bold rounded-xl shadow border border-emerald-600 active:scale-95 transition-all text-xs sm:text-sm"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
              <span>
                {lang === 'hi'
                  ? 'व्हाट्सएप पर नाप कन्फर्म करें'
                  : 'Confirm Your Size on WhatsApp'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
