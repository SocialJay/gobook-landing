import { useEffect, useState } from "react";
import { format } from "date-fns";
import Avatar from "boring-avatars";
import Logo from "@/assets/logo-name.png";
import LogoTicket from "@/assets/logo-ticket.svg";
import { Button } from "./lib/components/Button/Button";
import { Add, Close, SignOut } from "./lib/icon";
import Footer from "./components/Footer/Footer";
import AppIcon from "./assets/AppIcon.webp";
import { useIsMobile } from "./lib/hooks/useMobile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./lib/components/DropdownMenu";

type EventItem = {
  id: string;
  name: string;
  banner: string;
  location: any;
  startAt: string;
  type: string;
};

type UserProfile = {
  id: string;
  firstName: string;
  profileImage: string | null;
  email: string;
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
  const [user, setUser] = useState<UserProfile | null>(null);
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  const loginRedirectUrl = `${import.meta.env.VITE_GOBOOK_FRONTEND_URL}/customer/auth/signin?redirect_url=${encodeURIComponent(`${window.location.origin}/auth/callback`)}`;

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

  useEffect(() => {
    async function fetchUser() {
      const token = localStorage.getItem("access_token");
      if (token) {
        try {
          const res = await fetch(
            `${import.meta.env.VITE_GOBOOK_API_URL}/api/user/profile`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          if (res.ok) {
            const data = await res.json();
            setUser(data.user);
          }
        } catch (err) {
          console.error("Failed to fetch user", err);
        }
      }
    }
    fetchUser();
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("access_token");
    setUser(null);
    setOpen(false);
  };

  document.documentElement.classList.add("dark");

  return (
    <div className="min-h-screen bg-surface-container-background flex flex-col gap-8 items-center justify-between">
      <div className="lg:w-[864px] md:w-[664px] xl:w-[998px] flex flex-col max-sm:px-4">
        <div className="fixed top-0 left-0 w-full bg-surface-container-background z-50">
          <div className="py-2 mx-auto flex justify-between items-center lg:w-[864px] md:w-[664px] xl:w-[998px] max-sm:px-4">
            <div className="flex items-center gap-2">
              <img src={LogoTicket} alt="" />
              <img src={Logo} alt="" className="w-[117px]" />
            </div>

            <div className="flex items-center gap-2">
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

              {user ? (
                <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
                  <DropdownMenuTrigger asChild>
                    <button
                      aria-label="Customer profile"
                      className="flex size-6 items-center justify-center overflow-hidden rounded-full ring-0 outline-none"
                    >
                      {user?.profileImage ? (
                        <img
                          src={user.profileImage}
                          alt="profile"
                          className="size-6 cursor-pointer object-cover"
                        />
                      ) : (
                        <Avatar
                          size={24}
                          variant="beam"
                          name={user?.email || user?.firstName || "Customer"}
                        />
                      )}
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    side="top"
                    align="end"
                    sideOffset={-35}
                    className="W-[264px] w-[280px] bg-[#171717] shadow-[0px_4px_6px_-1px_#000000] backdrop-blur-[6px] border border-[#262626]"
                  >
                    <div className="flex items-center justify-between gap-2 px-2 pt-1 pb-2">
                      <div className="flex items-center justify-start gap-2">
                        <div className="h-6 w-6 overflow-hidden rounded-full bg-[#171717]">
                          {user?.profileImage ? (
                            <img
                              src={user.profileImage}
                              alt="profile"
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <Avatar
                              size={40}
                              variant="beam"
                              name={user?.email || user?.firstName || "Customer"}
                            />
                          )}
                        </div>
                        <div className="flex flex-col">
                          <div className="web-subheadline text-[#FFFFFF]">
                            {user?.firstName}
                          </div>
                          <div className="web-caption text-[#A3A3A3]">
                            {user?.email}
                          </div>
                        </div>
                      </div>
                      <Button
                        hierarchy="label"
                        size="small"
                        onClick={() => setOpen(false)}
                      >
                        <Close />
                      </Button>
                    </div>
                    <div className="flex flex-col">
                      <DropdownMenuItem onSelect={handleLogOut}>
                        <SignOut />
                        <span>Sign Out</span>
                      </DropdownMenuItem>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  hierarchy="secondary"
                  size="small"
                  onClick={() => window.location.replace(loginRedirectUrl)}
                >
                  Login
                </Button>
              )}
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
  );
}
