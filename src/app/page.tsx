import Navbar from '@/components/Navbar';
import About from '../components/LandingPage/About';
import Hero from '../components/LandingPage/Hero';
import FeaturesSection from '@/components/LandingPage/Features';
import {
  CTASection,
  FeaturesGrid,
  Footer,
  LogoCloud,
  StatsSection,
  Testimonials,
} from '@/components/LandingPage/LandingSections';

function page() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <LogoCloud />
      <About />
      <FeaturesSection />
      <FeaturesGrid />
      <StatsSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}

export default page;
