import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ButtonVariants";

interface ButtonProps
  extends React.ComponentProps<"button">,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  disabled?: boolean;
  icon?: boolean;
}

function Button({
  className,
  hierarchy,
  size,
  asChild = false,
  leadingIcon,
  trailingIcon,
  children,
  icon = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ hierarchy, size, className }))}
      {...props}
    >
      {leadingIcon && (
        <div className={cn(icon && size === "large" ? "size-5" : "size-4")}>
          {leadingIcon}
        </div>
      )}
      {children}
      {trailingIcon && (
        <div className={cn(icon && size === "large" ? "size-5" : "size-4")}>
          {trailingIcon}
        </div>
      )}
    </Comp>
  );
}

export { Button };
