import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "../../lib/utils";

const faqs = [
  {
    question: "Who can book a ride on Woosh?",
    answer: "Woosh is an exclusive platform for women and children. Adult male passengers are strictly not allowed to ensure maximum safety."
  },
  {
    question: "How are the riders verified?",
    answer: "Every rider goes through a strict verification process including Aadhaar, PAN, Driving Licence, Police Verification, and real-time Face/Selfie verification before they can accept rides."
  },
  {
    question: "What is Child Mode?",
    answer: "Parents can add a child profile for kids below 14 years. Rides booked for children are assigned only to top-rated riders and tracked in real-time."
  },
  {
    question: "What safety features are included?",
    answer: "Every ride includes live GPS tracking, OTP verification to start, an SOS button connected to emergency contacts, and AI-driven route deviation alerts."
  },
  {
    question: "Is there any insurance provided?",
    answer: "Yes, every ride automatically includes Personal Accident Insurance and Rider/Passenger Insurance for added peace of mind."
  }
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16">
          
          <div className="md:pr-12">
            <span className="text-gradient font-bold text-xs tracking-[0.2em] uppercase mb-6 block">FAQ</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#2D2D2D] leading-[1.1] font-heading">
              Good <br />questions.
            </h2>
            
            {/* 3D floating question mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="hidden md:flex mt-12"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#9C27B0] to-[#E91E63] flex items-center justify-center shadow-[0_8px_30px_rgba(156,39,176,0.3)] animate-float rotate-[-8deg]">
                <span className="text-white text-4xl font-bold font-heading">?</span>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col border-t border-[#E91E63]/10">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="border-b border-[#E91E63]/10"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-8 text-left group transition-all"
                >
                  <span className={cn(
                    "font-bold text-xl md:text-2xl tracking-tight transition-all duration-300",
                    openIndex === idx ? "text-gradient" : "text-[#2D2D2D] group-hover:text-[#E91E63]"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-4",
                    openIndex === idx 
                      ? "bg-gradient-to-br from-[#E91E63] to-[#9C27B0] shadow-[0_4px_12px_rgba(233,30,99,0.3)]" 
                      : "bg-[#FFF0F5]"
                  )}>
                    <Plus 
                      className={cn(
                        "w-4 h-4 transition-all duration-300",
                        openIndex === idx ? "transform rotate-45 text-white" : "text-[#E91E63]"
                      )} 
                      strokeWidth={2.5}
                    />
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 text-[#757575] text-lg leading-relaxed pr-12">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
