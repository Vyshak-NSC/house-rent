'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ListingsPage() {
  const searchParams = useSearchParams();
  
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Filters state
  const [filters, setFilters] = useState({
    location: searchParams.get('location') || '',
    propertyType: searchParams.get('propertyType') || 'Property Type',
    priceRange: searchParams.get('priceRange') || 'Price Range',
    bedrooms: searchParams.get('bedrooms') || 'Bedrooms'
  });
  
  const [sortOption, setSortOption] = useState('newest');

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      setError('');
      
      try {
        // Build query string from search params
        const queryParams = new URLSearchParams();
        if (filters.location) queryParams.append('location', filters.location);
        if (filters.propertyType !== 'Property Type') queryParams.append('propertyType', filters.propertyType);
        if (filters.priceRange !== 'Price Range') queryParams.append('priceRange', filters.priceRange);
        if (filters.bedrooms !== 'Bedrooms') queryParams.append('bedrooms', filters.bedrooms);
        
        const response = await fetch(`/api/search?${queryParams.toString()}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch properties');
        }
        
        const data = await response.json();
        let sortedProperties = [...data.properties];
        
        // Sort properties based on selected option
        if (sortOption === 'price-low') {
          sortedProperties.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'price-high') {
          sortedProperties.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'bedrooms') {
          sortedProperties.sort((a, b) => b.beds - a.beds);
        }
        
        setProperties(sortedProperties);
      } catch (err) {
        setError('Failed to load properties. Please try again.');
        console.error('Error fetching properties:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProperties();
  }, [filters, sortOption]);
  
  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };
  
  // Reset all filters
  const resetFilters = () => {
    setFilters({
      location: '',
      propertyType: 'Property Type',
      priceRange: 'Price Range',
      bedrooms: 'Bedrooms'
    });
    setSortOption('newest');
  };
  
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-gray-50 py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">Property Listings</h1>
            
            {/* Filters */}
            <div className="bg-white rounded-xl p-4 mb-8 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={filters.location}
                    onChange={handleFilterChange}
                    placeholder="Enter city, address..."
                    className="w-full py-2 px-3 rounded-lg border border-gray-300 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
                  />
                </div>
                
                <div>
                  <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                    Property Type
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={filters.propertyType}
                    onChange={handleFilterChange}
                    className="w-full py-2 px-3 rounded-lg border border-gray-300 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
                  >
                    <option>Property Type</option>
                    <option>Apartment</option>
                    <option>House</option>
                    <option>Condo</option>
                    <option>Townhouse</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700 mb-1">
                    Price Range
                  </label>
                  <select
                    id="priceRange"
                    name="priceRange"
                    value={filters.priceRange}
                    onChange={handleFilterChange}
                    className="w-full py-2 px-3 rounded-lg border border-gray-300 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
                  >
                    <option>Price Range</option>
                    <option>$500-$1000</option>
                    <option>$1000-$1500</option>
                    <option>$1500-$2000</option>
                    <option>$2000+</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-1">
                    Bedrooms
                  </label>
                  <select
                    id="bedrooms"
                    name="bedrooms"
                    value={filters.bedrooms}
                    onChange={handleFilterChange}
                    className="w-full py-2 px-3 rounded-lg border border-gray-300 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
                  >
                    <option>Bedrooms</option>
                    <option>Studio</option>
                    <option>1 Bedroom</option>
                    <option>2 Bedrooms</option>
                    <option>3+ Bedrooms</option>
                  </select>
                </div>
                
                <div className="flex items-end">
                  <button
                    onClick={resetFilters}
                    className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            </div>
            
            {/* Results header */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
              <p className="text-gray-600 mb-4 sm:mb-0">
                {loading ? 'Loading properties...' : `${properties.length} properties found`}
              </p>
              
              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2 text-gray-700">Sort by:</label>
                <select
                  id="sort"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="py-2 px-3 rounded-lg border border-gray-300 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                  <option value="bedrooms">Bedrooms</option>
                </select>
              </div>
            </div>
            
            {/* Error message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}
            
            {/* Loading indicator */}
            {loading && (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[var(--primary-color)]"></div>
              </div>
            )}
            
            {/* No results */}
            {!loading && properties.length === 0 && (
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <i className="fas fa-search text-4xl text-gray-400 mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">No properties found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search filters or explore our featured properties.</p>
                <Link href="/" className="btn btn-primary inline-block py-2 px-6">
                  Back to Home
                </Link>
              </div>
            )}
            
            {/* Property grid */}
            {!loading && properties.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {properties.map((property) => (
                  <div key={property.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                    <div className="relative h-64 w-full">
                      <img 
                        src={property.image} 
                        alt={property.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-gray-900 bg-opacity-80 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {property.type}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
                      <p className="text-gray-600 mb-4 flex items-center">
                        <i className="fas fa-map-marker-alt mr-2 text-[var(--primary-color)]"></i> 
                        {property.location}
                      </p>
                      
                      <div className="flex justify-between mb-6 text-sm text-gray-600">
                        <span className="flex items-center">
                          <i className="fas fa-bed mr-2 text-gray-400"></i> 
                          {property.beds} {property.beds === 1 ? 'Bed' : 'Beds'}
                        </span>
                        <span className="flex items-center">
                          <i className="fas fa-bath mr-2 text-gray-400"></i> 
                          {property.baths} {property.baths === 1 ? 'Bath' : 'Baths'}
                        </span>
                        <span className="flex items-center">
                          <i className="fas fa-ruler-combined mr-2 text-gray-400"></i> 
                          {property.area} sqft
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="property-price">
                          <span className="text-2xl font-bold text-[var(--primary-color)]">${property.price}</span>
                          <span className="text-gray-600">/month</span>
                        </div>
                        <Link 
                          href={`/listings/${property.id}`} 
                          className="btn btn-primary py-2 px-4 text-sm"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Pagination (basic example) */}
            {!loading && properties.length > 0 && (
              <div className="flex justify-center mt-12">
                <nav className="flex items-center">
                  <button className="px-3 py-1 rounded-l-lg border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50">
                    Previous
                  </button>
                  <button className="px-3 py-1 border-t border-b border-gray-300 bg-[var(--primary-color)] text-white">
                    1
                  </button>
                  <button className="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-3 py-1 rounded-r-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                    Next
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 