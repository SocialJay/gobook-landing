import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}
function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}
function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}
function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}
function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80 backdrop-blur-sm",
        className
      )}
      {...props}
    />
  );
}
function DialogContent({
  title,
  subTitle,
  className,
  children,
  showCloseButton = true,
  primaryButtonLabel,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
  subTitle?: string;
  primaryButtonLabel?: string;
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-[#050505] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed z-50 flex flex-col overflow-hidden",
          "left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]",
          "max-sm:w-[calc(100vw-2rem)] max-sm:max-h-[85vh]",
          "sm:w-full sm:max-w-[600px] sm:max-h-[85vh]",
          "rounded-[12px] border border-[#171717] shadow-[0px_2px_14.1px_0px_rgba(0,0,0,0.08)]",
          "duration-200",
          className
        )}
        {...props}
      >
        <div className="p-4 flex flex-col gap-2">
          <DialogTitle>
            <h2 className="text-[18px] font-inter font-semibold text-[#F5F5F5]">{title}</h2>
            {subTitle && <p className="text-sm font-normal text-[#b2b3b3]">{subTitle}</p>}
          </DialogTitle>
        </div>
        
        <div className="px-4 flex-1 overflow-y-auto min-h-0 scrollbar-hide">
          {children}
        </div>

        {primaryButtonLabel && (
          <DialogFooter className="h-[68px] px-4 sm:px-6 py-4 flex justify-between items-center mt-10">
            <DialogClose asChild>
              <button className="h-9 min-w-[80px] px-4 py-2 bg-[rgba(255,255,255,0.10)] border border-[rgba(255,255,255,0.20)] rounded-[8px] text-[#F8FAFC] text-[14px] font-inter font-medium leading-5 hover:bg-[rgba(255,255,255,0.15)] transition-colors">
                Back
              </button>
            </DialogClose>
            <DialogClose asChild>
              <button className="h-10 min-w-[80px] px-4 py-2 bg-[#F8FAFC] rounded-[8px] text-[#1E293B] text-[14px] font-inter font-medium leading-5 hover:bg-[#E2E8F0] transition-colors">
                {primaryButtonLabel}
              </button>
            </DialogClose>
          </DialogFooter>
        )}

        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="ring-offset-white focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 text-white"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}
function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 sm:text-left", className)}
      {...props}
    />
  );
}
function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        className
      )}
      {...props}
    />
  );
}
function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <div
      data-slot="dialog-title"
      className={cn("flex flex-col gap-3", className)}
      {...props}
    />
  );
}
function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}
export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
