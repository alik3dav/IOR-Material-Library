import React from 'react';
import type { Material } from '../data/materials';
import { Copy } from 'lucide-react';

interface MaterialCardProps {
  material: Material;
}

export default function MaterialCard({ material }: MaterialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300
                    p-4 flex flex-col border border-gray-100 h-full">
      <div className="flex justify-between items-start gap-2 mb-2">
        <h3 className="text-base sm:text-sm font-medium text-gray-900">{material.name}</h3>
        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs whitespace-nowrap">
          {material.category}
        </span>
      </div>
      
      <div className="flex items-center justify-between mt-2 mb-1">
        <span className="text-2xl sm:text-xl font-bold text-gray-900">{material.ior}</span>
        <button 
          onClick={() => navigator.clipboard.writeText(material.ior.toString())}
          className="p-2 sm:p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md
                   transition-colors duration-200"
          title="Copy IOR value"
        >
          <Copy className="h-5 w-5 sm:h-4 sm:w-4" />
        </button>
      </div>
      
      {material.description && (
        <p className="text-sm sm:text-xs text-gray-500 mt-2 sm:mt-1 line-clamp-2">{material.description}</p>
      )}
    </div>
  );
}