import React from 'react';
import { TrendingUp, Brain, Clock, BookOpen } from 'lucide-react';
import StatCard from './StatCard';

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "3x",
      label: "Faster Learning",
      description: "Master new concepts in minutes, not hours, with microlearning bursts.",
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      icon: Brain,
      value: "50%",
      label: "More Productivity",
      description: "Unlock more focus time by cutting through information overload and focusing on key insights.",
      gradient: "bg-gradient-to-br from-indigo-500 to-indigo-600"
    },
    {
      icon: Clock,
      value: "10+",
      label: "Hours Saved Weekly",
      description: "Instantly access key insights from the latest scientific research—no more endless reading.",
      gradient: "bg-gradient-to-br from-pink-500 to-pink-600"
    },
    {
      icon: BookOpen,
      value: "Smart",
      label: "Sharper Recall",
      description: "Retain more knowledge with science-backed, bite-sized summaries.",
      gradient: "bg-gradient-to-br from-violet-500 to-violet-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-purple-600 via-indigo-700 to-purple-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
            Proven Results That
            <span className="block text-purple-200">
              Speak Volumes
            </span>
          </h2>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Join thousands of researchers, students, and professionals who've transformed 
            their learning experience with our cutting-edge AI technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;