
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Frequently Asked<br />
          Questions
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
          <div className="space-y-4">
            <Accordion type="single" collapsible className="border-b border-gray-200">
              <AccordionItem value="item-1" className="border-t border-gray-200 py-2">
                <AccordionTrigger className="flex items-center gap-2 text-left font-medium">
                  <div className="w-6 h-6 rounded-full bg-agency-orange flex items-center justify-center text-white text-xs">?</div>
                  A digital agency is business
                </AccordionTrigger>
                <AccordionContent className="pl-8">
                  A digital agency is a business that specializes in creating, planning, and executing digital marketing strategies to help businesses grow their online presence and achieve their marketing goals.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <Accordion type="single" collapsible className="border-b border-gray-200">
              <AccordionItem value="item-2" className="border-t border-gray-200 py-2">
                <AccordionTrigger className="flex items-center gap-2 text-left font-medium">
                  <div className="w-6 h-6 rounded-full bg-agency-orange flex items-center justify-center text-white text-xs">?</div>
                  We've grown our digital skill
                </AccordionTrigger>
                <AccordionContent className="pl-8">
                  Our team has developed extensive expertise in various digital marketing disciplines, including SEO, social media marketing, content marketing, email marketing, and PPC advertising.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div className="space-y-4">
            <Accordion type="single" collapsible className="border-b border-gray-200">
              <AccordionItem value="item-3" className="border-t border-gray-200 py-2">
                <AccordionTrigger className="flex items-center gap-2 text-left font-medium">
                  <div className="w-6 h-6 rounded-full bg-agency-orange flex items-center justify-center text-white text-xs">?</div>
                  Corporate our traditional business
                </AccordionTrigger>
                <AccordionContent className="pl-8">
                  We help traditional businesses transition into the digital world by implementing effective online strategies that complement their existing operations and open new growth opportunities.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <Accordion type="single" collapsible className="border-b border-gray-200">
              <AccordionItem value="item-4" className="border-t border-gray-200 py-2">
                <AccordionTrigger className="flex items-center gap-2 text-left font-medium">
                  <div className="w-6 h-6 rounded-full bg-agency-orange flex items-center justify-center text-white text-xs">?</div>
                  Can you pay for living
                </AccordionTrigger>
                <AccordionContent className="pl-8">
                  Our pricing packages are designed to provide excellent value, with options to fit various budgets while delivering significant return on investment for your business.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
