import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "cursor-pointer",
  {
    variants: {
        hierarchy: {
            primary: "flex items-center justify-center text-center h-[48px] min-w-7 w-auto min-h-[48px] text-nowrap rounded-full gap-2 py-3 px-5 bg-[#FFFFFF] text-[rgba(30,41,59,1)] font-medium text-sm border-0",
            secondary: "flex items-center justify-center text-center h-[48px] min-w-7 w-auto min-h-[48px] text-nowrap rounded-full gap-2 py-3 px-5 bg-[#171717] text-[rgba(255,255,255,1)] font-medium text-sm",
            linkDefault: "flex items-center justify-center text-center text-[#1D4ED8] text-sm font-medium",
            linkOnColor: "flex items-center justify-center text-center text-[#525252] text-sm font-medium hover:text-[#FFFFFF]",
            special: "relative flex items-center justify-center gap-2 rounded-full min-w-[184px] w-fit h-[64px] bg-white text-black font-medium text-[17px] border-2 border-transparent bg-clip-padding before:absolute before:inset-0 before:-z-10 before:m-[-2px] before:rounded-full before:bg-[linear-gradient(90deg,#FBD3A7_0%,#FB7185_25%,#EC4899_50%,#C026D3_75%,#9333EA_100%)]",
        },
        
   
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
