import Link from "next/link";

import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  variant?: "solid" | "outline";
  className?: string;
  children: React.ReactNode;
};

const variants = {
  solid: "bg-teal-800 text-white hover:bg-teal-700",
  outline: "border border-teal-900/15 bg-white text-teal-950 hover:bg-teal-50",
};

export function Button({ href, variant = "solid", className, children }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-tight transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
