'use client';

import Navbar from '../components/Navbar';

export default function HowItWorks() {
    const steps = [
        {
            title: "For Tenants",
            items: [
                {
                    number: "01",
                    title: "Create Your Account",
                    description: "Sign up for free and create your profile. Add your preferences and requirements to help us find the perfect match."
                },
                {
                    number: "02",
                    title: "Browse Properties",
                    description: "Use our advanced search filters to find properties that match your criteria. Save your favorites for later."
                },
                {
                    number: "03",
                    title: "Schedule Viewings",
                    description: "Request viewings directly through our platform. Coordinate with property owners at your convenience."
                },
                {
                    number: "04",
                    title: "Apply & Move In",
                    description: "Submit your application online. Once approved, sign the lease digitally and prepare for your move."
                }
            ]
        },
        {
            title: "For Property Owners",
            items: [
                {
                    number: "01",
                    title: "List Your Property",
                    description: "Create a detailed listing with photos, amenities, and pricing. Set your preferences for potential tenants."
                },
                {
                    number: "02",
                    title: "Review Applications",
                    description: "Receive and review applications from verified tenants. Check their profiles and rental history."
                },
                {
                    number: "03",
                    title: "Schedule Viewings",
                    description: "Coordinate viewings with interested tenants through our platform. Manage your schedule efficiently."
                },
                {
                    number: "04",
                    title: "Finalize Agreement",
                    description: "Select your preferred tenant and create a digital lease agreement. Get paid securely through our platform."
                }
            ]
        }
    ];

    return (
        <main>
            <Navbar />
            <div className="container py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4">How It Works</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Our platform makes the rental process simple and efficient for both tenants and property owners.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {steps.map((section, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold mb-8 text-center">{section.title}</h2>
                            <div className="space-y-8">
                                {section.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="flex gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                                {item.number}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
                    <div className="flex justify-center gap-4">
                        <button className="btn btn-primary">List Your Property</button>
                        <button className="btn btn-outline">Find a Home</button>
                    </div>
                </div>
            </div>
        </main>
    );
} 