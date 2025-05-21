
import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-12 lg:px-24 bg-agency-dark" id="work">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Latest Work</h2>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white px-4 py-1 border-b-2 border-agency-orange">All</button>
            <button className="text-gray-400 px-4 py-1 hover:text-white">UI/UX</button>
            <button className="text-gray-400 px-4 py-1 hover:text-white">Web Design</button>
            <button className="text-gray-400 px-4 py-1 hover:text-white">App Design</button>
            <button className="text-gray-400 px-4 py-1 hover:text-white">Branding</button>
          </div>
        </div>
        
        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="relative group">
            <div className="overflow-hidden rounded-lg aspect-square">
              <img 
                src="/lovable-uploads/e05d1048-bf1a-4f60-b2f4-77b093317f7d.png" 
                alt="Abstract red curved design" 
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded text-xs font-medium">
              UI/UX
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="relative group">
            <div className="overflow-hidden rounded-lg aspect-square">
              <img 
                src="/lovable-uploads/0e302206-0c0e-411a-a46d-22f4c4c59617.png" 
                alt="Coral wave design" 
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded text-xs font-medium">
              Keyboard
            </div>
          </div>
          
          {/* Project 3 */}
          <div className="relative group">
            <div className="overflow-hidden rounded-lg aspect-square">
              <img 
                src="/lovable-uploads/da17dfa5-2de8-492b-a5bb-14fbc5be2e41.png" 
                alt="Minimalist archway" 
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded text-xs font-medium">
              Work Media
            </div>
          </div>
          
          {/* Project 4 */}
          <div className="relative group">
            <div className="overflow-hidden rounded-lg aspect-square">
              <img 
                src="/lovable-uploads/e72a2a27-4ab4-4158-82ee-72e049ffc275.png" 
                alt="Minimalist cylindrical shapes" 
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded text-xs font-medium">
              DDDone
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-gray-600 text-white rounded-full hover:border-agency-orange hover:text-agency-orange transition-colors">
            View all work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
