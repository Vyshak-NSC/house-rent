'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import PropertyListings from './components/PropertyListings';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');

    if (!accessToken) {
      router.push('/auth/signin');
      return;
    }

    try {
      const decoded = jwtDecode(accessToken);
      if (decoded?.username) {
        setUsername(decoded.username);
      } else {
        throw new Error('No username in token');
      }
    } catch (err) {
      console.error('Invalid token:', err);
      router.push('/auth/signin');
    } finally {
      setLoading(false);
    }
  }, [router]);

  if (loading) return null; // or a loading spinner

  return (
    <main>
      <Navbar />
      <div className="text-xl font-semibold text-center mt-6 text-blue-600">
        Welcome, {username}!
      </div>
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
