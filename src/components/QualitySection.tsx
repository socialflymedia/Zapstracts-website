import React from 'react';
import { Shield, FileText, Smile } from 'lucide-react';

const QualitySection = () => {
  const qualities = [
    {
      icon: Shield,
      title: "Reliable",
      description: "Count on consistent performance and uptime. Our robust infrastructure ensures your research never stops.",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-100 to-purple-200"
    },
    {
      icon: FileText,
      title: "Concise",
      description: "Get exactly what you need without the fluff. Our summaries are precisely crafted for maximum impact.",
      gradient: "from-indigo-500 to-indigo-600",
      bgGradient: "from-indigo-100 to-indigo-200"
    },
    {
      icon: Smile,
      title: "User Friendly",
      description: "Intuitive design that gets out of your way. Focus on learning, not figuring out how to use the platform.",
      gradient: "from-pink-500 to-pink-600",
      bgGradient: "from-pink-100 to-pink-200"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">
            First Class
            <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Software
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Built with precision and designed for excellence, our platform delivers the reliability 
            and user experience you deserve.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {qualities.map((quality, index) => (
            <div key={index} className="text-center group">
              <div className={`bg-gradient-to-br ${quality.bgGradient} w-32 h-32 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110`}>
                <div className={`bg-gradient-to-br ${quality.gradient} w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg`}>
                  <quality.icon className="h-10 w-10 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-purple-700 transition-colors">
                {quality.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-lg max-w-sm mx-auto">
                {quality.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualitySection;