import React from "react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-12 md:pt-30 bg-[#f4f3ef] min-h-[90vh] flex items-center z-10">
      <div className="container mx-auto px-6 max-w-[1300px] relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side Content */}
        <div className="flex-1 text-left max-w-2xl pt-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-[5.5rem] lg:text-[4.5rem] font-bold tracking-[-0.04em] text-[#111111] leading-[1.05] mb-8"
          >
            India's safest <br />
            bike taxi <br />
            platform. <br />
            For women.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-500 mb-10 max-w-md font-medium leading-relaxed"
          >
            Designed exclusively for women of all ages and children below 14 years. The honest, secure way to commute every day.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button className="w-full sm:w-auto bg-[#ff3300] hover:bg-[#e62e00] text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_8px_20px_rgba(255,51,0,0.25)] flex items-center justify-center gap-3">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.79 3.59-.76 1.56.04 2.87.65 3.66 1.76-3.15 1.76-2.58 5.76.4 7.02-.73 1.83-1.63 3.32-2.73 4.15zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
              App Store
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-black/10 hover:border-black/20 text-black px-8 py-4 rounded-full font-bold transition-colors">
                 Play Store
            </button>
          </motion.div>
        </div>
        
        {/* Right Side Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 relative w-full flex justify-center lg:justify-end min-h-[550px]"
        >
          {/* Mockup Frame Container */}
          <div className="relative w-[340px] md:w-[380px] h-[750px] lg:absolute lg:top-[-80px] lg:right-10 rounded-[3rem] border-[12px] border-[#d88151] bg-white shadow-2xl overflow-hidden z-10 flex-shrink-0">
            {/* Phone Notch */}
            <div className="absolute top-0 inset-x-0 h-7 bg-black rounded-b-3xl w-1/3 mx-auto z-20 flex justify-center items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-[#111] border border-white/10" />
            </div>
            
            {/* Phone Screen Mockup Content (Video) */}
            <div className="h-full w-full bg-[#111111] flex flex-col relative overflow-hidden rounded-[2rem]">
              <video 
                src="/app_intro_video.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Floating QR Code Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-[10%] lg:bottom-[20%] left-0 lg:-left-12 bg-white rounded-2xl p-3 shadow-2xl border border-black/5 z-20"
          >
             <img 
               src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://woosh.com&bgcolor=ffffff&color=000000" 
               alt="QR Code" 
               className="w-20 h-20 md:w-24 md:h-24 opacity-80"
             />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#ff3300] rounded-full border-2 border-white shadow-sm" />
          </motion.div>

        </motion.div>
        
      </div>
    </section>
  );
};
