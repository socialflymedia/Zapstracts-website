import React from 'react';
import { Smartphone, Target, Brain } from 'lucide-react';
import BenefitCard from './BenefitCard';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Smartphone,
      title: "Anytime, Anywhere Learning",
      description: "Zapstracts fits into your lifestyle—read a paper summary on your commute, lunch break, or between classes, right from your phone or laptop.",
      gradient: "bg-gradient-to-br from-purple-100 to-purple-200",
      iconColor: "text-purple-600"
    },
    {
      icon: Target,
      title: "Personalized Skill Building",
      description: "Get tailored content that adapts to your interests and goals, so every summary sharpens the skills you value most.",
      gradient: "bg-gradient-to-br from-indigo-100 to-indigo-200",
      iconColor: "text-indigo-600"
    },
    {
      icon: Brain,
      title: "Science-Backed Accuracy",
      description: "Our proprietary AI technology is built on hundreds of thousands of research papers—not just internet chatter—ensuring unmatched accuracy.",
      gradient: "bg-gradient-to-br from-pink-100 to-pink-200",
      iconColor: "text-pink-600"
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-purple-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">
            Learn More in
            <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Less Time
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Instantly access actionable insights and summaries, freeing up your day for what matters most—
            no more endless scrolling or sifting through dense papers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;