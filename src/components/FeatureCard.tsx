import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  iconColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  gradient, 
  iconColor 
}) => {
  return (
    <div className="group relative p-8 bg-white rounded-3xl border border-purple-100 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 transform hover:-translate-y-3">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-indigo-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative">
        <div className={`${gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          <Icon className={`h-10 w-10 ${iconColor}`} />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed text-lg">
          {description}
        </p>
        
        <div className="mt-6 w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      </div>
    </div>
  );
};

export default FeatureCard;