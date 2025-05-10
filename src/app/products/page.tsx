import React from 'react';
import ProductList from '@/components/products/ProductList';
import ProductFilter from '@/components/products/ProductFilter';
import SearchBar from '@/components/products/SearchBar';

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">All Products</h1>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          Browse our complete catalog of healthcare products
        </p>
      </div>
      
      <div className="mb-8">
        <SearchBar />
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/4">
          <ProductFilter />
        </div>
        <div className="w-full lg:w-3/4">
          <ProductList />
        </div>
      </div>
    </div>
  );
} 