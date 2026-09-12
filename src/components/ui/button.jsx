import React from "react"
import { cn } from "../../lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", children, ...props }, ref) => {
  const variants = {
    default: "bg-[#2D2D2D] text-white hover:bg-[#1a1a1a]",
    primary: "bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white hover:shadow-[0_8px_30px_rgba(233,30,99,0.35)] hover:scale-[1.02]",
    secondary: "bg-white text-[#E91E63] hover:bg-[#FFF0F5] border border-[#E91E63]/20",
    outline: "border border-[#E91E63]/30 bg-transparent text-[#2D2D2D] hover:bg-[#FFF0F5] hover:border-[#E91E63]/50",
    ghost: "bg-transparent text-[#757575] hover:text-[#E91E63] hover:bg-[#FFF0F5]",
  }

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-12 rounded-full px-8 text-lg",
    icon: "h-10 w-10",
  }

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E91E63]/50 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
})
Button.displayName = "Button"

export { Button }
