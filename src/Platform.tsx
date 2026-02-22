import { useEffect, useState } from "react";
import { format } from "date-fns";
// import Footer from "./components/Footer/Footer";
import Logo from "@/assets/logo-name.png";
import LogoTicket from "@/assets/logo-ticket.svg";
import { Button } from "./lib/components/Button/Button";
import { Add } from "./lib/icon";
import Footer from "./components/Footer/Footer";
import AppIcon from "./assets/AppIcon.webp";
import { useIsMobile } from "./lib/hooks/useMobile";

type EventItem = {
  id: string;
  name: string;
  banner: string;
  location: any;
  startAt: string;
  type: string;
};

function EventCard({ event }: { event: EventItem }) {
  return (
    <a
      href={`${import.meta.env.VITE_GOBOOK_FRONTEND_URL}/customer/event/${encodeURIComponent(event.id)}`}
      className="flex flex-col gap-2 group"
    >
      <div className="overflow-hidden rounded-4">
        <img
          src={event.banner}
          alt={event.name}
          className="object-cover rounded-4 aspect-square w-full"
        />
      </div>
      <div className="flex flex-col items-start w-full">
        <p className="web-callout text-text-label w-full">
          {format(new Date(event.startAt), "EEE, d MMMM")}
        </p>
        <p className="web-subheadline text-text-primary-default overflow-hidden text-ellipsis w-full">
          {event.name}
        </p>
        <p className="web-footnote text-text-subtle w-full">
          {event.location?.city}, {event.location?.country}
        </p>
      </div>
    </a>
  );
}

export default function Platform() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_GOBOOK_API_URL}/api/events/latest`,
        );
        const data = await res.json();
        setEvents(data.events ?? []);
      } catch (err) {
        console.error("Failed to fetch events", err);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  document.documentElement.classList.add("dark");

  return (
    <div className="min-h-screen bg-surface-container-background flex flex-col gap-8 items-center justify-between">
      <div className="lg:w-[864px] md:w-[664px] xl:w-[998px] flex flex-col max-sm:px-4">
        <div className="fixed top-0 left-0 w-full bg-surface-container-background">
          <div className="py-2 mx-auto flex justify-between lg:w-[864px] md:w-[664px] xl:w-[998px] max-sm:px-4">
            <div className="flex items-center gap-2">
              <img src={LogoTicket} alt="" />
              <img src={Logo} alt="" className="w-[117px]" />
            </div>

            <div className="flex gap-2">
              {isMobile === true ? (
                <Button
                  hierarchy="primary"
                  size="small"
                  buttonType="icon"
                  className="size-6"
                  onClick={() =>
                    window.location.replace(
                      `${import.meta.env.VITE_GOBOOK_FRONTEND_URL}/auth`,
                    )
                  }
                >
                  <Add className="size-4 fill-icon-background-secondary" />
                </Button>
              ) : (
                <Button
                  hierarchy="primary"
                  size="small"
                  leadingIcon={
                    <Add className="size-4 fill-icon-background-secondary" />
                  }
                  onClick={() =>
                    window.location.replace(
                      `${import.meta.env.VITE_GOBOOK_FRONTEND_URL}/auth`,
                    )
                  }
                >
                  Create Booking
                </Button>
              )}
              <Button
                hierarchy="secondary"
                size="small"
                onClick={() =>
                  window.location.replace(
                    `${import.meta.env.VITE_GOBOOK_FRONTEND_URL}/customer/auth/signin`,
                  )
                }
              >
                Login
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-[112px]">
          <div className="flex flex-col gap-1">
            <h1 className="web-title-2 text-text-primary-default">
              Discover events near you
            </h1>
            <p className="web-body text-text-label">
              Abishek and 99 others are attending 3 events in Colombo
            </p>
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
                <EventCard key={index} event={event} />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="w-full lg:w-[864px] md:w-[664px] xl:w-[998px] py-4 gap-4 mx-auto max-sm:px-4 flex flex-col">
        <Footer />

        <a
          href="https://www.gobook.lk/"
          target="_blank"
          aria-label="Host with Gobook"
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
  );
}
