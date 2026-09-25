import React, { useState } from 'react';
import { X, Sparkles, Calendar, Gift, Check } from 'lucide-react';
import { ShopConfig } from '../config/shopConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

interface BulkOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ShopConfig;
  lang: 'hi' | 'en';
}

export const BulkOrderModal: React.FC<BulkOrderModalProps> = ({
  isOpen,
  onClose,
  config,
  lang,
}) => {
  const [bangleType, setBangleType] = useState('bridal_chooda');
  const [setsCount, setSetsCount] = useState('25');
  const [sizesNeeded, setSizesNeeded] = useState('2.4, 2.6 (मिक्स)');
  const [budgetRange, setBudgetRange] = useState('₹5,000 - ₹15,000');
  const [eventDate, setEventDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerLocation, setCustomerLocation] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');

  if (!isOpen) return null;

  const bangleOptions = [
    { id: 'bridal_chooda', labelHi: 'दुल्हन चूड़ा सेट (Bridal Chooda)', labelEn: 'Bridal Chooda Sets' },
    { id: 'sangeet_gifting', labelHi: 'महिला संगीत / भात रिटर्न गिफ्ट (Return Gifts)', labelEn: 'Sangeet / Wedding Return Gifts' },
    { id: 'lac_kadas', labelHi: 'रजवाड़ी लाख कड़े (Rajputi Kada Sets)', labelEn: 'Rajputi Lac Kada Sets' },
    { id: 'teej_gangaur', labelHi: 'तीज / गणगौर उत्सव थोक सेट (Festive Sets)', labelEn: 'Teej / Gangaur Festive Sets' },
    { id: 'glass_velvet', labelHi: 'काँच व वेलवेट चूड़ियों के डिब्बे (Glass Bangles)', labelEn: 'Glass & Velvet Bangle Boxes' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedOption = bangleOptions.find((o) => o.id === bangleType);
    const typeLabel = lang === 'hi' ? selectedOption?.labelHi : selectedOption?.labelEn;

    const message = `*मुगल बैंगल्स - शादी / थोक ऑर्डर पूछताछ (Bulk Wedding Order)*
-----------------------------------
*ग्राहक का नाम:* ${customerName || 'अतिथि'}
*शहर / स्थान:* ${customerLocation || 'झुंझुनूं'}
*चूड़ी का प्रकार:* ${typeLabel}
*कुल सेट संख्या:* ${setsCount} सेट
*नाप आवश्यकता:* ${sizesNeeded}
*अनुमानित बजट:* ${budgetRange}
*कार्यक्रम की तारीख:* ${eventDate || 'जल्द'}
*विशेष निर्देश / नोट:* ${specialNotes || 'कोई विशेष नहीं'}
-----------------------------------
कृपया इस ऑर्डर का विशेष थोक कोटेशन व कैटलॉग तस्वीरें साझा करें। धन्यवाद!`;

    const url = `https://wa.me/${config.whatsapp.rawNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#FFFDF7] rounded-3xl border-2 border-amber-500/40 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Top Header */}
        <div className="bg-[#800020] text-amber-50 px-4 py-3.5 flex items-center justify-between border-b border-amber-500/30">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-[#800020] flex items-center justify-center font-bold">
              👰
            </div>
            <div>
              <h3 className="font-bold text-base font-serif">
                {lang === 'hi' ? 'शादी व थोक ऑर्डर फॉर्म' : 'Bulk & Wedding Inquiry'}
              </h3>
              <p className="text-[11px] text-amber-200">
                {lang === 'hi' ? 'विशेष रियायती थोक दरें (Wholesale Discount)' : 'Special bulk discounts directly from artisans'}
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

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-5 overflow-y-auto space-y-3.5 text-stone-800 text-xs sm:text-sm">
          {/* Customer Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-stone-700 mb-1">
                {lang === 'hi' ? 'आपका नाम (Your Name):' : 'Your Name:'} *
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder={lang === 'hi' ? 'उदा. सुमित्रा शेखावत' : 'e.g. Sumitra Shekhawat'}
                className="w-full min-h-[42px] px-3 py-1.5 bg-white border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#800020]"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">
                {lang === 'hi' ? 'शहर / गाँव (City/Town):' : 'City / Location:'}
              </label>
              <input
                type="text"
                value={customerLocation}
                onChange={(e) => setCustomerLocation(e.target.value)}
                placeholder={lang === 'hi' ? 'उदा. झुंझुनूं / मंडावा / सीकर' : 'e.g. Jhunjhunu'}
                className="w-full min-h-[42px] px-3 py-1.5 bg-white border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#800020]"
              />
            </div>
          </div>

          {/* Bangle Type Selection */}
          <div>
            <label className="block font-bold text-stone-700 mb-1">
              {lang === 'hi' ? 'चूड़ियों का प्रकार (Bangle Category):' : 'Bangle Type:'}
            </label>
            <select
              value={bangleType}
              onChange={(e) => setBangleType(e.target.value)}
              className="w-full min-h-[42px] px-3 py-1.5 bg-white border border-stone-300 rounded-xl text-stone-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#800020]"
            >
              {bangleOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {lang === 'hi' ? opt.labelHi : opt.labelEn}
                </option>
              ))}
            </select>
          </div>

          {/* Quantity & Sizes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-stone-700 mb-1">
                {lang === 'hi' ? 'कुल संख्या (Number of Sets):' : 'Quantity / Sets:'}
              </label>
              <select
                value={setsCount}
                onChange={(e) => setSetsCount(e.target.value)}
                className="w-full min-h-[42px] px-3 py-1.5 bg-white border border-stone-300 rounded-xl text-stone-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#800020]"
              >
                <option value="5-10">5 - 10 सेट (Small order)</option>
                <option value="25">25 सेट (शगुन / सगाई)</option>
                <option value="50">50 सेट (भात / महिला संगीत)</option>
                <option value="100">100+ सेट (विवाह रिटर्न गिफ्ट)</option>
                <option value="200+">200+ सेट (थोक व्यापारी दरें)</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">
                {lang === 'hi' ? 'नाप / साइज आवश्यकता:' : 'Sizes Needed:'}
              </label>
              <input
                type="text"
                value={sizesNeeded}
                onChange={(e) => setSizesNeeded(e.target.value)}
                placeholder="2.4, 2.6, 2.8 मिक्स"
                className="w-full min-h-[42px] px-3 py-1.5 bg-white border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#800020]"
              />
            </div>
          </div>

          {/* Budget & Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-stone-700 mb-1">
                {lang === 'hi' ? 'अनुमानित बजट:' : 'Budget Range:'}
              </label>
              <select
                value={budgetRange}
                onChange={(e) => setBudgetRange(e.target.value)}
                className="w-full min-h-[42px] px-3 py-1.5 bg-white border border-stone-300 rounded-xl text-stone-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#800020]"
              >
                <option value="₹2,000 - ₹5,000">₹2,000 - ₹5,000</option>
                <option value="₹5,000 - ₹15,000">₹5,000 - ₹15,000</option>
                <option value="₹15,000 - ₹30,000">₹15,000 - ₹30,000</option>
                <option value="₹30,000+">₹30,000+ (प्रीमियम दुल्हन चूड़ा)</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">
                {lang === 'hi' ? 'शादी / कार्यक्रम की तारीख:' : 'Event Date:'}
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full min-h-[42px] px-3 py-1.5 bg-white border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#800020]"
              />
            </div>
          </div>

          {/* Special Notes */}
          <div>
            <label className="block font-bold text-stone-700 mb-1">
              {lang === 'hi' ? 'विशेष आवश्यकता या संदेश:' : 'Special Notes / Customization:'}
            </label>
            <textarea
              rows={2}
              value={specialNotes}
              onChange={(e) => setSpecialNotes(e.target.value)}
              placeholder={
                lang === 'hi'
                  ? 'उदा. लाल-पीले रंग का कॉम्बो चाहिए, दूल्हा-दुल्हन का नाम लिखना है...'
                  : 'e.g. Need matching red and gold shades, bride groom name customization...'
              }
              className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#800020]"
            />
          </div>

          {/* WhatsApp Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full min-h-[48px] flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white font-bold rounded-xl shadow-lg border border-emerald-600 transition-all active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
              <span>
                {lang === 'hi'
                  ? 'व्हाट्सएप पर कोटेशन मंगाएँ'
                  : 'Get Instant WhatsApp Quote'}
              </span>
            </button>
            <p className="text-[11px] text-center text-stone-500 mt-2">
              {lang === 'hi'
                ? 'यह फॉर्म सबमिट करने पर आपके विवरण के साथ व्हाट्सएप चैट खुलेगी।'
                : 'Submitting opens WhatsApp with your pre-formatted order request.'}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
