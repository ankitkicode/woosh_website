import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "../ui/button";

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-surface-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-gradient font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Platform</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#2D2D2D] mb-6 font-heading">
            Free to join, <br /><span className="text-gradient">Safe to ride.</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
          {/* Passenger Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 flex-1 border border-pink-100/60 shadow-[0_4px_24px_rgba(233,30,99,0.06)] relative group hover:shadow-[0_8px_40px_rgba(233,30,99,0.1)] hover:-translate-y-1 transition-all duration-500"
          >
            <h3 className="text-xl font-semibold mb-1 text-[#2D2D2D] font-heading">Passenger App</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-bold text-gradient font-heading">Free</span>
            </div>
            
            <div className="space-y-4 mb-8">
              {[
                "Only women & children allowed",
                "Live GPS & OTP verification",
                "Dedicated Child Mode",
                "SOS Emergency button",
                "Cash, UPI, Wallet payments"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-[#FFF0F5] flex items-center justify-center flex-shrink-0 border border-[#E91E63]/10">
                    <Check className="w-3 h-3 text-[#E91E63]" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-[#757575] font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button variant="outline" className="w-full rounded-xl py-6 font-semibold">
              Download App
            </Button>
          </motion.div>

          {/* Rider Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 flex-1 relative transform md:-translate-y-4 group transition-all duration-500 hover:-translate-y-6"
            style={{
              border: '2px solid transparent',
              backgroundClip: 'padding-box',
              boxShadow: '0 8px 40px rgba(233, 30, 99, 0.15), inset 0 0 0 2px transparent',
            }}
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#E91E63] to-[#9C27B0] -z-10 p-[2px]">
              <div className="w-full h-full rounded-3xl bg-white" />
            </div>
            
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_4px_15px_rgba(233,30,99,0.3)]">
              Earn With Us
            </div>
            
            <h3 className="text-xl font-semibold mb-1 text-[#2D2D2D] font-heading">Rider App</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-bold text-gradient font-heading">0%</span>
              <span className="text-[#757575] font-medium text-sm">Join Fee</span>
            </div>
            
            <div className="space-y-4 mb-8">
              {[
                "100% Women riders only",
                "Daily, weekly, monthly payouts",
                "Incentives and bonuses",
                "Accident & Medical Insurance",
                "Flexible online/offline timings"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#E91E63] to-[#9C27B0] flex items-center justify-center flex-shrink-0 shadow-[0_2px_6px_rgba(233,30,99,0.3)]">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-[#757575] font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button variant="primary" className="w-full rounded-xl py-6 font-semibold">
              Apply to Ride
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
