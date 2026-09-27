import React from "react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center z-10 overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          src="/video.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Centered Content Desktop & Mobile Top */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center justify-center text-center -mt-32 md:mt-32">
        
        {/* Brand Name / Logo */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-[7rem] font-bold text-[#E91E63] mb-4 italic tracking-tighter lowercase font-serif"
        >
          woosh
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[2.5rem] leading-[1.1] md:text-6xl font-extrabold text-white mb-6 max-w-4xl tracking-tight"
        >
          India's safest <br className="md:hidden" /> <span className="text-[#E91E63]">bike taxi</span> platform
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl font-medium px-4"
        >
          Designed exclusively for women. <br className="hidden md:block"/>The honest, secure way to commute every day.
        </motion.p>
        
        {/* Buttons Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:flex flex-row items-center gap-6"
        >
          {/* Passenger App Button */}
          <button onClick={() => window.location.href = "https://play.google.com/store/apps/details?id=com.woosh.in"} className="bg-black/80 backdrop-blur-sm border border-white/20 text-white px-8 py-3.5 rounded-2xl font-bold flex items-center justify-center gap-4 hover:bg-black transition-all shadow-xl">
            <svg viewBox="0 0 24 24" className="w-8 h-8">
               <path fill="#00c0ff" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5Z"/>
               <path fill="#ff3d00" d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z"/>
               <path fill="#ffc400" d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z"/>
               <path fill="#00e676" d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            <div className="text-left">
              <div className="text-[11px] font-medium leading-none uppercase text-gray-300 mb-1">Get it on</div>
              <div className="text-lg leading-none font-semibold">Passenger App</div>
            </div>
          </button>
          
          {/* Rider App Button */}
          <button onClick={() => window.location.href = "https://play.google.com/store/apps/details?id=com.woosh.ride"} className="bg-black/80 backdrop-blur-sm border border-white/20 text-white px-8 py-3.5 rounded-2xl font-bold flex items-center justify-center gap-4 hover:bg-black transition-all shadow-xl">
            <svg viewBox="0 0 24 24" className="w-8 h-8">
               <path fill="#00c0ff" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5Z"/>
               <path fill="#ff3d00" d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z"/>
               <path fill="#ffc400" d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z"/>
               <path fill="#00e676" d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            <div className="text-left">
              <div className="text-[11px] font-medium leading-none uppercase text-gray-300 mb-1">Download</div>
              <div className="text-lg leading-none font-semibold">Rider App</div>
            </div>
          </button>
        </motion.div>

      </div>

      {/* Scroll down indicator for Desktop */}
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1, delay: 1 }}
         className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center text-white/80 cursor-pointer z-20"
         onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-sm font-semibold mb-2">Scroll down</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </motion.div>

      {/* Mobile Bottom Card Overlay (Zomato Style) */}
      <div className="md:hidden absolute bottom-0 left-0 w-full z-30 flex flex-col">
        {/* Mobile Button Overlay */}
        <div className="px-5 pb-6 w-full flex flex-col gap-3 z-40 relative translate-y-3">
           <button onClick={() => window.location.href = "https://play.google.com/store/apps/details?id=com.woosh.in"} className="w-full bg-[#E91E63] text-white py-4 rounded-[14px] font-bold text-lg shadow-[0_8px_20px_rgba(233,30,99,0.25)] hover:opacity-90 active:scale-[0.98] transition-all">
             Passenger App
           </button>
           <button onClick={() => window.location.href = "https://play.google.com/store/apps/details?id=com.woosh.ride"} className="w-full bg-white text-[#E91E63] border border-[#E91E63]/20 py-4 rounded-[14px] font-bold text-lg shadow-sm hover:bg-pink-50 active:scale-[0.98] transition-all">
             Rider App
           </button>
        </div>
        
        {/* Bottom White Overlay matching Zomato's extra section */}
        <div className="bg-white rounded-t-[1.5rem] p-5 pt-8 w-full shadow-[0_-10px_30px_rgba(0,0,0,0.08)] relative z-30 border-t border-gray-100">
           <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center border border-pink-100 shrink-0">
                 <span className="text-lg">🛡️</span>
              </div>
              <div className="text-left">
                 <h3 className="text-[1.1rem] font-bold text-[#E91E63] leading-tight">100% Verified Women Riders</h3>
                 <p className="text-[#757575] text-xs font-medium">Safe & secure commute every day</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
