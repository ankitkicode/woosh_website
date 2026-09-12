import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

// 3D Icon Component
const Icon3D = ({ gradient, children, className = "" }) => (
  <div className={`icon-3d rounded-2xl p-4 ${className}`} style={{ background: `linear-gradient(135deg, ${gradient})` }}>
    {children}
  </div>
);

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const FeaturesShowcase = () => {
  return (
    <div className="w-full flex flex-col gap-32 pb-24">
      
      {/* 4.1 Overview Section */}
      <section id="overview" className="bg-surface-gradient py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gradient font-bold text-xs tracking-[0.2em] uppercase mb-4 block"
            >
              Objectives
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-[#2D2D2D] max-w-2xl leading-tight font-heading"
            >
              Empowering women, <br /><span className="text-gradient">ensuring safety.</span>
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2.5rem] overflow-hidden aspect-[4/3] md:aspect-square relative shadow-[0_12px_40px_rgba(233,30,99,0.1)]"
            >
              <img 
                src="/images/women_empowerment.jpg" 
                alt="Empowered Woosh women riders" 
                className="w-full h-full object-cover"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#E91E63]/10 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:pl-10"
            >
              <p className="text-lg text-[#757575] mb-8 leading-relaxed">
                Woosh aims to provide the safest and most trusted two-wheeler transportation service in India. By combining verified women riders and strict operational policies, we empower women with earning opportunities.
              </p>

              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-5"
              >
                {[
                  "100% verified women riders",
                  "Safe for children below 14",
                  "Reduces traditional safety concerns"
                ].map((text, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#E91E63] to-[#9C27B0] flex items-center justify-center flex-shrink-0 shadow-[0_2px_8px_rgba(233,30,99,0.3)]">
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-[#2D2D2D] text-sm font-medium">{text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4.2 Breakdown Section */}
      <section id="features" className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gradient font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Eligibility</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#2D2D2D] leading-[1.1] mb-6 font-heading">
              Women. <br />
              Children. <br />
              <span className="text-gradient">Only.</span>
            </h2>
            <p className="text-lg text-[#757575] max-w-md">
              An exclusive platform built for the safety of women and children. Adult male passengers are strictly prohibited to ensure a completely secure environment.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] overflow-hidden aspect-[4/3] relative shadow-[0_12px_40px_rgba(233,30,99,0.1)]"
          >
            <img 
              src="/images/hero_illustration.jpg" 
              alt="Woosh rider illustration" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 4.3 Center Feature (Safety) */}
      <section id="safety" className="container mx-auto px-6 max-w-4xl text-center">
        <span className="text-gradient font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Safety First</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#2D2D2D] mb-12 font-heading">
          Bank-level safety features <br /><span className="text-gradient">at your fingertips.</span>
        </h2>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] bg-gradient-to-br from-[#E91E63] to-[#9C27B0] aspect-[4/3] md:aspect-[21/9] overflow-hidden relative flex justify-center items-end shadow-[0_20px_60px_rgba(233,30,99,0.25)]"
        >
          {/* 3D Shield Background */}
          <img 
            src="/images/safety_shield.jpg" 
            alt="Safety Shield" 
            className="w-full h-full object-cover mix-blend-overlay opacity-30 absolute inset-0"
          />
          {/* Mockup card popping up from bottom */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="w-[80%] max-w-[400px] h-[80%] bg-white rounded-t-3xl shadow-2xl relative z-10 p-6 flex flex-col gap-4"
          >
             <div className="h-12 w-12 bg-gradient-to-br from-[#E91E63]/10 to-[#9C27B0]/10 text-[#E91E63] rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
             </div>
             <div className="h-4 bg-gradient-to-r from-[#FFF0F5] to-[#F5F5F5] rounded w-3/4 mx-auto" />
             <div className="h-3 bg-[#F5F5F5] rounded w-1/2 mx-auto" />
             <button className="mt-auto bg-gradient-to-r from-[#E91E63] to-[#C2185B] text-white font-bold py-3 rounded-xl w-full shadow-[0_4px_15px_rgba(233,30,99,0.3)] hover:shadow-[0_6px_20px_rgba(233,30,99,0.4)] transition-shadow">SOS Emergency</button>
          </motion.div>
        </motion.div>
      </section>

      {/* 4.4 Child Mode */}
      <section className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gradient font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Child Mode</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#2D2D2D] mb-6 font-heading">
              Track your child's <br /><span className="text-gradient">ride in real-time.</span>
            </h2>
            <p className="text-lg text-[#757575] mb-8 max-w-md">
              Parents can easily add a child profile, book rides on their behalf, and monitor the journey with live GPS tracking.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-8"
            >
              <div className="flex flex-col gap-2">
                <div className="font-bold text-2xl text-gradient font-heading">100%</div>
                <div className="text-xs text-[#757575] uppercase tracking-wider font-medium">Live GPS</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-bold text-2xl text-gradient font-heading">Top 5%</div>
                <div className="text-xs text-[#757575] uppercase tracking-wider font-medium">Rated Riders</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] overflow-hidden relative shadow-[0_12px_40px_rgba(233,30,99,0.1)]"
          >
            <img 
              src="/images/child_safety.jpg" 
              alt="Mother tracking child's ride on Woosh app" 
              className="w-full h-full object-cover"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#E91E63]/5 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* 4.5 3D Feature Icons Grid */}
      <section className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-gradient font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Key Features</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#2D2D2D] font-heading">
            Built with <span className="text-gradient">safety</span> in mind.
          </h2>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              gradient: "#E91E63, #C2185B",
              icon: (
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              ),
              title: "OTP Verification",
              desc: "Every ride starts with a secure OTP exchange between rider and passenger."
            },
            {
              gradient: "#9C27B0, #7B1FA2",
              icon: (
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              ),
              title: "Live GPS Tracking",
              desc: "Real-time location sharing with family and emergency contacts."
            },
            {
              gradient: "#E91E63, #9C27B0",
              icon: (
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              ),
              title: "SOS Emergency",
              desc: "One-tap SOS button connected to police, emergency contacts & Woosh support."
            },
            {
              gradient: "#9C27B0, #BA68C8",
              icon: (
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
              ),
              title: "Verified Riders",
              desc: "Aadhaar, PAN, DL, police verification and real-time face verification."
            },
            {
              gradient: "#C2185B, #E91E63",
              icon: (
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              ),
              title: "Fair Pricing",
              desc: "Transparent fare breakdown with no surge pricing or hidden charges."
            },
            {
              gradient: "#7B1FA2, #E91E63",
              icon: (
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              ),
              title: "Ride Insurance",
              desc: "Every ride includes personal accident and passenger insurance coverage."
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group bg-white rounded-3xl p-8 border border-pink-100/50 hover:border-[#E91E63]/20 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(233,30,99,0.1)] hover:-translate-y-1"
            >
              <Icon3D gradient={feature.gradient} className="w-14 h-14 mb-6">
                {feature.icon}
              </Icon3D>
              <h3 className="text-lg font-bold text-[#2D2D2D] mb-2 font-heading">{feature.title}</h3>
              <p className="text-sm text-[#757575] leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4.6 Text Highlight */}
      <section className="container mx-auto px-6 max-w-3xl text-center py-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-3xl font-medium leading-relaxed text-[#2D2D2D]"
        >
          You know roughly what a safe ride should feel like. <span className="text-gradient font-bold">Roughly is the problem.</span> Woosh is designed to guarantee 100% security by combining technology, verified women riders, and <span className="text-gradient font-bold">strict safety standards</span> you can rely on.
        </motion.p>
      </section>
    </div>
  );
};
