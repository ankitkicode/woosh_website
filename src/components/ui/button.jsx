import React from "react"
import { cn } from "../../lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", children, ...props }, ref) => {
  const variants = {
    default: "bg-black text-white hover:bg-neutral-800",
    primary: "bg-[#ff3300] text-white hover:bg-[#e62e00] shadow-md",
    secondary: "bg-white text-black hover:bg-neutral-100 border border-black/10",
    outline: "border border-black/10 bg-transparent text-black hover:bg-black/5",
    ghost: "bg-transparent text-neutral-600 hover:text-black hover:bg-black/5",
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
        "inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:pointer-events-none disabled:opacity-50",
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
