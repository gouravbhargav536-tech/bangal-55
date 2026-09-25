import React, { useState } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, X, RotateCcw } from 'lucide-react';
import { MaterialType } from '../data/catalogue';

export interface FilterState {
  searchQuery: string;
  material: string; // 'all' | MaterialType
  occasion: string; // 'all' | tag
  sortBy: 'featured' | 'price_asc' | 'price_desc' | 'newest';
}

interface BangleFilterBarProps {
  filters: FilterState;
  onChangeFilters: (newFilters: FilterState) => void;
  lang: 'hi' | 'en';
  totalResults: number;
}

export const BangleFilterBar: React.FC<BangleFilterBarProps> = ({
  filters,
  onChangeFilters,
  lang,
  totalResults,
}) => {
  const [showExtendedFilters, setShowExtendedFilters] = useState(false);

  const materials: { id: string; labelHi: string; labelEn: string }[] = [
    { id: 'all', labelHi: 'सभी धातु', labelEn: 'All Materials' },
    { id: 'lac', labelHi: 'लाख (Lac)', labelEn: 'Lac' },
    { id: 'glass', labelHi: 'काँच (Glass)', labelEn: 'Glass' },
    { id: 'brass', labelHi: 'पीतल/कड़ा (Brass)', labelEn: 'Brass/Kada' },
    { id: 'metal', labelHi: 'मीनाकारी (Enamel)', labelEn: 'Enamel/Metal' },
    { id: 'silver', labelHi: 'सिल्वर (Silver)', labelEn: 'Silver' },
  ];

  const occasions: { id: string; labelHi: string; labelEn: string }[] = [
    { id: 'all', labelHi: 'सभी अवसर', labelEn: 'All Occasions' },
    { id: 'शादी-ब्याह', labelHi: 'शादी-ब्याह (Wedding)', labelEn: 'Wedding' },
    { id: 'तीज', labelHi: 'तीज (Teej)', labelEn: 'Teej' },
    { id: 'करवा चौथ', labelHi: 'करवा चौथ (Karva Chauth)', labelEn: 'Karva Chauth' },
    { id: 'गणगौर', labelHi: 'गणगौर (Gangaur)', labelEn: 'Gangaur' },
    { id: 'दैनिक उपयोग', labelHi: 'दैनिक उपयोग (Daily)', labelEn: 'Daily Wear' },
  ];

  const sortOptions = [
    { id: 'featured', labelHi: 'लोकप्रिय (Featured)', labelEn: 'Featured' },
    { id: 'price_asc', labelHi: 'कीमत: कम से ज्यादा', labelEn: 'Price: Low to High' },
    { id: 'price_desc', labelHi: 'कीमत: ज्यादा से कम', labelEn: 'Price: High to Low' },
    { id: 'newest', labelHi: 'नया डिज़ाइन (Newest)', labelEn: 'Newest First' },
  ];

  const hasActiveFilters =
    filters.material !== 'all' ||
    filters.occasion !== 'all' ||
    filters.searchQuery.trim() !== '' ||
    filters.sortBy !== 'featured';

  const resetAllFilters = () => {
    onChangeFilters({
      searchQuery: '',
      material: 'all',
      occasion: 'all',
      sortBy: 'featured',
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-amber-900/15 p-3 sm:p-4 shadow-sm mb-6">
      {/* Search Input Row */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={filters.searchQuery}
            onChange={(e) =>
              onChangeFilters({ ...filters, searchQuery: e.target.value })
            }
            placeholder={
              lang === 'hi'
                ? 'चूड़ी का नाम, रंग या अवसर खोजें (उदा. लहरिया, दुल्हन, लाल)...'
                : 'Search bangles, colors, or occasion (e.g. bridal, lehariya)...'
            }
            className="w-full min-h-[44px] pl-10 pr-9 py-2 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent text-stone-900 placeholder:text-stone-400"
          />
          {filters.searchQuery && (
            <button
              onClick={() => onChangeFilters({ ...filters, searchQuery: '' })}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Toggle Button on Mobile */}
        <button
          onClick={() => setShowExtendedFilters(!showExtendedFilters)}
          className={`min-h-[44px] px-3.5 flex items-center gap-1.5 rounded-xl border text-xs font-bold transition-all active:scale-95 ${
            showExtendedFilters || hasActiveFilters
              ? 'bg-[#800020] text-white border-[#800020] shadow-sm'
              : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
          }`}
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span className="hidden sm:inline">
            {lang === 'hi' ? 'फ़िल्टर' : 'Filter'}
          </span>
          {hasActiveFilters && (
            <span className="w-2 h-2 rounded-full bg-amber-400" />
          )}
        </button>
      </div>

      {/* Extended Filters Drawer / Collapsible */}
      {showExtendedFilters && (
        <div className="mt-3 pt-3 border-t border-stone-200 space-y-3">
          {/* Material row */}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1.5">
              {lang === 'hi' ? 'सामग्री (Material):' : 'Material:'}
            </label>
            <div className="flex flex-wrap gap-1.5">
              {materials.map((m) => (
                <button
                  key={m.id}
                  onClick={() => onChangeFilters({ ...filters, material: m.id })}
                  className={`min-h-[38px] px-3 py-1 text-xs rounded-lg font-medium border transition-all ${
                    filters.material === m.id
                      ? 'bg-[#800020] text-white border-[#800020] shadow-xs'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                  }`}
                >
                  {lang === 'hi' ? m.labelHi : m.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Occasion row */}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1.5">
              {lang === 'hi' ? 'अवसर / त्योहार (Occasion):' : 'Occasion:'}
            </label>
            <div className="flex flex-wrap gap-1.5">
              {occasions.map((o) => (
                <button
                  key={o.id}
                  onClick={() => onChangeFilters({ ...filters, occasion: o.id })}
                  className={`min-h-[38px] px-3 py-1 text-xs rounded-lg font-medium border transition-all ${
                    filters.occasion === o.id
                      ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                  }`}
                >
                  {lang === 'hi' ? o.labelHi : o.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Sort row & Reset */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-stone-100">
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-stone-500" />
              <select
                value={filters.sortBy}
                onChange={(e) =>
                  onChangeFilters({
                    ...filters,
                    sortBy: e.target.value as FilterState['sortBy'],
                  })
                }
                className="min-h-[38px] px-2.5 py-1 text-xs bg-stone-50 border border-stone-300 rounded-lg font-medium text-stone-800 focus:outline-none"
              >
                {sortOptions.map((s) => (
                  <option key={s.id} value={s.id}>
                    {lang === 'hi' ? s.labelHi : s.labelEn}
                  </option>
                ))}
              </select>
            </div>

            {hasActiveFilters && (
              <button
                onClick={resetAllFilters}
                className="flex items-center gap-1 text-xs text-rose-700 hover:text-rose-900 font-semibold py-1 px-2 rounded hover:bg-rose-50"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{lang === 'hi' ? 'फ़िल्टर हटाएं' : 'Reset Filters'}</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Results Count bar */}
      <div className="mt-2.5 flex items-center justify-between text-xs text-stone-500 px-0.5">
        <span>
          {lang === 'hi'
            ? `कुल ${totalResults} डिज़ाइन उपलब्ध`
            : `Showing ${totalResults} bangle designs`}
        </span>
        {hasActiveFilters && !showExtendedFilters && (
          <button
            onClick={resetAllFilters}
            className="text-xs text-[#800020] underline font-medium"
          >
            {lang === 'hi' ? 'सारे फ़िल्टर हटाएं' : 'Clear filters'}
          </button>
        )}
      </div>
    </div>
  );
};
