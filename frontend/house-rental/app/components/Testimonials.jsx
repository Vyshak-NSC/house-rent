export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Tenant",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      quote: "HomeHaven made it so easy to find my new apartment. The filters helped me narrow down exactly what I was looking for, and I was able to communicate directly with the property owner. Highly recommend!"
    },
    {
      id: 2,
      name: "David Rodriguez",
      role: "Property Owner",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "As a property owner, I've tried several platforms to list my properties. HomeHaven has been the most effective by far. I found great tenants within a week of listing my property!"
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Tenant",
      image: "https://randomuser.me/api/portraits/women/26.jpg",
      quote: "I was moving to a new city and HomeHaven made the process so much easier. I could view virtual tours and communicate with landlords before even visiting in person. Saved me so much time!"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <div className="section-tag">Testimonials</div>
          <h2>What Our <span className="text-[var(--accent-color)]">Users Say</span></h2>
          <p>Read testimonials from tenants and property owners</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-8 relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 rounded-full border-4 border-white shadow-md overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="pt-10 text-center">
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-[var(--primary-color)]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 