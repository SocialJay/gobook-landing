
import { FaInstagram, FaTiktok, FaAt} from "react-icons/fa";
import TermsAndConditionsModal from "../TermsAndConditionsModal/TermsAndConditionsModal";
import PrivacyPolicyModal from "../PrivacyPolicyModal/PrivacyPolicyModal";
import PricingModal from "../PricingModal/PricingModal";


export default function Footer() {
    return (
        <div className="flex flex-col md:flex-row w-[343px] md:w-[864px] lg:w-[864px] xl:w-[784px] h-[107px] md:h-[52px] gap-10 md:gap-4 justify-between items-center pb-5 md:pb-0">
          <div className="flex items-center w-full md:w-auto justify-between md:gap-[55px] web-callout">
            <div>
              <TermsAndConditionsModal />
            </div>
            <div>
              <PrivacyPolicyModal />
            </div>
            <div>
              <PricingModal />  
            </div>
          </div>
          <div className="flex items-center sm:gap-5 gap-8 self-start md:self-center">
            <a
              href="https://www.instagram.com/gobook.official?igsh=MTNydmM4bWRodmMwNA=="
              target="_blank"
              aria-label="gobook Instagram"
            >
              <FaInstagram size={20} color="#525252" />
            </a>
            <a
              href="https://www.tiktok.com/@gobook.official"
              target="_blank"
              aria-label="gobook TikTok"
            >
              <FaTiktok size={20} color="#525252" />
            </a>
            <a
              href="mailto:support@gobook.lk"
              aria-label="Email gobook"
            >
              <FaAt size={20} color="#525252" />
            </a>
          </div>
        </div>
    )
}