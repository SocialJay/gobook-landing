import { useEffect, useRef, useState } from "react";
import NumberFlow from "@number-flow/react";
import { Button } from "./lib/components/Button/Button";
import { Plus } from "./lib/icon";
import Footer from "./components/Footer/Footer";
import AppIcon from "./assets/AppIcon.webp";
import { useIsMobile } from "./lib/hooks/useMobile";
import HeroSection from "./components/Platform/HeroSection/HeroSection";
import WeekendEventsCarousel from "./components/Platform/WeekendEventsCarousel/WeekendEventsCarousel";
import DiscoverEventsCarousel from "./components/Platform/DiscoverEventsCarousel/DiscoverEventsCarousel";
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
            <DiscoverEventsCarousel ref={discoverRef} events={events} isLoading={loading} />
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
