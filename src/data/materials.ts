export interface Material {
  name: string;
  ior: number;
  category: string;
  description?: string;
}

export const categories = [
  'Gems',
  'Glass',
  'Liquids',
  'Metals',
  'Plastics',
  'Other'
] as const;

export const materials: Material[] = [
  {
    name: 'Diamond',
    ior: 2.417,
    category: 'Gems',
    description: 'Pure carbon crystal, highest natural refractive index'
  },
  {
    name: 'Ruby',
    ior: 1.77,
    category: 'Gems',
    description: 'Crystalline form of aluminum oxide'
  },
  {
    name: 'Sapphire',
    ior: 1.77,
    category: 'Gems',
    description: 'Variety of corundum mineral'
  },
  {
    name: 'Crown Glass',
    ior: 1.52,
    category: 'Glass',
    description: 'Common glass type used in windows'
  },
  {
    name: 'Flint Glass',
    ior: 1.62,
    category: 'Glass',
    description: 'High-dispersion glass used in optics'
  },
  {
    name: 'Pyrex',
    ior: 1.47,
    category: 'Glass',
    description: 'Borosilicate glass resistant to thermal shock'
  },
  {
    name: 'Water',
    ior: 1.333,
    category: 'Liquids',
    description: 'At room temperature (20°C)'
  },
  {
    name: 'Alcohol',
    ior: 1.36,
    category: 'Liquids',
    description: 'Pure ethanol at room temperature'
  },
  {
    name: 'Glycerin',
    ior: 1.473,
    category: 'Liquids',
    description: 'Pure glycerol at room temperature'
  },
  {
    name: 'Gold',
    ior: 0.47,
    category: 'Metals',
    description: 'Visible spectrum average'
  },
  {
    name: 'Silver',
    ior: 0.18,
    category: 'Metals',
    description: 'Visible spectrum average'
  },
  {
    name: 'Aluminum',
    ior: 1.44,
    category: 'Metals',
    description: 'Polished surface'
  },
  {
    name: 'Acrylic',
    ior: 1.49,
    category: 'Plastics',
    description: 'PMMA, commonly known as Plexiglas'
  },
  {
    name: 'Polycarbonate',
    ior: 1.585,
    category: 'Plastics',
    description: 'Common in eyewear and electronics'
  },
  {
    name: 'PVC',
    ior: 1.54,
    category: 'Plastics',
    description: 'Polyvinyl chloride'
  },
  {
    name: 'Ice',
    ior: 1.31,
    category: 'Other',
    description: 'At 0°C'
  },
  {
    name: 'Amber',
    ior: 1.55,
    category: 'Other',
    description: 'Fossilized tree resin'
  },
  {
    name: 'Air',
    ior: 1.0003,
    category: 'Other',
    description: 'At sea level, room temperature'
  }
];