import * as React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/Dialog";
import { Button } from "../ui/Button";
import StarterPlan from "./StarterPlan";
import ProPlan from "./ProPlan";

export default function PricingModal({ children }: { children?: React.ReactNode }) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          {children ? children : (
            <Button
              hierarchy="linkOnColor"
            >
              Pricing
            </Button>
          )}
        </DialogTrigger>
        <DialogContent title="Pricing" className="sm:max-w-[718px] pb-4"  showDefaultFooter={false}>
          <div className="flex flex-col">
            <DialogTitle />
              <DialogDescription>
                <div className="flex gap-4">
                    <div className="flex-1 border rounded-5 border-[#172554]">
                      <StarterPlan />
                    </div>
                    <div className="flex-1 border rounded-5 border-[#262626] ">
                      <ProPlan />
                    </div>
                </div>
              </DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    )
}
