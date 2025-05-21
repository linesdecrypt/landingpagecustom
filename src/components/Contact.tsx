
import React from 'react';
import { Button } from "@/components/ui/button";

const Contact: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-12 lg:px-24 bg-agency-cream" id="contact">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <form>
              <div className="grid grid-cols-1 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-agency-orange focus:border-agency-orange"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-agency-orange focus:border-agency-orange"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-agency-orange focus:border-agency-orange"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
              </div>
              <Button className="bg-agency-orange hover:bg-agency-orange/90 text-white rounded-md w-full">
                Send message
              </Button>
            </form>
          </div>
          
          {/* Map */}
          <div className="bg-gray-200 rounded-xl overflow-hidden h-80 lg:h-auto relative">
            <div className="absolute inset-0 bg-gray-200 opacity-75"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-4 bg-white rounded-full shadow-md">
                <div className="w-8 h-8 rounded-full bg-agency-orange flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
