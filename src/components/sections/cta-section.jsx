import React from "react";
import { ArrowRight } from "lucide-react";

export const CtaSection = () => {
  return (
    <section className="pb-32 bg-[#f4f3ef]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="relative rounded-[3rem] overflow-hidden bg-black aspect-[3/4] md:aspect-[21/10] p-8 md:p-16 flex flex-col md:flex-row justify-between md:items-center shadow-2xl">
          {/* Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1725113114073-660fa493f75a?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Women empowering" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
          
          {/* Left Content */}
          <div className="relative z-10 w-full max-w-lg flex flex-col h-full justify-between md:justify-center gap-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                Open <br />the Woosh <br />Journal
              </h2>
              <p className="text-neutral-200 text-lg max-w-sm leading-relaxed font-medium">
                We break down mobility safety and how much money you can save daily.
              </p>
            </div>
            
            <button className="w-16 h-16 bg-[#ff3300] hover:bg-[#e62e00] text-white rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-lg">
              <ArrowRight className="w-8 h-8" />
            </button>
          </div>
          
          {/* Right Content (Form Card) */}
          <div className="relative z-10 w-full max-w-sm mt-12 md:mt-0">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-black mb-6">Subscribe for updates</h3>
              
              <form className="relative flex items-center mb-6">
                <input 
                  type="email" 
                  placeholder="you@example.com" 
                  className="w-full bg-neutral-100 border-none outline-none rounded-2xl py-4 pl-4 pr-[120px] text-base text-black placeholder:text-neutral-500 focus:ring-2 focus:ring-[#ff3300]/20 transition-all"
                  required
                />
                <button 
                  type="submit"
                  className="absolute right-2 bg-[#ff3300] hover:bg-[#e62e00] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-xs text-neutral-500 leading-relaxed font-medium">
                By subscribing, you agree to receive the Woosh newsletter. You can unsubscribe anytime.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
