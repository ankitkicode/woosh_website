import React, { useState } from "react";

export const CtaSection = () => {
  const [contactMethod, setContactMethod] = useState("phone");

  return (
    <section className="bg-[#FFFBFD] py-20 flex justify-center overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
        
        {/* Left Side: Image */}
        <div className="flex-1 w-full flex justify-center md:justify-start">
          <img 
            src="/images/hero_illustration.jpg" 
            alt="Woosh App" 
            className="w-full max-w-[500px] aspect-square object-cover rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
          />
        </div>

        {/* Right Side: Content & Form */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl md:text-[2.8rem] font-medium text-[#1C1C1C] mb-4 tracking-tight leading-tight">
            Get the Woosh app
          </h2>
          <p className="text-[#363636] text-[15px] md:text-base mb-8 max-w-md">
            We will send you a link, open it on your phone to download the app
          </p>

          {/* Radio Buttons */}
          <div className="flex items-center gap-6 mb-6">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#E91E63] transition-colors">
                 {contactMethod === "email" && <div className="w-2.5 h-2.5 rounded-full bg-[#E91E63]" />}
              </div>
              <input 
                type="radio" 
                name="contactMethod" 
                value="email" 
                className="hidden" 
                onChange={() => setContactMethod("email")}
              />
              <span className="text-gray-700 text-[15px]">Email</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#E91E63] transition-colors">
                 {contactMethod === "phone" && <div className="w-2.5 h-2.5 rounded-full bg-[#E91E63]" />}
              </div>
              <input 
                type="radio" 
                name="contactMethod" 
                value="phone" 
                className="hidden" 
                onChange={() => setContactMethod("phone")}
              />
              <span className="text-gray-700 text-[15px]">Phone</span>
            </label>
          </div>

          {/* Input & Button */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-[400px] mb-8">
            <input 
              type={contactMethod === "email" ? "email" : "tel"} 
              placeholder={contactMethod === "email" ? "Email" : "Phone"}
              className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] transition-all"
            />
            <button className="bg-[#EF4F5F] hover:bg-[#E23744] text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Share App Link
            </button>
          </div>

          <div className="text-sm text-gray-400 mb-4">Download app from</div>
          
          {/* App Store Buttons */}
          <div className="flex items-center justify-center md:justify-start gap-4">
             {/* App Store */}
             <button onClick={() => window.location.href = "https://play.google.com/store/apps/details?id=com.woosh.ride"} className="bg-black hover:bg-gray-900 transition-colors rounded-xl overflow-hidden h-[40px] flex">
                <div className="px-3 py-1 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                     <path d="M15.4 10.6c0-1.6 1.3-2.4 1.4-2.5-.7-1.1-1.9-1.3-2.3-1.3-1-.1-2 .6-2.5.6-.5 0-1.3-.6-2.1-.6-1.3 0-2.5.8-3.1 2-1.3 2.3-.3 5.7 1 7.5.6.9 1.3 1.9 2.3 1.8.9-.1 1.3-.7 2.4-.7s1.4.7 2.4.7c1 0 1.6-1 2.2-1.8.7-1 1-1.9 1-2-.1 0-2.6-1-2.6-3.7zM14.2 4.4c.5-.6.8-1.5.7-2.4-.8.1-1.7.5-2.2 1.1-.4.5-.8 1.4-.7 2.3.8 0 1.7-.5 2.2-1z" />
                  </svg>
                </div>
                <div className="pr-3 pl-1 py-1 flex flex-col justify-center text-white text-left">
                  <span className="text-[7px] leading-tight opacity-80">Download on the</span>
                  <span className="text-xs font-semibold leading-tight -mt-0.5">App Store</span>
                </div>
             </button>

             {/* Google Play */}
             <button onClick={() => window.location.href = "https://play.google.com/store/apps/details?id=com.woosh.in"} className="bg-black hover:bg-gray-900 transition-colors rounded-xl overflow-hidden h-[40px] flex">
                <div className="px-3 py-1 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6">
                     <path fill="#00c0ff" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5Z"/>
                     <path fill="#ff3d00" d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z"/>
                     <path fill="#ffc400" d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z"/>
                     <path fill="#00e676" d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </div>
                <div className="pr-3 pl-1 py-1 flex flex-col justify-center text-white text-left">
                  <span className="text-[7px] leading-tight opacity-80">GET IT ON</span>
                  <span className="text-xs font-semibold leading-tight -mt-0.5">Google Play</span>
                </div>
             </button>
          </div>

        </div>

      </div>
    </section>
  );
};
