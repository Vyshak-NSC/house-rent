import AnimateOnScroll from './AnimateOnScroll';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Create an Account",
      description: "Sign up as a tenant looking for a property or an owner with properties to rent.",
      icon: "fa-user-plus"
    },
    {
      id: 2,
      title: "Search or List Properties",
      description: "Find your ideal property or list your property for potential tenants to discover.",
      icon: "fa-search-location"
    },
    {
      id: 3,
      title: "Connect & Finalize",
      description: "Communicate, negotiate, and finalize rental agreements securely on our platform.",
      icon: "fa-handshake"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] bg-repeat opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll animation="fade-up" className="section-header">
          <div className="section-tag">Simple Process</div>
          <h2>How It <span className="text-[var(--accent-color)]">Works</span></h2>
          <p>Three simple steps to find your next home or tenant</p>
        </AnimateOnScroll>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-12">
          {steps.map((step) => (
            <AnimateOnScroll key={step.id} animation="fade-up" delay={step.id * 200} className="bg-white rounded-2xl shadow-lg p-8 md:w-1/3 relative group hover:-translate-y-2 transition-all duration-300">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center font-bold text-xl">
                {step.id}
              </div>
              
              <div className="text-center pt-8">
                <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-6 text-[var(--primary-color)] text-3xl group-hover:scale-110 transition-transform duration-300">
                  <i className={`fas ${step.icon}`}></i>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
} 