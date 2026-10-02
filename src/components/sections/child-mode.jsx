import React from "react";
import { motion } from "framer-motion";

export const ChildMode = () => {
  return (
    <section className="py-24 bg-[#FFFBFD]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-20">
          
          {/* Left App Mockup */}
          <div className="flex-1 w-full flex justify-center lg:justify-start relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-100/50 rounded-full blur-3xl -z-10"></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-[280px] h-[580px] bg-[#1A1A2E] rounded-[3rem] border-[8px] border-[#1A1A2E] overflow-hidden shadow-2xl"
            >
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1A1A2E] rounded-b-3xl z-20"></div>
              
              {/* App Content */}
              <div className="absolute inset-0 bg-white flex flex-col pt-12 pb-6 px-4">
                <div className="text-[10px] font-bold text-[#E91E63] tracking-wider uppercase mb-1">Child Mode</div>
                <h3 className="text-xl font-extrabold text-[#1A1A2E] mb-6">Ananya is on her way</h3>
                
                {/* Map Area Mockup */}
                <div className="bg-pink-50 rounded-2xl flex-1 mb-4 relative overflow-hidden flex items-center justify-center p-4">
                  {/* Fake Route */}
                  <div className="absolute top-8 left-4 text-xs font-bold bg-white px-3 py-1.5 rounded-full shadow-sm text-gray-700 z-10 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#1A1A2E]"></div>
                    To: School gate · 6 min
                  </div>
                  
                  {/* SVG Route Line */}
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M10,80 Q30,60 50,70 T90,20" fill="none" stroke="#E91E63" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="50" cy="70" r="5" fill="#E91E63" />
                    <circle cx="50" cy="70" r="15" fill="#E91E63" fillOpacity="0.2" />
                    <circle cx="90" cy="20" r="4" fill="#1A1A2E" />
                  </svg>
                </div>

                {/* Rider Info Card */}
                <div className="bg-white rounded-xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-50 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-[#E91E63] font-bold text-lg shrink-0">
                      MK
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A1A2E]">Meena K. · Rider</h4>
                      <p className="text-xs text-gray-500">Face verified today</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-2 rounded-lg text-xs font-bold mb-4 justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  You'll be notified at drop-off
                </div>

                <div className="grid grid-cols-2 gap-2 mt-auto">
                  <button className="bg-white border border-gray-200 text-[#1A1A2E] font-bold py-3 rounded-xl text-sm">Call rider</button>
                  <button className="bg-[#E91E63] text-white font-bold py-3 rounded-xl text-sm">SOS</button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Text & Grid */}
          <div className="flex-1 w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#E91E63]"></div>
              <span className="text-[#E91E63] text-sm font-bold tracking-widest uppercase">Child Mode</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A2E] tracking-tight mb-6 leading-tight">
              Peace of mind for <span className="text-[#E91E63]">every school run.</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl font-medium mb-12 max-w-xl">
              Book safe rides for children under 14 with a verified woman rider, and follow every minute from your own phone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { num: "01", title: "Add your child", desc: "Create a profile with their name and photo." },
                { num: "02", title: "Book or schedule", desc: "Set up one-off trips or regular school runs." },
                { num: "03", title: "Track live", desc: "Watch the ride on a map with the rider's details." },
                { num: "04", title: "Get drop-off alert", desc: "Know the moment your child arrives safely." }
              ].map((step, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
                >
                  <div className="text-[#E91E63] font-black text-sm mb-2">{step.num}</div>
                  <h3 className="font-bold text-[#1A1A2E] text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Rules Wide Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100"
        >
          <h3 className="text-xl md:text-2xl font-bold text-[#1A1A2E] mb-8">Ride rules for children</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-2">Age</div>
              <p className="font-bold text-[#1A1A2E]">Children under 14</p>
            </div>
            <div>
              <div className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-2">Booked By</div>
              <p className="font-bold text-[#1A1A2E]">Parent or guardian only</p>
            </div>
            <div>
              <div className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-2">Helmet</div>
              <p className="font-bold text-[#1A1A2E]">Rider provides child helmet</p>
            </div>
            <div>
              <div className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-2">Riding Alone</div>
              <p className="font-bold text-[#1A1A2E]">Not allowed under 14</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
