import React from "react";
import { Check } from "lucide-react";
import { Button } from "../ui/button";

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-[#f4f3ef]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[#ff3300] font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Platform</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
            Free to join, <br />Safe to ride.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
          {/* Passenger Card */}
          <div className="bg-white rounded-3xl p-8 flex-1 border border-black/5 shadow-sm relative">
            <h3 className="text-xl font-semibold mb-1 text-black">Passenger App</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-bold text-black">Free</span>
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
                  <div className="h-5 w-5 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-black" />
                  </div>
                  <span className="text-sm text-neutral-600 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button variant="outline" className="w-full rounded-xl py-6 font-semibold">
              Download App
            </Button>
          </div>

          {/* Rider Card */}
          <div className="bg-white rounded-3xl p-8 flex-1 border border-[#ff3300]/20 shadow-xl relative transform md:-translate-y-4">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ff3300] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Earn With Us
            </div>
            
            <h3 className="text-xl font-semibold mb-1 text-black">Rider App</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-bold text-black">0%</span>
              <span className="text-neutral-500 font-medium text-sm">Join Fee</span>
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
                  <div className="h-5 w-5 rounded-full bg-[#ff3300]/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#ff3300]" />
                  </div>
                  <span className="text-sm text-neutral-600 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button variant="primary" className="w-full rounded-xl py-6 font-semibold">
              Apply to Ride
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
