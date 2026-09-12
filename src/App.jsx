import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { Navbar } from './components/layout/navbar';
import { HeroSection } from './components/sections/hero-section';
import { VideoSection } from './components/sections/video-section';
import { FeaturesShowcase } from './components/sections/features-showcase';
import { PricingSection } from './components/sections/pricing-section';
import { FaqSection } from './components/sections/faq-section';
import { CtaSection } from './components/sections/cta-section';
import { Footer } from './components/layout/footer';

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFBFD] text-[#2D2D2D] font-sans selection:bg-[#E91E63]/20 selection:text-[#E91E63]">
      <Navbar />
      <main>
        <HeroSection />
        <VideoSection />
        <FeaturesShowcase />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      
      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-[#E91E63] to-[#9C27B0] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(233,30,99,0.3)] hover:shadow-[0_8px_30px_rgba(233,30,99,0.45)] hover:scale-110 transition-all duration-300 z-50"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
      </button>
    </div>
  );
}

export default App;
