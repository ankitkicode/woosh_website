import React from "react";
import { motion } from "framer-motion";

export const SafetyFeatures = () => {
  return (
    <section className="py-24 bg-[#FFFBFD]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#E91E63]"></div>
            <span className="text-[#E91E63] text-sm font-bold tracking-widest uppercase">Safety Features</span>
            <div className="h-[1px] w-12 bg-[#E91E63]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A2E] tracking-tight mb-6 leading-tight">
            Safe before, during and <span className="text-[#E91E63]">after<br />every ride.</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Safety at Woosh starts long before you book and doesn't end until you're home. Here's what protects you at every stage.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          
          {/* Stage 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-[#E91E63] font-bold text-sm">
                01
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">Stage One</div>
                <h3 className="text-xl font-bold text-[#1A1A2E]">Before the ride</h3>
              </div>
            </div>
            
            <div className="space-y-6 flex-1">
              {[
                { title: "Background-checked riders", desc: "ID, driving licence and background verified before her first trip." },
                { title: "Live face verification", desc: "A selfie matched to her ID before every shift." },
                { title: "Rider details upfront", desc: "See her name, photo and vehicle number before she arrives." },
                { title: "Masked phone numbers", desc: "Calls go through the app, so your number stays private." }
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <svg className="w-5 h-5 text-[#E91E63] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <div>
                    <h4 className="font-bold text-[#1A1A2E] text-md mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-md leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stage 2 (Highlighted) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-[0_20px_60px_rgba(233,30,99,0.1)] border-2 border-[#E91E63] flex flex-col h-full relative z-10 scale-100 lg:scale-105"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#E91E63] flex items-center justify-center text-white font-bold text-sm shadow-md">
                02
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">Stage Two</div>
                <h3 className="text-xl font-bold text-[#1A1A2E]">During the ride</h3>
              </div>
            </div>
            
            <div className="space-y-6 flex-1">
              {[
                { title: "OTP to start", desc: "The trip begins only when you share your code with the right rider." },
                { title: "Live trip sharing", desc: "Family follows your ride on a live map, start to finish." },
                { title: "Route deviation alerts", desc: "Off-route or long stops trigger an instant check-in." },
                { title: "One-tap SOS", desc: "Alerts your contacts and our safety team with your location." }
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <svg className="w-5 h-5 text-[#E91E63] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <div>
                    <h4 className="font-bold text-[#1A1A2E] text-[15px] mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-md leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stage 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-[#E91E63] font-bold text-sm">
                03
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">Stage Three</div>
                <h3 className="text-xl font-bold text-[#1A1A2E]">After the ride</h3>
              </div>
            </div>
            
            <div className="space-y-6 flex-1">
              {[
                { title: "Drop-off confirmation", desc: "Your shared contacts are notified the moment you arrive." },
                { title: "Rate every rider", desc: "Your feedback keeps standards high for every woman who rides." },
                { title: "Report a concern", desc: "Flag any issue from your trip history in two taps." },
                { title: "Safety team follow-up", desc: "Every report is reviewed by our women safety team." }
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <svg className="w-5 h-5 text-[#E91E63] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <div>
                    <h4 className="font-bold text-[#1A1A2E] text-[15px] mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-md leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* SOS Dark Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1A1A2E] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12"
        >
          {/* Left Text */}
          <div className="flex-1 w-full text-center md:text-left">
            <div className="text-[#E91E63] text-xs font-bold tracking-widest uppercase mb-4">If something feels wrong</div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              What happens when you press SOS
            </h3>
            <p className="text-gray-400 text-md">
              Help is one tap away throughout every ride, and a real person responds.
            </p>
          </div>

          {/* Right Steps */}
          <div className="flex-1 w-full flex flex-col gap-4">
            {[
              { num: "SOS", text: "You tap SOS on the ride screen", bg: "bg-red-600" },
              { num: "2", text: "Your live location goes to your emergency contacts and our safety team", bg: "bg-gray-700" },
              { num: "3", text: "Our team calls you within 10 seconds and alerts local police (112) if needed", bg: "bg-gray-700" }
            ].map((step, i) => (
              <div key={i} className="bg-[#252542] rounded-2xl p-5 flex items-center gap-5">
                <div className={`w-12 h-12 rounded-full ${step.bg} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {step.num}
                </div>
                <p className="text-white text-[15px] font-medium leading-snug">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
