
import HeroSectionLogo from "../../assets/HeroSectionLogo.png";
import { Button } from "../../components/ui/Button";
import HeroSectionPlaceHoler from "../../assets/HeroSectionPlaceHolder.png"

export default function HeroSection() {
    return(
        <div className="flex flex-col md:flex-row w-[343px] md:w-[864px] lg:w-[864px] xl:w-[784px] h-auto md:h-auto gap-[54px] md:gap-0">
          <div className="flex flex-1 flex-col w-full md:w-[324px] gap-[40px] items-start">
            <div className="flex flex-col gap-[16px]">
              <div>
                <img src={HeroSectionLogo} alt="Hero logo" />
              </div>
              <div className="web-display-2">
                Build your
              </div>
              <div className="web-display-2 web-display-2-gradient">
                Booking
              </div>
              <div className="web-callout">
                Set up a booking platform, sell faster. 
                <br/>
                Host a memorable experience.
              </div>
              
            </div>
            <div>
              <Button
                hierarchy="special"
                onClick={() => window.location.href = "https://app.gobook.lk/auth"}
              >
                + Start Hosting
              </Button>
            </div>
            
          </div>
            <div className="w-[343px] h-[395px] grid grid-cols-3 grid-rows-3 gap-[10px]">
            <div className="flex items-center justify-center aspect-square overflow-hidden rounded-full">
              <img
              src={HeroSectionPlaceHoler}
              alt="Hero placeholder"
              className="w-[107px] sm:[136px] h-[107px] sm:h-[135px] object-cover"
              />
            </div>

            <div className="flex items-center justify-center aspect-square overflow-hidden rounded-full">
              <img
              src={HeroSectionPlaceHoler}
              alt="Hero placeholder"
              className="w-[107px] sm:[136px] h-[107px] sm:h-[135px] object-cover"
              />
            </div>

            <div className="flex items-center justify-center aspect-square overflow-hidden rounded-full">
              <img
              src={HeroSectionPlaceHoler}
              alt="Hero placeholder"
              className="w-[107px] sm:[136px] h-[107px] sm:h-[135px] object-cover"
              />
            </div>

            <div className="flex items-center justify-center aspect-square overflow-hidden rounded-full">
              <img
              src={HeroSectionPlaceHoler}
              alt="Hero placeholder"
              className="w-[107px] sm:[136px] h-[107px] sm:h-[135px] object-cover"
              />
            </div>

            <div className="flex items-center justify-center aspect-square overflow-hidden rounded-full">
              <img
              src={HeroSectionPlaceHoler}
              alt="Hero placeholder"
              className="w-[107px] sm:[136px] h-[107px] sm:h-[135px] object-cover"
              />
            </div>

            <div className="flex items-center justify-center aspect-square overflow-hidden rounded-full">
              <img
              src={HeroSectionPlaceHoler}
              alt="Hero placeholder"
              className="w-[107px] sm:[136px] h-[107px] sm:h-[135px] object-cover"
              />
            </div>
            <div className="flex items-center justify-center aspect-square overflow-hidden rounded-full">
              <img
              src={HeroSectionPlaceHoler}
              alt="Hero placeholder"
              className="w-[107px] sm:[136px] h-[107px] sm:h-[135px] object-cover"
              />
            </div>
            <div className="flex items-center justify-center aspect-square overflow-hidden rounded-full">
              <img
              src={HeroSectionPlaceHoler}
              alt="Hero placeholder"
              className="w-[107px] sm:[136px] h-[107px] sm:h-[135px] object-cover"
              />
            </div>
            <div className="flex items-center justify-center aspect-square overflow-hidden rounded-full">
              <img
              src={HeroSectionPlaceHoler}
              alt="Hero placeholder"
              className="w-[107px] sm:[136px] h-[107px] sm:h-[135px] object-cover"
              />
            </div>
            </div>

        </div>
    )
}