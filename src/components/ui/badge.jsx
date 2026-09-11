import React from "react"
import { cn } from "../../lib/utils"

function Badge({ className, variant = "default", ...props }) {
  const variants = {
    default: "bg-white/10 text-white hover:bg-white/20 border border-white/10",
    primary: "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",
    outline: "text-white border border-white/20",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
