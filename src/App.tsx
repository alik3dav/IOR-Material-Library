import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { GlassWater } from 'lucide-react';
import { categories } from './data/materials';
import SearchBar from './components/SearchBar';
import MaterialCard from './components/MaterialCard';
import CategoryFilter from './components/CategoryFilter';
import AdminLogin from './pages/AdminLogin';
import AdminPanel from './pages/AdminPanel';
import { MaterialsProvider, useMaterials } from './context/MaterialsContext';
import SEO from './components/SEO';

function HomePage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { materials } = useMaterials();

  const filteredMaterials = useMemo(() => {
    return materials.filter((material) => {
      const matchesSearch = material.name.toLowerCase().includes(search.toLowerCase()) ||
                          material.description?.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !selectedCategory || material.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory, materials]);

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <GlassWater className="h-6 w-6 text-gray-900" />
                <h1 className="text-xl font-bold text-gray-900">IOR Reference</h1>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  to="/admin-login"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Admin
                </Link>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Hero Section */}
          <div className="text-center mb-8 px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Find IOR Values for Any Material
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Comprehensive index of refraction (IOR) reference for 3D artists and designers.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="space-y-4 mb-8">
            <div className="w-full flex justify-center">
              <SearchBar value={search} onChange={setSearch} />
            </div>
            <CategoryFilter 
              categories={categories}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>

          {/* Materials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {filteredMaterials.map((material) => (
              <MaterialCard key={material.name} material={material} />
            ))}
          </div>

          {filteredMaterials.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500 text-sm">No materials found matching your criteria.</p>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="bg-white/80 backdrop-blur-sm mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-center text-gray-500 text-sm">
              Values are approximate and may vary based on specific conditions.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default function App() {
  return (
    <MaterialsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </MaterialsProvider>
  );
}