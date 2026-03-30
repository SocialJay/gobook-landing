import { FaInstagram } from "react-icons/fa";
import PricingModal from "../PricingModal/PricingModal";
import { Button } from "../ui/Button";

export default function Footer() {
  return (
    <div className="flex md:flex-row w-full sm:gap-10 md:gap-4 justify-between items-center md:pb-0">
      <div className="flex items-center w-full md:w-auto sm:justify-between gap-5 web-callout">
        <div>
          <Button hierarchy="linkOnColor">
            <a href="/terms-of-service" aria-label="Terms of Service">
              Terms of Service
            </a>
          </Button>
        </div>
        <div>
          <Button hierarchy="linkOnColor">
            <a href="/privacy-policy" aria-label="Privacy Policy">
              Privacy Policy
            </a>
          </Button>
        </div>
        <div>
          <PricingModal />
        </div>
        <div>
          <Button hierarchy="linkOnColor">
            <a href="mailto:support@gobook.lk" aria-label="Email gobook">
              Support
            </a>
          </Button>
        </div>
      </div>
      <a
        href="https://www.instagram.com/gobook.official?igsh=MTNydmM4bWRodmMwNA=="
        target="_blank"
        aria-label="gobook Instagram"
      >
        <FaInstagram size={20} color="#525252" />
      </a>
    </div>
  );
}
