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
    <section ref={containerRef} className="py-20 bg-[#f4f3ef] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          style={{ scale, borderRadius }}
          className="relative w-full aspect-video md:aspect-[21/9] bg-black overflow-hidden shadow-2xl origin-center mx-auto max-w-[1400px]"
        >
          {/* Fallback image/video mock since we don't have an actual video file */}
          <div className="absolute inset-0 bg-neutral-900">
            <img 
              src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=2000" 
              alt="Women riding bike safely" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
            
            <div className="absolute inset-0 flex items-center justify-center flex-col text-white">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-16 h-16 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors border border-white/30"
              >
                <svg className="w-6 h-6 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
              <span className="mt-4 font-medium tracking-wide text-sm md:text-base">Watch our safety standards</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
