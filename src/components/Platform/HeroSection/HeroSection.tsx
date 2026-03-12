import { type ReactNode, useEffect, useMemo, useState } from "react";
import { Button } from "@/lib/components/Button/Button";
import { Plus } from "@/lib/icon";
import { useIsMobile } from "@/lib/hooks/useMobile";

type HeroEvent = {
  id: string;
  name: string;
  startAt: string;
  tenantId?: string;
  tenantName?: string;
  tenantLogo?: string;
};

type HeroSectionProps = {
  events: HeroEvent[];
  subtitle: ReactNode;
  onExplore: () => void;
  onCreateBooking: () => void;
  isLoading?: boolean;
};

const AUTO_SCROLL_INTERVAL_MS = 3600;
const TRANSITION_MS = 700;

export default function HeroSection({
  events,
  subtitle,
  onExplore,
  onCreateBooking,
  isLoading = false,
}: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInstant, setIsInstant] = useState(false);
  const isMobile = useIsMobile();

  const CARD_SIZE = isMobile ? 64 : 100;

  const baseEvents = useMemo(() => events, [events]);
  const loopEvents = useMemo(
    () => [...baseEvents, ...baseEvents, ...baseEvents],
    [baseEvents],
  );

  useEffect(() => {
    if (baseEvents.length === 0) {
      setActiveIndex(0);
      return;
    }
    setIsInstant(true);
    setActiveIndex(baseEvents.length);
    const id = window.requestAnimationFrame(() => setIsInstant(false));
    return () => window.cancelAnimationFrame(id);
  }, [baseEvents.length]);

  useEffect(() => {
    if (baseEvents.length <= 1) return;
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % loopEvents.length);
    }, AUTO_SCROLL_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [baseEvents.length, loopEvents.length]);

  useEffect(() => {
    if (baseEvents.length === 0) return;
    if (activeIndex < baseEvents.length * 2) return;

    const timeoutId = window.setTimeout(() => {
      setIsInstant(true);
      setActiveIndex(baseEvents.length);
      window.requestAnimationFrame(() => setIsInstant(false));
    }, TRANSITION_MS);

    return () => window.clearTimeout(timeoutId);
  }, [activeIndex, baseEvents.length]);

  const GAP_SIZE = 16;
  const VISIBLE_COUNT = 3;
  const viewportWidth = CARD_SIZE * VISIBLE_COUNT + GAP_SIZE * (VISIBLE_COUNT - 1);
  const stepSize = CARD_SIZE + GAP_SIZE;
  const offset = activeIndex * stepSize - (viewportWidth - CARD_SIZE) / 2;
  const trackWidth =
    loopEvents.length > 0 ? loopEvents.length * stepSize - GAP_SIZE : 0;

  return (
    <section className="flex items-center justify-center h-[600px] overflow-hidden w-full px-4 sm:px-0 text-center">
      <div className="flex flex-col gap-7 sm:gap-10 items-center w-[390px] max-w-full">
        <div className="w-full flex justify-center">
          {isLoading ? (
            <div className="flex items-center gap-4">
              {Array.from({ length: VISIBLE_COUNT }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-5 bg-surface-container-foreground animate-pulse shrink-0"
                  style={{ width: CARD_SIZE, height: CARD_SIZE }}
                />
              ))}
            </div>
          ) : loopEvents.length === 0 ? (
            <div className="web-caption text-text-subtle">
              No tenants right now
            </div>
          ) : (
            <div className="relative mx-auto overflow-hidden" style={{ width: viewportWidth }}>
              <div className="absolute left-0 top-0 h-full w-[101px] bg-gradient-to-r from-[#0c0a09] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 h-full w-[101px] bg-gradient-to-l from-[#0c0a09] to-transparent z-10 pointer-events-none" />
              <div
                className={`flex items-center gap-4 ${isInstant ? "" : "transition-transform duration-700 ease-in-out"}`}
                style={{
                  width: trackWidth,
                  transform: `translateX(-${offset}px)`,
                }}
              >
                {loopEvents.map((event, index) => (
                  <a
                    key={`${event.id}-${index}`}
                    href={`${import.meta.env.VITE_GOBOOK_FRONTEND_URL}/customer/event/${encodeURIComponent(event.id)}`}
                    className="relative shrink-0 rounded-5 overflow-hidden bg-surface-container-foreground flex items-center justify-center"
                    style={{
                      width: CARD_SIZE,
                      height: CARD_SIZE,
                    }}
                    aria-label={event.tenantName ?? event.name}
                  >
                    {event.tenantLogo && (
                      <img
                        src={event.tenantLogo}
                        alt={event.tenantName ?? event.name}
                        className="absolute inset-0 object-cover w-full h-full"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 rounded-5" />
                    <div className="absolute inset-[-0.5px] rounded-5 shadow-[inset_0px_-4px_4px_0px_rgba(255,255,255,0.25)] pointer-events-none" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-8 items-center w-full">
          <div className="flex flex-col gap-4 items-center text-center w-full">
            <h1 className="web-display-2 text-text-primary-default">
              Your next
              <br />
              experience
              <br />
              starts here
            </h1>
            <p className="web-body text-text-label max-w-[390px]">{subtitle}</p>
          </div>

          <div className="flex items-center gap-2 w-full max-w-[323px]">
            <Button 
              hierarchy="primary" 
              onClick={onExplore}
              className="w-fit"
            >
              Explore Experience
            </Button>
            <Button
              hierarchy="secondary"
              leadingIcon={<Plus className="size-4" />}
              onClick={onCreateBooking}
              className="w-fit"
            >
              Create Booking
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
