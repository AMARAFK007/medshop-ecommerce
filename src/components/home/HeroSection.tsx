import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative bg-white py-12 md:py-20 mt-8 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-90"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Your Health, Our Priority
          </h1>
          <p className="mt-4 text-xl text-white opacity-90 max-w-lg">
            Get your medications delivered to your doorstep with our reliable and fast service. Quality healthcare made accessible.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link href="/products" className="btn-primary text-center py-3 px-6 text-lg rounded-md bg-white text-blue-600 hover:bg-gray-100">
              Shop Now
            </Link>
            <Link href="/categories" className="text-center py-3 px-6 text-lg rounded-md border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-colors">
              Explore Categories
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center md:justify-start space-x-6">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg className="h-5 w-5 text-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg className="h-5 w-5 text-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg className="h-5 w-5 text-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg className="h-5 w-5 text-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-2 text-white">4.9/5 (2k+ reviews)</span>
            </div>
            <div className="text-white">
              <span className="font-semibold">Trusted by</span> 100k+ customers
            </div>
          </div>
        </div>
        
        {/* Image placeholder - in a real implementation this would be an actual image */}
        <div className="md:w-1/2 relative h-64 md:h-96 w-full md:w-96 rounded-lg overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm flex items-center justify-center">
            <div className="text-center">
              <div className="relative h-40 w-40 mx-auto">
                <svg className="w-full h-full text-blue-100" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.447 9.416l-.623.208a1 1 0 00-.677.677l-.208.623a.25.25 0 01-.462 0l-.208-.623a1 1 0 00-.677-.677l-.623-.208a.25.25 0 010-.462l.623-.208a1 1 0 00.677-.677l.208-.623a.25.25 0 01.462 0l.208.623a1 1 0 00.677.677l.623.208a.25.25 0 010 .462zM6.228 6.338l-1.246.415a1 1 0 00-.677.677l-.415 1.246a.25.25 0 01-.462 0l-.415-1.246a1 1 0 00-.677-.677l-1.246-.415a.25.25 0 010-.462l1.246-.415a1 1 0 00.677-.677l.415-1.246a.25.25 0 01.462 0l.415 1.246a1 1 0 00.677.677l1.246.415a.25.25 0 010 .462zM13 16a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path fillRule="evenodd" d="M12.766 4.75h-1.152l-1.57 4.5h4.912l-1.19-4.5zM10.104 14c0-1.234 1.554-2.47 1.554-4.5h.691c0 2.03 1.554 3.266 1.554 4.5a3.5 3.5 0 11-7 0c0-1.234 1.554-2.47 1.554-4.5h.691c0 2.03 1.554 3.266 1.554 4.5a.5.5 0 11-1 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-white text-xl font-semibold mt-4">Browse our catalog of medicines</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 