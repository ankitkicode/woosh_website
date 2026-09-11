import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[#161616] pt-32 pb-8 rounded-t-[3rem] -mt-10 relative z-10 flex flex-col items-center">
      
      {/* Massive Headline */}
      <div className="container mx-auto px-6 text-center max-w-5xl mb-16">
        <h2 className="text-5xl md:text-8xl lg:text-[4.5rem] font-bold tracking-tight text-[#ff3300] leading-[1.1] flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
          <span>Download</span>
          <span className="bg-[#ff3300] w-[0.8em] h-[0.8em] flex items-center justify-center rounded-[0.2em] shadow-[0_0_40px_rgba(255,51,0,0.5)] bg-gradient-to-br from-white/40 to-transparent p-1">
             <span className="text-white text-[0.7em] leading-none">W</span>
          </span>
          <span>Woosh</span>
          <span className="w-full mt-2">to get Started</span>
        </h2>
      </div>
      
      {/* App Store Button */}
      <div className="flex gap-5">
 <button className="bg-white hover:bg-neutral-200 text-black px-8 py-4 rounded-full flex items-center gap-3 transition-transform hover:scale-105 mb-6">
<svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.79 3.59-.76 1.56.04 2.87.65 3.66 1.76-3.15 1.76-2.58 5.76.4 7.02-.73 1.83-1.63 3.32-2.73 4.15zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
        <div className="text-left">
          <div className="text-[10px] font-bold uppercase tracking-wider text-black/60 leading-none mb-1">Download on the</div>
          <div className="text-xl font-bold leading-none tracking-tight">Play Store</div>
        </div>
      </button>
          <button className="bg-white hover:bg-neutral-200 text-black px-8 py-4 rounded-full flex items-center gap-3 transition-transform hover:scale-105 mb-6">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.79 3.59-.76 1.56.04 2.87.65 3.66 1.76-3.15 1.76-2.58 5.76.4 7.02-.73 1.83-1.63 3.32-2.73 4.15zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
        <div className="text-left">
          <div className="text-[10px] font-bold uppercase tracking-wider text-black/60 leading-none mb-1">Download on the</div>
          <div className="text-xl font-bold leading-none tracking-tight">App Store</div>
        </div>
      </button>
      </div>
     
      
      <p className="text-sm font-medium text-neutral-500 mb-32">
        Android & iOS • Women & Children Only • Free to download
      </p>

      {/* Footer Bottom Bar */}
      <div className="container mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 border-t border-white/10 pt-8 pb-4">
          
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-[#ff3300] text-white font-bold text-xs">
                W
              </div>
              <span className="text-lg font-bold tracking-tight text-white">Woosh</span>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 text-neutral-500">
              {['Instagram', 'Twitter', 'TikTok', 'YouTube'].map((social, i) => (
                <div key={i} className="w-5 h-5 bg-neutral-500/20 rounded-full hover:bg-white hover:text-black transition-colors cursor-pointer" />
              ))}
            </div>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-medium text-neutral-400">
             <a href="#" className="hover:text-white transition-colors">Help Center</a>
             <a href="#" className="hover:text-white transition-colors">Contact us</a>
             <a href="#" className="hover:text-white transition-colors">Cookie settings</a>
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            
             <span className="text-neutral-600 ml-4">&copy; {new Date().getFullYear()} Woosh. All rights reserved.</span>
          </div>

        </div>
      </div>
    </footer>
  );
};
