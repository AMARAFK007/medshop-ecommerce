import React from 'react';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import HeroSection from '@/components/home/HeroSection';
import CategoryList from '@/components/home/CategoryList';
import TestimonialSection from '@/components/home/TestimonialSection';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      <CategoryList />
      <FeaturedProducts />
      <TestimonialSection />
    </div>
  );
} 