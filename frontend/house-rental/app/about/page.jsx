'use client';

import Navbar from '../components/Navbar';

export default function About() {
    const team = [
        {
            name: "John Smith",
            role: "CEO & Founder",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
            bio: "With over 15 years of experience in real estate, John founded HomeHaven to revolutionize the rental market."
        },
        {
            name: "Sarah Johnson",
            role: "Head of Operations",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
            bio: "Sarah brings her expertise in property management and customer service to ensure smooth operations."
        },
        {
            name: "Michael Chen",
            role: "Lead Developer",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
            bio: "Michael leads our technical team, building the innovative features that make HomeHaven unique."
        }
    ];

    return (
        <main>
            <Navbar />
            <div className="container py-16">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4">About HomeHaven</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We're on a mission to make finding and managing rental properties easier for everyone.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="bg-white rounded-xl shadow-lg p-12 mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                            <p className="text-gray-600 mb-6">
                                At HomeHaven, we believe that finding a home should be simple, transparent, and stress-free. 
                                We're building the future of rental housing by connecting tenants and property owners through 
                                an innovative platform that makes the entire process seamless.
                            </p>
                            <p className="text-gray-600">
                                Our goal is to transform the rental experience by leveraging technology to create meaningful 
                                connections and streamline the entire rental process from search to move-in.
                            </p>
                        </div>
                        <div className="relative h-96">
                            <img 
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
                                alt="Modern apartment interior"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                        <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                        <div className="text-gray-600">Active Listings</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                        <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                        <div className="text-gray-600">Happy Tenants</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                        <div className="text-4xl font-bold text-primary mb-2">2,000+</div>
                        <div className="text-gray-600">Property Owners</div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="relative h-64">
                                    <img 
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                    <p className="text-primary mb-4">{member.role}</p>
                                    <p className="text-gray-600">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-6">Join Our Journey</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Whether you're looking for a new home or want to list your property, 
                        we're here to help you every step of the way.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="btn btn-primary">Get Started</button>
                        <button className="btn btn-outline">Contact Us</button>
                    </div>
                </div>
            </div>
        </main>
    );
} 