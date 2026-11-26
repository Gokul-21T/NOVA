import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ children, variant = "primary", ...props }: ButtonProps) {
  if (variant === "secondary") {
    return (
      <a className="button-secondary" {...props}>
        {children}<ArrowUpRight aria-hidden="true" size={15} />
      </a>
    );
  }

  return (
    <a className="button-primary" {...props}>
      {children}<ArrowUpRight aria-hidden="true" size={16} />
    </a>
  );
}
