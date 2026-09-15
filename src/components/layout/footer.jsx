import React from "react";
import { motion } from "framer-motion";

// Real social media SVG icons
const SocialIcon = ({ href, label, children }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={label}
    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-gradient-to-br hover:from-[#E91E63] hover:to-[#9C27B0] hover:border-transparent transition-all duration-300 cursor-pointer flex items-center justify-center group"
  >
    {children}
  </a>
);

export const Footer = () => {
  return (
    <footer className="bg-[#1A0A10] pt-32 pb-8 rounded-t-[3rem] -mt-10 relative z-10 flex flex-col items-center overflow-hidden">
      
      {/* Subtle background gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E91E63]/[0.06] rounded-full blur-[120px] pointer-events-none" />
      
      {/* Massive Headline */}
      <div className="container mx-auto px-6 text-center max-w-5xl mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] flex flex-wrap justify-center items-center gap-x-4 gap-y-2 font-heading"
        >
          <span className="bg-gradient-to-r from-[#E91E63] to-[#9C27B0] bg-clip-text text-transparent">Download</span>
          <img src="/logo.png" alt="Woosh Queens" className="h-[1.3em] object-contain" />
          <span className="w-full mt-2 bg-gradient-to-r from-[#E91E63] via-[#9C27B0] to-[#E91E63] bg-clip-text text-transparent">to get Started</span>
        </motion.h2>
      </div>
      
      {/* App Store Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-5 mb-6 relative z-10"
      >
        <button onClick={() => window.location.href = "https://play.google.com/store/apps/details?id=com.woosh.in"} className="bg-white hover:bg-[#FFF0F5] text-[#2D2D2D] px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_25px_rgba(233,30,99,0.15)]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
          </svg>
          <div className="text-left">
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#757575] leading-none mb-1">Download on the</div>
            <div className="text-xl font-bold leading-none tracking-tight">Play Store</div>
          </div>
        </button>
        <button className="bg-white hover:bg-[#FFF0F5] text-[#2D2D2D] px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_25px_rgba(233,30,99,0.15)]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.79 3.59-.76 1.56.04 2.87.65 3.66 1.76-3.15 1.76-2.58 5.76.4 7.02-.73 1.83-1.63 3.32-2.73 4.15zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
          <div className="text-left">
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#757575] leading-none mb-1">Download on the</div>
            <div className="text-xl font-bold leading-none tracking-tight">App Store</div>
          </div>
        </button>
      </motion.div>
     
      <p className="text-sm font-medium text-[#E91E63]/40 mb-32 relative z-10">
        Android & iOS • Women & Children Only • Free to download
      </p>

      {/* Gradient divider */}
      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#E91E63]/20 to-transparent mb-8" />
      </div>

      {/* Footer Bottom Bar */}
      <div className="container mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pt-4 pb-4">
          
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href="/" className="flex items-center shrink-0">
              <img 
                src="/logo.png" 
                alt="Woosh Queens - Ride & Earn" 
                className="h-20 object-contain brightness-0 invert"
              />
            </a>
            
            {/* Social Icons — Real SVG icons */}
            <div className="flex items-center gap-2.5">
              {/* Instagram */}
              <SocialIcon href="https://www.instagram.com/woosh_be_safe_be_fearless?stkn=YzNqMDFodzcxdm5j" label="Follow us on Instagram">
                <svg className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </SocialIcon>

              {/* X (Twitter)
              <SocialIcon href="https://twitter.com/wooshqueens" label="Follow us on X (Twitter)">
                <svg className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </SocialIcon>

            
              <SocialIcon href="https://www.youtube.com/@wooshqueens" label="Subscribe on YouTube">
                <svg className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </SocialIcon> */}

              {/* LinkedIn */}
              <SocialIcon href="https://www.linkedin.com/company/wooshride/" label="Connect on LinkedIn">
                <svg className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </SocialIcon>

              {/* Facebook */}
              <SocialIcon href="https://www.facebook.com/share/1Gx26Ghg4r/?mibextid=wwXIfr" label="Like us on Facebook">
                <svg className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </SocialIcon>
            </div>
          </div>
          
          {/* Links */}
          <nav aria-label="Footer navigation">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-medium text-white/30">
               <a href="#" className="hover:text-[#E91E63] transition-colors">Help Center</a>
               <a href="#" className="hover:text-[#E91E63] transition-colors">Contact us</a>
               <a href="#" className="hover:text-[#E91E63] transition-colors">Cookie settings</a>
               <a href="#" className="hover:text-[#E91E63] transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-[#E91E63] transition-colors">Cookie Policy</a>
               <a href="#" className="hover:text-[#E91E63] transition-colors">Terms of Use</a>
              
               <span className="text-white/15 ml-4">&copy; {new Date().getFullYear()} Woosh Queens. All rights reserved.</span>
            </div>
          </nav>

        </div>
      </div>
    </footer>
  );
};
