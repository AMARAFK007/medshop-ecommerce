import React, { useState } from 'react';

export default function ProductFilter() {
  // State for filter sections (expanded/collapsed)
  const [expanded, setExpanded] = useState({
    categories: true,
    price: true,
    rating: true,
    brand: true
  });

  // Toggle section expansion
  const toggleSection = (section: keyof typeof expanded) => {
    setExpanded({
      ...expanded,
      [section]: !expanded[section]
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Filters</h2>

      {/* Categories Filter */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-gray-700">Categories</h3>
          <button 
            onClick={() => toggleSection('categories')}
            className="text-gray-500 focus:outline-none"
          >
            {expanded.categories ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </button>
        </div>
        
        {expanded.categories && (
          <div className="space-y-2">
            <div className="flex items-center">
              <input id="cat-all" type="checkbox" className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500" />
              <label htmlFor="cat-all" className="ml-2 text-gray-700">All Categories</label>
            </div>
            <div className="flex items-center">
              <input id="cat-prescription" type="checkbox" className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500" />
              <label htmlFor="cat-prescription" className="ml-2 text-gray-700">Prescription Medicines</label>
            </div>
            <div className="flex items-center">
              <input id="cat-otc" type="checkbox" className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500" />
              <label htmlFor="cat-otc" className="ml-2 text-gray-700">OTC Medicines</label>
            </div>
            <div className="flex items-center">
              <input id="cat-wellness" type="checkbox" className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500" />
              <label htmlFor="cat-wellness" className="ml-2 text-gray-700">Wellness Products</label>
            </div>
            <div className="flex items-center">
              <input id="cat-personal" type="checkbox" className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500" />
              <label htmlFor="cat-personal" className="ml-2 text-gray-700">Personal Care</label>
            </div>
            <div className="flex items-center">
              <input id="cat-devices" type="checkbox" className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500" />
              <label htmlFor="cat-devices" className="ml-2 text-gray-700">Medical Devices</label>
            </div>
          </div>
        )}
      </div>

      {/* Price Range Filter */}
      <div className="mb-6 border-t pt-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-gray-700">Price Range</h3>
          <button 
            onClick={() => toggleSection('price')}
            className="text-gray-500 focus:outline-none"
          >
            {expanded.price ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </button>
        </div>
        
        {expanded.price && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <input 
                type="range" 
                min="0" 
                max="1000" 
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="w-1/2 pr-2">
                <label htmlFor="min-price" className="block text-sm text-gray-600 mb-1">Min</label>
                <input 
                  type="number" 
                  id="min-price" 
                  placeholder="$0" 
                  className="w-full border rounded-md py-1 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <div className="w-1/2 pl-2">
                <label htmlFor="max-price" className="block text-sm text-gray-600 mb-1">Max</label>
                <input 
                  type="number" 
                  id="max-price" 
                  placeholder="$1000" 
                  className="w-full border rounded-md py-1 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Rating Filter */}
      <div className="mb-6 border-t pt-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-gray-700">Rating</h3>
          <button 
            onClick={() => toggleSection('rating')}
            className="text-gray-500 focus:outline-none"
          >
            {expanded.rating ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </button>
        </div>
        
        {expanded.rating && (
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center">
                <input 
                  id={`rating-${rating}`} 
                  type="checkbox" 
                  className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500" 
                />
                <label htmlFor={`rating-${rating}`} className="ml-2 text-gray-700 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1">{rating}+ Stars</span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Brand Filter */}
      <div className="mb-6 border-t pt-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-gray-700">Brands</h3>
          <button 
            onClick={() => toggleSection('brand')}
            className="text-gray-500 focus:outline-none"
          >
            {expanded.brand ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </button>
        </div>
        
        {expanded.brand && (
          <div className="space-y-2">
            <div className="mb-2">
              <input 
                type="text" 
                placeholder="Search brands" 
                className="w-full border rounded-md py-1 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>
            <div className="flex items-center">
              <input id="brand-all" type="checkbox" className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500" />
              <label htmlFor="brand-all" className="ml-2 text-gray-700">All Brands</label>
            </div>
            <div className="flex items-center">
              <input id="brand-1" type="checkbox" className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500" />
              <label htmlFor="brand-1" className="ml-2 text-gray-700">MediCorp</label>
            </div>
            <div className="flex items-center">
              <input id="brand-2" type="checkbox" className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500" />
              <label htmlFor="brand-2" className="ml-2 text-gray-700">HealthPlus</label>
            </div>
            <div className="flex items-center">
              <input id="brand-3" type="checkbox" className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500" />
              <label htmlFor="brand-3" className="ml-2 text-gray-700">WellLife</label>
            </div>
            <div className="flex items-center">
              <input id="brand-4" type="checkbox" className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500" />
              <label htmlFor="brand-4" className="ml-2 text-gray-700">PharmaCare</label>
            </div>
          </div>
        )}
      </div>

      {/* Apply Filters Button */}
      <div className="mt-6 pt-6 border-t flex space-x-4">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
          Apply Filters
        </button>
        <button className="text-blue-600 hover:text-blue-800 font-medium">
          Reset
        </button>
      </div>
    </div>
  );
} 