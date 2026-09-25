import React, { useState } from 'react';
import {
  X,
  Save,
  RotateCcw,
  ShieldAlert,
  Building,
  Star,
  Phone,
  Link as LinkIcon,
  ShoppingBag,
  Clock,
  Check,
} from 'lucide-react';
import { ShopConfig, resetShopConfig, saveShopConfig } from '../config/shopConfig';
import { BangleItem, resetCatalogue, saveCatalogue } from '../data/catalogue';

/**
 * SECURITY NOTE FOR PRODUCTION:
 * This v1 admin panel saves updates directly to the browser's localStorage
 * for instant prototyping and demonstration without requiring a custom backend.
 * For production deployment with public internet access, this route must be
 * protected behind a secure authentication layer (e.g. Firebase Auth / session token)
 * and persisted in a secure database rather than client localStorage.
 */

interface AdminDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  config: ShopConfig;
  catalogue: BangleItem[];
  onUpdateConfig: (newConfig: ShopConfig) => void;
  onUpdateCatalogue: (newItems: BangleItem[]) => void;
  lang: 'hi' | 'en';
}

export const AdminDrawer: React.FC<AdminDrawerProps> = ({
  isOpen,
  onClose,
  config,
  catalogue,
  onUpdateConfig,
  onUpdateCatalogue,
  lang,
}) => {
  const [formData, setFormData] = useState<ShopConfig>({ ...config });
  const [itemsData, setItemsData] = useState<BangleItem[]>([...catalogue]);
  const [activeTab, setActiveTab] = useState<'shop' | 'ratings' | 'bangles'>('shop');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveShopConfig(formData);
    saveCatalogue(itemsData);
    onUpdateConfig(formData);
    onUpdateCatalogue(itemsData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleResetDefaults = () => {
    if (window.confirm('क्या आप सभी सेटिंग्स को मूल डिफ़ॉल्ट पर रीसेट करना चाहते हैं?')) {
      const defConfig = resetShopConfig();
      const defItems = resetCatalogue();
      setFormData(defConfig);
      setItemsData(defItems);
      onUpdateConfig(defConfig);
      onUpdateCatalogue(defItems);
      alert('सभी सेटिंग्स रीसेट हो गईं।');
    }
  };

  const handleItemPriceChange = (id: string, newPrice: number) => {
    setItemsData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, pricePerSet: newPrice } : item))
    );
  };

  const handleItemStockToggle = (id: string) => {
    setItemsData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, inStock: !item.inStock } : item))
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border-2 border-amber-600 shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#630419] text-amber-50 px-4 py-3.5 flex items-center justify-between border-b border-amber-500/30">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-stone-900 flex items-center justify-center font-bold">
              ⚙️
            </div>
            <div>
              <h3 className="font-bold text-base font-serif">
                {lang === 'hi' ? 'मालिक सेटिंग्स पैनल (/admin)' : 'Shop Owner Settings'}
              </h3>
              <p className="text-[11px] text-amber-200">
                {lang === 'hi' ? 'दुकान विवरण, मूल्य व Google रेटिंग अपडेट करें' : 'Update shop info, prices & Google rating'}
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

        {/* Security Notice */}
        <div className="bg-amber-50 px-4 py-2 border-b border-amber-200 flex items-center gap-2 text-xs text-amber-900 font-medium">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            {lang === 'hi'
              ? 'v1 प्रोटोटाइप: बदलाव आपके ब्राउज़र में सुरक्षित हैं। उत्पादन में पासवर्ड लॉगिन लगेगा।'
              : 'v1 prototype: Changes saved locally. Production requires backend authentication.'}
          </span>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-stone-200 bg-stone-50 px-4 pt-2 gap-2 text-xs font-bold">
          <button
            onClick={() => setActiveTab('shop')}
            className={`pb-2 px-3 border-b-2 transition-all ${
              activeTab === 'shop'
                ? 'border-[#800020] text-[#800020]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            {lang === 'hi' ? 'दुकान व संपर्क' : 'Shop & Contact'}
          </button>
          <button
            onClick={() => setActiveTab('ratings')}
            className={`pb-2 px-3 border-b-2 transition-all ${
              activeTab === 'ratings'
                ? 'border-[#800020] text-[#800020]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            {lang === 'hi' ? 'Google रेटिंग व लिंक' : 'Google Rating & Links'}
          </button>
          <button
            onClick={() => setActiveTab('bangles')}
            className={`pb-2 px-3 border-b-2 transition-all ${
              activeTab === 'bangles'
                ? 'border-[#800020] text-[#800020]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            {lang === 'hi' ? 'चूड़ियों के मूल्य व स्टॉक' : 'Prices & Stock'}
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-4 sm:p-5 overflow-y-auto space-y-4 text-xs sm:text-sm">
          {activeTab === 'shop' && (
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">दुकान का नाम (हिंदी):</label>
                  <input
                    type="text"
                    value={formData.name.hi}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: { ...formData.name, hi: e.target.value },
                      })
                    }
                    className="w-full px-3 py-1.5 border border-stone-300 rounded-lg text-stone-900"
                  />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Shop Name (English):</label>
                  <input
                    type="text"
                    value={formData.name.en}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: { ...formData.name, en: e.target.value },
                      })
                    }
                    className="w-full px-3 py-1.5 border border-stone-300 rounded-lg text-stone-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">फ़ोन नंबर (Display):</label>
                  <input
                    type="text"
                    value={formData.phone.display}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: { ...formData.phone, display: e.target.value },
                      })
                    }
                    className="w-full px-3 py-1.5 border border-stone-300 rounded-lg text-stone-900"
                  />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 mb-1">WhatsApp नंबर (Country code के साथ):</label>
                  <input
                    type="text"
                    value={formData.whatsapp.rawNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        whatsapp: { ...formData.whatsapp, rawNumber: e.target.value },
                      })
                    }
                    placeholder="उदा. 919414000000"
                    className="w-full px-3 py-1.5 border border-stone-300 rounded-lg text-stone-900"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">पूर्ण पता (Full Address for GMB):</label>
                <textarea
                  rows={2}
                  value={formData.address.fullFormattedHi}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address: {
                        ...formData.address,
                        fullFormattedHi: e.target.value,
                        fullFormattedEn: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-1.5 border border-stone-300 rounded-lg text-stone-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">वर्तमान स्टेटस:</label>
                  <input
                    type="text"
                    value={formData.timing.currentStatusHi}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        timing: { ...formData.timing, currentStatusHi: e.target.value },
                      })
                    }
                    className="w-full px-3 py-1.5 border border-stone-300 rounded-lg text-stone-900"
                  />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 mb-1">समय अनुसूची:</label>
                  <input
                    type="text"
                    value={formData.timing.allDaysSchedule}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        timing: { ...formData.timing, allDaysSchedule: e.target.value },
                      })
                    }
                    className="w-full px-3 py-1.5 border border-stone-300 rounded-lg text-stone-900"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ratings' && (
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Google स्टार रेटिंग (1-5):</label>
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    max="5"
                    value={formData.rating.stars}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        rating: { ...formData.rating, stars: parseFloat(e.target.value) || 5.0 },
                      })
                    }
                    className="w-full px-3 py-1.5 border border-stone-300 rounded-lg text-stone-900"
                  />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 mb-1">कुल रिव्यू संख्या (Review Count):</label>
                  <input
                    type="number"
                    value={formData.rating.reviewCount}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        rating: { ...formData.rating, reviewCount: parseInt(e.target.value, 10) || 10 },
                      })
                    }
                    className="w-full px-3 py-1.5 border border-stone-300 rounded-lg text-stone-900"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Google Business Profile / Maps URL:</label>
                <input
                  type="text"
                  value={formData.links.googleBusinessProfile}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      links: { ...formData.links, googleBusinessProfile: e.target.value },
                    })
                  }
                  className="w-full px-3 py-1.5 border border-stone-300 rounded-lg text-stone-900"
                />
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Google Direct Review Link (समीक्षा हेतु लिंक):</label>
                <input
                  type="text"
                  value={formData.links.googleReviewDirect}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      links: { ...formData.links, googleReviewDirect: e.target.value },
                    })
                  }
                  className="w-full px-3 py-1.5 border border-stone-300 rounded-lg text-stone-900"
                />
              </div>
            </div>
          )}

          {activeTab === 'bangles' && (
            <div className="space-y-3">
              <p className="text-xs text-stone-600">
                यहाँ से आप किसी भी चूड़ी के सेट का मूल्य तुरंत बदल सकते हैं तथा स्टॉक उपलब्ध/अनुपलब्ध कर सकते हैं:
              </p>
              <div className="border border-stone-200 rounded-xl divide-y max-h-72 overflow-y-auto">
                {itemsData.map((item) => (
                  <div key={item.id} className="p-2.5 flex items-center justify-between gap-3 bg-white hover:bg-stone-50">
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-xs text-stone-900 truncate">
                        {item.name.hi}
                      </p>
                      <p className="text-[11px] text-stone-500">
                        {item.setSize} चूड़ियाँ • {item.material}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-stone-700">₹</span>
                      <input
                        type="number"
                        value={item.pricePerSet}
                        onChange={(e) =>
                          handleItemPriceChange(item.id, parseInt(e.target.value, 10) || 0)
                        }
                        className="w-20 px-2 py-1 text-xs border border-stone-300 rounded font-bold text-[#800020]"
                      />
                      <button
                        type="button"
                        onClick={() => handleItemStockToggle(item.id)}
                        className={`text-[10px] font-bold px-2 py-1 rounded border ${
                          item.inStock
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : 'bg-red-100 text-red-800 border-red-300'
                        }`}
                      >
                        {item.inStock ? 'स्टॉक है' : 'खत्म'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="pt-3 border-t border-stone-200 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={handleResetDefaults}
              className="px-3 py-2 text-xs font-bold text-rose-700 hover:text-rose-900 border border-rose-200 hover:bg-rose-50 rounded-xl flex items-center gap-1 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>डिफ़ॉल्ट रीसेट करें</span>
            </button>

            <button
              type="submit"
              className="px-5 py-2.5 bg-[#800020] hover:bg-[#630419] text-white font-bold rounded-xl shadow flex items-center gap-2 transition-all active:scale-95 text-xs sm:text-sm"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>सफलतापूर्वक सुरक्षित!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>सेव करें (Save Changes)</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
