'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AnimateOnScroll from './AnimateOnScroll';

export default function Hero() {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState({
    location: '',
    propertyType: 'Property Type',
    priceRange: 'Price Range',
    bedrooms: 'Bedrooms'
  });
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsSearching(true);

    try {
      // Format query string for URL
      const queryParams = new URLSearchParams();
      if (searchParams.location) queryParams.append('location', searchParams.location);
      if (searchParams.propertyType !== 'Property Type') queryParams.append('propertyType', searchParams.propertyType);
      if (searchParams.priceRange !== 'Price Range') queryParams.append('priceRange', searchParams.priceRange);
      if (searchParams.bedrooms !== 'Bedrooms') queryParams.append('bedrooms', searchParams.bedrooms);

      // Redirect to listings page with search parameters
      router.push(`/listings?${queryParams.toString()}`);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <section className="relative bg-cover bg-center h-[700px] flex items-center" 
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <AnimateOnScroll animation="fade-down" duration={1000} className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
              Find Your <span className="text-[var(--accent-color)]">Perfect</span> Home
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={300} duration={1000} className="mb-10">
            <p className="text-xl md:text-2xl opacity-90 drop-shadow-md">
              The easiest way to find rental properties and connect with property owners in real time.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={600} duration={1000} className="bg-white rounded-xl p-4 shadow-2xl">
            <form onSubmit={handleSearch} className="flex flex-col gap-4">
              <div className="search-input relative">
                <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input 
                  type="text" 
                  placeholder="Enter location, property type, or keyword"
                  value={searchParams.location}
                  onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
                  className="w-full py-4 pl-12 pr-4 rounded-lg text-gray-800 bg-gray-50 border border-gray-200 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-30 outline-none transition-all"
                />
              </div>
              
              <div className="filters grid grid-cols-1 sm:grid-cols-3 gap-4">
                <select 
                  value={searchParams.propertyType}
                  onChange={(e) => setSearchParams({...searchParams, propertyType: e.target.value})}
                  className="py-3 px-4 rounded-lg text-gray-800 bg-gray-50 border border-gray-200 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-30 outline-none appearance-none bg-[right_1em_center] bg-no-repeat transition-all"
                >
                  <option>Property Type</option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Condo</option>
                  <option>Townhouse</option>
                </select>
                
                <select 
                  value={searchParams.priceRange}
                  onChange={(e) => setSearchParams({...searchParams, priceRange: e.target.value})}
                  className="py-3 px-4 rounded-lg text-gray-800 bg-gray-50 border border-gray-200 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-30 outline-none appearance-none bg-[right_1em_center] bg-no-repeat transition-all"
                >
                  <option>Price Range</option>
                  <option>$500-$1000</option>
                  <option>$1000-$1500</option>
                  <option>$1500-$2000</option>
                  <option>$2000+</option>
                </select>
                
                <select 
                  value={searchParams.bedrooms}
                  onChange={(e) => setSearchParams({...searchParams, bedrooms: e.target.value})}
                  className="py-3 px-4 rounded-lg text-gray-800 bg-gray-50 border border-gray-200 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-30 outline-none appearance-none bg-[right_1em_center] bg-no-repeat transition-all"
                >
                  <option>Bedrooms</option>
                  <option>Studio</option>
                  <option>1 Bedroom</option>
                  <option>2 Bedrooms</option>
                  <option>3+ Bedrooms</option>
                </select>
              </div>
              
              <button 
                type="submit" 
                disabled={isSearching}
                className="search-btn w-full sm:w-auto sm:ml-auto btn btn-primary py-4 px-8 rounded-lg transition-all flex items-center justify-center gap-2 group"
              >
                {/* 🔁 Always render same structure to avoid hydration mismatch */}
                <i 
                  className={`fas ${
                    isSearching ? 'fa-spinner fa-spin' : 'fa-search'
                  } transition-transform`} 
                ></i>
                {isSearching ? 'Searching...' : 'Search Now'}
              </button>
            </form>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={900} duration={1000} className="quick-stats grid grid-cols-3 gap-6 mt-12 bg-black bg-opacity-30 p-6 rounded-xl backdrop-blur-sm">
            <div className="stat text-center">
              <span className="stat-number block text-3xl md:text-4xl font-bold text-white">10,000+</span>
              <span className="stat-label text-gray-200 text-sm md:text-base">Properties</span>
            </div>
            <div className="stat text-center">
              <span className="stat-number block text-3xl md:text-4xl font-bold text-white">5,000+</span>
              <span className="stat-label text-gray-200 text-sm md:text-base">Happy Tenants</span>
            </div>
            <div className="stat text-center">
              <span className="stat-number block text-3xl md:text-4xl font-bold text-white">2,000+</span>
              <span className="stat-label text-gray-200 text-sm md:text-base">Property Owners</span>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}