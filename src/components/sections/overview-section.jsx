import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const OverviewSection = () => {
  return (
    <section id="overview" className="py-24 bg-[#f4f3ef]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <span className="text-[#ff3300] font-bold text-sm tracking-widest uppercase mb-4 block">Overview</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black max-w-3xl leading-tight">
            The safest ride in India, <br />
            designed for women.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2.5rem] bg-[#ff3300] p-8 md:p-12 text-white relative overflow-hidden aspect-square flex items-center justify-center"
          >
            {/* Background glowing effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
            
            {/* Mockup visualization */}
            <div className="relative w-full max-w-[280px] bg-white rounded-[2rem] p-4 text-black shadow-2xl transform rotate-[-5deg]">
              <div className="h-40 bg-neutral-100 rounded-xl mb-4 relative overflow-hidden">
                 <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                 <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-neutral-200 to-transparent" />
                 
                 {/* Map markers */}
                 <div className="absolute top-10 left-10 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-md" />
                 <div className="absolute bottom-10 right-10 w-4 h-4 bg-[#ff3300] rounded-full border-2 border-white shadow-md" />
                 <svg className="absolute top-12 left-12 w-[120px] h-[60px]" style={{ stroke: '#111', strokeWidth: 3, fill: 'none', strokeDasharray: '4' }}>
                    <path d="M0,0 C40,20 60,60 120,60" />
                 </svg>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-neutral-200 rounded w-3/4" />
                <div className="h-4 bg-neutral-200 rounded w-1/2" />
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-200 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="Rider" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Aarti Sharma</div>
                    <div className="text-xs text-neutral-500">4.9 ★ • Verified Rider</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Woosh aims to provide the safest and most trusted two-wheeler transportation service in India. 
              By combining verified women riders, technology-driven safety features, and strict operational policies, 
              we eliminate the safety concerns associated with traditional bike taxis.
            </p>

            <ul className="space-y-6">
              {[
                "100% verified women riders only",
                "Dedicated Child Mode for kids under 14",
                "Live tracking and SOS button on every ride"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ff3300]/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#ff3300]" />
                  </div>
                  <span className="text-neutral-700 font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
