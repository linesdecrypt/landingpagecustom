
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-10 pb-20 px-4 md:px-12 lg:px-24 bg-agency-dark" id="home">
      {/* Purple circle decoration */}
      <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-agency-purple opacity-20 blur-2xl"></div>
      
      {/* Orange circle decoration */}
      <div className="absolute top-60 left-20 w-40 h-40 rounded-full bg-agency-orange opacity-20 blur-xl"></div>
      
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-center gap-12">
        <div className="lg:w-1/2 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            We're Help<br />
            To Build Your<br />
            Dream Project
          </h1>
          <p className="text-gray-400 my-6 max-w-lg">
            We are always ready to help you and make your project look awesome and professional. Let's work together to create something amazing.
          </p>
          <Button className="bg-agency-orange hover:bg-agency-orange/90 text-white rounded-full px-8 py-6">
            Get Started
          </Button>
        </div>
        
        <div className="lg:w-1/2 flex justify-center items-center z-10">
          <div className="relative">
            {/* Purple shape */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-agency-purple rounded-xl transform rotate-12"></div>
            
            {/* Circle with profile image */}
            <div className="relative z-10 w-72 h-72 rounded-full overflow-hidden border-4 border-white">
              <img 
                src="/lovable-uploads/1339aa07-6b4b-40b6-b16b-8741f8993887.png" 
                alt="Woman professional" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            {/* Orange shape */}
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-agency-orange rounded-full"></div>
            
            {/* Testimonial card */}
            <div className="absolute bottom-10 -right-20 w-56 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-agency-orange flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
                <span className="font-medium text-sm">Alice Johnson</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                "Working with this agency has been an amazing experience!"
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trusted by logos */}
      <div className="container mx-auto mt-24 flex flex-wrap justify-center gap-10 opacity-70">
        <img src="/lovable-uploads/86c4e939-e794-451c-8446-a312e95b3be6.png" alt="Partner logos" className="h-8" />
      </div>
    </section>
  );
};

export default Hero;
