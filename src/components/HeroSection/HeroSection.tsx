import { Button } from "../ui/Button/Button";

export default function HeroSection() {
  return (
    <div className="w-[311px] sm:w-full sm:max-w-[798px] flex flex-col md:flex-row md:items-center h-auto gap-[54px] md:gap-0">

      <div className="flex flex-1 flex-col w-full lg:w-[355px] xl:w-[395px] gap-8">

        <div className="flex flex-col h-auto gap-5">
          <div className="flex flex-col gap-[16px]">
            <div className="web-display-2">
              Build your
              <br />
              <span className="web-display-2-gradient">booking.</span>
            </div>

            <div className="web-body text-[#A3A3A3]">
              Set up branded booking platform
              <br />
              with <span className="web-body-gradient">gobook</span>, host memorable experience.
            </div>
          </div>
        </div>

        <div className="flex flex-row-2 w-full">
          <Button
            hierarchy="special"
            size="large"
            onClick={() =>
              (window.location.href = "https://app.gobook.lk/auth")
            }
          >
            + Start Hosting
          </Button>
          <Button
            hierarchy="tertiary"
            size="large"
          >
            Watch Video
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 grid-rows-3 gap-[10px] lg:w-[355px] xl:w-[395px]">
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
