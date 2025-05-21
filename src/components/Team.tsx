
import React from 'react';

const Team: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-12 lg:px-24 bg-agency-dark text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Team of Designers<br />
          and Developers
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden mb-4">
              <img 
                src="/lovable-uploads/9d12d71e-ebce-4a37-b495-1ade15e3312c.png" 
                alt="Josh Bryant" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold">Josh Bryant</h3>
            <p className="text-gray-400 text-sm">Lead Developer</p>
          </div>
          
          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden mb-4">
              <img 
                src="/lovable-uploads/62b553bc-a687-4406-a4ed-1397329f3840.png" 
                alt="Daniel Fernandez" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold">Daniel Fernandez</h3>
            <p className="text-gray-400 text-sm">UI/UX Designer</p>
          </div>
          
          {/* Team Member 3 */}
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden mb-4">
              <img 
                src="/lovable-uploads/ba9b84c0-de4d-4728-a500-9e02ccb37b2f.png" 
                alt="Leonardo Oliveira" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold">Leonardo Oliveira</h3>
            <p className="text-gray-400 text-sm">Project Manager</p>
          </div>
          
          {/* Team Member 4 */}
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden mb-4">
              <img 
                src="/lovable-uploads/9833331f-8cd5-4105-aa35-ce74fcb01979.png" 
                alt="Sophia Robinson" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold">Sophia Robinson</h3>
            <p className="text-gray-400 text-sm">Frontend Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
