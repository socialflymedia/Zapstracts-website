import React from 'react';
import { FileText, Users, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    "Built on authentic scientific literature",
    "Unmatched accuracy and reliability",
    "Trusted by researchers worldwide",
    "Continuous learning and improvement"
  ];

  const stats = [
    { icon: FileText, value: "100K+", label: "Research Papers", color: "text-purple-600" },
    { icon: Users, value: "50K+", label: "Active Users", color: "text-indigo-600" },
    { icon: TrendingUp, value: "99.9%", label: "Accuracy Rate", color: "text-pink-600" },
    { icon: Clock, value: "24/7", label: "Availability", color: "text-violet-600" }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
              About Zapstracts
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Making Science
              <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Accessible
              </span>
              for Everyone
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We want to make science accessible for everyone. Our proprietary AI technology is built on 
              hundreds and thousands of research papers—not just internet chatter.
            </p>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              While our competitors rely on generic web data, our technology is grounded in authentic 
              scientific literature, setting us apart in accuracy and reliability.
            </p>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100 rounded-3xl p-12 shadow-2xl">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
                    <stat.icon className={`h-12 w-12 ${stat.color} mb-6 group-hover:scale-110 transition-transform`} />
                    <div className="text-3xl font-black text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;