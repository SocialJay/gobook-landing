import logo from "./assets/navigation/Logo.webp";
import avatarUser from "./assets/navigation/avatar.png"
import do1 from "./assets/whatwedo/1.svg";
import do2 from "./assets/whatwedo/2.svg";
import do3 from "./assets/whatwedo/3.svg";
import do4 from "./assets/whatwedo/4.svg";
import { Marquee } from "./components/ui/marquee";
import { CheckIcon } from "@phosphor-icons/react";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import logoBlock from "./assets/logo-block.png";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "./components/ui/Dialog";
import stadium from "./assets/marketplace/hero.png";
import { FiMenu } from "react-icons/fi";
import { events } from "./sampleData/Events";
import avatar1 from "./assets/marketplace/ReviewCards/avatar1.jpg";
import avatar2 from "./assets/marketplace/ReviewCards/avatar2.jpg";
import avatar3 from "./assets/marketplace/ReviewCards/avatar3.jpg";
import avatar4 from "./assets/marketplace/ReviewCards/avatar4.jpg";
import type { EventItem } from "./sampleData/Events";
import { faqs } from "./sampleData/faq";
import logo3D from "./assets/marketplace/3Dlogo.png";
import logo3Dback from "./assets/marketplace/3Dlogoback.png";
import React from "react";

