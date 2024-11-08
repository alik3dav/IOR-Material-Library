import React, { createContext, useContext, useState } from 'react';
import { materials as initialMaterials } from '../data/materials';
import type { Material } from '../data/materials';

interface MaterialsContextType {
  materials: Material[];
  addMaterial: (material: Material) => void;
  deleteMaterial: (name: string) => void;
}

const MaterialsContext = createContext<MaterialsContextType | undefined>(undefined);

export function MaterialsProvider({ children }: { children: React.ReactNode }) {
  const [materials, setMaterials] = useState(initialMaterials);

  const addMaterial = (material: Material) => {
    setMaterials(prev => [...prev, material]);
  };

  const deleteMaterial = (name: string) => {
    setMaterials(prev => prev.filter(m => m.name !== name));
  };

  return (
    <MaterialsContext.Provider value={{ materials, addMaterial, deleteMaterial }}>
      {children}
    </MaterialsContext.Provider>
  );
}

export function useMaterials() {
  const context = useContext(MaterialsContext);
  if (context === undefined) {
    throw new Error('useMaterials must be used within a MaterialsProvider');
  }
  return context;
}