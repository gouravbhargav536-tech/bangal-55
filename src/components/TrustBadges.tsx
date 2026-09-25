import React from 'react';
import { Store, Car, Truck, Accessibility, Sparkles, CheckCircle2 } from 'lucide-react';
import { TrustService } from '../config/shopConfig';

interface TrustBadgesProps {
  services: TrustService[];
  lang: 'hi' | 'en';
}

export const TrustBadges: React.FC<TrustBadgesProps> = ({ services, lang }) => {
  const getIcon = (iconName: TrustService['iconName']) => {
    switch (iconName) {
      case 'store':
        return <Store className="w-5 h-5 text-amber-700" />;
      case 'car':
        return <Car className="w-5 h-5 text-emerald-700" />;
      case 'truck':
        return <Truck className="w-5 h-5 text-blue-700" />;
      case 'accessibility':
        return <Accessibility className="w-5 h-5 text-purple-700" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-amber-700" />;
    }
  };

  return (
    <section className="py-6 px-3 sm:px-4 bg-[#FFFDF7]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {services.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl p-3.5 sm:p-4 border border-amber-900/10 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center mb-2.5">
                  {getIcon(srv.iconName)}
                </div>
                <h3 className="font-bold text-stone-900 text-xs sm:text-sm leading-snug">
                  {lang === 'hi' ? srv.labelHi : srv.labelEn}
                </h3>
              </div>
              <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                {lang === 'hi' ? srv.descHi : srv.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
