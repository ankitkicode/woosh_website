import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { useScroll } from "../../hooks/useScroll";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const scrolled = useScroll(20);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = ["Overview", "Features", "Safety", "Pricing"];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-full px-6 py-3 transition-all duration-500",
          scrolled 
            ? "bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(233,30,99,0.1)] border border-pink-200/40" 
            : "bg-white/60 backdrop-blur-lg border border-pink-100/30"
        )}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-1 shrink-0">
          <img 
            src="/logo.png" 
            alt="Woosh Queens - Ride & Earn" 
            className={cn(
              "object-contain transition-all duration-300",
              scrolled ? "h-10" : "h-12"
            )}
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-sm font-medium text-[#757575] hover:text-[#E91E63] transition-colors duration-300 group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E91E63] to-[#9C27B0] rounded-full transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button variant="primary" className="text-sm rounded-full px-6 py-2.5 font-semibold hidden md:flex">
            Get the app
          </Button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full hover:bg-[#FFF0F5] transition-colors"
            aria-label="Toggle navigation menu"
          >
            <motion.span
              animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }}
              className="w-5 h-0.5 bg-[#2D2D2D] rounded-full origin-center"
            />
            <motion.span
              animate={{ opacity: mobileOpen ? 0 : 1 }}
              className="w-5 h-0.5 bg-[#2D2D2D] rounded-full"
            />
            <motion.span
              animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }}
              className="w-5 h-0.5 bg-[#2D2D2D] rounded-full origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-4 right-4 mt-2 bg-white/90 backdrop-blur-xl rounded-3xl border border-pink-200/40 shadow-[0_8px_40px_rgba(233,30,99,0.12)] p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-[#2D2D2D] hover:text-[#E91E63] transition-colors py-2 border-b border-pink-100/50 last:border-b-0"
                >
                  {item}
                </motion.a>
              ))}
              <Button variant="primary" className="mt-2 w-full rounded-full py-3 font-semibold">
                Get the app
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
