"use client";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import PropertyListings from './components/PropertyListings';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { getUserFromToken } from './utils/auth';

import { useEffect, useState } from 'react';

export default function Home() {
  useEffect(() => {
    const user = getUserFromToken();
    if (user) {
      setUsername(user);
    }
  }, []);
  return (
    <main>
      <Navbar />
      {username && (
        <div className="text-xl font-semibold text-center mt-6 text-blue-600">
          Welcome, {username}!
        </div>
      )}
      <Hero />
      <Features />
      <HowItWorks />
      <PropertyListings />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
} 