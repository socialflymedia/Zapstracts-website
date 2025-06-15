import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
  gradient: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  icon: Icon, 
  value, 
  label, 
  description, 
  gradient 
}) => {
  return (
    <div className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
      
      <div className="relative">
        <div className={`${gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}>
          <Icon className="h-10 w-10 text-white" />
        </div>
        
        <div className="text-5xl font-black text-white mb-3 group-hover:scale-110 transition-transform">
          {value}
        </div>
        
        <div className="text-xl font-bold text-purple-100 mb-3">
          {label}
        </div>
        
        <p className="text-purple-200 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StatCard;