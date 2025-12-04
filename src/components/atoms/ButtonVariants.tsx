import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "min-w:fit w-full rounded-3 font-medium text-sm leading-[20px] flex gap-2 cursor-pointer items-center justify-center disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      hierarchy: {
        primary:
          "bg-button-primary text-button-primary-text hover:bg-button-primary-hover focus:border-2 focus:border-button-primary-active",
        secondary:
          "bg-button-secondary text-button-secondary-text font-inter text-[14px] border-1 border-button-secondary-border hover:bg-button-secondary-hover focus:border-2 focus:border-button-secondary-active",
        tertiary:
          "text-button-tertiary-text hover:bg-button-tertiary-hover focus:border-2 focus:border-tertiary-active",
        danger:
          "bg-button-danger text-button-danger-text hover:bg-button-danger-hover focus:border-2 focus:border-danger-active",
        link: "text-button-link-default !p-0 !h-fit hover:underline focus:underline",
        linkUrgent:
          "text-button-link-urgent !p-0 !h-fit hover:underline focus:underline",
        LinkOnColor: "text-text-on !p-0 !h-fit hover:underline focus:underline",
      },
      size: {
        default: "h-7 px-3 py-2",
        large: "h-8 px-4 py-3",
        small: "h-6 py-2 px-3",
      },
      disabled: {
        true: "",
      },
    },
    defaultVariants: {
      hierarchy: "primary",
      size: "default",
    },
  }
);