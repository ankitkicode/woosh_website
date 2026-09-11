import React from "react";
import { cn } from "../../lib/utils";

export const Container = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("container mx-auto px-6 max-w-7xl", className)}
      {...props}
    >
      {children}
    </div>
  );
});

Container.displayName = "Container";
