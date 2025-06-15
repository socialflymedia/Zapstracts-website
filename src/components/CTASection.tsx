import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-600 via-indigo-700 to-purple-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-transparent"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-purple-100 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/20">
          <Sparkles className="h-4 w-4" />
          <span>Join the Research Revolution</span>
        </div>
        
        <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
          Ready to Transform
          <span className="block text-purple-200">
            Your Research?
          </span>
        </h2>
        
        <p className="text-xl text-purple-100 mb-12 leading-relaxed max-w-3xl mx-auto">
          Join thousands of researchers, students, and professionals who've already discovered 
          the power of AI-driven scientific summaries and transformed their learning experience.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group bg-white text-purple-600 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-purple-50 transition-all transform hover:scale-105 shadow-2xl">
            Start Free Trial
            <ChevronRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-white text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white hover:text-purple-600 transition-all">
            Contact Sales
          </button>
        </div>
        
        <div className="mt-12 text-purple-200 text-sm">
          No credit card required • 14-day free trial • Cancel anytime
        </div>
      </div>
    </section>
  );
};

export default CTASection;