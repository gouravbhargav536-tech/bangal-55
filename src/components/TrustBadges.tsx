import React from 'react';
import { Store, Car, Truck, Accessibility } from 'lucide-react';
import { TrustService } from '../config/shopConfig';

interface TrustBadgesProps {
  services: TrustService[];
  lang: 'hi' | 'en';
}

export const TrustBadges: React.FC<TrustBadgesProps> = ({ services, lang }) => {
  return (
    <section className="py-8 px-3 sm:px-6 bg-[#FAFAFA] border-y border-amber-900/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <span className="text-[11px] font-bold text-[#7f1a1b] uppercase tracking-widest bg-amber-100/70 border border-amber-300/60 px-3 py-1 rounded-full">
            {lang === 'hi' ? 'दुकान की सुविधाएं व सेवाएं' : 'Store Services & Facilities'}
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 font-serif mt-2">
            {lang === 'hi' ? 'मुगल बैंगल्स पर आपकी सेवा में' : 'At Your Service at Mugal Bangels'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Card 1: इन-स्टोर शॉपिंग */}
          <div className="bg-white rounded-2xl p-5 border border-amber-900/15 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#D4AF37] mb-3 shadow-xs">
              <Store className="w-7 h-7 text-[#D4AF37]" />
            </div>
            <h3 className="font-bold text-stone-900 text-sm sm:text-base leading-snug">
              {lang === 'hi' ? 'दुकान पर खरीदारी' : 'In-Store Shopping'}
            </h3>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              {lang === 'hi'
                ? 'हजारों नए डिज़ाइनों को अपनी आँखों से देखकर, हाथ में पहनकर और पोशाक से मैच करके चुनें।'
                : 'Visit our Nehru Market store to inspect quality, try exact wrist sizes, and customize matching sets.'}
            </p>
          </div>

          {/* Card 2: कर्बसाइड पिकअप */}
          <div className="bg-white rounded-2xl p-5 border border-amber-900/15 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#D4AF37] mb-3 shadow-xs">
              <Car className="w-7 h-7 text-[#D4AF37]" />
            </div>
            <h3 className="font-bold text-stone-900 text-sm sm:text-base leading-snug">
              {lang === 'hi' ? 'दुकान से पिकअप' : 'Kerbside Pickup'}
            </h3>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              {lang === 'hi'
                ? 'व्हाट्सएप पर डिज़ाइन व साइज बुक करें, और दुकान पर बिना पार्किंग की परेशानी के तैयार पैकेट उठाएँ।'
                : 'Order via WhatsApp in advance; pick up your gift-wrapped bangles directly outside the store.'}
            </p>
          </div>

          {/* Card 3: होम डिलीवरी */}
          <div className="bg-white rounded-2xl p-5 border border-amber-900/15 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#D4AF37] mb-3 shadow-xs">
              <Truck className="w-7 h-7 text-[#D4AF37]" />
            </div>
            <h3 className="font-bold text-stone-900 text-sm sm:text-base leading-snug">
              {lang === 'hi' ? 'सुरक्षित होम डिलीवरी' : 'Safe Home Delivery'}
            </h3>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              {lang === 'hi'
                ? 'झुंझुनूं, शेखावाटी और पूरे भारत में सुरक्षित बबल-रैप पार्सल डिलीवरी। चूड़ियों की टूट-फूट की पूरी गारंटी।'
                : 'Safe parcel delivery across Jhunjhunu, Rajasthan and all India with guaranteed safe packaging.'}
            </p>
          </div>

          {/* Card 4: सुलभ प्रवेश द्वार */}
          <div className="bg-white rounded-2xl p-5 border border-amber-900/15 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#D4AF37] mb-3 shadow-xs">
              <span className="text-2xl font-serif text-[#D4AF37] select-none" title="ॐ / सुलभ">
                ॐ
              </span>
            </div>
            <h3 className="font-bold text-stone-900 text-sm sm:text-base leading-snug">
              {lang === 'hi' ? 'सुलभ प्रवेश द्वार' : 'Accessible Entrance'}
            </h3>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              {lang === 'hi'
                ? 'सिद्धि विनायक कॉम्प्लेक्स में ग्राउंड फ्लोर पर आसान प्रवेश और बुजुर्गों व महिलाओं के लिए आरामदायक बैठने की व्यवस्था।'
                : 'Ground-floor step-free access in Sidhi Vinayak Complex with comfortable seating for elders and families.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
