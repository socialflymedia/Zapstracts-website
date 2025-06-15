import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  iconColor: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  gradient, 
  iconColor 
}) => {
  return (
    <div className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-purple-100">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-indigo-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative">
        <div className={`${gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          <Icon className={`h-10 w-10 ${iconColor}`} />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-purple-700 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed text-lg">
          {description}
        </p>
        
        <div className="mt-8 w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      </div>
    </div>
  );
};

export default BenefitCard;