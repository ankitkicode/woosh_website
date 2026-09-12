import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const VideoSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["40px", "0px"]);

  return (
    <section ref={containerRef} className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          style={{ scale, borderRadius }}
          className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden shadow-[0_20px_60px_rgba(233,30,99,0.15)] origin-center mx-auto max-w-[1400px]"
        >
          {/* Generated Image */}
          <div className="absolute inset-0">
            <img 
              src="/images/city_commute.jpg" 
              alt="Women riding Woosh bike taxis in an Indian city" 
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A10]/80 via-[#1A0A10]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#E91E63]/10 to-[#9C27B0]/10 mix-blend-overlay" />
            
            <div className="absolute inset-0 flex items-center justify-center flex-col text-white">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-16 h-16 md:w-24 md:h-24 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/25 transition-all duration-300 border border-white/20 animate-pulse-glow group"
              >
                <svg className="w-6 h-6 md:w-10 md:h-10 text-white ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
              <span className="mt-4 font-semibold tracking-wide text-sm md:text-base text-white/90">Watch our safety standards</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
