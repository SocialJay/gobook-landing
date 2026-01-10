import HeroSectionLogo from "../../assets/HeroSectionLogo.png";
import { Button } from "../../components/ui/Button";

export default function HeroSection() {
  return (
    <div className="w-full flex flex-col md:flex-row h-auto md:h-auto gap-[54px] md:gap-0">
      <div className="flex flex-1 flex-col w-full md:w-[324px] gap-[40px] items-start">
        <div className="flex flex-col gap-[16px]">
          <div>
            <img src={HeroSectionLogo} alt="Hero logo" />
          </div>
          <div className="web-display-2">
            Build your
            <br />
            <div className="web-display-2 web-display-2-gradient">Booking</div>
          </div>

          <div className="web-body text-[#A3A3A3]">
            Set up a booking platform, sell faster.
            <br />
            Host a memorable experience.
          </div>
        </div>
        <div>
          <Button
            hierarchy="special"
            onClick={() =>
              (window.location.href = "https://app.gobook.lk/auth")
            }
          >
            + Start Hosting
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-[10px]">
        <div className="flex items-center justify-center aspect-square overflow-hidden rounded-full">
          <img
            src="/hero-icon-1.svg"
            alt="Hero placeholder"
            className="w-[107px] sm:w-[136px] h-[107px] sm:h-[136px] object-cover"
          />
        </div>

        <div className="flex items-center justify-center aspect-square overflow-hidden rounded-full">
          <img
            src="/hero-icon-2.svg"
            alt="Hero placeholder"
            className="w-[107px] sm:w-[136px] h-[107px] sm:h-[136px] object-cover"
          />
        </div>

        <div className="flex items-center justify-center aspect-square overflow-hidden rounded-full">
          <img
            src="/hero-icon-3.svg"
            alt="Hero placeholder"
            className="w-[107px] sm:w-[136px] h-[107px] sm:h-[136px] object-cover"
          />
        </div>

        <div className="flex items-center justify-center aspect-square overflow-hidden rounded-full">
          <img
            src="/hero-icon-4.svg"
            alt="Hero placeholder"
            className="w-[107px] sm:w-[136px] h-[107px] sm:h-[136px] object-cover"
          />
        </div>

        <div className="flex items-center justify-center aspect-square overflow-hidden rounded-full">
          <img
            src="/hero-icon-5.svg"
            alt="Hero placeholder"
            className="w-[107px] sm:w-[136px] h-[107px] sm:h-[136px] object-cover"
          />
        </div>

        <div className="flex items-center justify-center aspect-square overflow-hidden rounded-full">
          <img
            src="/hero-icon-6.svg"
            alt="Hero placeholder"
            className="w-[107px] sm:w-[136px] h-[107px] sm:h-[136px] object-cover"
          />
        </div>
        <div className="flex items-center justify-center aspect-square overflow-hidden rounded-full">
          <img
            src="/hero-icon-7.svg"
            alt="Hero placeholder"
            className="w-[107px] sm:w-[136px] h-[107px] sm:h-[136px] object-cover"
          />
        </div>
        <div className="flex items-center justify-center aspect-square overflow-hidden rounded-full">
          <img
            src="/hero-icon-8.svg"
            alt="Hero placeholder"
            className="w-[107px] sm:w-[136px] h-[107px] sm:h-[136px] object-cover"
          />
        </div>
        <div className="flex items-center justify-center aspect-square overflow-hidden rounded-full">
          <img
            src="/hero-icon-9.svg"
            alt="Hero placeholder"
            className="w-[107px] sm:w-[136px] h-[107px] sm:h-[136px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
