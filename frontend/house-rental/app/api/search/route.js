import { NextResponse } from 'next/server';

// Mock data for demonstration purposes
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
  },
  {
    id: 4,
    title: "Luxury Penthouse",
    location: "101 Ocean Dr, Miami, FL",
    type: "Apartment",
    price: 3500,
    beds: 3,
    baths: 3,
    area: 2000,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Cozy Studio",
    location: "202 Pine St, Seattle, WA",
    type: "Apartment",
    price: 1200,
    beds: 0, // Studio
    baths: 1,
    area: 500,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Renovated Bungalow",
    location: "303 Maple Ave, Chicago, IL",
    type: "House",
    price: 2200,
    beds: 2,
    baths: 1,
    area: 1050,
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const location = searchParams.get('location')?.toLowerCase() || '';
  const propertyType = searchParams.get('propertyType') || '';
  const priceRangeParam = searchParams.get('priceRange') || '';
  const bedrooms = searchParams.get('bedrooms') || '';

  // Add a slight delay to simulate network request
  await new Promise(resolve => setTimeout(resolve, 500));

  // Filter properties based on search parameters
  let filteredProperties = [...properties];

  // Filter by location
  if (location) {
    filteredProperties = filteredProperties.filter(
      property => property.location.toLowerCase().includes(location)
    );
  }

  // Filter by property type (if not the default "Property Type")
  if (propertyType && propertyType !== 'Property Type') {
    filteredProperties = filteredProperties.filter(
      property => property.type === propertyType
    );
  }

  // Filter by price range
  if (priceRangeParam && priceRangeParam !== 'Price Range') {
    const priceRanges = {
      '$500-$1000': [500, 1000],
      '$1000-$1500': [1000, 1500],
      '$1500-$2000': [1500, 2000],
      '$2000+': [2000, 100000]
    };
    
    const [minPrice, maxPrice] = priceRanges[priceRangeParam] || [0, 100000];
    filteredProperties = filteredProperties.filter(
      property => property.price >= minPrice && property.price <= maxPrice
    );
  }

  // Filter by bedrooms
  if (bedrooms && bedrooms !== 'Bedrooms') {
    const bedroomsMap = {
      'Studio': 0,
      '1 Bedroom': 1,
      '2 Bedrooms': 2,
      '3+ Bedrooms': [3, 4, 5, 6, 7, 8, 9, 10]
    };

    const bedroomValue = bedroomsMap[bedrooms];
    if (bedroomValue !== undefined) {
      filteredProperties = filteredProperties.filter(property => {
        if (Array.isArray(bedroomValue)) {
          return bedroomValue.includes(property.beds);
        }
        return property.beds === bedroomValue;
      });
    }
  }

  return NextResponse.json({
    success: true,
    count: filteredProperties.length,
    properties: filteredProperties
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { location, propertyType, priceRange, bedrooms } = body;

    // Add a slight delay to simulate network request
    await new Promise(resolve => setTimeout(resolve, 500));

    // Filter properties (similar to GET logic)
    let filteredProperties = [...properties];

    if (location) {
      filteredProperties = filteredProperties.filter(
        property => property.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (propertyType && propertyType !== 'Property Type') {
      filteredProperties = filteredProperties.filter(
        property => property.type === propertyType
      );
    }

    if (priceRange && priceRange !== 'Price Range') {
      const priceRanges = {
        '$500-$1000': [500, 1000],
        '$1000-$1500': [1000, 1500],
        '$1500-$2000': [1500, 2000],
        '$2000+': [2000, 100000]
      };
      
      const [minPrice, maxPrice] = priceRanges[priceRange] || [0, 100000];
      filteredProperties = filteredProperties.filter(
        property => property.price >= minPrice && property.price <= maxPrice
      );
    }

    if (bedrooms && bedrooms !== 'Bedrooms') {
      const bedroomsMap = {
        'Studio': 0,
        '1 Bedroom': 1,
        '2 Bedrooms': 2,
        '3+ Bedrooms': [3, 4, 5, 6, 7, 8, 9, 10]
      };

      const bedroomValue = bedroomsMap[bedrooms];
      if (bedroomValue !== undefined) {
        filteredProperties = filteredProperties.filter(property => {
          if (Array.isArray(bedroomValue)) {
            return bedroomValue.includes(property.beds);
          }
          return property.beds === bedroomValue;
        });
      }
    }

    return NextResponse.json({
      success: true,
      count: filteredProperties.length,
      properties: filteredProperties
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Invalid request' },
      { status: 400 }
    );
  }
} 