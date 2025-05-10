"use client";

import React from 'react';

interface ProductReviewsProps {
  productId: string;
}

interface Review {
  id: string;
  name: string;
  date: string;
  rating: number;
  title: string;
  content: string;
  avatar: string;
  verified: boolean;
}

export default function ProductReviews({ productId }: ProductReviewsProps) {
  // In a real app, this data would come from an API or database
  const reviews: Review[] = [
    {
      id: 'r1',
      name: 'Jane Smith',
      date: '2023-04-15',
      rating: 5,
      title: 'Excellent for pain relief',
      content: "This medication has been perfect for my occasional headaches. It works quickly and I don't experience any side effects. Would definitely recommend it!",
      avatar: '/images/reviews/avatar1.jpg',
      verified: true,
    },
    {
      id: 'r2',
      name: 'Robert Johnson',
      date: '2023-03-22',
      rating: 4,
      title: 'Good quality product',
      content: "I've been using this product for several months and it's been reliable. Packaging is good and the tablets are easy to swallow. Only takes off one star because it sometimes takes a bit longer to take effect than I'd like.",
      avatar: '/images/reviews/avatar2.jpg',
      verified: true,
    },
    {
      id: 'r3',
      name: 'Samantha Brown',
      date: '2023-02-10',
      rating: 5,
      title: 'Fast shipping, great product',
      content: 'The order arrived much faster than expected and the product quality is excellent. I appreciate the clear labeling and instructions included in the package.',
      avatar: '/images/reviews/avatar3.jpg',
      verified: true,
    },
  ];

  // Calculate average rating
  const averageRating = reviews.reduce((total, review) => total + review.rating, 0) / reviews.length;

  // Rating distribution
  const ratingCounts = [0, 0, 0, 0, 0]; // Index 0 for 1 star, 4 for 5 stars
  reviews.forEach(review => {
    ratingCounts[review.rating - 1] += 1;
  });

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {/* Summary */}
        <div className="col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center mb-4">
              <div className="text-5xl font-bold text-gray-900 mb-2">{averageRating.toFixed(1)}</div>
              <div className="flex justify-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    className={`w-6 h-6 ${star <= Math.round(averageRating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600">{reviews.length} reviews</p>
            </div>
            
            {/* Rating distribution */}
            <div className="space-y-3 mt-6">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center">
                  <div className="w-12 text-sm text-gray-600">{rating} Star</div>
                  <div className="w-full mx-2 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-yellow-400 rounded-full" 
                      style={{ width: `${(ratingCounts[rating - 1] / reviews.length) * 100}%` }}
                    ></div>
                  </div>
                  <div className="w-12 text-sm text-gray-600 text-right">
                    {ratingCounts[rating - 1]}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Write a review */}
            <div className="mt-8">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors">
                Write a Review
              </button>
            </div>
          </div>
        </div>
        
        {/* Reviews */}
        <div className="col-span-2">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-6 mb-6 last:border-b-0 last:mb-0 last:pb-0">
              <div className="flex items-start">
                <div className="relative h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg mr-4">
                  {review.name.charAt(0)}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-semibold text-gray-900">{review.name}</h3>
                    <div className="text-sm text-gray-500">
                      {new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    {review.verified && (
                      <span className="ml-3 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  
                  <h4 className="font-medium text-gray-900 mb-1">{review.title}</h4>
                  <p className="text-gray-600">{review.content}</p>
                  
                  <div className="mt-3 flex items-center">
                    <button className="text-gray-500 hover:text-blue-600 text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905A3.61 3.61 0 018.5 7.5" />
                      </svg>
                      Helpful
                    </button>
                    <span className="mx-2 text-gray-300">•</span>
                    <button className="text-gray-500 hover:text-blue-600 text-sm">
                      Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="mt-8 text-center">
            <button className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 font-medium transition-colors">
              Load More Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 