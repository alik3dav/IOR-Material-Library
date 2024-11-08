import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Trash2 } from 'lucide-react';
import { useMaterials } from '../context/MaterialsContext';
import { categories } from '../data/materials';
import type { Material } from '../data/materials';
import SEO from '../components/SEO';

export default function AdminPanel() {
  const navigate = useNavigate();
  const { materials, addMaterial, deleteMaterial } = useMaterials();
  const [newMaterial, setNewMaterial] = useState<Partial<Material>>({
    name: '',
    ior: 0,
    category: categories[0],
    description: ''
  });

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/admin-login');
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMaterial.name && newMaterial.ior !== undefined && newMaterial.category) {
      addMaterial({
        name: newMaterial.name,
        ior: Number(newMaterial.ior),
        category: newMaterial.category,
        description: newMaterial.description || ''
      });
      setNewMaterial({
        name: '',
        ior: 0,
        category: categories[0],
        description: ''
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    navigate('/');
  };

  return (
    <>
      <SEO 
        title="Admin Panel - IOR Reference"
        description="Manage IOR Reference materials database"
      />
      <div className="min-h-screen bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
            <div className="flex gap-4">
              <button
                onClick={() => navigate('/')}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border
                         border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                View Site
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-white bg-gray-900
                         rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Add New Material Form */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Add New Material</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm
                             focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                    value={newMaterial.name}
                    onChange={(e) => setNewMaterial(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label htmlFor="ior" className="block text-sm font-medium text-gray-700">
                    IOR Value
                  </label>
                  <input
                    type="number"
                    id="ior"
                    step="0.001"
                    required
                    min="0"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm
                             focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                    value={newMaterial.ior}
                    onChange={(e) => setNewMaterial(prev => ({ ...prev, ior: parseFloat(e.target.value) || 0 }))}
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    id="category"
                    required
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm
                             focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                    value={newMaterial.category}
                    onChange={(e) => setNewMaterial(prev => ({ ...prev, category: e.target.value }))}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm
                             focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                    value={newMaterial.description}
                    onChange={(e) => setNewMaterial(prev => ({ ...prev, description: e.target.value }))}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm
                         font-medium rounded-lg shadow-sm text-white bg-gray-900 hover:bg-gray-800
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Material
              </button>
            </form>
          </div>

          {/* Materials List */}
          <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    IOR
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {materials.map((material) => (
                  <tr key={material.name} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {material.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {material.ior}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {material.category}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                      {material.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => deleteMaterial(material.name)}
                        className="text-red-600 hover:text-red-900 transition-colors duration-200
                                 p-2 hover:bg-red-50 rounded-lg"
                        title="Delete material"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}