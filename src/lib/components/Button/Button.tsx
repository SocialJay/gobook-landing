import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

import CircularLoader from "../CircularLoader/CircularLoader";
import { buttonVariants } from "./ButtonVariants";

interface ButtonProps
  extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  buttonType?: "button" | "icon";
  asChild?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  disabled?: boolean;
  icon?: boolean;
  isLoading?: boolean;
}

function Button({
  buttonType = "button",
  className,
  hierarchy,
  size,
  asChild = false,
  leadingIcon,
  trailingIcon,
  children,
  icon = false,
  isLoading = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ buttonType, hierarchy, size, className }))}
      {...props}
    >
      {isLoading ? (
        <CircularLoader />
      ) : (
        <>
          {leadingIcon && (
            <div
              className={cn(
                size === "small"
                  ? "size-4"
                  : size === "large"
                    ? "size-6"
                    : size === "xLarge"
                      ? "size-8"
                      : "size-[20px]",
              )}
            >
              {leadingIcon}
            </div>
          )}
          {children}
          {trailingIcon && (
            <div
              className={cn(
                size === "small"
                  ? "size-4"
                  : size === "large"
                    ? "size-6"
                    : size === "xLarge"
                      ? "size-8"
                      : "size-[20px]",
              )}
            >
              {trailingIcon}
            </div>
          )}
        </>
      )}
    </Comp>
  );
}

export { Button };
