import React from 'react';
import { Clock, Users, Sliders, Share2 } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Instant Key Insights",
      description: "Get immediate access to the most important findings and conclusions from any scientific paper in seconds.",
      gradient: "bg-gradient-to-br from-purple-100 to-purple-200",
      iconColor: "text-purple-600"
    },
    {
      icon: Users,
      title: "24/7 Research Assistance",
      description: "Round-the-clock AI support for all your research questions and academic needs, whenever inspiration strikes.",
      gradient: "bg-gradient-to-br from-indigo-100 to-indigo-200",
      iconColor: "text-indigo-600"
    },
    {
      icon: Sliders,
      title: "Effortless Customization",
      description: "Tailor summaries to your specific needs and academic requirements with intelligent customization options.",
      gradient: "bg-gradient-to-br from-pink-100 to-pink-200",
      iconColor: "text-pink-600"
    },
    {
      icon: Share2,
      title: "Seamless Sharing",
      description: "Share insights and summaries effortlessly with colleagues and classmates across all platforms and devices.",
      gradient: "bg-gradient-to-br from-violet-100 to-violet-200",
      iconColor: "text-violet-600"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Our Offerings
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">
            Powerful Features for
            <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Modern Research
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience the power of AI-driven research assistance designed for modern learners, 
            researchers, and academic professionals who demand excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;