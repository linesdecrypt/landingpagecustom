
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    // Close menu when any menu item is clicked
    setIsMenuOpen(false);
  };

  return (
    <nav className="py-6 px-4 md:px-12 lg:px-24 flex items-center justify-between relative z-50">
      <div className="flex items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-agency-orange"></div>
          <span className="font-bold text-xl">Agency</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-8">
        <a href="#home" className="text-sm font-medium hover:text-agency-orange transition-colors">Home</a>
        <a href="#about" className="text-sm font-medium hover:text-agency-orange transition-colors">About</a>
        <a href="#services" className="text-sm font-medium hover:text-agency-orange transition-colors">Services</a>
        <a href="#work" className="text-sm font-medium hover:text-agency-orange transition-colors">Work</a>
        <a href="#contact" className="text-sm font-medium hover:text-agency-orange transition-colors">Contact</a>
      </div>

      <div className="hidden lg:block">
        <Button className="bg-agency-orange hover:bg-agency-orange/90 text-white rounded-full px-6 py-2">
          Contact
        </Button>
      </div>

      {/* Mobile menu button */}
      <button 
        className="lg:hidden p-2 text-gray-500 focus:outline-none" 
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-[72px] right-0 left-0 bg-white shadow-md py-4 px-6 z-50">
          <div className="flex flex-col space-y-4">
            <a href="#home" onClick={handleMenuItemClick} className="text-sm font-medium hover:text-agency-orange transition-colors text-foreground">Home</a>
            <a href="#about" onClick={handleMenuItemClick} className="text-sm font-medium hover:text-agency-orange transition-colors text-foreground">About</a>
            <a href="#services" onClick={handleMenuItemClick} className="text-sm font-medium hover:text-agency-orange transition-colors text-foreground">Services</a>
            <a href="#work" onClick={handleMenuItemClick} className="text-sm font-medium hover:text-agency-orange transition-colors text-foreground">Work</a>
            <a href="#contact" onClick={handleMenuItemClick} className="text-sm font-medium hover:text-agency-orange transition-colors text-foreground">Contact</a>
            <Button onClick={handleMenuItemClick} className="bg-agency-orange hover:bg-agency-orange/90 text-white rounded-full w-full">
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
