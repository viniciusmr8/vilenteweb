import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface PortfolioButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "hero";
}

export const PortfolioButton = forwardRef<HTMLButtonElement, PortfolioButtonProps>(
  ({ children, variant = "solid", className, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-3xl px-5 py-3 text-sm font-medium transition-all duration-300 shadow-soft";
    
    const variants = {
      solid: "bg-primary text-primary-foreground hover:bg-primary-glow hover:shadow-elegant",
      outline: "border border-border text-foreground hover:bg-secondary",
      hero: "bg-primary text-primary-foreground hover:bg-primary-glow hover:shadow-elegant hover:scale-105"
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

PortfolioButton.displayName = "PortfolioButton";