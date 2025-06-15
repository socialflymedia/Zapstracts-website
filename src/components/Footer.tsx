import React from 'react';
import { Zap } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "API", href: "#" },
      { name: "Documentation", href: "#" }
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" }
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Community", href: "#" },
      { name: "Status", href: "#" },
      { name: "Security", href: "#" }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-2 rounded-xl">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Zapstracts
              </span>
            </div>
            
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Making science accessible for everyone through AI-powered research summaries 
              that save time and enhance understanding.
            </p>
            
            <div className="flex space-x-4">
              {['f', 't', 'in', 'ig'].map((social, index) => (
                <div key={index} className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 transition-all cursor-pointer group">
                  <span className="text-sm font-semibold group-hover:text-white">{social}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-purple-400">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-purple-400">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-purple-400">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-12 text-center">
          <p className="text-gray-400">
            &copy; 2025 Zapstracts. All rights reserved. Built with ❤️ for the research community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;