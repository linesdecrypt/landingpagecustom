
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-4 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">Agency</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-agency-orange transition-colors">About</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-agency-orange transition-colors">Services</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-agency-orange transition-colors">Blog</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-agency-orange transition-colors">Contact</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-agency-orange transition-colors">Support</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-agency-orange transition-colors">Documentation</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-agency-orange transition-colors">License</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-agency-orange transition-colors">Sitemap</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-agency-orange transition-colors">Terms of Service</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-agency-orange transition-colors">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-agency-orange transition-colors">Cookies</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4">Social</h3>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-agency-orange flex items-center justify-center text-white">
              F
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-agency-orange flex items-center justify-center text-white">
              T
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-agency-orange flex items-center justify-center text-white">
              I
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 text-sm">© 2025 Agency. All rights reserved.</p>
        <div className="text-gray-600 text-sm">
          <a href="#" className="hover:text-agency-orange transition-colors">Privacy Policy</a>
          {" | "}
          <a href="#" className="hover:text-agency-orange transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
