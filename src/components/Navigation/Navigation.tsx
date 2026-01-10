import { Button } from "../ui/Button";
import TicketVector from "@/assets/navigation/TicketVector.png";

export default function Navigation() {
  return (
    <div className="flex justify-between w-full py-2">
      <Button className="p-[1px] rounded-full bg-gradient-to-r from-[#FBD3A7] via-[#FB7185] to-[#9333EA] cursor-pointer">
        <span className="inline-flex items-center gap-2 bg-[#0F1724] rounded-full px-3 py-1 text-white font-medium text-sm">
          <img src={TicketVector} alt="ticket" className="w-4 h-4" />
          Beta
        </span>
      </Button>

      <Button
        hierarchy="linkOnColor"
        onClick={() => (window.location.href = "https://app.gobook.lk/auth")}
      >
        Signin
      </Button>
    </div>
  );
}
