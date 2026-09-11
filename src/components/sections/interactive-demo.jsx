import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "../ui/card";
import { cn } from "../../lib/utils";
import { Search, Zap, CheckCircle2 } from "lucide-react";

const steps = [
  {
    id: "connect",
    title: "Connect Account",
    description: "Link your bank securely. We use Plaid to read your transactions safely without storing credentials.",
    icon: <Search className="w-5 h-5" />,
  },
  {
    id: "scan",
    title: "Auto-scan",
    description: "Our AI scans your history and identifies every recurring payment, even the hidden ones.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: "manage",
    title: "One-click Cancel",
    description: "Cancel unwanted subscriptions directly from our app. No more calling customer support.",
    icon: <CheckCircle2 className="w-5 h-5" />,
  },
];

export const InteractiveDemo = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-black">
              How it <span className="text-[#ff3300]">works</span>
            </h2>
            <p className="text-lg text-neutral-600 mb-10">
              Set up takes less than 2 minutes. We do the heavy lifting so you can instantly see where your money goes.
            </p>

            <div className="space-y-4">
              {steps.map((step, idx) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={cn(
                    "w-full text-left p-6 rounded-2xl transition-all duration-300 border flex gap-4 items-start",
                    activeStep === idx 
                      ? "bg-neutral-50 border-[#ff3300]/20 shadow-sm" 
                      : "bg-transparent border-transparent hover:bg-neutral-50"
                  )}
                >
                  <div className={cn(
                    "mt-1 p-2 rounded-lg flex-shrink-0 transition-colors",
                    activeStep === idx ? "bg-[#ff3300]/10 text-[#ff3300]" : "bg-black/5 text-neutral-500"
                  )}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className={cn(
                      "font-semibold mb-1 transition-colors",
                      activeStep === idx ? "text-black" : "text-neutral-500"
                    )}>
                      {step.title}
                    </h3>
                    <p className={cn(
                      "text-sm transition-colors",
                      activeStep === idx ? "text-neutral-600" : "text-neutral-400"
                    )}>
                      {step.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="relative h-[400px] w-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ff3300]/10 to-[#ff3300]/5 rounded-full blur-3xl opacity-50" />
            <Card className="w-full max-w-md relative z-10 aspect-square flex items-center justify-center border-black/5 bg-white/80 backdrop-blur-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  {/* Mock Visuals for Demo */}
                  {activeStep === 0 && (
                    <div className="space-y-4 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full border-2 border-dashed border-neutral-300 flex items-center justify-center bg-neutral-50">
                        <Search className="w-6 h-6 text-neutral-400" />
                      </div>
                      <div className="h-2 w-32 bg-neutral-200 rounded-full" />
                      <div className="h-2 w-24 bg-neutral-200 rounded-full" />
                    </div>
                  )}
                  {activeStep === 1 && (
                    <div className="space-y-3 flex flex-col items-center w-64">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-3 w-full p-3 rounded-lg bg-neutral-50 border border-black/5">
                          <div className="w-8 h-8 rounded-full bg-[#ff3300]/10" />
                          <div className="flex-1 space-y-2">
                            <div className="h-2 w-full bg-neutral-200 rounded-full" />
                            <div className="h-2 w-1/2 bg-neutral-100 rounded-full" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {activeStep === 2 && (
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                      </div>
                      <div className="text-emerald-600 font-medium">Subscription Cancelled</div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
