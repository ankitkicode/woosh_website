import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const CtaSection = () => {
  return (
    <section className="pb-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden aspect-[3/4] md:aspect-[21/10] p-8 md:p-16 flex flex-col md:flex-row justify-between md:items-center shadow-[0_20px_60px_rgba(233,30,99,0.2)]"
        >
          {/* Background Image */}
          <img 
            src="/images/cta_background.jpg" 
            alt="Abstract gradient background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Additional gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A0A10]/70 via-transparent to-transparent" />
          
          {/* Floating decorative elements */}
          <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 animate-float" />
          <div className="absolute bottom-20 right-[30%] w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 animate-float" style={{ animationDelay: '2s' }} />
          
          {/* Left Content */}
          <div className="relative z-10 w-full max-w-lg flex flex-col h-full justify-between md:justify-center gap-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight font-heading">
                Open <br />the Woosh <br />Journal
              </h2>
              <p className="text-white/70 text-lg max-w-sm leading-relaxed font-medium">
                We break down mobility safety and how much money you can save daily.
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white rounded-full flex items-center justify-center transition-all shadow-[0_8px_25px_rgba(233,30,99,0.4)]"
            >
              <ArrowRight className="w-8 h-8" />
            </motion.button>
          </div>
          
          {/* Right Content (Form Card) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative z-10 w-full max-w-sm mt-12 md:mt-0"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-[0_12px_40px_rgba(0,0,0,0.15)] border border-white/50">
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-6 font-heading">Subscribe for updates</h3>
              
              <form className="relative flex items-center mb-6">
                <input 
                  type="email" 
                  placeholder="you@example.com" 
                  className="w-full bg-[#FFF0F5] border border-[#E91E63]/10 outline-none rounded-2xl py-4 pl-4 pr-[120px] text-base text-[#2D2D2D] placeholder:text-[#757575]/50 focus:ring-2 focus:ring-[#E91E63]/20 focus:border-[#E91E63]/30 transition-all"
                  required
                />
                <button 
                  type="submit"
                  className="absolute right-2 bg-gradient-to-r from-[#E91E63] to-[#9C27B0] hover:shadow-[0_4px_15px_rgba(233,30,99,0.35)] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-xs text-[#757575] leading-relaxed font-medium">
                By subscribing, you agree to receive the Woosh newsletter. You can unsubscribe anytime.
              </p>
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};
