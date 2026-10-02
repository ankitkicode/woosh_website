import React from "react";
import { motion } from "framer-motion";

export const VideoSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Mission Section - Two Column Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-[1200px] mx-auto mb-20 md:mb-28">
          
          {/* Left Content */}
          <div className="flex-1 w-full max-w-xl lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-[2px] bg-[#E91E63]" />
              <span className="text-[#E91E63] text-sm font-bold uppercase tracking-widest">Our Mission</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[2.5rem] leading-[1.1] md:text-[3.5rem] font-extrabold text-[#1A1A2E] tracking-tight mb-6"
            >
              Safe rides by women.{" "}
              <span className="text-[#E91E63]">Real earnings for women.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-[#666] font-medium leading-relaxed mb-10 max-w-lg"
            >
              Woosh is a two-wheeler taxi service run entirely by women, for women of every age and children under 14. Every rider is face-verified, every trip is tracked live, and every ride puts income directly in a woman's hands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button 
                onClick={() => window.location.href = "https://play.google.com/store/apps/details?id=com.woosh.in"}
                className="bg-[#E91E63] hover:bg-[#D81B60] text-white px-8 py-4 rounded-full font-bold text-base flex items-center gap-2 transition-all shadow-[0_8px_25px_rgba(233,30,99,0.25)] hover:shadow-[0_12px_35px_rgba(233,30,99,0.35)]"
              >
                Book a safe ride
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
              <button 
                onClick={() => window.location.href = "https://play.google.com/store/apps/details?id=com.woosh.ride"}
                className="bg-white hover:bg-gray-50 text-[#1A1A2E] border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-base transition-all"
              >
                Become a rider
              </button>
            </motion.div>
          </div>

          {/* Right - App Mockup Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 w-full max-w-md lg:max-w-lg"
          >
            <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
              {/* Map Area */}
              <div className="relative h-48 bg-[#F8F8F8] overflow-hidden">
                {/* Grid pattern for map */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#ddd 1px, transparent 1px), linear-gradient(90deg, #ddd 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                
                {/* Route line */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                  <path d="M60 160 Q150 120 200 80 Q250 40 340 30" stroke="#E91E63" strokeWidth="3" fill="none" strokeDasharray="8,6" strokeLinecap="round" />
                  <circle cx="60" cy="160" r="8" fill="white" stroke="#333" strokeWidth="2" />
                  <circle cx="340" cy="30" r="10" fill="#E91E63" />
                  <circle cx="340" cy="30" r="5" fill="white" />
                </svg>

                {/* Live tracking badge */}
                <div className="absolute top-4 left-4 bg-white rounded-full px-4 py-2 shadow-md flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-semibold text-gray-800">Live tracking on</span>
                </div>
              </div>

              {/* Ride Info */}
              <div className="p-5 md:p-6">
                {/* ETA + OTP */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-0.5">Arriving in</p>
                    <p className="text-3xl font-extrabold text-[#1A1A2E]">4 <span className="text-lg font-bold">min</span></p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 font-medium mb-1.5">Share OTP on arrival</p>
                    <div className="flex gap-1.5">
                      {['4', '8', '2', '7'].map((d, i) => (
                        <div key={i} className="w-9 h-9 rounded-lg bg-green-500 text-white flex items-center justify-center font-bold text-sm">
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] w-full bg-gray-100 mb-5" />

                {/* Rider Info */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-[#E91E63] flex items-center justify-center text-white font-bold text-lg shrink-0">
                    PS
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#1A1A2E] text-lg">Priya S.</span>
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">Face verified today · ID & licence checked</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-800 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                    Share trip
                  </button>
                  <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-md">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    SOS
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Card */}
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
