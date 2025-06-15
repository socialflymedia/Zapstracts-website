import React from 'react';
import { Smartphone, ArrowRight, Star, Zap } from 'lucide-react';

const AppShowcaseSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 to-transparent"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="text-white">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-purple-200 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/20">
              <Smartphone className="h-4 w-4" />
              <span>Available on Mobile & Desktop</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Experience
              <span className="block text-purple-300">
                Zapstracts
              </span>
              in Action
            </h2>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              See how our intuitive interface makes scientific research accessible and engaging. 
              From featured breakthroughs to personalized feeds, everything is designed for your success.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Featured Research</h4>
                  <p className="text-purple-200">Discover groundbreaking studies curated just for you</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Instant Summaries</h4>
                  <p className="text-purple-200">Get key insights in minutes, not hours</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Seamless Navigation</h4>
                  <p className="text-purple-200">Intuitive design that gets out of your way</p>
                </div>
              </div>
            </div>
            
            <button className="group bg-white text-purple-600 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-purple-50 transition-all transform hover:scale-105 shadow-2xl">
              Try It Now
              <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* App Screenshots Side */}
          <div className="relative">
            <div className="flex justify-center items-center space-x-8">
              {/* Mobile Screenshot 1 - Splash Screen */}
              <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-3xl shadow-2xl">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="/image.jpg" 
                      alt="Zapstracts App Splash Screen"
                      className="w-64 h-auto object-cover"
                    />
                  </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  Welcome
                </div>
              </div>
              
              {/* Mobile Screenshot 2 - Main App */}
              <div className="relative transform -rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-2 rounded-3xl shadow-2xl">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="/WhatsApp Image 2025-06-16 at 01.39.04_f2684dfe.jpg" 
                      alt="Zapstracts App Main Interface"
                      className="w-64 h-auto object-cover"
                    />
                  </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  Research
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
            </div>
            <div className="absolute -bottom-8 left-1/4">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-20 blur-xl animate-pulse animation-delay-2000"></div>
            </div>
            <div className="absolute top-1/2 -right-8">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-20 blur-xl animate-pulse animation-delay-4000"></div>
            </div>
          </div>
        </div>
        
        {/* Bottom Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-black text-white mb-2">iOS & Android</div>
              <p className="text-purple-200">Available on all platforms</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-black text-white mb-2">Offline Mode</div>
              <p className="text-purple-200">Access summaries anywhere</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-black text-white mb-2">Sync Across</div>
              <p className="text-purple-200">All your devices connected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;
