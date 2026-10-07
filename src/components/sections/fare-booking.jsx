import React from "react";
import { motion } from "framer-motion";

export const FareBooking = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-20">
          
          {/* Left Text & Steps */}
          <div className="flex-1 w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#E91E63]"></div>
              <span className="text-[#E91E63] text-sm font-bold tracking-widest uppercase">Fare & Booking</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A2E] tracking-tight mb-6 leading-tight">
              Know your fare <span className="text-[#E91E63]">before you book.</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl font-medium mb-12 max-w-xl">
              Booking takes under a minute, and the price you see is the price you pay.
            </p>

            <div className="space-y-8 relative">
              <div className="absolute left-4 top-4 bottom-4 w-[1px] bg-pink-100 z-0"></div>
              
              {[
                { num: "1", title: "Set pickup and drop", desc: "Enter where you are and where you're going." },
                { num: "2", title: "See your upfront fare", desc: "The full price, with a clear breakdown, before you confirm." },
                { num: "3", title: "Get matched with a woman rider", desc: "See her name, photo and vehicle as soon as she accepts." },
                { num: "4", title: "Share your OTP and ride", desc: "Pay at the end by your preferred method." }
              ].map((step, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="flex gap-6 relative z-10"
                >
                  <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-[#E91E63] font-bold text-sm shrink-0 shadow-sm border border-white">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">{step.title}</h3>
                    <p className="text-gray-500 text-md">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Fare Breakdown Card */}
          <div className="flex-1 w-full flex justify-center lg:justify-end relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-pink-50 rounded-[3rem] -z-10 rotate-3"></div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 w-full max-w-[420px]"
            >
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-[13px] font-bold text-gray-500 tracking-wider uppercase mb-1">Fare Breakdown</h3>
                  <p className="text-sm text-gray-400">Example trip · 8 km · 25 min</p>
                </div>
                <div className="bg-green-50 text-green-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Upfront
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                  <span className="text-gray-600 font-medium">Base fare</span>
                  <span className="text-[#1A1A2E] font-bold">₹25</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                  <span className="text-gray-600 font-medium">Distance (₹6 per km)</span>
                  <span className="text-[#1A1A2E] font-bold">₹48</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                  <span className="text-gray-600 font-medium">Time (₹1 per min)</span>
                  <span className="text-[#1A1A2E] font-bold">₹25</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                  <span className="text-gray-600 font-medium">Taxes & fees</span>
                  <span className="text-[#1A1A2E] font-bold">₹5</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold text-[#1A1A2E]">You pay</span>
                <span className="text-3xl font-black text-[#E91E63]">₹103</span>
              </div>

              <button className="w-full bg-[#E91E63] hover:bg-[#D81B60] text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Confirm & book
              </button>
            </motion.div>
          </div>
        </div>

        {/* 4 Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />, 
              title: "No surge surprises", 
              desc: "Transparent pricing. Fares stay fair, even at peak hours." 
            },
            { 
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />, 
              title: "Pay your way", 
              desc: "UPI, cash, or wallet — pay however you prefer." 
            },
            { 
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />, 
              title: "Free cancellation", 
              desc: "Cancel free within 3 minutes of booking." 
            },
            { 
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />, 
              title: "Book for family", 
              desc: "Book for a woman or child under 14 and track them live." 
            }
          ].map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-[#E91E63] mb-4 shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">{item.icon}</svg>
              </div>
              <h4 className="font-bold text-[#1A1A2E] text-lg mb-2">{item.title}</h4>
              <p className="text-gray-500 text-[16px] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
