import React from 'react';
import { CATEGORIES, CategoryMeta } from '../data/catalogue';

interface CategoryChipsProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
  lang: 'hi' | 'en';
  totalCount: number;
}

export const CategoryChips: React.FC<CategoryChipsProps> = ({
  selectedCategory,
  onSelectCategory,
  lang,
}) => {
  return (
    <div className="w-full bg-[#FFFDF7] py-2.5 border-b border-amber-900/10 sticky top-0 z-30 shadow-sm backdrop-blur-md bg-opacity-95">
      <div className="max-w-6xl mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between text-xs text-stone-600 mb-1.5 px-0.5">
          <span className="font-bold text-[#800020] uppercase tracking-wider text-[11px] flex items-center gap-1">
            <span>✨</span>
            <span>{lang === 'hi' ? 'श्रेणियां (Bangle Types)' : 'Browse Categories'}</span>
          </span>
          <span className="text-[11px] text-amber-800 font-medium">
            {lang === 'hi' ? 'बाएं-दाएं स्क्रॉल करें 👉' : 'Swipe left/right 👉'}
          </span>
        </div>

        {/* Scrollable chip container */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 scroll-smooth">
          {CATEGORIES.map((cat: CategoryMeta) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 min-h-[44px] px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 active:scale-95 shadow-xs touch-manipulation select-none ${
                  isSelected
                    ? 'bg-[#800020] text-amber-50 border-[#800020] shadow-md ring-2 ring-amber-400/50'
                    : 'bg-white hover:bg-amber-50/80 text-stone-800 border-amber-900/15'
                }`}
              >
                <span className="text-sm select-none" role="img" aria-hidden="true">
                  {cat.iconTag}
                </span>
                <span>{lang === 'hi' ? cat.nameHi : cat.nameEn}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
