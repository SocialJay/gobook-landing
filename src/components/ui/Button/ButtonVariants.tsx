import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "min-w-fit rounded-circle font-medium text-sm leading-[20px] flex gap-2 cursor-pointer items-center justify-center disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      buttonType: {
        button: "",
        icon: "aspect-square",
      },
      hierarchy: {
        primary:
          "bg-[#FFFFFF] text-[#171717] hover:bg-[#F5F5F5] active:outline-2 active:outline-[#FFFFFF]",
        secondary:
          "bg-[#171717] text-[#FFFFFF] hover:bg-[#262626]",
        tertiary:
          "text-[#525252]",
        danger:
          "bg-[#DC2626] text-[#FEF2F2] hover:bg-[#B91C1C] focus:border-2 focus:[#DC2626] active:border-2 active:[#DC2626]",
        special: "bg-[#FFFFFF] text-[#262626] border-2 gradient-border",
        social:
          "bg-[#FFFFFF] border-2 !rounded-3 border-2",
        link: "text-[#1D4ED8] !p-0 !h-fit text-web-callout",
        linkDanger:
          "text-[#EB4E00] !p-0 !h-fit",
        LinkOnColor: "text-[#525252] !p-0 !h-fit",
      },
      size: {
        default: "h-[40px] px-3 py-2 web-subheadline",
        large: "h-[48px] p-4 web-headline",
        xLarge: "h-[64px] py-5 px-6",
        small: "h-[32px] w-[32px] py-2 px-3",
      },
      disabled: {
        true: "",
      },
    },
    compoundVariants: [
      {
        buttonType: "icon",
        size: "small",
        class: "size-6 p-0"
      }
    ],
    defaultVariants: {
      hierarchy: "primary",
      size: "default",
    },
  }
);