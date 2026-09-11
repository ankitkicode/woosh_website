import React from "react";
import { motion } from "framer-motion";

const logos = [
  { name: "Stripe", url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
  { name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Spotify", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
  { name: "Adobe", url: "https://upload.wikimedia.org/wikipedia/commons/4/42/Adobe_Corporate_logo.svg" },
  { name: "Slack", url: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" },
  { name: "Linear", url: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Linear_logo.svg" }, // Fallback text used mostly
];

export const LogoMarquee = () => {
  return (
    <section className="py-10 border-y border-black/5 bg-white/50">
      <div className="container mx-auto px-6 text-center mb-8">
        <p className="text-sm font-medium text-neutral-500 uppercase tracking-widest">
          Trusted by
        </p>
      </div>
      <div className="relative flex overflow-hidden group">
        <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#f4f3ef] to-transparent"></div>
        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#f4f3ef] to-transparent"></div>
        
        <div className="flex w-fit animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex items-center justify-around min-w-full gap-16 px-8">
              {logos.map((logo, idx) => (
                <div key={`${index}-${idx}`} className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xl font-bold text-black/80 grayscale hover:grayscale-0 transition-all">{logo.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
