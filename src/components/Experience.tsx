
import React from 'react';
import { Button } from "@/components/ui/button";

const Experience: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-12 lg:px-24 bg-agency-light" id="about">
      {/* Section header with colored dots */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#FF5E5E]"></div>
        <div className="w-3 h-3 rounded-full bg-[#FFA13B]"></div>
        <div className="w-3 h-3 rounded-full bg-[#6DE87A]"></div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left column with image */}
        <div className="lg:w-1/2">
          <div className="relative">
            <img 
              src="/lovable-uploads/371f1905-f6b3-4218-8787-f680f40cf131.png" 
              alt="Workspace design" 
              className="w-full rounded-lg shadow-lg"
            />
            
            {/* Orange circle */}
            <div className="absolute -bottom-10 -right-5 w-32 h-32 bg-agency-orange rounded-full overflow-hidden">
              <img 
                src="/lovable-uploads/78170ab2-11bd-44f3-82d5-4b4e7002d90d.png" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Right column with text */}
        <div className="lg:w-1/2 lg:pl-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            An Experience<br />
            Design Agency
          </h2>
          <p className="text-gray-600 mb-6">
            We create digital experiences that stand out from the competition. Our team of designers and developers work together to create beautiful, functional websites and applications.
          </p>
          <Button className="bg-agency-orange hover:bg-agency-orange/90 text-white rounded-full px-6">
            About Us
          </Button>
          
          {/* Stats section */}
          <div className="grid grid-cols-3 gap-4 mt-16">
            <div>
              <h3 className="text-4xl font-bold text-agency-orange">42%</h3>
              <p className="text-sm text-gray-500">Years of experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-agency-orange">73+</h3>
              <p className="text-sm text-gray-500">Agency members</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-agency-orange">5,600</h3>
              <p className="text-sm text-gray-500">Projects Complete</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
