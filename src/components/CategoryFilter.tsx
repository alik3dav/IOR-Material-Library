import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selected: string | null;
  onSelect: (category: string | null) => void;
}

export default function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 px-4 sm:px-0">
      <button
        onClick={() => onSelect(null)}
        className={`px-3 py-1.5 sm:py-1 rounded-full text-sm sm:text-xs font-medium transition-all duration-200
                   ${!selected 
                     ? 'bg-gray-900 text-white' 
                     : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-3 py-1.5 sm:py-1 rounded-full text-sm sm:text-xs font-medium transition-all duration-200
                     ${selected === category 
                       ? 'bg-gray-900 text-white' 
                       : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}