"use client";

import React from 'react';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  sales: number;
  stock: number;
}

export default function TopProducts() {
  // Sample product data - in a real app, this would come from an API or database
  const products: Product[] = [
    {
      id: 'p1',
      name: 'Paracetamol 500mg',
      category: 'OTC Medicines',
      price: 5.99,
      sales: 542,
      stock: 150,
    },
    {
      id: 'p3',
      name: 'Vitamin C 1000mg',
      category: 'Wellness Products',
      price: 12.99,
      sales: 423,
      stock: 85,
    },
    {
      id: 'p7',
      name: 'Disposable Face Masks (50 Pack)',
      category: 'Personal Care',
      price: 19.99,
      sales: 385,
      stock: 210,
    },
    {
      id: 'p2',
      name: 'Digital Blood Pressure Monitor',
      category: 'Medical Devices',
      price: 49.99,
      sales: 312,
      stock: 42,
    },
    {
      id: 'p6',
      name: 'Hand Sanitizer 500ml',
      category: 'Personal Care',
      price: 4.99,
      sales: 298,
      stock: 175,
    },
  ];

  return (
    <div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto">
          <div className="py-2 align-middle inline-block min-w-full">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Sales
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Stock
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link href={`/admin/products/${product.id}`} className="text-blue-600 hover:text-blue-900">
                          {product.name}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{product.category}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">${product.price.toFixed(2)}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{product.sales}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          product.stock > 50 ? 'bg-green-100 text-green-800' : 
                          product.stock > 10 ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-red-100 text-red-800'
                        }`}>
                          {product.stock}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-right">
        <Link href="/admin/products" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          View all products →
        </Link>
      </div>
    </div>
  );
} 