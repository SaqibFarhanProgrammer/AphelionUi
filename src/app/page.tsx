import About from '../componentsApp/LandingPage/About';
import ComponentsShowCase from '../componentsApp/LandingPage/ComponentsShowCase';
import Hero from '../componentsApp/LandingPage/Hero';
import React from 'react';

function page() {
  return (
    <div className="bg-black">
      <Hero />
      <About />
      <ComponentsShowCase />
    </div>
  );
}

export default page;
