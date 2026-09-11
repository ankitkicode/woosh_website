import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const FeaturesShowcase = () => {
  return (
    <div className="bg-[#f4f3ef] w-full flex flex-col gap-32 pb-24">
      
      {/* 4.1 Overview Section */}
      <section className="container mx-auto px-6 max-w-6xl pt-24">
        <div className="mb-12">
          <span className="text-[#ff3300] font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Objectives</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black max-w-2xl leading-tight">
            Empowering women, <br />ensuring safety.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] bg-neutral-200 overflow-hidden aspect-[4/3] md:aspect-square relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
              alt="Women empowerment" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:pl-10"
          >
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Woosh aims to provide the safest and most trusted two-wheeler transportation service in India. By combining verified women riders and strict operational policies, we empower women with earning opportunities.
            </p>

            <ul className="space-y-4">
              {[
                "100% verified women riders",
                "Safe for children below 14",
                "Reduces traditional safety concerns"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ff3300]/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#ff3300]" />
                  </div>
                  <span className="text-neutral-700 text-sm font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 4.2 Breakdown Section */}
      <section className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#ff3300] font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Eligibility</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-black leading-[1.1] mb-6">
              Women. <br />
              Children. <br />
              <span className="text-[#ff3300]">Only.</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-md">
              An exclusive platform built for the safety of women and children. Adult male passengers are strictly prohibited to ensure a completely secure environment.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] overflow-hidden aspect-[4/3] bg-neutral-200"
          >
            <img 
              src="https://images.unsplash.com/photo-1708457753320-02e52a276a80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Mother and child" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 4.3 Center Feature (Surprise Charged) */}
      <section className="container mx-auto px-6 max-w-4xl text-center">
        <span className="text-[#ff3300] font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Safety First</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-12">
          Bank-level safety features <br />at your fingertips.
        </h2>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] bg-[#ff3300] aspect-[4/3] md:aspect-[21/9] overflow-hidden relative flex justify-center items-end"
        >
          <img 
            src="https://images.unsplash.com/photo-1698430484227-006b70bc83cb?q=80&w=2900&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Safety Dashboard" 
            className="w-full h-full object-cover mix-blend-overlay opacity-50 absolute inset-0"
          />
          {/* Mockup card popping up from bottom */}
          <div className="w-[80%] max-w-[400px] h-[80%] bg-white rounded-t-3xl shadow-2xl relative z-10 p-6 flex flex-col gap-4">
             <div className="h-12 w-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
             </div>
             <div className="h-4 bg-neutral-200 rounded w-3/4 mx-auto" />
             <div className="h-3 bg-neutral-100 rounded w-1/2 mx-auto" />
             <button className="mt-auto bg-red-600 text-white font-bold py-3 rounded-xl w-full">SOS Emergency</button>
          </div>
        </motion.div>
      </section>

      {/* 4.4 Auto-Cancellation / Child Mode */}
      <section className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#ff3300] font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Child Mode</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
              Track your child's <br />ride in real-time.
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-md">
              Parents can easily add a child profile, book rides on their behalf, and monitor the journey with live GPS tracking.
            </p>
            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <div className="font-bold text-xl">100%</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider">Live GPS</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-bold text-xl">Top 5%</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider">Rated Riders</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] bg-[#ff3300] aspect-[4/5] md:aspect-square flex justify-center items-center p-8 relative overflow-hidden"
          >
             <div className="w-[60%] max-w-[260px] aspect-[1/2.1] bg-white rounded-[2.5rem] border-8 border-black shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-2xl w-1/2 mx-auto z-20" />
                <div className="w-full h-1/2 bg-neutral-200 bg-[url('https://images.unsplash.com/photo-1708457753320-02e52a276a80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]" />
                <div className="p-4 bg-white h-1/2 flex flex-col gap-3">
                   <div className="h-4 w-1/2 bg-neutral-200 rounded" />
                   <div className="h-3 w-3/4 bg-neutral-100 rounded" />
                   <div className="mt-auto h-12 w-full bg-neutral-100 rounded-xl flex items-center px-3 gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">📍</div>
                      <div className="h-2 w-1/2 bg-neutral-300 rounded" />
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>



      {/* 4.8 Text Highlight */}
      <section className="container mx-auto px-6 max-w-3xl text-center py-12">
        <p className="text-xl md:text-3xl font-medium leading-relaxed text-black">
          You know roughly what a safe ride should feel like. <span className="text-[#ff3300] font-bold">Roughly is the problem.</span> Woosh is designed to guarantee 100% security by combining technology, verified women riders, and <span className="text-[#ff3300] font-bold">strict safety standards</span> you can rely on.
        </p>
      </section>
    </div>
  );
};
