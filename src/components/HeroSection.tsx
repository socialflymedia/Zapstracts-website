import React from 'react';
import { ChevronRight, Star, Sparkles, Atom } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 overflow-hidden flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <Atom className="absolute top-1/4 left-1/4 h-8 w-8 text-purple-300 animate-spin-slow" />
        <Sparkles className="absolute top-1/3 right-1/3 h-6 w-6 text-indigo-300 animate-bounce" />
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-indigo-400 rounded-full animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-purple-200 shadow-sm">
            <Star className="h-4 w-4 text-purple-600" />
            <span>Most Accurate Scientific Summaries</span>
            <Sparkles className="h-4 w-4 text-purple-600" />
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black text-gray-900 mb-8 leading-tight">
            Science in
            <span className="block bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent">
              Seconds
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            AI-powered scientific paper summaries that transform complex research into 
            <span className="text-purple-600 font-semibold"> instant insights</span>. 
            Get your essay submitted in time with 24/7 research assistance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
              Start Learning Now
              <ChevronRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-purple-300 text-purple-700 px-10 py-5 rounded-2xl text-lg font-bold hover:border-purple-600 hover:text-purple-800 hover:bg-purple-50 transition-all">
              Watch Demo
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>100K+ Research Papers</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>50K+ Active Users</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>99.9% Accuracy Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;