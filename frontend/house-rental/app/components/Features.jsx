import AnimateOnScroll from './AnimateOnScroll';

export default function Features() {
    const features = [
        {
            icon: 'fa-search',
            title: 'Smart Search',
            description: 'Browse thousands of verified properties with advanced filters to find your perfect match.',
            color: 'indigo'
        },
        {
            icon: 'fa-home',
            title: 'List Properties',
            description: 'Property owners can easily list their properties and connect with potential tenants.',
            color: 'pink'
        },
        {
            icon: 'fa-comments',
            title: 'Direct Communication',
            description: 'Our platform enables seamless communication between tenants and property owners.',
            color: 'blue'
        },
        {
            icon: 'fa-file-contract',
            title: 'Secure Agreements',
            description: 'Finalize rental agreements online with our secure and legally compliant tools.',
            color: 'green'
        }
    ];

    const getGradient = (color) => {
        switch(color) {
            case 'indigo': return 'from-indigo-600 to-indigo-400';
            case 'pink': return 'from-pink-600 to-pink-400';
            case 'blue': return 'from-blue-600 to-blue-400';
            case 'green': return 'from-emerald-600 to-emerald-400';
            default: return 'from-indigo-600 to-indigo-400';
        }
    };

    const getLightColor = (color) => {
        switch(color) {
            case 'indigo': return 'bg-indigo-100 text-indigo-600';
            case 'pink': return 'bg-pink-100 text-pink-600';
            case 'blue': return 'bg-blue-100 text-blue-600';
            case 'green': return 'bg-emerald-100 text-emerald-600';
            default: return 'bg-indigo-100 text-indigo-600';
        }
    };

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <AnimateOnScroll animation="fade-up" className="section-header">
                    <div className="section-tag">Our Benefits</div>
                    <h2>Why Choose <span className="text-[var(--accent-color)]">HomeHaven</span>?</h2>
                    <p className="mt-4">We make the rental process simple and efficient for both tenants and property owners.</p>
                </AnimateOnScroll>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                    {features.map((feature, index) => (
                        <AnimateOnScroll key={index} animation="fade-up" delay={index * 150} className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                            {/* Decorative gradient corner */}
                            <div className={`absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-br ${getGradient(feature.color)} opacity-20 group-hover:scale-150 transition-transform duration-500`}></div>
                            
                            <div className={`relative z-10 ${getLightColor(feature.color)} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300`}>
                                <i className={`fas ${feature.icon}`}></i>
                            </div>
                            
                            <h3 className="text-xl font-semibold mb-4 relative z-10">{feature.title}</h3>
                            <p className="text-gray-600 relative z-10">{feature.description}</p>
                            
                            {/* Hover interaction arrow */}
                            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getLightColor(feature.color)}`}>
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
} 