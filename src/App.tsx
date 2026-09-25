/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { StickyBottomBar } from './components/StickyBottomBar';
import { HeroFestivalBanner } from './components/HeroFestivalBanner';
import { CategoryChips } from './components/CategoryChips';
import { BangleCard } from './components/BangleCard';
import { BangleFilterBar, FilterState } from './components/BangleFilterBar';
import { GoogleProfileSection } from './components/GoogleProfileSection';
import { TrustBadges } from './components/TrustBadges';
import { BulkOrderModal } from './components/BulkOrderModal';
import { SizingGuideModal } from './components/SizingGuideModal';
import { GoogleReviewQrModal } from './components/GoogleReviewQrModal';
import { OwnerGuideModal } from './components/OwnerGuideModal';
import { AdminDrawer } from './components/AdminDrawer';
import { BangleDetailModal } from './components/BangleDetailModal';
import { ShopStoryAndFaq } from './components/ShopStoryAndFaq';
import { Footer } from './components/Footer';

import {
  ShopConfig,
  getStoredShopConfig,
  saveShopConfig,
} from './config/shopConfig';
import {
  BangleItem,
  getStoredCatalogue,
  saveCatalogue,
} from './data/catalogue';

export default function App() {
  // 1. Language state: Hindi is default as requested, with English toggle
  const [lang, setLang] = useState<'hi' | 'en'>('hi');

  // 2. Shop Configuration & Catalogue with LocalStorage persistence
  const [config, setConfig] = useState<ShopConfig>(getStoredShopConfig());
  const [catalogue, setCatalogue] = useState<BangleItem[]>(getStoredCatalogue());

  // 3. Category & Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    material: 'all',
    occasion: 'all',
    sortBy: 'featured',
  });

  // 4. Modal Visibility States
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);
  const [isSizingModalOpen, setIsSizingModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isOwnerGuideOpen, setIsOwnerGuideOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [detailItem, setDetailItem] = useState<BangleItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Check URL hash for direct #/admin or /admin access
  useEffect(() => {
    const checkHash = () => {
      if (
        window.location.hash === '#/admin' ||
        window.location.hash === '#admin' ||
        window.location.search.includes('admin=true')
      ) {
        setIsAdminOpen(true);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'hi' ? 'en' : 'hi'));
  };

  // "Send to phone" / Share Action
  const handleShareApp = () => {
    const title =
      lang === 'hi'
        ? `${config.name.hi} - झुंझुनूं (चूड़ी कैटलॉग)`
        : `${config.name.en} - Jhunjhunu Bangle Catalogue`;
    const text =
      lang === 'hi'
        ? `${config.name.hi} (नेहरू मार्केट, झुंझुनूं) का नवीनतम चूड़ा व लाख कंगन कैटलॉग देखें।`
        : `Explore authentic Rajasthani lac and bridal bangles from Mugal Bangels, Jhunjhunu.`;

    if (navigator.share) {
      navigator
        .share({
          title,
          text,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(`${title} - ${window.location.href}`);
      showToast(
        lang === 'hi'
          ? 'कैटलॉग लिंक कॉपी हो गया! अपने व्हाट्सएप या दोस्तों को भेजें।'
          : 'Catalogue link copied! Share with friends or send to phone.'
      );
    }
  };

  // Filter & Sort Logic for Catalogue
  const filteredItems = useMemo(() => {
    return catalogue
      .filter((item) => {
        // Category filter
        if (selectedCategory !== 'all' && item.category !== selectedCategory) {
          return false;
        }

        // Material filter
        if (filters.material !== 'all' && item.material !== filters.material) {
          return false;
        }

        // Occasion filter
        if (filters.occasion !== 'all') {
          const hasOccasion = item.occasionTags.some((tag) =>
            tag.toLowerCase().includes(filters.occasion.toLowerCase())
          );
          if (!hasOccasion) return false;
        }

        // Search Query
        if (filters.searchQuery.trim() !== '') {
          const q = filters.searchQuery.toLowerCase();
          const matchHi = item.name.hi.toLowerCase().includes(q);
          const matchEn = item.name.en.toLowerCase().includes(q);
          const matchDesc =
            item.description.hi.toLowerCase().includes(q) ||
            item.description.en.toLowerCase().includes(q);
          const matchColor = item.colors.some((c) =>
            c.toLowerCase().includes(q)
          );
          const matchOccasion = item.occasionTags.some((o) =>
            o.toLowerCase().includes(q)
          );

          if (!matchHi && !matchEn && !matchDesc && !matchColor && !matchOccasion) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (filters.sortBy === 'price_asc') {
          return a.pricePerSet - b.pricePerSet;
        }
        if (filters.sortBy === 'price_desc') {
          return b.pricePerSet - a.pricePerSet;
        }
        if (filters.sortBy === 'newest') {
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        }
        // featured: bestsellers first
        return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
      });
  }, [catalogue, selectedCategory, filters]);

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-stone-900 flex flex-col font-sans pb-bottom-bar">
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#800020] text-amber-100 px-4 py-2.5 rounded-2xl shadow-2xl border-2 border-amber-400 text-xs sm:text-sm font-bold flex items-center gap-2 animate-bounce">
          <span>✨</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Header with branding, status & Google Review rating chip */}
      <Header
        config={config}
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenReviewModal={() => setIsReviewModalOpen(true)}
        onOpenSizingModal={() => setIsSizingModalOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* 2. Hero Festival Banners (Teej, Karva Chauth, Gangaur, Wedding, Rakhi) */}
      <HeroFestivalBanner
        config={config}
        lang={lang}
        onSelectCategory={(catId) => {
          setSelectedCategory(catId);
          const el = document.getElementById('bangle-catalogue-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenBulkOrder={() => setIsBulkModalOpen(true)}
      />

      {/* 3. Trust Badges (In-store shopping, Kerbside pickup, Delivery, Wheelchair) */}
      <TrustBadges services={config.services} lang={lang} />

      {/* 4. Horizontal Scrolling Category Chips (Mobile-first) */}
      <CategoryChips
        selectedCategory={selectedCategory}
        onSelectCategory={(catId) => setSelectedCategory(catId)}
        lang={lang}
        totalCount={catalogue.length}
      />

      {/* 5. Main Bangle Product Catalogue */}
      <main
        id="bangle-catalogue-section"
        className="max-w-6xl mx-auto px-3 sm:px-4 py-6 flex-1 w-full"
      >
        {/* Filter and Search Bar */}
        <BangleFilterBar
          filters={filters}
          onChangeFilters={setFilters}
          lang={lang}
          totalResults={filteredItems.length}
        />

        {/* Product Grid with Jharokha Arch Frames */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {filteredItems.map((item) => (
              <BangleCard
                key={item.id}
                item={item}
                config={config}
                lang={lang}
                onQuickView={(bangle) => setDetailItem(bangle)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-8 text-center border-2 border-dashed border-stone-300 max-w-md mx-auto my-8">
            <span className="text-4xl">🔍</span>
            <h3 className="text-lg font-bold text-stone-800 mt-2 font-serif">
              {lang === 'hi'
                ? 'कोई चूड़ी डिज़ाइन नहीं मिला'
                : 'No bangles matched your filter'}
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              {lang === 'hi'
                ? 'कृपया अलग शब्द खोजें या अन्य फ़िल्टर चुनें।'
                : 'Try clearing filters or search with another keyword.'}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setFilters({
                  searchQuery: '',
                  material: 'all',
                  occasion: 'all',
                  sortBy: 'featured',
                });
              }}
              className="mt-4 px-4 py-2 bg-[#800020] text-amber-50 rounded-xl text-xs font-bold shadow"
            >
              {lang === 'hi' ? 'सभी डिज़ाइन देखें' : 'View All Designs'}
            </button>
          </div>
        )}
      </main>

      {/* 6. Google Business Profile & Rating Section */}
      <GoogleProfileSection
        config={config}
        lang={lang}
        onOpenReviewModal={() => setIsReviewModalOpen(true)}
        onShareApp={handleShareApp}
        onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)}
      />

      {/* 7. Shop Story, Reviews & FAQs */}
      <ShopStoryAndFaq
        config={config}
        lang={lang}
        onOpenReviewModal={() => setIsReviewModalOpen(true)}
        onOpenBulkModal={() => setIsBulkModalOpen(true)}
      />

      {/* 8. Footer with Disclaimer, Owner Links and Copyright */}
      <Footer
        config={config}
        lang={lang}
        onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenReviewModal={() => setIsReviewModalOpen(true)}
        onShareApp={handleShareApp}
      />

      {/* 9. Mobile Sticky Bottom Action Bar (Call, WhatsApp, Directions) */}
      <StickyBottomBar
        config={config}
        lang={lang}
        onOpenBulkOrder={() => setIsBulkModalOpen(true)}
        onShareApp={handleShareApp}
      />

      {/* 10. Modals */}
      <BulkOrderModal
        isOpen={isBulkModalOpen}
        onClose={() => setIsBulkModalOpen(false)}
        config={config}
        lang={lang}
      />

      <SizingGuideModal
        isOpen={isSizingModalOpen}
        onClose={() => setIsSizingModalOpen(false)}
        config={config}
        lang={lang}
      />

      <GoogleReviewQrModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        config={config}
        lang={lang}
      />

      <OwnerGuideModal
        isOpen={isOwnerGuideOpen}
        onClose={() => setIsOwnerGuideOpen(false)}
        config={config}
        lang={lang}
      />

      <AdminDrawer
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        config={config}
        catalogue={catalogue}
        onUpdateConfig={(newConfig) => {
          setConfig(newConfig);
          saveShopConfig(newConfig);
        }}
        onUpdateCatalogue={(newItems) => {
          setCatalogue(newItems);
          saveCatalogue(newItems);
        }}
        lang={lang}
      />

      <BangleDetailModal
        item={detailItem}
        isOpen={!!detailItem}
        onClose={() => setDetailItem(null)}
        config={config}
        lang={lang}
        onOpenSizingModal={() => {
          setDetailItem(null);
          setIsSizingModalOpen(true);
        }}
      />
    </div>
  );
}
