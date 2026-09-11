import React from "react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { useScroll } from "../../hooks/useScroll";

export const Navbar = () => {
  const scrolled = useScroll(20);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <nav
        className="flex w-full max-w-5xl items-center justify-between rounded-full bg-white px-6 py-3 shadow-sm border border-black/5"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ff3300] text-white font-bold">
            W
          </div>
          <span className="text-xl font-bold tracking-tight text-black">Woosh</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Overview", "Features", "Safety", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-neutral-500 hover:text-black transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="primary" className="text-sm rounded-full px-6 font-semibold">
            Get the app
          </Button>
        </div>
      </nav>
    </header>
  );
};
