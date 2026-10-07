import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
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
    <section id="faq" className="py-20 md:py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-[2.5rem] font-medium text-[#1C1C1C] mb-10 text-center tracking-tight">
          Explore options near me
        </h2>
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-gray-50/50"
              >
                <span className={cn(
                  "font-medium text-lg md:text-[1.15rem] transition-colors duration-200",
                  openIndex === idx ? "text-[#E91E63]" : "text-[#1C1C1C]"
                )}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4",
                    openIndex === idx ? "transform rotate-180 text-[#E91E63]" : ""
                  )} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-2 text-gray-500 text-[1.1rem] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
