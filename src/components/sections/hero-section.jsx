import React from "react";
import { motion } from "framer-motion";

// Floating 3D icon component
const FloatingIcon = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    className={`absolute pointer-events-none ${className}`}
  >
    <div className="animate-float" style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  </motion.div>
);

// Particle component
const Particle = ({ size, top, left, delay, duration }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 0.6, 0] }}
    transition={{ duration, delay, repeat: Infinity }}
    className="absolute rounded-full bg-gradient-to-br from-[#E91E63]/20 to-[#9C27B0]/20 blur-[1px]"
    style={{ width: size, height: size, top, left }}
  />
);

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-12 md:pt-36 min-h-[90vh] flex items-center z-10 overflow-hidden">
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF0F5] via-[#FFFBFD] to-white z-0" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-[#E91E63]/[0.06] rounded-full blur-[100px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-[#9C27B0]/[0.05] rounded-full blur-[80px] pointer-events-none" style={{ animationDelay: '1s' }} />

      {/* Particles */}
      <Particle size="6px" top="15%" left="8%" delay={0} duration={4} />
      <Particle size="4px" top="25%" left="15%" delay={1.2} duration={5} />
      <Particle size="8px" top="60%" left="5%" delay={0.5} duration={6} />
      <Particle size="5px" top="40%" left="85%" delay={2} duration={4.5} />
      <Particle size="7px" top="70%" left="90%" delay={0.8} duration={5.5} />
      <Particle size="4px" top="80%" left="75%" delay={1.5} duration={4} />
      
      <div className="container mx-auto px-6 max-w-[1300px] relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side Content */}
        <div className="flex-1 text-left max-w-2xl pt-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex w-fit mx-auto md:mx-0 items-center gap-2 bg-white/80 backdrop-blur-md border border-[#E91E63]/15 rounded-full px-4 py-2 mb-8 shadow-[0_2px_20px_rgba(233,30,99,0.08)]"
          >
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#4CAF50] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4CAF50]"></span>
            </span>
            <span className="text-xs font-semibold text-[#757575]">🛡️ 100% Verified Women Riders</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-[5.5rem] lg:text-[4.1rem] font-bold tracking-[-0.04em] text-[#2D2D2D] leading-[1.05] mb-8 font-heading md:text-start lg:text-start text-center"
          >
            India's safest <br />
            <span className="text-gradient">bike taxi</span> <br />
            platform. <br />
            <span className="relative inline-block">
              For women.
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C40 2 120 2 198 8" stroke="url(#underline-grad)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="underline-grad" x1="0" y1="0" x2="200" y2="0">
                    <stop stopColor="#E91E63"/>
                    <stop offset="1" stopColor="#9C27B0"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#757575] mb-10 max-w-md font-medium leading-relaxed text-center md:text-start lg:text-start"
          >
            Designed exclusively for women of all ages and children below 14 years. The honest, secure way to commute every day.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button onClick={() => window.location.href = "https://play.google.com/store/apps/details?id=com.woosh.in"} className="w-full sm:w-auto bg-gradient-to-r from-[#E91E63] to-[#9C27B0] hover:shadow-[0_8px_30px_rgba(233,30,99,0.35)] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Passenger App
            </button>
            <button onClick={() => window.location.href = "https://play.google.com/store/apps/details?id=com.woosh.ride"} className="w-full sm:w-auto bg-transparent border-2 border-[#E91E63]/20 hover:border-[#E91E63]/40 hover:bg-[#FFF0F5] text-[#2D2D2D] px-8 py-4 rounded-full font-bold transition-all duration-300">
              <span className="flex items-center justify-center gap-3">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#E91E63]">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Rider App
              </span>
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
          <div className="relative w-[340px] md:w-[380px] h-[750px] lg:absolute lg:top-[-80px] lg:right-10 rounded-[3rem] border-[12px] border-gradient bg-white shadow-[0_20px_60px_rgba(233,30,99,0.2)] overflow-hidden z-10 flex-shrink-0" style={{ borderColor: '#E91E63' }}>
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

          {/* Floating 3D Icons */}
          <FloatingIcon className="top-[5%] left-0 lg:-left-8" delay={0.8}>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E91E63] to-[#C2185B] flex items-center justify-center shadow-[0_8px_20px_rgba(233,30,99,0.3)] rotate-[-10deg]">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
          </FloatingIcon>

          <FloatingIcon className="top-[30%] -left-6 lg:-left-16" delay={1.2}>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#9C27B0] to-[#7B1FA2] flex items-center justify-center shadow-[0_6px_18px_rgba(156,39,176,0.3)] rotate-[8deg]">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
          </FloatingIcon>
          
          {/* Floating QR Code Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-[10%] lg:bottom-[20%] left-0 lg:-left-12 bg-white/90 backdrop-blur-xl rounded-2xl p-3 shadow-[0_8px_30px_rgba(233,30,99,0.12)] border border-pink-200/40 z-20"
          >
             <img 
               src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://woosh.com&bgcolor=ffffff&color=E91E63" 
               alt="QR Code" 
               className="w-20 h-20 md:w-24 md:h-24 opacity-80 rounded-lg"
             />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-[#E91E63] to-[#9C27B0] rounded-full border-2 border-white shadow-sm" />
          </motion.div>

        </motion.div>
        
      </div>
    </section>
  );
};
