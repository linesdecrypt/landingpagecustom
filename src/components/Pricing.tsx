
import React from 'react';
import { Button } from "@/components/ui/button";

const Pricing: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-12 lg:px-24 bg-white" id="pricing">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Check Our<br />
          Pricing Plans
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4">Free</h3>
            <p className="text-gray-600 mb-6">For small businesses getting started</p>
            <div className="text-3xl font-bold mb-6">$0</div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Up to 5 members</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Basic analytics</span>
              </li>
              <li className="flex items-center opacity-50">
                <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span>No priority support</span>
              </li>
            </ul>
            
            <Button variant="outline" className="w-full border-gray-300 hover:border-agency-orange hover:text-agency-orange">
              Get Started
            </Button>
          </div>
          
          {/* Standard Plan */}
          <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4">Standard</h3>
            <p className="text-gray-600 mb-6">For growing businesses</p>
            <div className="text-3xl font-bold mb-6">$1500</div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Up to 15 members</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Email support</span>
              </li>
            </ul>
            
            <Button className="w-full bg-agency-orange hover:bg-agency-orange/90 text-white">
              Get Started
            </Button>
          </div>
          
          {/* Premium Plan */}
          <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4">Premium</h3>
            <p className="text-gray-600 mb-6">For enterprise businesses</p>
            <div className="text-3xl font-bold mb-6">$2500</div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Unlimited members</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Premium analytics</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>24/7 priority support</span>
              </li>
            </ul>
            
            <Button variant="outline" className="w-full border-gray-300 hover:border-agency-orange hover:text-agency-orange">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
