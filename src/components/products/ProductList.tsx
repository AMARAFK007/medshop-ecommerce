"use client";

import React from 'react';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
}

export default function ProductList() {
  // Sample product data - in a real application, this would come from an API or database
  const products: Product[] = [
    {
      id: 'p1',
      name: 'Paracetamol 500mg',
      price: 5.99,
      image: '/images/products/paracetamol.jpg',
      category: 'OTC Medicines',
      rating: 4.7,
      reviewCount: 456
    },
    {
      id: 'p2',
      name: 'Digital Blood Pressure Monitor',
      price: 49.99,
      image: '/images/products/bp-monitor.jpg',
      category: 'Medical Devices',
      rating: 4.8,
      reviewCount: 235
    },
    {
      id: 'p3',
      name: 'Vitamin C 1000mg',
      price: 12.99,
      image: '/images/products/vitamin-c.jpg',
      category: 'Wellness Products',
      rating: 4.9,
      reviewCount: 189
    },
    {
      id: 'p4',
      name: 'First Aid Kit',
      price: 24.99,
      image: '/images/products/first-aid.jpg',
      category: 'Medical Devices',
      rating: 4.6,
      reviewCount: 120
    },
    {
      id: 'p5',
      name: 'Digital Thermometer',
      price: 15.99,
      image: '/images/products/thermometer.jpg',
      category: 'Medical Devices',
      rating: 4.5,
      reviewCount: 98
    },
    {
      id: 'p6',
      name: 'Hand Sanitizer 500ml',
      price: 4.99,
      image: '/images/products/sanitizer.jpg',
      category: 'Personal Care',
      rating: 4.3,
      reviewCount: 212
    },
    {
      id: 'p7',
      name: 'Disposable Face Masks (50 Pack)',
      price: 19.99,
      image: '/images/products/masks.jpg',
      category: 'Personal Care',
      rating: 4.7,
      reviewCount: 305
    },
    {
      id: 'p8',
      name: 'Multivitamin Tablets',
      price: 14.99,
      image: '/images/products/multivitamin.jpg',
      category: 'Wellness Products',
      rating: 4.4,
      reviewCount: 178
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">Showing {products.length} products</p>
        <div className="flex items-center">
          <label htmlFor="sort" className="mr-2 text-gray-700">Sort by:</label>
          <select
            id="sort"
            className="border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue="featured"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest Arrivals</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <nav className="inline-flex">
          <button className="px-3 py-1 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 border-t border-b border-gray-300 bg-blue-50 text-blue-600 font-medium">
            1
          </button>
          <button className="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            3
          </button>
          <button className="px-3 py-1 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            Next
          </button>
        </nav>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card hover:shadow-lg transition-shadow overflow-hidden">
      <div className="relative h-48 bg-gray-200">
        {/* Placeholder for product image (in a real app, this would be an actual image) */}
        <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
          <svg className="w-16 h-16 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
      </div>
      
      <div className="p-4">
        <div className="text-sm text-blue-600 mb-1">{product.category}</div>
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-lg mb-2 hover:text-blue-600 transition-colors">{product.name}</h3>
        </Link>
        
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-600 text-sm ml-2">({product.reviewCount})</span>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
          <button 
            className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
} 