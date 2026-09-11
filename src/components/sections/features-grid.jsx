import React from "react";
import { GlowingCard } from "../ui/glowing-card";
import { CreditCard, Bell, Shield, BarChart3, Clock, Lock } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "One dashboard for all",
    description: "Connect your bank and automatically identify every recurring charge across all your accounts.",
    icon: <CreditCard className="w-6 h-6 text-indigo-400" />,
    className: "md:col-span-2",
  },
  {
    title: "Smart Alerts",
    description: "Get notified before a trial ends or a yearly subscription renews.",
    icon: <Bell className="w-6 h-6 text-emerald-400" />,
    className: "md:col-span-1",
  },
  {
    title: "Bank-level Security",
    description: "Your data is encrypted and secure. We never sell your personal information.",
    icon: <Shield className="w-6 h-6 text-violet-400" />,
    className: "md:col-span-1",
  },
  {
    title: "Usage Analytics",
    description: "See what you actually use and identify wasted spend instantly.",
    icon: <BarChart3 className="w-6 h-6 text-amber-400" />,
    className: "md:col-span-2",
  },
];

export const FeaturesGrid = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-black">
            Everything you need to <span className="text-[#ff3300]">take control</span>
          </h2>
          <p className="text-lg text-neutral-600">
            Powerful features disguised in a simple, intuitive interface. Managing subscriptions has never been easier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={feature.className}
            >
              <GlowingCard>
                <div className="h-12 w-12 rounded-lg bg-black/5 border border-black/10 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">{feature.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </GlowingCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
