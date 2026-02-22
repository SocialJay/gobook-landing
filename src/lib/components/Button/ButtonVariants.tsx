import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "min-w-fit rounded-circle flex gap-1 cursor-pointer items-center justify-center disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      buttonType: {
        button: "",
        icon: "aspect-square",
      },
      hierarchy: {
        primary:
          "bg-button-primary-background-fill text-button-primary-text hover:bg-button-primary-background-fill-hover border-button-primary-border-stroke-hover hover:border-button-primary-border-stroke-thin-hover",
        secondary:
          "bg-button-secondary-background-fill text-button-secondary-text border-1 border-button-secondary-border-stroke hover:border-button-secondary-border-stroke-hover",
        tertiary:
          "text-button-tertiary-text hover:text-button-tertiary-text-hover",
        danger:
          "bg-button-danger-background-fill text-button-danger-text hover:bg-button-danger-border-fill-hover focus:border-2",
        special: "bg-button-secondary text-button-secondary-text",
        social:
          "bg-social-button-background-fill border-2 rounded-5! border-social-button-border-stroke hover:border-social-button-background-stroke-hover",
        link: "text-button-link-default-text !p-0 !h-fit",
        linkUrgent: "text-button-link-danger-text !p-0 !h-fit",
        label: "!rounded-none web-subheadline text-text-subtle !p-0 !h-[23px]",
      },
      size: {
        default: "h-10 px-4 py-2 web-subheadline",
        large: "h-12 p-4 web-headline",
        xLarge: "h-16 py-5 px-6 web-headline",
        small: "h-6 py-2 px-3 web-headline",
      },
      disabled: {
        true: "",
      },
    },
    compoundVariants: [
      {
        buttonType: "icon",
        size: "small",
        class: "size-7 p-0",
      },
      {
        hierarchy: "label",
        size: "small",
        class: "web-subheadline",
      },
      {
        hierarchy: "label",
        size: "default",
        class: "web-subheadline",
      },
      {
        hierarchy: "label",
        size: "large",
        class: "web-headline",
      },
      {
        hierarchy: "label",
        size: "xLarge",
        class: "web-headline",
      },
    ],
    defaultVariants: {
      hierarchy: "primary",
      size: "default",
    },
  },
);
