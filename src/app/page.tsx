import About from '@/componentsApp/LandingPage/About';
import Hero from '@/componentsApp/LandingPage/Hero';
import React from 'react';

function page() {
  return (
    <div className="bg-black">
      <Hero />
      <About />
    </div>
  );
}

export default page;
