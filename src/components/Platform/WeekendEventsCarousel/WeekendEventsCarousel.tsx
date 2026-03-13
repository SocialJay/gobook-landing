import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EventCard from "../EventCard/EventCard";

type EventItem = {
  id: string;
  name: string;
  banner: string;
  location: any;
  startAt: string;
  type: string;
  tenantId?: string;
  tenantName?: string;
  tenantLogo?: string;
};

type WeekendEventsCarouselProps = {
  events: EventItem[];
  isLoading?: boolean;
};

export default function WeekendEventsCarousel({
  events,
  isLoading,
}: WeekendEventsCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const weekendEvents = events.filter((event) => {
    const eventDate = new Date(event.startAt);
    const dayOfWeek = eventDate.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  });

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        carousel.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [weekendEvents]);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 600;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselRef.current) return;

    const diff = e.clientX - dragStart;
    if (Math.abs(diff) > 50) {
      scroll(diff > 0 ? "left" : "right");
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      scroll(diff > 0 ? "right" : "left");
    }
  };

  if (!isLoading && weekendEvents.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-5 max-sm:px-4 w-full xl:w-[1200px] lg:w-[864px] md:w-[671px]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="web-title-1 text-text-primary-default">
            Weekend Events
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll carousel left"
            className="flex items-center justify-center size-8 rounded-full bg-surface-container-foreground hover:bg-surface-container-background disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={20} className="text-text-primary-default" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll carousel right"
            className="flex items-center justify-center size-8 rounded-full bg-surface-container-foreground hover:bg-surface-container-background disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={20} className="text-text-primary-default" />
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex flex-wrap gap-x-2 md:gap-x-4 xl:gap-x-6 gap-y-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-2 flex-shrink-0 w-[170px] h-[244px] md:w-[170px] md:h-[244px] lg:w-[204px] lg:h-[278px] xl:w-[276px] xl:h-[328px]">
              <div className="w-[170px] h-[170px] md:w-[170px] md:h-[170px] lg:w-[204px] lg:h-[204px] xl:w-[276px] xl:h-[276px] rounded-4 bg-surface-container-foreground animate-pulse" />
              <div className="flex flex-col gap-1">
                <div className="h-[22px] w-24 rounded bg-surface-container-foreground animate-pulse" />
                <div className="h-[22px] w-40 rounded bg-surface-container-foreground animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="weekend-carousel flex gap-x-2 md:gap-x-4 xl:gap-x-6 overflow-x-auto select-none cursor-grab active:cursor-grabbing snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {weekendEvents.map((event, index) => (
            <div key={index} className="snap-start flex-shrink-0">
              <EventCard event={event} className="flex-shrink-0" imgContainerClassName="w-full h-[170px] md:h-[170px] lg:h-[204px] xl:h-[276px]" cardContainerClassName="w-[170px] h-[244px] md:w-[170px] md:h-[244px] lg:w-[204px] lg:h-[278px] xl:w-[276px] xl:h-[328px]" />
            </div>
          ))}
        </div>
      )}
      <style>{`
        .weekend-carousel::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
