'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PropertyListings() {
  const [favoriteProperties, setFavoriteProperties] = useState([]);

  const properties = [
    {
      id: 1,
      title: "Modern Family Home",
      location: "123 Main St, New York, NY",
      type: "House",
      price: 2500,
      beds: 3,
      baths: 2,
      area: 1500,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Downtown Loft",
      location: "456 Park Ave, San Francisco, CA",
      type: "Apartment",
      price: 1800,
      beds: 1,
      baths: 1,
      area: 850,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Suburban Townhouse",
      location: "789 Oak Dr, Austin, TX",
      type: "Townhouse",
      price: 1950,
      beds: 2,
      baths: 2.5,
      area: 1200,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const toggleFavorite = (id) => {
    if (favoriteProperties.includes(id)) {
      setFavoriteProperties(favoriteProperties.filter(propId => propId !== id));
    } else {
      setFavoriteProperties([...favoriteProperties, id]);
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <div className="section-tag">Exclusive Selection</div>
          <h2>Featured <span className="text-[var(--accent-color)]">Properties</span></h2>
          <p>Discover our top-rated rental properties</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
                <button 
                  className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 ${favoriteProperties.includes(property.id) ? 'text-red-500' : 'text-gray-400'}`}
                  onClick={() => toggleFavorite(property.id)}
                >
                  <i className={`${favoriteProperties.includes(property.id) ? 'fas' : 'far'} fa-heart`}></i>
                </button>
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
                  <Link href={`/listings/${property.id}`} className="btn btn-primary py-2 px-4 text-sm">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link href="/listings" className="btn btn-outline py-3 px-8 flex items-center group">
            View All Properties
            <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
          </Link>
        </div>
      </div>
    </section>
  );
} 