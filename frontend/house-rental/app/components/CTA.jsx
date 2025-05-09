import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Find Your <span className="text-pink-300">Dream Home</span>?
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-xl mx-auto">
            Join thousands of satisfied users and start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/auth/signup" 
              className="btn bg-white text-indigo-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl shadow-lg hover:-translate-y-1 transition-all"
            >
              Sign Up Now
            </Link>
            <Link 
              href="/how-it-works" 
              className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 font-bold py-4 px-8 rounded-xl transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 