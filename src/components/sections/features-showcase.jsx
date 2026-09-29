import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Baby, MapPin, BellRing, Key, UserCheck, IndianRupee, ShieldAlert, HeartHandshake } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, color, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, type: "spring", stiffness: 100 }}
    className={`bg-white rounded-2xl md:rounded-[1.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-50 flex flex-col items-center justify-center p-4 md:p-6 w-32 md:w-40 hover:-translate-y-2 transition-transform duration-300 cursor-pointer ${className}`}
  >
    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3`} style={{ backgroundColor: `${color}15` }}>
      <Icon className="w-6 h-6 md:w-8 md:h-8" style={{ color }} />
    </div>
    <h3 className="text-[#2D2D2D] font-bold text-xs md:text-sm text-center leading-tight">
      {title}
    </h3>
  </motion.div>
);

export const FeaturesShowcase = () => {
  return (
    <section className="bg-[#FFF0F5]/40 py-20 md:py-32 overflow-hidden relative">

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header (Zomato Style) */}
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[3.5rem] font-bold tracking-tight text-[#E91E63] leading-[1.1] mb-6 font-heading"
          >
            What's waiting for you <br className="hidden md:block" /> on the app?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-[#757575] font-medium leading-relaxed"
          >
            Our app is packed with features that enable you to experience safe and fearless travel like never before
          </motion.p>
        </div>

        {/* Scattered Interactive Layout */}
        <div className="relative w-full max-w-[1000px] mx-auto flex flex-col md:flex-row items-center justify-center min-h-[600px] md:min-h-[750px]">
          
          {/* Mobile Grid (hidden on desktop) */}
          <div className="flex md:hidden flex-wrap justify-center gap-4 mb-10 w-full z-20">
            <FeatureCard icon={ShieldCheck} title="Verified Riders" color="#4CAF50" delay={0.1} />
            <FeatureCard icon={Baby} title="Child Mode" color="#9C27B0" delay={0.2} />
            <FeatureCard icon={BellRing} title="SOS Alert" color="#F44336" delay={0.3} />
            <FeatureCard icon={MapPin} title="Live Tracking" color="#2196F3" delay={0.4} />
          </div>

          {/* Desktop Floating Cards - LEFT */}
          <div className="hidden md:block absolute top-[10%] left-[5%] z-20">
            <FeatureCard icon={ShieldCheck} title="Verified Riders" color="#4CAF50" delay={0.2} />
          </div>
          <div className="hidden md:block absolute top-[40%] left-[-2%] z-20">
            <FeatureCard icon={Baby} title="Child Mode" color="#9C27B0" delay={0.4} />
          </div>
          <div className="hidden md:block absolute bottom-[15%] left-[8%] z-20">
            <FeatureCard icon={MapPin} title="Live Tracking" color="#2196F3" delay={0.6} />
          </div>

          {/* CENTER PHONE */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
            className="relative w-[280px] md:w-[340px] h-[580px] md:h-[700px] bg-black rounded-[3rem] md:rounded-[3.5rem] border-[8px] border-black shadow-[0_30px_60px_rgba(0,0,0,0.2)] shrink-0 z-10 flex flex-col overflow-hidden mx-auto"
          >
            {/* Phone Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-b-2xl z-20" />
            
            {/* Phone Screen Background */}
            <div className="flex-1 w-full h-full bg-[#FFFBFD] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FFF0F5] to-white" />
              
              {/* Fake Map / Grid Pattern */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#E91E63 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              
              {/* App Content Mockup */}
              <div className="relative z-10 w-full h-full flex flex-col pt-16 px-5 pb-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Current Location</span>
                    <span className="text-sm font-bold text-[#2D2D2D] flex items-center gap-1">
                      Koramangala, BLR <svg className="w-3 h-3 text-[#E91E63]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center shadow-sm">
                    <img src="/logo.png" className="w-6 object-contain" />
                  </div>
                </div>

                {/* Ride Selection Mock */}
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-4 border border-gray-50">
                  <div className="flex gap-4 items-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center">
                      <span className="text-2xl">🛵</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-[#2D2D2D]">Woosh Ride</div>
                      <div className="text-xs text-gray-500">2 mins away</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-[#2D2D2D]">₹ 45</div>
                      <div className="text-[10px] text-green-500 font-bold">Fair price</div>
                    </div>
                  </div>
                  <div className="h-[1px] w-full bg-gray-100 mb-4" />
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                      <span className="text-2xl">👧</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-[#2D2D2D]">Child Mode</div>
                      <div className="text-xs text-gray-500">With live tracking</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <button className="w-full bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white font-bold py-4 rounded-2xl shadow-[0_8px_20px_rgba(233,30,99,0.3)] hover:scale-[1.02] transition-transform">
                    Book Safe Ride
                  </button>
                </div>
              </div>
            </div>

            {/* Zomato Style Popping Feature (Center Overlapping Phone) */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
            >
              <FeatureCard icon={BellRing} title="SOS Emergency" color="#F44336" className="shadow-2xl shadow-red-500/20 !p-5 md:!p-7 !w-36 md:!w-48" />
            </motion.div>
          </motion.div>

          {/* Desktop Floating Cards - RIGHT */}
          <div className="hidden md:block absolute top-[15%] right-[5%] z-20">
            <FeatureCard icon={Key} title="OTP Protected" color="#FF9800" delay={0.3} />
          </div>
          <div className="hidden md:block absolute top-[50%] right-[-3%] z-20">
            <FeatureCard icon={IndianRupee} title="Fair Pricing" color="#00BCD4" delay={0.5} />
          </div>
          <div className="hidden md:block absolute bottom-[12%] right-[10%] z-20">
            <FeatureCard icon={HeartHandshake} title="Ride Insurance" color="#E91E63" delay={0.7} />
          </div>

          {/* Mobile Grid Bottom (hidden on desktop) */}
          <div className="flex md:hidden flex-wrap justify-center gap-4 mt-10 w-full z-20">
            <FeatureCard icon={Key} title="OTP Protected" color="#FF9800" delay={0.5} />
            <FeatureCard icon={IndianRupee} title="Fair Pricing" color="#00BCD4" delay={0.6} />
            <FeatureCard icon={HeartHandshake} title="Ride Insurance" color="#E91E63" delay={0.7} />
          </div>

        </div>
      </div>
    </section>
  );
};
