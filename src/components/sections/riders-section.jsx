import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BenefitCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col items-start gap-3">
    <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-[#E91E63]">
      {icon}
    </div>
    <div>
      <h4 className="text-[#1A1A2E] font-bold text-md mb-1">{title}</h4>
      <p className="text-gray-500 text-md leading-relaxed">{description}</p>
    </div>
  </div>
);

const GuidelineColumn = ({ number, title, points }) => (
  <div className="flex flex-col">
    <div className="mb-4">
      <span className="text-[#E91E63] font-bold text-sm opacity-50 block mb-1">{number}</span>
      <h4 className="text-[#1A1A2E] font-bold text-sm">{title}</h4>
    </div>
    <ul className="space-y-3">
      {points.map((point, i) => (
        <li key={i} className="flex items-start gap-2">
          <svg className="w-4 h-4 text-[#E91E63] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-xs text-gray-600 leading-tight">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const RidersSection = () => {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden border-t border-gray-100" id="riders">
      <div className="container mx-auto px-6 max-w-[1200px]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#E91E63]" />
              <span className="text-[#E91E63] text-sm font-bold uppercase tracking-widest">For Riders</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[2.5rem] leading-[1.1] md:text-5xl font-extrabold text-[#1A1A2E] tracking-tight mb-6"
            >
              Ride with pride. <span className="text-[#E91E63]">Earn on your terms.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-500 font-medium"
            >
              Join India's community of women riders. Choose your own hours, carry only women and children, and build a steady income with full safety backing.
            </motion.p>
          </div>
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={() => document.dispatchEvent(new CustomEvent('openRiderModal'))}
            className="bg-[#E91E63] hover:bg-[#D81B60] text-white px-8 py-3.5 rounded-full font-bold flex items-center justify-center gap-2 transition-colors shrink-0 shadow-md"
          >
            Join as a Woosh Queen
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </motion.button>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20">
          <h3 className="text-[#1A1A2E] font-bold text-xl mb-8">Rider benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BenefitCard 
              icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              title="Flexible hours"
              description="Go online when it suits you, around college, family or another job."
            />
            <BenefitCard 
              icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
              title="Fast, transparent payouts"
              description="See every trip's earnings in the app, paid (daily/weekly) to your bank."
            />
            <BenefitCard 
              icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
              title="Women-only passengers"
              description="You only ever carry women and children under 14, every single trip."
            />
            <BenefitCard 
              icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
              title="Insured on every trip"
              description="Ride insurance covers you from pickup to drop, at no cost to you."
            />
            <BenefitCard 
              icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
              title="Free training"
              description="Safety, road skills and app training before your first ride."
            />
            <BenefitCard 
              icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
              title="24/7 rider support"
              description="SOS for you too, plus a team that backs you on every trip."
            />
          </div>
        </div>

        {/* Guidelines */}
        {/* <div className="mb-20">
          <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
            <h3 className="text-[#1A1A2E] font-bold text-xl">Rider guidelines</h3>
            <span className="text-xs text-gray-400 font-medium hidden sm:block">The standards every Woosh Queen follows.</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <GuidelineColumn 
              number="01"
              title="Who can join"
              points={[
                "Women aged 18+",
                "Valid two-wheeler driving licence",
                "Vehicle RC, Insurance & PUC",
                "Clear background verification"
              ]}
            />
            <GuidelineColumn 
              number="02"
              title="Before every shift"
              points={[
                "Complete your live face scan",
                "Carry two helmets, plus a child helmet",
                "Vehicle clean and roadworthy",
                "Woosh ID (and uniform) on"
              ]}
            />
            <GuidelineColumn 
              number="03"
              title="On every ride"
              points={[
                "Start only after verifying the OTP",
                "Helmets on for rider and passenger",
                "Follow traffic rules and the app route",
                "Extra care and lower speed with children"
              ]}
            />
            <GuidelineColumn 
              number="04"
              title="Code of conduct"
              points={[
                "Be respectful and courteous",
                "Charge only the fare shown in the app",
                "Never ask for personal contact details",
                "Report any incident immediately"
              ]}
            />
          </div>
        </div> */}

        {/* Steps CTA */}
        <div className="bg-[#1A1A2E] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">Start riding in 3 steps</h3>
            <p className="text-gray-400 text-md max-w-sm mx-auto md:mx-0">Joining is free. Most riders are on the road within a few days.</p>
          </div>
          
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center gap-4 text-white">
              <div className="w-6 h-6 rounded-full bg-[#E91E63] flex items-center justify-center text-xs font-bold shrink-0">1</div>
              <p className="text-md">Download the app and choose Ride & Earn</p>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold shrink-0 text-gray-300">2</div>
              <p className="text-md">Upload your licence and documents</p>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold shrink-0 text-gray-300">3</div>
              <p className="text-md">Get verified, trained and go online</p>
            </div>
          </div>
          
          <div className="shrink-0 mt-4 md:mt-0">
            <Link 
            to={"https://play.google.com/store/apps/details?id=com.woosh.in"}
              className="bg-white hover:bg-gray-100 text-[#1A1A2E] px-8 py-3.5 rounded-full font-bold transition-colors"
            >
            Request a Ride
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
