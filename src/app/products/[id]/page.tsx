import React from 'react';
import Link from 'next/link';
import ProductReviews from '@/components/products/ProductReviews';
import RelatedProducts from '@/components/products/RelatedProducts';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  // In a real app, this data would come from an API or database based on params.id
  const product = {
    id: params.id,
    name: 'Paracetamol 500mg',
    price: 5.99,
    originalPrice: 7.99,
    discount: '25%',
    description: "Paracetamol is a common painkiller used to treat aches and pain. It can also be used to reduce a high temperature. It's available combined with other painkillers and anti-sickness medicines.",
    longDescription: `
      <p>Paracetamol is a widely used over-the-counter pain reliever (analgesic) and fever reducer (antipyretic). It's typically used to treat mild to moderate pain and fever.</p>
      <p>Common uses include relief from:</p>
      <ul>
        <li>Headache</li>
        <li>Migraine</li>
        <li>Toothache</li>
        <li>Backache</li>
        <li>Cold and flu symptoms</li>
        <li>Fever</li>
      </ul>
      <p>One 500mg tablet should be taken every 4-6 hours as needed, with a maximum of 8 tablets in 24 hours. Do not exceed the stated dose.</p>
    `,
    image: '/images/products/paracetamol.jpg',
    category: 'OTC Medicines',
    brand: 'MediCorp',
    rating: 4.7,
    reviewCount: 456,
    stock: 150,
    isAvailable: true,
    dosageForm: 'Tablets',
    packSize: '30 Tablets',
    activeIngredient: 'Paracetamol',
    strength: '500mg',
    tags: ['pain relief', 'fever', 'headache', 'cold', 'flu'],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-blue-600">Home</Link>
          </li>
          <li className="flex items-center space-x-2">
            <span>/</span>
            <Link href="/products" className="hover:text-blue-600">Products</Link>
          </li>
          <li className="flex items-center space-x-2">
            <span>/</span>
            <Link href={`/categories/${product.category.toLowerCase().replace(' ', '-')}`} className="hover:text-blue-600">
              {product.category}
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <span>/</span>
            <span className="text-gray-700">{product.name}</span>
          </li>
        </ol>
      </nav>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Product Image */}
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
          <div className="relative h-80 w-80 bg-blue-50 rounded-lg flex items-center justify-center">
            <svg className="w-32 h-32 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-600 text-sm">{product.rating} ({product.reviewCount} reviews)</span>
            </div>
          </div>
          
          <div className="flex items-center mb-6">
            <p className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
            {product.originalPrice && (
              <div className="ml-4 flex items-center">
                <p className="text-gray-500 line-through">${product.originalPrice.toFixed(2)}</p>
                <span className="ml-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                  Save {product.discount}
                </span>
              </div>
            )}
          </div>
          
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          <div className="border-t border-b py-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 text-sm">Brand</p>
                <p className="font-medium">{product.brand}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Category</p>
                <p className="font-medium">{product.category}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Dosage Form</p>
                <p className="font-medium">{product.dosageForm}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Pack Size</p>
                <p className="font-medium">{product.packSize}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Active Ingredient</p>
                <p className="font-medium">{product.activeIngredient}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Strength</p>
                <p className="font-medium">{product.strength}</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center mb-6">
            <div className="mr-4">
              <label htmlFor="quantity" className="block text-gray-700 text-sm font-medium mb-1">
                Quantity
              </label>
              <div className="flex items-center border rounded-md">
                <button className="px-3 py-1 text-gray-600 hover:text-blue-600">-</button>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  defaultValue="1"
                  className="w-12 text-center border-0 focus:outline-none focus:ring-0"
                />
                <button className="px-3 py-1 text-gray-600 hover:text-blue-600">+</button>
              </div>
            </div>
            
            <div className="flex-grow">
              <div className="mb-1 h-5">
                {product.isAvailable ? (
                  <span className="text-green-600 text-sm font-medium flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    In Stock
                  </span>
                ) : (
                  <span className="text-red-600 text-sm font-medium">Out of Stock</span>
                )}
              </div>
              <button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md transition-colors"
                disabled={!product.isAvailable}
              >
                Add to Cart
              </button>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Add to Wishlist
            </button>
            <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Product Description and Details Tabs */}
      <div className="mb-16">
        <div className="border-b">
          <nav className="flex space-x-8">
            <button className="border-b-2 border-blue-600 py-4 px-1 text-blue-600 font-medium">
              Description
            </button>
            <button className="py-4 px-1 text-gray-500 font-medium">
              Additional Information
            </button>
            <button className="py-4 px-1 text-gray-500 font-medium">
              Reviews ({product.reviewCount})
            </button>
          </nav>
        </div>
        
        <div className="py-6">
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: product.longDescription }} />
        </div>
      </div>

      {/* Product Reviews */}
      <ProductReviews productId={params.id} />

      {/* Related Products */}
      <RelatedProducts category={product.category} currentProductId={params.id} />
    </div>
  );
} 