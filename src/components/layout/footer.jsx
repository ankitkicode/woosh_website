import React from "react";

// Social media SVG icons
const SocialIcon = ({ href, label, children }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={label}
    className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors text-white group"
  >
    {children}
  </a>
);

export const Footer = () => {
  return (
    <footer className="bg-black pt-16 pb-6 flex flex-col items-center">
      
      {/* Top Logo Section */}
      <div className="flex flex-col items-center mb-16 px-6">
        {/* Using the logo image they have */}
        <img 
          src="/logo.png" 
          alt="Woosh" 
          className="h-32 w-64  object-contain"
        />
        {/* <p className="text-white/60 text-sm md:text-base tracking-wide font-medium">Be Safe, Be Fearless</p> */}
      </div>

      {/* 4 Columns */}
      <div className="container mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 w-full max-w-7mx">
        
        {/* Column 1 */}
        <div className="flex flex-col">
          <h3 className="text-white font-bold text-lg mb-6">Why Woosh?</h3>
          <ul className="flex flex-col gap-4 text-white/60 text-[15px] font-medium">
            <li><a href="#" className="hover:text-white transition-colors">How Woosh Works</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Safety Features</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Fare & Booking</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Child Mode</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Insurance & Support</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col">
          <h3 className="text-white font-bold text-lg mb-6">Woosh Captains</h3>
          <ul className="flex flex-col gap-4 text-white/60 text-[15px] font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Register as a Captain</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Benefits</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Captain Guidelines</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Captain Support</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col">
          <h3 className="text-white font-bold text-lg mb-6">Company</h3>
          <ul className="flex flex-col gap-4 text-white/60 text-[15px] font-medium">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Help & Support</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            {/* <li><a href="#" className="hover:text-white transition-colors">Report a Fraud</a></li> */}
          </ul>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col">
          <h3 className="text-white font-bold text-lg mb-6">Follow Us</h3>
          
          <div className="flex items-center gap-3 mb-8">
            {/* LinkedIn */}
            <SocialIcon href="https://www.linkedin.com/company/wooshride/" label="LinkedIn">
              <svg className="w-[1.125rem] h-[1.125rem] fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </SocialIcon>
            {/* Instagram */}
            <SocialIcon href="https://www.instagram.com/woosh_be_safe_be_fearless" label="Instagram">
              <svg className="w-[1.125rem] h-[1.125rem] fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </SocialIcon>
            {/* Facebook */}
            <SocialIcon href="https://www.facebook.com/share/1Gx26Ghg4r" label="Facebook">
              <svg className="w-[1.125rem] h-[1.125rem] fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </SocialIcon>
            {/* X (Twitter) */}
            <SocialIcon href="https://twitter.com/wooshqueens" label="X (Twitter)">
              <svg className="w-[1.125rem] h-[1.125rem] fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </SocialIcon>
          </div>

          <div className="flex flex-col gap-4">
            {/* App Store Button */}
            <button onClick={() => window.location.href = "https://play.google.com/store/apps/details?id=com.woosh.ride"} className="bg-black border border-white/20 text-white rounded-xl flex items-center gap-3.5 px-4 py-2 hover:bg-white/5 transition-colors w-[160px]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                 <path d="M15.4 10.6c0-1.6 1.3-2.4 1.4-2.5-.7-1.1-1.9-1.3-2.3-1.3-1-.1-2 .6-2.5.6-.5 0-1.3-.6-2.1-.6-1.3 0-2.5.8-3.1 2-1.3 2.3-.3 5.7 1 7.5.6.9 1.3 1.9 2.3 1.8.9-.1 1.3-.7 2.4-.7s1.4.7 2.4.7c1 0 1.6-1 2.2-1.8.7-1 1-1.9 1-2-.1 0-2.6-1-2.6-3.7zM14.2 4.4c.5-.6.8-1.5.7-2.4-.8.1-1.7.5-2.2 1.1-.4.5-.8 1.4-.7 2.3.8 0 1.7-.5 2.2-1z" />
              </svg>
              <div className="text-left">
                 <div className="text-[9px] leading-tight text-white/90">Download on the</div>
                 <div className="text-[15px] font-semibold leading-tight">App Store</div>
              </div>
            </button>

            {/* Google Play Button */}
            <button onClick={() => window.location.href = "https://play.google.com/store/apps/details?id=com.woosh.in"} className="bg-black border border-white/20 text-white rounded-xl flex items-center gap-3.5 px-4 py-2 hover:bg-white/5 transition-colors w-[160px]">
              <svg viewBox="0 0 24 24" className="w-8 h-8">
                 <path fill="#00c0ff" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5Z"/>
                 <path fill="#ff3d00" d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z"/>
                 <path fill="#ffc400" d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z"/>
                 <path fill="#00e676" d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                 <div className="text-[9px] leading-tight text-white/90">GET IT ON</div>
                 <div className="text-[15px] font-semibold leading-tight">Google Play</div>
              </div>
            </button>
          </div>
        </div>

      </div>

      {/* Horizontal Line & Bottom Bar */}
      <div className="w-full max-w-[1200px] mx-auto px-8">
        <div className="h-[1px] w-full bg-white/20 mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs md:text-[13px] text-white/50 font-medium">
          <p>© {new Date().getFullYear()} Woosh. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Be Safe, Be Fearless</p>
        </div>
      </div>

    </footer>
  );
};
