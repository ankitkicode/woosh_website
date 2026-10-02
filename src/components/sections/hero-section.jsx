import React from "react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] pt-28 md:pt-36 pb-16 overflow-hidden bg-[#FFFBFD] flex items-center">
      {/* Background Map Grid (Light Theme) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{ 
          backgroundImage: 'linear-gradient(#1A1A2E 2px, transparent 2px), linear-gradient(90deg, #1A1A2E 2px, transparent 2px)', 
          backgroundSize: '100px 100px',
          backgroundPosition: 'center center'
        }}
      >
        {/* Angled lines to simulate roads */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="20%" x2="100%" y2="80%" stroke="#1A1A2E" strokeWidth="2" />
          <line x1="100%" y1="10%" x2="0" y2="90%" stroke="#1A1A2E" strokeWidth="2" />
          <line x1="30%" y1="0" x2="60%" y2="100%" stroke="#1A1A2E" strokeWidth="2" />
        </svg>
      </div>

      <div className="container mx-auto px-5 relative z-10 max-w-[1300px]">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Content */}
          <div className="flex-1 w-full max-w-xl lg:max-w-none">
            {/* Onboarding Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm w-max max-w-full"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-[#1A1A2E] truncate">Now onboarding Queens in Bhopal</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[2.75rem] leading-[1.1] sm:text-5xl md:text-[4.5rem] lg:text-[5rem] font-extrabold text-[#1A1A2E] tracking-tight mb-5 md:mb-6"
            >
              The bike taxi <br />
              built for <br />
              <span className="text-[#E91E63]">women.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-8 md:mb-10 max-w-lg"
            >
              Women riders. Women and children as passengers. Every trip face-verified, OTP-secured and tracked live, so your daily commute is finally designed around you.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10"
            >
              <button 
                onClick={() => window.location.href = "https://play.google.com/store/apps/details?id=com.woosh.in"}
                className="w-full sm:w-auto bg-[#E91E63] hover:bg-[#D81B60] text-white px-8 py-3.5 md:py-4 rounded-xl sm:rounded-full font-bold text-base flex items-center justify-center gap-2 transition-all shadow-[0_8px_25px_rgba(233,30,99,0.3)] hover:shadow-[0_12px_30px_rgba(233,30,99,0.4)]"
              >
                <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Book a ride
              </button>
              <button 
                onClick={() => document.dispatchEvent(new CustomEvent('openRiderModal'))}
                className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#1A1A2E] border border-gray-200 px-8 py-3.5 md:py-4 rounded-xl sm:rounded-full font-bold text-base flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md"
              >
                <span className="text-xl leading-none shrink-0">👑</span>
                Become a Queen
              </button>
            </motion.div>

            {/* Trust Markers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-x-6 gap-y-3"
            >
              {[
                "Face-verified women riders",
                "Live tracking & SOS",
                "Every ride insured"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#E91E63] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-sm font-semibold text-gray-700">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Interactive Map Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 w-full relative h-[450px] md:h-[500px] lg:h-[600px] mt-4 lg:mt-0 max-w-lg mx-auto lg:max-w-none"
          >
            <div className="absolute inset-0 bg-white rounded-3xl md:rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
              
              {/* Inner Map Grid */}
              <div 
                className="absolute inset-0 opacity-[0.04]"
                style={{ 
                  backgroundImage: 'linear-gradient(#1A1A2E 1.5px, transparent 1.5px), linear-gradient(90deg, #1A1A2E 1.5px, transparent 1.5px)', 
                  backgroundSize: '40px 40px'
                }}
              />

              {/* SVG Route Line */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 600" preserveAspectRatio="xMidYMid slice">
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                  d="M120 450 C 150 350, 250 300, 250 250 C 250 200, 400 200, 420 150" 
                  fill="none" 
                  stroke="#E91E63" 
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <circle cx="120" cy="450" r="12" fill="white" stroke="#1A1A2E" strokeWidth="4" />
                
                {/* Ping animation at current location */}
                <circle cx="250" cy="250" r="18" fill="#E91E63" opacity="0.2" className="animate-ping" style={{ animationDuration: '2s' }} />
                <circle cx="250" cy="250" r="10" fill="#E91E63" />
                <circle cx="250" cy="250" r="4" fill="white" />
                
                <circle cx="420" cy="150" r="10" fill="white" />
              </svg>

              {/* Rider Badge (Top Left) */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute top-4 sm:top-8 left-4 sm:left-6 bg-white p-2.5 sm:p-3 pr-4 sm:pr-5 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100 scale-90 sm:scale-100 origin-top-left"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-pink-100 flex items-center justify-center text-[#E91E63] font-bold text-xs sm:text-sm shrink-0">
                  MK
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="font-bold text-[#1A1A2E] text-sm">Meena K.</span>
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-gray-500 font-medium">Face verified today · 2 min away</div>
                </div>
              </motion.div>

              {/* OTP Box (Middle Right) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute top-[35%] sm:top-[40%] right-4 sm:right-6 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 scale-90 sm:scale-100 origin-right"
              >
                <div className="text-[9px] sm:text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1.5 sm:mb-2 text-center">Ride OTP</div>
                <div className="flex gap-1.5">
                  {['4', '8', '2', '7'].map((num, i) => (
                    <div key={i} className="w-7 h-9 sm:w-8 sm:h-10 bg-pink-50 rounded-lg flex items-center justify-center text-[#E91E63] font-bold text-base sm:text-lg">
                      {num}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* SOS Bottom Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-[#1A1A2E] rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center justify-between shadow-2xl"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)] shrink-0" />
                  <div>
                    <div className="text-white font-bold text-xs sm:text-sm mb-0.5 truncate max-w-[150px] sm:max-w-none">Live trip shared with Mom</div>
                    <div className="text-gray-400 text-[10px] sm:text-xs">Drop in 6 min · on expected route</div>
                  </div>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-5 py-2 rounded-lg sm:rounded-xl font-bold text-[10px] sm:text-xs tracking-wide transition-colors shrink-0 shadow-md">
                  SOS
                </button>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};
