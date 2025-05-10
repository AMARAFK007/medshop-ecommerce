import React from 'react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export default function TestimonialSection() {
  const testimonials: Testimonial[] = [
    {
      id: 't1',
      name: 'Sarah Johnson',
      role: 'Regular Customer',
      content: 'MedShop has been a lifesaver for my family. With regular medication needs, their reliable delivery and authentic products have made healthcare management so much easier.',
      avatar: '/images/testimonials/avatar1.jpg',
    },
    {
      id: 't2',
      name: 'Michael Chen',
      role: 'Healthcare Professional',
      content: 'As a healthcare provider, I recommend MedShop to my patients. Their wide range of products, competitive pricing, and excellent customer service make them stand out.',
      avatar: '/images/testimonials/avatar2.jpg',
    },
    {
      id: 't3',
      name: 'Emily Rodriguez',
      role: 'Mother of Two',
      content: "The convenience of ordering medications and healthcare products from home has been incredible. MedShop's fast delivery means I never have to worry about running out of essential supplies.",
      avatar: '/images/testimonials/avatar3.jpg',
    },
  ];

  return (
    <section className="py-12 bg-gray-50 rounded-lg my-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with MedShop
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card bg-white">
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <svg className="h-10 w-10 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                  <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
                </div>
                <div className="flex items-center mt-auto">
                  <div className="relative h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 