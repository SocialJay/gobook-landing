import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "cursor-pointer",
  {
    variants: {
        hierarchy: {
            primary: "flex items-center justify-center text-center h-[36px] min-w-7 w-full min-h-[36px] text-nowrap rounded-3 border py-3 px-4 bg-[rgba(30,41,59,1)] text-[rgba(255,255,255,1)] font-medium text-sm",
            secondary: "flex items-center justify-center text-center h-[36px] min-w-7 w-full min-h-[36px] text-nowrap rounded-3 border py-3 px-4 border-[rgba(203,213,225,1)] bg-[rgba(255,255,255,1)] text-[rgba(30,41,59,1)]",
            linkDefault: "flex items-center justify-center text-center text-[#1D4ED8] text-sm font-medium"
        }
    }
  }
)

function Button({
  className,
  hierarchy,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ hierarchy, className }))}
      {...props}
    />
  )
}

export { Button }
