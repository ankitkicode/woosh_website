import React, { useRef, useState } from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

export const GlowingCard = ({ children, className }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn(
        "relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,51,0,0.05), transparent 40%)`,
        }}
      />
      <div className="relative z-10 flex h-full flex-col p-6">
        {children}
      </div>
    </div>
  );
};
