import React from 'react';
import { Zap } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-2 rounded-xl">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Zapstracts
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
              Features
            </a>
            <a href="#benefits" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
              Benefits
            </a>
            <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
              About
            </a>
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2.5 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg font-medium">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;