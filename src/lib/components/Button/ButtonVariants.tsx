import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "min-w-fit flex gap-1 cursor-pointer items-center justify-center disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      buttonType: {
        button: "",
        icon: "aspect-square",
      },
      hierarchy: {
        primary:
          "rounded-button-primary-radius bg-button-primary-background-fill text-button-primary-text hover:bg-button-primary-background-fill-hover border-button-primary-border-stroke-hover hover:border-button-primary-border-stroke-thin-hover",
        secondary:
          "rounded-button-secondary-radius bg-button-secondary-background-fill-default text-button-secondary-text hover:bg-button-secondary-background-fill-hover active:border-2 border-button-secondary-background-border-active",
        tertiary:
          "rounded-button-tertiary-radius text-button-tertiary-text hover:text-button-tertiary-text-hover",
        dangerPrimary:
          "rounded-button-danger-primary-radius bg-button-danger-primary-background-fill text-button-danger-primary-text hover:bg-button-danger-primary-border-fill-hover",
        dangerSecondary:
          "rounded-button-danger-secondary-radius bg-button-danger-secondary-background-fill text-button-danger-secondary-text hover:bg-button-danger-secondary-border-fill-hover",
        danger:
          "rounded-circle bg-button-danger-background-fill text-button-danger-text hover:bg-button-danger-border-fill-hover focus:border-2",
        link: "text-button-link-default-text !p-0 !h-fit",
        linkUrgent: "text-button-link-danger-text !p-0 !h-fit",
        label: "!rounded-none web-subheadline text-text-subtle !p-0 !h-[23px]",
        linkDanger: "text-button-link-danger-text ",
      },
      size: {
        default: "h-10 px-4 py-2 web-subheadline",
        large: "h-12 p-4 web-headline",
        xLarge: "h-16 py-5 px-6 web-headline",
        small: "h-6 py-2 px-3 web-subheadline",
      },
      disabled: {
        true: "",
      },
    },
    compoundVariants: [
      {
        buttonType: "icon",
        size: "small",
        class: "size-6",
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
