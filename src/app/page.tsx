import Navbar from '@/components/Navbar';
import About from '../components/LandingPage/About';
import ComponentsShowCase from '../components/LandingPage/ComponentsShowCase';
import Hero from '../components/LandingPage/Hero';
import React from 'react';

function page() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <ComponentsShowCase />
    </div>
  );
}

export default page;
