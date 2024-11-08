import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-xl px-4 sm:px-0">
      <div className="absolute inset-y-0 left-4 sm:left-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-gray-400" />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-2.5 sm:py-2 border border-gray-200 rounded-lg bg-white
                 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 text-gray-900 
                 placeholder-gray-400 text-base sm:text-sm transition-all duration-200"
        placeholder="Search materials..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}