function EventCard({ event }: { event: EventItem }) {
  return (
    <div
      tabIndex={0}
      className="group w-[243px] sm:w-[220px] md:w-[243px] h-[385px] p-1 cursor-pointer 
                 rounded-[10px] transition-all duration-500 ease-in-out bg-transparent 
                 hover:bg-gray-100/10 active:bg-gray-100/10 focus:bg-gray-100/10"
    >
      <div className="w-full h-full flex flex-col gap-3">
        <div
          className="relative overflow-hidden rounded-[4px] bg-[#111] flex items-center justify-center 
                     transition-all duration-500 ease-in-out group-hover:rounded-[10px]"
        >
          <img
            src={event.image}
            alt={event.title}
            className="object-cover w-full h-[311px] transition-all duration-700 ease-out origin-center 
                       group-hover:scale-105 group-hover:rounded-[10px]"
          />
        </div>

        <div className="h-[46px] px-3 flex flex-col justify-center">
          <div className="text-white text-[18px] font-inter font-medium break-words">
            {event.title}
          </div>
          <div className="text-[#737373] text-[12px] font-inter font-normal leading-[20px] break-words">
            {event.venue}, {event.date}
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewCard({
  name,
  username,
  body,
  avatar,
}: {
  name: string;
  username: string;
  body: string;
  avatar?: string;
}) {
  return (
    <figure
      className={cn(
        "w-fit min-w-[200px] max-w-[300px]",
        "h-[180px] sm:h-[203px] p-4 sm:p-6",
        "bg-[rgba(52,51,51,0.3)] rounded-[14px]",
        "border border-[rgba(140,140,140,0.12)] flex flex-col justify-between"
      )}
    >
      <div className="flex-1 overflow-hidden">
        <p className="text-[#A3A3A3] text-[14px] sm:text-[16px] font-medium leading-[20px] sm:leading-[22px] break-words line-clamp-5 sm:line-clamp-6">
          {body}
        </p>
      </div>

      <div className="flex items-center gap-2 mt-3 sm:mt-0">
        <img
          src={avatar}
          alt={name}
          className="w-8 h-8 sm:w-10 sm:h-10 min-w-[32px] min-h-[32px] rounded-full object-cover"
        />
        <div className="flex flex-col items-start">
          <span className="text-[#A3A3A3] text-[12px] sm:text-[14px] font-semibold leading-[18px] sm:leading-[21px]">
            {name}
          </span>
          <span className="text-[#737373] text-[10px] sm:text-[12px] font-normal leading-4 sm:leading-5">
            {username}
          </span>
        </div>
      </div>
    </figure>
  );
}

function TooltipInfo({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        onBlur={() => setOpen(false)}
        aria-haspopup="true"
        aria-expanded={open}
        className="w-4 h-4 flex items-center justify-center"
      >
        <Info className="w-[12px] h-[12px] text-[#737373]" />
      </button>

      <div
        role="tooltip"
        aria-hidden={!open}
        className={
          (open ? "flex " : "hidden ") +
          "absolute z-50 left-1/2 top-full mt-2 -translate-x-1/2 flex-col w-[160px] p-3 bg-[#0d0d0d] border border-[rgba(140,140,140,0.12)] rounded-[8px] text-[#A3A3A3] text-sm shadow-md hover:flex focus:flex"
        }
      >
        <div className="text-[13px]">{children}</div>
      </div>
    </div>
  );
}

export default function App() {
  const reviews = [
    {
      name: "Shobian",
      username: "Aura Entertainment",
      body: "With other platforms, we struggled with high fees and even system crashes during bookings.",
      avatar: avatar1,

    },
    {
      name: "Pravien Mahalingam",
      username: "Blaze Entertainment",
      body: "Our biggest concern was always the attendee experience.",
      avatar: avatar4,
    },
    {
      name: "Abithaaran",
      username: "247 Moments",
      body: "Other platforms limited flexibility and delayed payments.",
      avatar: avatar2
    },
    {
      name: "Pravien Mahalingam",
      username: "Blaze Entertainment",
      body: "Our biggest concern was always the attendee experience.",
      avatar: avatar4,
    },
    {
      name: "Abithaaran",
      username: "247 Moments",
      body: "Other platforms limited flexibility and delayed payments.",
      avatar: avatar2,
    },
    {
      name: "Shobian",
      username: "Aura Entertainment",
      body: "With other platforms, we struggled with high fees and even system crashes during bookings.",
      avatar: avatar1,
    },
    {
      name: "Dineth Gunasekare",
      username: "Plan Bee by SUSA",
      body: "Third Party Platforms are High fees, poor marketing, and unreliable ticket links, not worth the hassle.",
      avatar: avatar3,
    },
  ];
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <div className="relative min-h-screen overflow-x-hidden bg-black">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 pointer-events-none z-0"
          style={{
            height: "100vh",
            backgroundImage: `url(${stadium})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            backgroundSize: "cover",
          }}
        />
        <header
          className={cn(
            "fixed left-0 right-0 z-20 transition-all duration-300",
            scrolled
              ? "bg-[rgba(255,255,255,0.02)] backdrop-blur-[200px] border-b border-transparent [border-image:linear-gradient(90deg,rgba(130,133,138,0)_0%,rgba(226,232,240,0.04)_20%,rgba(226,232,240,0.1)_50%,rgba(226,232,240,0.04)_80%,rgba(130,133,138,0)_100%)_1]"
              : "bg-transparent backdrop-blur-[0px] border-b-0"
          )}
        >
          <div className="max-w-[1140px] mx-auto flex items-center justify-between px-4 sm:px-6 py-1">
            <a
              href="/"
              aria-label="Home"
              className="sm:w-auto flex items-center gap-2"
            >
              <img src={logo} alt="logo" className="w-[130px] h-[31px] object-contain" />
            </a>

            <div className="flex items-center">
              <a
                href="http://app.gobook.lk"
                className="text-sm text-[white] font-medium hidden sm:inline-block mr-8"
              >
                Host your Event
              </a>
              <button
                aria-label="Account"
                className="w-8 h-8 rounded-full overflow-hidden border border-white/10 flex items-center justify-center bg-white/10"
              >
                <img
                  src={avatarUser}
                  alt="User profile"
                  className="w-full h-full object-cover"
                />
              </button>

              <button aria-label="Menu" className="p-2 rounded-md hover:bg-white/5">
                <FiMenu className="w-6 h-6 sm:w-7 sm:h-7 text-[#A1A1AA]" />
              </button>
            </div>
          </div>
        </header>

        <main className="pt-[180px] bg-transparent relative z-10 w-full">
          <div className="w-full overflow-x-hidden">
            <section className="flex flex-col gap-4 mx-auto max-w-[1140px] relative z-20 px-4 sm:px-6">
              <div className="flex justify-center">
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: 4,
                    padding: "4px 12px",
                    background: "var(--Surface-Container-Foreground, #171717)",
                    borderRadius: 999,
                    outline: "1px solid var(--Surface-Border-Default, #3F3F46)",
                    outlineOffset: -1,
                    width: "auto",
                    height: "auto",
                  }}
                  aria-hidden={false}
                  title="Region"
                >
                  <div
                    style={{
                      color: "rgba(115, 115, 115, 1)",
                      fontSize: 14,
                      fontFamily:
                        'Inter',
                      fontWeight: 600,
                      lineHeight: "21px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Sri Lanka
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 pb-4">
                <h1 className="text-4xl sm:text-6xl font-semibold tracking-[-0.02em] text-white text-center font-Inter px-4">
                  Discover events that bring <br className="hidden sm:block" />
                  people together.
                </h1>
              </div>
            </section>
          </div>

          <section className="max-w-[1200px] mx-auto flex flex-col gap-6 py-20 pl-[80px] pr-[80px]">
            <div className="flex justify-center max-w-[1020px] h-[385px]">
              <div className="flex overflow-x-auto gap-4 pb-3 snap-x snap-mandatory scrollbar-hide max-w-full">
                {events.map((ev) => (
                  <div key={ev.id} className="snap-center flex-shrink-0 overflow-visible">
                    <EventCard event={ev} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="max-w-[1200px] mx-auto flex flex-col gap-8 py-10">
            <div className="flex flex-col gap-4 pb-2">
              <div className="flex flex-col items-center gap-4 px-4">
                <span className="text-sm tracking-widest text-[#A1A1AA]">
                  KNOW YOUR WORTH
                </span>
                <h1 className="text-3xl sm:text-6xl font-semibold tracking-[-0.02em] text-white text-center font-Instrument Sans leading-tight">
                  <span className="block sm:hidden">
                    Reviews about<br />third-party<br />Ticketing
                  </span>
                  <span className="hidden sm:block">
                    Reviews about <br />third-party Ticketing
                  </span>
                </h1>

              </div>
            </div>
            <div className="relative w-full flex flex-col items-center justify-center overflow-hidden">
              <div className="hidden sm:flex flex-col w-full items-center justify-center">
                <Marquee pauseOnHover className="[--duration:20s]">
                  {firstRow.map((review) => (
                    <div key={review.username} className="scale-90 sm:scale-100">
                      <ReviewCard {...review} />
                    </div>
                  ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                  {secondRow.map((review) => (
                    <div key={review.username} className="scale-90 sm:scale-100">
                      <ReviewCard {...review} />
                    </div>
                  ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-[500px] bg-gradient-to-r from-[#050505] to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-[500px] bg-gradient-to-l from-[#050505] to-transparent" />
              </div>

              <div className="sm:hidden w-full flex flex-col items-center justify-center gap-4 px-4 py-6">
                <div
                  className="w-full flex flex-col items-center justify-center gap-6"
                  onTouchStart={(e) => e.currentTarget.classList.add("pause-marquee")}
                  onTouchEnd={(e) => e.currentTarget.classList.remove("pause-marquee")}
                >
                  <div className="marquee-mobile">
                    {[...firstRow, ...firstRow].map((review, index) => (
                      <div key={`${review.username}-${index}`} className="mx-2 flex-shrink-0">
                        <ReviewCard {...review} />
                      </div>
                    ))}
                  </div>
                  <div className="marquee-mobile reverse">
                    {[...secondRow, ...secondRow].map((review, index) => (
                      <div key={`${review.username}-${index}`} className="mx-2 flex-shrink-0">
                        <ReviewCard {...review} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section className="max-w-[1400px] mx-auto py-30 text-center flex flex-col gap-16">
            <div className="flex flex-col gap-4 pb-2">
              <div className="flex flex-col items-center gap-4 px-4">
                <span className="text-sm tracking-widest text-[#A1A1AA]">
                  WHAT WE OFFER
                </span>
                <h1 className="text-3xl sm:text-6xl font-semibold tracking-[-0.02em] text-white text-center font-Instrument Sans leading-tight">
                  <span className="block sm:hidden">
                    Own your brand<br />and customer<br />experience.
                  </span>
                  <span className="hidden sm:block">
                    Own your brand, <br />customer experience.
                  </span>
                </h1>

              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <div
                  className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-4 sm:gap-4 sm:w-[1020px] px-4"
              >                
                <div className="w-full sm:w-[243px] py-4 px-5 sm:py-6 sm:px-6 flex flex-col items-center justify-start gap-4 bg-[rgba(43,43,43,0.3)] border border-[rgba(140,140,140,0.12)] rounded-[16px] backdrop-blur-sm">
                  <div className="w-[112px] h-[64px] flex items-center justify-center">
                    <img src={do1} alt="No Setup Fee" className="w-[64px] h-[64px] sm:w-[64px] sm:h-[64px]" />
                  </div>
                  <div className="flex flex-col items-center text-center gap-1">
                    <h4 className="text-[#F5F5F5] text-md sm:text-lg font-semibold w-[195px] font-Inter">
                      No Setup fee
                    </h4>
                    <p className="text-[#A3A3A3] text-[14px] leading-[21px] font-inter font-normal text-center w-[195px]">
                      Start selling without any upfront costs.
                    </p>
                  </div>
                </div>

                <div className="w-full sm:w-[243px] py-4 px-5 sm:py-6 sm:px-6 flex flex-col items-center justify-start gap-4 bg-[rgba(43,43,43,0.3)] border border-[rgba(140,140,140,0.12)] rounded-[16px] backdrop-blur-sm">
                  <div className="w-[112px] h-[64px] flex items-center justify-center">
                    <img src={do2} alt="Build your own platform" className="w-[64px] h-[64px] sm:w-[64px] sm:h-[64px]" />
                  </div>
                  <div className="flex flex-col items-center text-center gap-1">
                    <h4 className="text-[#F5F5F5] text-md sm:text-lg font-semibold w-[195px] font-Inter">
                      Build your own platform
                    </h4>
                    <p className="text-[#A3A3A3] text-[14px] leading-[21px] font-inter font-normal text-center w-[195px]">
                      Launch a fully branded booking system in 2 minutes.
                    </p>
                  </div>
                </div>

                <div className="w-full sm:w-[243px] py-4 px-5 sm:py-6 sm:px-6 flex flex-col items-center justify-start gap-4 bg-[rgba(43,43,43,0.3)] border border-[rgba(140,140,140,0.12)] rounded-[16px] backdrop-blur-sm">
                  <div className="w-[112px] h-[64px] flex items-center justify-center">
                    <img src={do3} alt="Know your customers" className="w-[64px] h-[64px] sm:w-[64px] sm:h-[64px]" />
                  </div>
                  <div className="flex flex-col items-center text-center gap-1">
                    <h4 className="text-[#F5F5F5] text-md sm:text-lg font-semibold w-[195px] font-Inter">
                      Know your customers
                    </h4>
                    <p className="text-[#A3A3A3] text-[14px] leading-[21px] font-inter font-normal text-center w-[195px]">
                      Gain insights with real-time analytics and reporting.
                    </p>
                  </div>
                </div>

                <div className="w-full sm:w-[243px] py-4 px-5 sm:py-6 sm:px-6 flex flex-col items-center justify-start gap-4 bg-[rgba(43,43,43,0.3)] border border-[rgba(140,140,140,0.12)] rounded-[16px] backdrop-blur-sm">
                  <div className="w-[112px] h-[64px] flex items-center justify-center">
                    <img src={do4} alt="Get paid faster" className="w-[64px] h-[64px] sm:w-[64px] sm:h-[64px]" />
                  </div>
                  <div className="flex flex-col items-center text-center gap-2 px-2">
                    <h4 className="text-[#F5F5F5] text-md sm:text-lg font-semibold w-[195px] font-Inter">
                      Get paid faster
                    </h4>
                    <p className="text-[#A3A3A3] text-[14px] leading-[21px] font-inter font-normal text-center w-[195px]">
                      Secure, seamless transactions straight to your account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-[1200px] mx-auto flex flex-col gap-8 py-10">
            <div className="flex flex-col gap-4 pb-2">
              <div className="flex flex-col items-center gap-4 px-4">
                <span className="text-sm tracking-widest text-[#A1A1AA]">
                  PRICING
                </span>
                <h1 className="text-3xl sm:text-6xl font-semibold tracking-[-0.02em] text-white text-center font-Instrument Sans leading-tight">
                  <span className="block sm:hidden">
                    Lets grow, <br />start free today.
                  </span>
                  <span className="hidden sm:block">
                    Lets grow, <br />start free today.
                  </span>
                </h1>
                <div className="w-full text-center flex flex-col justify-center text-[#737373] text-[20px] font-Inter font-medium leading-[36px]">
                  Use Gobook for free with unlimited events and guests.
                  <br />
                  Upgrade for advance features.
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6 items-stretch px-4">
              <div className="flex flex-col justify-between w-full sm:w-[410px] p-6 sm:p-8 bg-[#0d0d0d] border border-[rgba(140,140,140,0.12)] rounded-[12px] backdrop-blur-sm">
                <div className="flex flex-col gap-4 w-full pl-4">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-[#818CF8] text-[16px] font-semibold font-Inter">
                        STARTER
                      </h3>
                      <p className="text-[#A3A3A3] text-[14px] leading-[21px] font-normal font-Inter">
                        For Solo Entrepreneur
                      </p>
                    </div>
                    <div className="px-3 py-1 rounded-full border border-[rgba(38,38,38,0.3)] bg-[rgba(24,24,27,0.85)]">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB969] via-[#ED8CA3] via-[#CB81DB] to-[#A676D7] text-[14px] font-semibold leading-[21px] font-Inter">
                        Popular
                      </span>
                    </div>
                  </div>

                  <h2 className="text-[#F5F5F5] text-[48px] leading-[57.6px] font-semibold font-Inter">
                    Free
                  </h2>
                  <ul className="flex flex-col gap-2 w-full mt-2">
                    {[
                      "Branding (logo, Sub domain)",
                      "Unlimited events, guests",
                      "Email ticket confirmation",
                      "Analytics dashboard",
                      "Payment gateway integration",
                      "Event check in app",
                      "Multi type tickets",
                      "Transaction Fee: Up to 3.99%",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <div className="w-[15px] h-[15px] flex items-center justify-center">
                          <CheckIcon size={16} color="#A3A3A3" />
                        </div>
                        <span className="text-[#A3A3A3] text-[14px] font-Inter font-semibold leading-[21px]">
                          {item}
                        </span>
                        {item === "Branding (logo, Sub domain)" && (
                          <TooltipInfo>
                            Use your logo and a personalized link.
                          </TooltipInfo>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full h-[40px] mt-6 bg-[#F8FAFC]  border rounded-[8px] text-[#1E293B] text-[14px] font-Inter font-medium leading-[20px]">
                  Get Started
                </button>
              </div>
              <div className="flex flex-col justify-between w-full sm:w-[410px] p-6 sm:p-8 bg-[#0d0d0d] border border-[rgba(140,140,140,0.12)] rounded-[12px] backdrop-blur-sm">
                <div className="flex flex-col gap-6 w-full pl-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-[#FC9745] text-[16px] font-semibold font-Inter">
                        PRO
                      </h3>
                      <p className="text-[#A3A3A3] text-[14px] font-normal leading-[21px] font-Inter">
                        For Businesses
                      </p>
                    </div>

                    <h2 className="text-[#737373] text-[48px] font-semibold leading-[57.6px] font-Inter">
                      Coming Soon
                    </h2>
                  </div>
                  <ul className="flex flex-col gap-2 w-full font-Inter">
                    {[
                      "Branding (logo, Custom domain)",
                      "Unlimited events, guests",
                      "Email ticket confirmation",
                      "Advance Analytics dashboard",
                      "Payment gateway integration",
                      "Event check in app",
                      "Multi type tickets",
                      "Transaction Fee: Up to 3.49%",
                      "Early access to premium features",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <div className="w-[15px] h-[15px] flex items-center justify-center">
                          <CheckIcon size={16} color="#A3A3A3" />
                        </div>
                        <span className="text-[#A3A3A3] text-[14px] font-Inter font-semibold leading-[21px]">
                          {item}
                        </span>
                        {item === "Branding (logo, Custom domain)" && (
                          <TooltipInfo>
                            Use your logo and your own website link.
                          </TooltipInfo>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full h-[40px] mt-6 bg-[#27272A] border border-[#3F3F46] rounded-[8px] text-[#F8FAFC] text-[14px] font-Inter font-medium leading-[20px]">
                  <a
                    href="mailto:support@gobook.lk"
                  >
                    Contact Support
                  </a>
                </button>
              </div>
            </div>
          </section>

          <section className="w-full flex justify-center mt-6 px-4">
            <div className="w-full max-w-[844px] flex flex-col md:flex-row justify-between bg-[#0d0d0d] border border-[rgba(140,140,140,0.12)] rounded-[12px] p-6 sm:p-8 gap-2 md:gap-15">

              <div className="flex-1 flex flex-col justify-between gap-4 text-left order-2 md:order-1 mt-6 md:mt-0">
                <div className="flex flex-col gap-3 p-1">
                  <h3 className="text-white text-[22px] sm:text-[24px] font-Inter font-semibold leading-snug">
                    Hosting a large or complex event?
                  </h3>
                  <p className="text-[#A3A3A3] text-[13px] sm:text-[14px] font-Inter leading-[20px]">
                    We offer tailored plans for event pros with unique needs. Get personalised support,
                    customised pricing, and more by partnering with our sales team.
                  </p>
                </div>

                <button className="w-full md:w-fit px-4 py-2 bg-[#27272A] border border-[#3F3F46] text-[#F5F5F5] text-[14px] font-Inter font-medium rounded-[8px] hover:bg-[#3F3F46] transition-all duration-200 mx-auto md:mx-0">
                  <a
                    href="mailto:support@gobook.lk"
                  >
                    Contact Support
                  </a>
                </button>
              </div>

              <div className="flex-1 relative w-full md:w-[280px] h-[220px] md:h-[280px] rounded-[12px] overflow-hidden flex justify-center items-center bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] order-1 md:order-2">
                <img
                  src={logo3Dback}
                  alt="Gradient Background"
                  className="absolute inset-0 w-full h-full object-cover rounded-[12px] opacity-20"
                />
                <img
                  src={logo3D}
                  alt="3D Ticket Logo"
                  className="relative z-10 w-[190px] sm:w-[250px] h-auto object-contain"
                />
              </div>
            </div>
          </section>

          <section className="w-full flex flex-col items-center justify-center gap-12 py-20 px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <p className="uppercase text-[#A3A3A3] text-[14px] font-Inter font-medium tracking-[0.7px]">
                FAQ
              </p>
              <h2 className="text-[#F5F5F5] text-[36px] sm:text-[60px] font-instrument font-semibold leading-[42px] sm:leading-[72px]">
                Early Doubts
              </h2>
            </div>
            <div className="max-w-[800px] w-full mx-auto">
              <Accordion
                type="single"
                collapsible
                className="w-full flex flex-col gap-3"
                defaultValue="item-1"
              >
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index + 1}`}>
                    <AccordionTrigger className="text-[#A3A3A3] text-[14px] font-semibold  rounded-[10px] px-6 py-4 transition-all">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-left px-6 pb-4 text-[#737373]">
                      <p>{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-[#737373] text-[14px] font-Inter font-normal leading-[20px]">
                Still have questions?{" "}
                <a
                  href="https://www.instagram.com/gobook.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#93C5FD] text-[14px] font-Inter font-normal leading-[20px] hover:underline cursor-pointer"
                >
                  DM us on Instagram
                </a>
              </span>
            </div>
          </section>

          <section className="w-full flex flex-col items-center justify-center text-center py-16 sm:py-20 px-4 bg-black">
            <div className="flex flex-col items-center justify-center gap-2 sm:gap-4 mb-8">
              <div className="flex flex-col items-center justify-center sm:hidden">
                <img
                  src={logoBlock}
                  alt="Gobook icon"
                  className="w-[174px] h-[120px] mb-2"
                />
              </div>
              <img
                src={logoBlock}
                alt="Gobook logo"
                className="hidden sm:block w-[174px] h-[48px] sm:h-[120px]"
              />
            </div>
            <h3 className="text-white text-[40px] sm:text-[60px] font-semibold leading-tight max-w-[880px] mb-8 font-Instrument">
              For everyone from <br className="sm:hidden" />
              entrepreneurs to enterprise
            </h3>
            <button className="sm:w-auto sm:px-4 px-23 py-2 bg-white text-[#111] text-[14px] font-medium rounded-[8px] hover:bg-gray-100 transition-all duration-200">
              Get started free
            </button>
          </section>

          <footer className="w-full bg-black text-[#A3A3A3] py-6 px-6 xl:px-80 mt-2 xl:mt-25 flex flex-col xl:flex-row items-center xl:justify-between gap-6 xl:gap-0 text-left xl:text-left max-[1200px]:flex-col max-[1200px]:gap-6 max-[1200px]:items-center max-[1200px]:justify-center">
            <div className="flex items-center justify-center sm:justify-start text-sm text-[#A3A3A3] mb-5">
              <a href="#" className="text-[#60A5FA] hover:underline">
                Become a Host
              </a>
              <span className="mx-1.5">•</span>
              <span>with gobook</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-5 text-sm">
              <a
                href="mailto:support@gobook.lk"
                className="hover:text-white transition-colors duration-200 mb-5"
              >
                Contact us
              </a>

              <Dialog>
                <DialogTrigger asChild>
                  <button className="hover:text-white transition-colors duration-200 mb-5">
                    Privacy Policy
                  </button>
                </DialogTrigger>
                <DialogContent
                  title="Privacy Policy"
                  subTitle=""
                  showCloseButton={true}
                  className="max-w-[600px] w-full"
                  primaryButtonLabel="Confirm"
                >
                  <div className="h-full overflow-y-auto flex flex-col gap-4 scrollbar-hide pb-2">
                    <div className="flex flex-col gap-1">
                      <div className="text-[#F5F5F5] text-[14px] font-inter font-semibold leading-[21px]">
                        Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </div>
                      <div className="text-[#A3A3A3] text-[14px] font-inter font-normal leading-[21px]">
                        By using Gobook ("we," "us," or "our"), you ("Tenant" or "Customer") agree to these Terms & Conditions. If you do not agree with any part of these terms, please do not use our platform or services.
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="text-[#F5F5F5] text-[14px] font-inter font-normal leading-[21px]">
                        1. Information We Collect
                      </div>
                      <div className="text-[#A3A3A3] text-[14px] font-inter font-normal leading-[21px]">
                        • Our platform allows Customers to book services provided by Tenants.<br />
                        • All use of the platform must comply with applicable laws and these Terms.<br />
                        • Users must provide accurate and complete information when registering and making bookings.
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="text-[#F5F5F5] text-[14px] font-inter font-normal leading-[21px]">
                        2. How We Use Your Information
                      </div>
                      <div className="text-[#A3A3A3] text-[14px] font-inter font-normal leading-[21px]">
                        We use your information to:<br />
                        • Process bookings and manage services.<br />
                        • Communicate confirmations, updates, and notifications.<br />
                        • Provide customer and tenant support.<br />
                        • Personalize and improve the platform experience.<br />
                        • Comply with legal obligations.
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <button className="hover:text-white transition-colors duration-200 mb-5">
                    Terms & Conditions
                  </button>
                </DialogTrigger>
                <DialogContent
                  title="Terms & Conditions"
                  subTitle=""
                  showCloseButton={true}
                  className="max-w-[600px] w-full"
                  primaryButtonLabel="Agree"
                >
                  <div className="h-full overflow-y-auto flex flex-col gap-4 scrollbar-hide pb-2">
                    <div className="flex flex-col gap-1">
                      <div className="text-[#F5F5F5] text-[14px] font-inter font-semibold leading-[21px]">
                        Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </div>
                      <div className="text-[#A3A3A3] text-[14px] font-inter font-normal leading-[21px]">
                        By using Gobook ("we," "us," or "our"), you ("Tenant") agree to these Terms & Conditions.
                        If you do not agree with any part of these terms, please do not use our platform or services.
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="text-[#F5F5F5] text-[14px] font-inter font-normal leading-[21px]">
                        1. Use of Platform
                      </div>
                      <div className="text-[#A3A3A3] text-[14px] font-inter font-normal leading-[21px]">
                        • Our platform enables Tenants to offer their services for booking.<br />
                        • All use of the platform must comply with applicable laws and these Terms.<br />
                        • Tenants must provide accurate and complete information when registering and managing their services.
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="text-[#F5F5F5] text-[14px] font-inter font-normal leading-[21px]">
                        2. Tenant Terms
                      </div>
                      <div className="text-[#A3A3A3] text-[14px] font-inter font-normal leading-[21px]">
                        • <span className="font-semibold">Payment to Tenants:</span> Tenants receive revenue generated from bookings minus platform service fee, credited weekly.<br />
                        • <span className="font-semibold">Setup Costs:</span> We do not charge any setup fees to Tenants.<br />
                        • <span className="font-semibold">Service Fulfilment:</span> Tenants are solely responsible for fulfilling bookings and delivering services.<br />
                        • <span className="font-semibold">Customer Data Access:</span> Tenants may only access customer data for internal use directly related to service delivery. Misuse is strictly prohibited.
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="text-[#F5F5F5] text-[14px] font-inter font-normal leading-[21px]">
                        3. Fees and Billing
                      </div>
                      <div className="text-[#A3A3A3] text-[14px] font-inter font-normal leading-[21px]">
                        • Platform service fees are deducted automatically from each transaction.<br />
                        • Tenants' net earnings are credited to their billing account weekly.<br />
                        • All fees are inclusive of platform service charges.
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="text-[#F5F5F5] text-[14px] font-inter font-normal leading-[21px]">
                        4. Purchase Policy
                      </div>
                      <div className="text-[#A3A3A3] text-[14px] font-inter font-normal leading-[21px]">
                         <span className="font-semibold">Payment Methods:</span> GoBook accepts Visa, MasterCard, American Express, select Debit Cards, and Net Banking.<br />
                         <span className="font-semibold">Who You Are Buying From:</span> GoBook acts as an agent on behalf of service providers ("Tenants").<br />
                         <span className="font-semibold">Pricing and Availability:</span> GoBook does not control the inventory or pricing of services listed.<br />
                         <span className="font-semibold">Internet Handling Fees and Order Processing Fees:</span> Bookings may include applicable fees per order or per ticket.<br />
                         <span className="font-semibold">Order Confirmation:</span> If you do not receive confirmation, verify via booking history or contact support.<br />
                         <span className="font-semibold">Refunds and Exchanges:</span> Bookings are final once confirmed. No refunds or exchanges for lost or damaged tickets.
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="text-[#F5F5F5] text-[14px] font-inter font-normal leading-[21px]">
                        5. Cancellation Policy
                      </div>
                      <div className="text-[#A3A3A3] text-[14px] font-inter font-normal leading-[21px]">
                         <span className="font-semibold">Tenant-Initiated:</span> Customers receive full refunds. Tenants bear any transaction costs.<br />
                         <span className="font-semibold">Customer-Initiated:</span> Refunds depend on Tenant's cancellation policy.<br />
                         <span className="font-semibold">Force Majeure:</span> Neither party is liable for events beyond reasonable control.<br />
                         <span className="font-semibold">Transaction Fees:</span> Third-party transaction fees are generally non-refundable.
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="text-[#F5F5F5] text-[14px] font-inter font-normal leading-[21px]">
                        6. Billing Information Verification
                      </div>
                      <div className="text-[#A3A3A3] text-[14px] font-inter font-normal leading-[21px]">
                        Bookings may require verified billing details. Incorrect data can lead to cancellation.
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="text-[#F5F5F5] text-[14px] font-inter font-normal leading-[21px]">
                        7. Delivery
                      </div>
                      <div className="text-[#A3A3A3] text-[14px] font-inter font-normal leading-[21px]">
                         <span className="font-semibold">Email Confirmation:</span> Booking confirmations will be sent via email.
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="text-[#F5F5F5] text-[14px] font-inter font-normal leading-[21px]">
                        8. Cancelled / Postponed Events
                      </div>
                      <div className="text-[#A3A3A3] text-[14px] font-inter font-normal leading-[21px]">
                        Tenants are fully responsible for refunds as per their own policy. GoBook facilitates but is not liable.
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="text-[#F5F5F5] text-[14px] font-inter font-normal leading-[21px]">
                        9. Data Use and Privacy
                      </div>
                      <div className="text-[#A3A3A3] text-[14px] font-inter font-normal leading-[21px]">
                         Personal information is handled according to our Privacy Policy.<br />
                         Tenants must comply with data protection rules and may not misuse customer data.<br />
                         Misuse may lead to suspension or termination.
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="text-[#F5F5F5] text-[14px] font-inter font-normal leading-[21px]">
                        10. Limitation of Liability
                      </div>
                      <div className="text-[#A3A3A3] text-[14px] font-inter font-normal leading-[21px]">
                         The platform acts solely as a facilitator.<br />
                         We are not liable for any damages from services offered by Tenants.<br />
                         Use of the platform is at your own risk.
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="text-[#F5F5F5] text-[14px] font-inter font-normal leading-[21px]">
                        11. Termination
                      </div>
                      <div className="text-[#A3A3A3] text-[14px] font-inter font-normal leading-[21px]">
                         We may suspend or terminate Tenant accounts for violations.<br />
                         Termination does not relieve outstanding fees.
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="text-[#F5F5F5] text-[14px] font-inter font-normal leading-[21px]">
                        12. Changes to Terms
                      </div>
                      <div className="text-[#A3A3A3] text-[14px] font-inter font-normal leading-[21px]">
                        We may update these Terms periodically. Continued use means acceptance of the updated Terms.
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="text-[#F5F5F5] text-[14px] font-inter font-normal leading-[21px]">
                        13. Governing Law
                      </div>
                      <div className="text-[#A3A3A3] text-[14px] font-inter font-normal leading-[21px]">
                        These Terms are governed by the laws of the Democratic Socialist Republic of Sri Lanka.
                        Disputes fall under the jurisdiction of Colombo courts.
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

