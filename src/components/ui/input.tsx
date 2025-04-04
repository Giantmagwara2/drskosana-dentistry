import * as React from "react";
import { cn } from "@/lib/utils";

// Define input variants for flexible customization
const inputVariants = {
  sizes: {
    sm: "h-8 px-2 py-1 text-sm",
    md: "h-9 px-3 py-1 text-base",
    lg: "h-10 px-4 py-2 text-lg",
  },
  colors: {
    primary: "border-primary focus-visible:ring-primary",
    secondary: "border-secondary focus-visible:ring-secondary",
    neutral: "border-neutral focus-visible:ring-neutral",
    accent: "border-accent focus-visible:ring-accent",
  },
  states: {
    disabled: "cursor-not-allowed opacity-50",
    focused: "focus-visible:ring-2 focus-visible:ring-offset-2",
  },
};

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input"> & { size?: keyof typeof inputVariants.sizes; color?: keyof typeof inputVariants.colors; state?: keyof typeof inputVariants.states }>(
  ({ className, type, size = "md", color = "neutral", state = "focused", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-md border bg-transparent shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none disabled:opacity-50",
          inputVariants.sizes[size],
          inputVariants.colors[color],
          inputVariants.states[state],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
