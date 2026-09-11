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
    <section id="faq" className="py-32 bg-[#f4f3ef]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16">
          
          <div className="md:pr-12">
            <span className="text-blue-600 font-bold text-xs tracking-[0.2em] uppercase mb-6 block">FAQ</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-black leading-[1.1]">
              Good <br />questions.
            </h2>
          </div>

          <div className="flex flex-col border-t border-black/10">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border-b border-black/10"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-8 text-left group transition-all"
                >
                  <span className={cn(
                    "font-bold text-xl md:text-2xl tracking-tight transition-colors duration-300",
                    openIndex === idx ? "text-[#ff3300]" : "text-black group-hover:text-black/70"
                  )}>
                    {faq.question}
                  </span>
                  <Plus 
                    className={cn(
                      "w-6 h-6 text-[#ff3300] transition-transform duration-300 flex-shrink-0 ml-4",
                      openIndex === idx ? "transform rotate-45" : ""
                    )} 
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 text-neutral-600 text-lg leading-relaxed pr-12">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
