import React from "react";
import { motion } from "framer-motion";

export const VideoSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Background Abstract Swirly Lines like Zomato (Cleaned up to avoid text) */}

      {/* Floating Elements (Images from internet instead of emojis) */}
      <div className="absolute top-[15%] left-[5%] md:left-[15%] w-12 h-12 md:w-16 md:h-16 flex items-center justify-center animate-bounce-gentle z-0">
         <img src="https://cdn-icons-png.flaticon.com/512/1161/1161388.png" alt="shield" className="w-full h-full object-contain opacity-80 drop-shadow-md" />
      </div>
      
      <div className="absolute top-[45%] right-[2%] md:right-[10%] w-16 h-16 md:w-20 md:h-20 flex items-center justify-center animate-bounce-gentle z-0" style={{ animationDelay: '1s' }}>
         <img src="https://cdn-icons-png.flaticon.com/512/3063/3063822.png" alt="scooter" className="w-full h-full object-contain opacity-70 drop-shadow-md" />
      </div>
      
      <div className="absolute top-[20%] right-[8%] md:right-[18%] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center animate-bounce-gentle z-0" style={{ animationDelay: '2.5s' }}>
         <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="check" className="w-full h-full object-contain opacity-60 drop-shadow-md" />
      </div>
      
      <div className="absolute top-[50%] left-[2%] md:left-[10%] w-14 h-14 md:w-16 md:h-16 flex items-center justify-center animate-bounce-gentle z-0" style={{ animationDelay: '1.5s' }}>
         <img src="https://cdn-icons-png.flaticon.com/512/4140/4140047.png" alt="women" className="w-full h-full object-contain opacity-80 drop-shadow-md" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-[3.5rem] font-bold text-[#E91E63] mb-6 leading-[1.1] tracking-tight"
          >
            Empowering women, <br className="hidden md:block" /> ensuring safety.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-[#757575] font-medium leading-relaxed max-w-2xl"
          >
            Woosh aims to provide the safest and most trusted two-wheeler transportation service in India. By combining verified women riders and strict operational policies, we empower women with earning opportunities.
          </motion.p>
        </div>

        {/* Stats Card - Zomato Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[1000px] mx-auto bg-white rounded-3xl md:rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100 p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            
            {/* Stat 1 */}
            <div className="flex-1 w-full flex items-center justify-center gap-4 pt-4 md:pt-0 pl-0 md:pl-4">
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#2D2D2D] tracking-tight leading-none">100%</h3>
                <p className="text-[#757575] text-xs md:text-sm font-semibold lowercase tracking-wide mt-1.5">verified riders</p>
              </div>
              <div className="w-12 h-12 shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[#E91E63]"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex-1 w-full flex items-center justify-center gap-4 pt-6 md:pt-0">
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#2D2D2D] tracking-tight leading-none">&lt; 14</h3>
                <p className="text-[#757575] text-xs md:text-sm font-semibold lowercase tracking-wide mt-1.5">years old safe</p>
              </div>
              <div className="w-12 h-12 shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[#9C27B0]"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex-1 w-full flex items-center justify-center gap-4 pt-6 md:pt-0 pr-0 md:pr-4">
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#2D2D2D] tracking-tight leading-none">100%</h3>
                <p className="text-[#757575] text-xs md:text-sm font-semibold lowercase tracking-wide mt-1.5">safety assured</p>
              </div>
              <div className="w-12 h-12 shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[#4CAF50]"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
