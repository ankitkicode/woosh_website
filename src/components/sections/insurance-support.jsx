import React from "react";
import { motion } from "framer-motion";

export const InsuranceSupport = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#E91E63]"></div>
            <span className="text-[#E91E63] text-sm font-bold tracking-widest uppercase">Insurance & Support</span>
            <div className="h-[1px] w-12 bg-[#E91E63]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A2E] tracking-tight mb-6 leading-tight">
            Covered on every trip.<br />
            <span className="text-[#E91E63]">Supported around the clock.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          
          {/* Left Dark Card - Insurance */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-[#1A1A2E] rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E91E63] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
            
            <div className="flex items-start gap-4 mb-8 relative z-10">
              <div className="w-12 h-12 bg-[#252542] rounded-2xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#E91E63]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Every ride is insured</h3>
                <p className="text-gray-400 text-[1.1rem]">In partnership with ACKO Insurance</p>
              </div>
            </div>

            <p className="text-gray-300 text-[1.1rem] leading-relaxed mb-10 relative z-10">
              From the moment your ride starts until you're dropped off, you and your rider are protected at no extra cost.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10 relative z-10">
              <div className="bg-[#252542] rounded-2xl p-5">
                <div className="text-gray-400 text-xs font-bold mb-1">Accidental cover</div>
                <div className="text-white font-bold text-lg">Up to ₹5,00,000</div>
              </div>
              <div className="bg-[#252542] rounded-2xl p-5">
                <div className="text-gray-400 text-xs font-bold mb-1">Medical expenses</div>
                <div className="text-white font-bold text-lg">Up to ₹1,00,000</div>
              </div>
              <div className="bg-[#252542] rounded-2xl p-5">
                <div className="text-gray-400 text-xs font-bold mb-1">Who's covered</div>
                <div className="text-white font-bold text-lg">Passenger & rider</div>
              </div>
              <div className="bg-[#252542] rounded-2xl p-5">
                <div className="text-gray-400 text-xs font-bold mb-1">Extra cost</div>
                <div className="text-white font-bold text-lg">₹0 - Always free</div>
              </div>
            </div>

            <a href="#" className="text-[#E91E63] font-bold text-sm hover:underline relative z-10">
              Read the full insurance terms
            </a>
          </motion.div>

          {/* Right Light Cards - Support */}
          <div className="flex-1 flex flex-col gap-4">
            {[
              { 
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />, 
                title: "In-app chat", 
                desc: "Tap Help in the app · 24x7" 
              },
              { 
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />, 
                title: "Call us", 
                desc: "+91 75183 40404 · 24x7" 
              },
              { 
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />, 
                title: "Email", 
                desc: "wooshride.app@gmail.com - reply within 2 hours" 
              },
              { 
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />, 
                title: "Report a safety issue", 
                desc: "From any trip in the app · reviewed by our women safety team",
                highlight: true
              }
            ].map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className={`flex-1 rounded-[1.5rem] p-6 flex items-center gap-6 ${item.highlight ? 'bg-pink-50/50 border border-pink-100' : 'bg-white border border-gray-100 shadow-sm'}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.highlight ? 'bg-pink-100 text-[#E91E63]' : 'bg-gray-50 text-gray-500'}`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">{item.icon}</svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A2E] text-[1.3rem] mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-[1.1rem]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Grievance Bar */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border border-gray-100"
        >
          <div>
            <div className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-2">Grievance Officer</div>
            <p className="font-medium text-[#1A1A2E]">Anjali Sharma · grievance@woosh.com · 123 Tech Park, Bhopal</p>
          </div>
          <div className="text-sm font-medium text-gray-500 bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">
            Complaints acknowledged within 24 hours
          </div>
        </motion.div> */}

      </div>
    </section>
  );
};
