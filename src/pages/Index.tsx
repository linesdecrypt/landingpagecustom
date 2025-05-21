
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import CTA from '@/components/CTA';
import Team from '@/components/Team';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-agency-dark">
        <Navbar />
        <Hero />
      </div>
      <Experience />
      <Services />
      <Portfolio />
      <CTA />
      <Team />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
