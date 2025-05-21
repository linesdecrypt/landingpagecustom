
import React from 'react';

const Services: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-12 lg:px-24 bg-white" id="services">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Making Your Projects<br />
          Look Awesome
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-agency-orange rounded-full flex items-center justify-center text-white font-bold">1</div>
              <h3 className="text-xl font-bold ml-3">Full service range branding</h3>
            </div>
            <p className="text-gray-600">
              We offer comprehensive branding services to establish a strong and recognizable identity for your business.
            </p>
          </div>
          
          {/* Service 2 */}
          <div className="p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-agency-orange rounded-full flex items-center justify-center text-white font-bold">2</div>
              <h3 className="text-xl font-bold ml-3">Traditional skills, design thinking</h3>
            </div>
            <p className="text-gray-600">
              We combine time-tested design principles with innovative approaches to create solutions that are both beautiful and effective.
            </p>
          </div>
          
          {/* Service 3 */}
          <div className="p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-agency-orange rounded-full flex items-center justify-center text-white font-bold">3</div>
              <h3 className="text-xl font-bold ml-3">Thorough in the research</h3>
            </div>
            <p className="text-gray-600">
              We conduct extensive research to understand your industry, competitors, and target audience before beginning any project.
            </p>
          </div>
        </div>
      </div>
      
      {/* Value proposition section */}
      <div className="container mx-auto mt-24">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left side image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-full h-80 bg-agency-orange/20 rounded-lg overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Project example" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Right side content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Unlock the Greatest<br />
              Value Possible
            </h2>
            <p className="text-gray-600 mb-6">
              We help businesses unlock their potential and achieve their goals through innovative design and development solutions. Our team of experts will work with you to create a strategy that drives results.
            </p>
            <button className="text-agency-orange font-medium flex items-center gap-2">
              Learn more
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
