
import React from 'react';
import { Button } from "@/components/ui/button";

const CTA: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-12 lg:px-24 bg-agency-cream">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Left side with image */}
          <div className="lg:w-1/2 p-12 flex justify-center">
            <div className="relative">
              {/* Orange circle */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-agency-orange rounded-full"></div>
              
              {/* Yellow shape */}
              <div className="absolute -bottom-2 -right-6 w-12 h-12 bg-agency-yellow rounded-lg transform rotate-12"></div>
              
              {/* Purple element */}
              <div className="absolute top-1/2 right-3/4 w-8 h-8 bg-agency-purple rounded-full"></div>
              
              <img 
                src="/lovable-uploads/c8bb1ec5-2263-451b-bcf6-2202c36794b1.png" 
                alt="3D geometric shapes" 
                className="relative z-10 max-w-xs rounded-lg"
              />
            </div>
          </div>
          
          {/* Right side with content */}
          <div className="lg:w-1/2 p-12 bg-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We help companies<br />
              move faster
            </h2>
            
            <div className="space-y-6 mb-8">
              <Button className="bg-agency-orange hover:bg-agency-orange/90 text-white rounded-full w-full md:w-auto px-8">
                Get in touch
              </Button>
            </div>
            
            {/* Decorative elements */}
            <div className="flex items-center gap-4 mt-6">
              <div className="w-8 h-1 bg-agency-yellow"></div>
              <div className="w-8 h-1 bg-agency-purple"></div>
              <div className="w-8 h-1 bg-agency-orange"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
