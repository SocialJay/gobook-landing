import { useEffect, useRef, useState } from "react";
import NumberFlow from "@number-flow/react";
import { Button } from "./lib/components/Button/Button";
import { Plus } from "./lib/icon";
import Footer from "./components/Footer/Footer";
import AppIcon from "./assets/AppIcon.webp";
import { useIsMobile } from "./lib/hooks/useMobile";
import EventCard from "./components/Platform/EventCard/EventCard";
import HeroSection from "./components/Platform/HeroSection/HeroSection";
import WeekendEventsCarousel from "./components/Platform/WeekendEventsCarousel/WeekendEventsCarousel";
import Header from "./components/Header/Header";

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

export default function Platform() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [heroEvents, setHeroEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [monthlyStats, setMonthlyStats] = useState<{
    eventCount: number;
    attendeeCount: number;
    sampleAttendeeName: string | null;
  } | null>(null);
  const [monthlyStatsLoading, setMonthlyStatsLoading] = useState(true);
  const [numbersMounted, setNumbersMounted] = useState(false);
  const isMobile = useIsMobile();
  const discoverRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_GOBOOK_API_URL}/api/events/latest`,
        );
        const data = await res.json();
        const allEvents: EventItem[] = data.events ?? [];
        const sorted = [...allEvents].sort(
          (a, b) => new Date(b.startAt).getTime() - new Date(a.startAt).getTime(),
        );
        // Deduplicate by tenantId, keeping up to 5 unique tenants
        const seenTenants = new Set<string>();
        const uniqueTenantEvents: EventItem[] = [];
        for (const event of sorted) {
          const key = event.tenantId ?? event.id;
          if (!seenTenants.has(key)) {
            seenTenants.add(key);
            uniqueTenantEvents.push(event);
          }
          if (uniqueTenantEvents.length === 5) break;
        }
        setEvents(allEvents);
        setHeroEvents(uniqueTenantEvents);
      } catch (err) {
        console.error("Failed to fetch events", err);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  useEffect(() => {
    async function fetchMonthlyStats() {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_GOBOOK_API_URL}/api/booking/stats/monthly`,
        );
        if (res.ok) {
          const data = await res.json();
          setMonthlyStats(data);
        }
      } catch (err) {
        console.error("Failed to fetch monthly stats", err);
      } finally {
        setMonthlyStatsLoading(false);
      }
    }
    fetchMonthlyStats();
  }, []);


  document.documentElement.classList.add("dark");

  useEffect(() => {
    if (!monthlyStatsLoading && monthlyStats && monthlyStats.attendeeCount > 0) {
      const id = requestAnimationFrame(() => setNumbersMounted(true));
      return () => cancelAnimationFrame(id);
    }
  }, [monthlyStatsLoading, monthlyStats]);

  const heroSubtitle = monthlyStatsLoading
    ? "Loading attendee info..."
    : !monthlyStats || monthlyStats.attendeeCount === 0
      ? "Be the first to book on Gobook."
      : monthlyStats.attendeeCount === 1
        ? <>{monthlyStats.sampleAttendeeName ?? "Someone"} is attending <NumberFlow value={numbersMounted ? monthlyStats.eventCount : 0} trend={1} /> event{monthlyStats.eventCount !== 1 ? "s" : ""} near you.</>
        : <>{monthlyStats.sampleAttendeeName ?? "Someone"} and <NumberFlow value={numbersMounted ? monthlyStats.attendeeCount - 1 : 0} trend={1} /> others are attending <NumberFlow value={numbersMounted ? monthlyStats.eventCount : 0} trend={1} /> event{monthlyStats.eventCount !== 1 ? "s" : ""} near you.</>;

  return (
    <div className="flex flex-col gap-2 min-h-screen bg-surface-container-background items-center">
      <div className="flex flex-col gap-9 w-full">
        <Header>
          <Button
            hierarchy="tertiary"
            size="small"
            buttonType={isMobile === true ? "icon" : undefined}
            leadingIcon={<Plus className="size-4" />}
            onClick={() =>
              window.location.replace(
                `${import.meta.env.VITE_GOBOOK_FRONTEND_URL}/auth`,
              )
            }
          >
            {isMobile === true ? null : "Create Booking"}
          </Button>
        </Header>
        <div className="flex flex-col gap-8 items-center w-full">
          <div className="flex flex-col gap-9 w-full items-center">
            <HeroSection
              events={heroEvents}
              subtitle={heroSubtitle}
              isLoading={loading}
              onExplore={() =>
                discoverRef.current?.scrollIntoView({ behavior: "smooth" })
              }
              onCreateBooking={() =>
                window.location.replace(
                  `${import.meta.env.VITE_GOBOOK_FRONTEND_URL}/auth`,
                )
              }
            />    
            <div ref={discoverRef} className="flex flex-col gap-5 max-sm:px-4 xl:w-[1200px] lg:w-[864px] md:w-[671px]">
              <div className="flex flex-col gap-1">
                <h1 className="web-title-2 text-text-primary-default">
                  Discover events
                </h1>
                {/* <p className="web-body text-text-label">
                  Abishek and 99 others are attending 3 events in Colombo
                </p> */}
              </div>
          
              {loading ? (
                <div className="flex flex-wrap gap-x-4 gap-y-6">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="flex flex-col gap-2 max-w-[204px]">
                      <div className="w-[204px] h-[204px] rounded-4 bg-surface-container-foreground animate-pulse" />
                      <div className="flex flex-col gap-1">
                        <div className="h-[22px] w-24 rounded bg-surface-container-foreground animate-pulse" />
                        <div className="h-[22px] w-40 rounded bg-surface-container-foreground animate-pulse" />
                        <div className="h-[20px] w-28 rounded bg-surface-container-foreground animate-pulse" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : events.length === 0 ? (
                <div className="flex items-center justify-center py-20">
                  <p className="web-body text-text-subtle">
                    No events available right now
                  </p>
                </div>
              ) : (
                <div className="grid lg:grid-cols-4 gap-x-4 gap-y-5 md:grid-cols-3 max:grid-cols-1">
                  {events.map((event, index) => (
                    <EventCard key={index} event={event} className="flex-shrink-0"  />
                  ))}
                </div>
              )}
            </div>
            <WeekendEventsCarousel events={events} isLoading={loading} />
          </div>
          <div className="w-full lg:w-[864px] md:w-[671px] xl:w-[1200px] py-4 gap-4 mx-auto max-sm:px-4 flex flex-col">
            <Footer />
            <a
              href="https://www.gobook.lk/"
              target="_blank"
              aria-label="Host with Gobook"
              rel="noreferrer"
            >
              <div className="sm:web-subheadline mobile-subheadline flex items-center gap-2">
                <span className="text-text-label">Host with </span>
                <div className="flex items-center gap-1">
                  <img
                    src={AppIcon}
                    alt="Gobook app icon"
                    className="h-4 w-4 object-contain"
                  />{" "}
                  <span className="text-text-primary-default">Gobook</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
