import logo from "./assets/logo.svg";
// import hero from "./assets/hero.png";
// import middle from "./assets/middle.png";
import do1 from "./assets/whatwedo/1.svg";
import do2 from "./assets/whatwedo/2.svg";
import do3 from "./assets/whatwedo/3.svg";
import do4 from "./assets/whatwedo/4.svg";
import { Marquee } from "./components/ui/marquee";
import ReviewCard from "./components/ui/ReviewCard";
import { CheckIcon } from "@phosphor-icons/react";
import { Info } from "lucide-react";


// import pricingBanner from "./assets/pricing-banner.png";
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
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "./components/ui/Dialog";
import { format } from "date-fns";
import stadium from "./assets/marketplace/hero.png";
import { FiMenu } from "react-icons/fi";
import EventCard from "./components/ui/eventCard";
import { events } from "./sampleData/Events";
import avatar from "./assets/marketplace/ReviewCards/avatar.jpg";


export default function App() {
  const reviews = [
    {
      name: "Shobian",
      username: "Aura Entertainment",
      body: "With other platforms, we struggled with high fees and even system crashes during bookings.",
      avatar: avatar,

    },
    {
      name: "Pravien Mahalingam",
      username: "Blaze Entertainment",
      body: "Our biggest concern was always the attendee experience.",
      avatar: avatar,
    },
    {
      name: "Abithaaran",
      username: "247 Moments",
      body: "Other platforms limited flexibility and delayed payments.",
      avatar: avatar,
    },
    {
      name: "Pravien Mahalingam",
      username: "Blaze Entertainment",
      body: "Our biggest concern was always the attendee experience.",
      avatar: avatar,
    },
    {
      name: "Abithaaran",
      username: "247 Moments",
      body: "Other platforms limited flexibility and delayed payments.",
      avatar: avatar,
    },
    {
      name: "Shobian",
      username: "Aura Entertainment",
      body: "With other platforms, we struggled with high fees and even system crashes during bookings.",
      avatar: avatar,
    },
  ];
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

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
        <header className="fixed left-0 right-0 bg-transparent z-20 backdrop-blur-[0px] py-2">
          <div className="max-w-[1140px] mx-auto flex items-center justify-between px-4 sm:px-6">
            <a href="/" aria-label="Home" className="w-[120px] sm:w-auto">
              <img src={logo} alt="Gobook" className="w-full h-auto" />
            </a>
            <div className="flex items-center gap-3 sm:gap-6">
              <a
                href="http://app.gobook.lk"
                className="text-sm text-[white] font-medium hidden sm:inline-block"
              >
                Host your Event
              </a>
              <button
                aria-label="Account"
                className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center"
              >
                <span className="text-xs text-white/90">A</span>
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
                <span
                  className="inline-block bg-gray-100/10 text-[#a0a1a2] text-sm font-medium px-3 py-1 rounded-full
+                            border border-gray-700 backdrop-blur-sm"
                  aria-hidden="false"
                  title="Region"
                >
                  Sri Lanka
                </span>
              </div>
              <div className="flex flex-col gap-4 pb-4">
                <h1 className="text-4xl sm:text-6xl font-semibold tracking-[-0.02em] text-white text-center font-Inter px-4">
                  Discover events that bring <br className="hidden sm:block" />
                  people together.
                </h1>
              </div>
            </section>
          </div>
          <section className="max-w-[1200px] mx-auto flex flex-col gap-6 py-20">
            <div className="flex justify-center">
              <div className="flex overflow-x-auto gap-2 pb-3 snap-x snap-mandatory scrollbar-hide max-w-full">
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
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
              <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                  <div className="scale-90 sm:scale-100">
                    <ReviewCard key={review.username} {...review} />
                  </div>
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                  <div className="scale-90 sm:scale-100">
                    <ReviewCard key={review.username} {...review} />
                  </div>
                ))}
              </Marquee>
              <div className="hidden sm:block pointer-events-none absolute inset-y-0 left-0 w-[500px] bg-gradient-to-r from-[#050505] to-transparent" />
              <div className="hidden sm:block pointer-events-none absolute inset-y-0 right-0 w-[500px] bg-gradient-to-l from-[#050505] to-transparent" />
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
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <div className="w-full max-w-[250px] h-[240px] sm:h-[250px] p-4 sm:p-6 flex flex-col items-center justify-start gap-4 bg-[rgba(43,43,43,0.3)] border border-[rgba(140,140,140,0.12)] rounded-[16px] backdrop-blur-sm">
                <img src={do1} alt="No Setup Fee" className="w-14 h-14 sm:w-17 sm:h-17" />
                <div className="flex flex-col items-center text-center gap-1 mt-3">
                  <h4 className="text-[#F5F5F5] text-md sm:text-lg font-semibold font-Inter">
                    No Setup fee
                  </h4>
                  <p className="text-[#A3A3A3] text-xs sm:text-sm font-normal leading-[18px] font-Inter">
                    Start selling without any upfront costs.
                  </p>
                </div>
              </div>

              <div className="w-full max-w-[250px] h-[240px] sm:h-[250px] p-4 sm:p-6 flex flex-col items-center justify-start gap-4 bg-[rgba(43,43,43,0.3)] border border-[rgba(140,140,140,0.12)] rounded-[16px] backdrop-blur-sm">
                <img src={do2} alt="Build your own platform" className="w-14 h-14 sm:w-17 sm:h-17" />
                <div className="flex flex-col items-center text-center gap-1 mt-3">
                  <h4 className="text-[#F5F5F5] text-md sm:text-lg font-semibold font-Inter">
                    Build your own platform
                  </h4>
                  <p className="text-[#A3A3A3] text-xs sm:text-sm font-normal leading-[18px] font-Inter">
                    Launch a fully branded booking system in 2 minutes.
                  </p>
                </div>
              </div>

              <div className="w-full max-w-[250px] h-[240px]  sm:h-[250px] p-4 sm:p-6 flex flex-col items-center justify-start gap-4 bg-[rgba(43,43,43,0.3)] border border-[rgba(140,140,140,0.12)] rounded-[16px] backdrop-blur-sm">
                <img src={do3} alt="Know your customers" className="w-14 h-14 sm:w-17 sm:h-17" />
                <div className="flex flex-col items-center text-center gap-1 mt-3">
                  <h4 className="text-[#F5F5F5] text-md sm:text-lg font-semibold font-Inter">
                    Know your customers
                  </h4>
                  <p className="text-[#A3A3A3] text-xs sm:text-sm font-normal leading-[18px] font-Inter">
                    Gain insights with real-time analytics and reporting.
                  </p>
                </div>
              </div>

              <div className="w-full max-w-[250px] h-[240px] sm:h-[250px] p-4 sm:p-6 flex flex-col items-center justify-start gap-4 bg-[rgba(43,43,43,0.3)] border border-[rgba(140,140,140,0.12)] rounded-[16px] backdrop-blur-sm">
                <img src={do4} alt="Get paid faster" className="w-14 h-14 sm:w-17 sm:h-17" />
                <div className="flex flex-col items-center text-center gap-1">
                  <h4 className="text-[#F5F5F5] text-md sm:text-lg font-semibold font-Inter">
                    Get paid faster
                  </h4>
                  <p className="text-[#A3A3A3] text-xs sm:text-sm font-normal leading-[18px] font-Inter">
                    Secure, seamless transactions straight to your account.
                  </p>
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
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6 items-stretch">
              <div className="flex flex-col justify-between w-[410px] min-h-[580px] p-8 bg-[#0d0d0d] border border-[rgba(140,140,140,0.12)] rounded-[12px] backdrop-blur-sm">
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
                          <Info className="w-[12px] h-[12px] text-[#737373]" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full h-[40px] mt-6 bg-[#F8FAFC]  border rounded-[8px] text-[#1E293B] text-[14px] font-Inter font-medium leading-[20px]">
                  Get Started
                </button>
              </div>
              <div className="flex flex-col justify-between w-[410px] min-h-[580px] p-8 bg-[#0d0d0d] border border-[rgba(140,140,140,0.12)] rounded-[12px] backdrop-blur-sm">
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
                          <Info className="w-[12px] h-[12px] text-[#737373]" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full h-[40px] mt-6 bg-[#27272A] border border-[#3F3F46] rounded-[8px] text-[#F8FAFC] text-[14px] font-Inter font-medium leading-[20px]">
                  Contact Support
                </button>
              </div>
            </div>
          </section>
          <section id="faq" className="text-center flex flex-col gap-12 py-12">
            <div className="flex flex-col gap-4">
              <h4 className="uppercase font-medium text-[#1E293B] text-sm">
                Faq
              </h4>
              <h2 className="text-6xl font-semibold tracking-[-0.02em] font-instrument text-[#1E293B] text-center">
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
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is Gobook?</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-left">
                    <p>
                      Gobook is a customizable online booking platform designed to
                      simplify scheduling and management.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Can I fully brand the booking platform as my own?
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-left">
                    <p>
                      Yes, you can white-label Gobook to match your brand
                      identity.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    How long does it take to get started?
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-left">
                    <p>You can set up and start using Gobook within minutes.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Can I integrate payments and manage transactions?
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-left">
                    <p>
                      Yes, Gobook supports seamless payment integration and
                      transaction management.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    Will I be able to track bookings, customer and revenue?
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-left">
                    <p>
                      Absolutely, Gobook provides real-time tracking of bookings,
                      customers, and revenue.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    Is there support if I run into issues?
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-left">
                    <p>
                      Yes, our support team is always available to assist you.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="text-[#475569] text-lg font-medium leading-9">
              Still have questions? DM us on{" "}
              <a
                href="https://www.instagram.com/gobook.official"
                className="font-bold"
              >
                Instagram
              </a>
            </div>
          </section>
          <section className="py-16 max-w-[1440px] w-full max-h-[800px] h-full text-center mx-auto">
            <div className="py-16">
              <div className="pb-6 flex flex-col gap-6">
                <div className="flex justify-center">
                  <img
                    src={logoBlock}
                    alt="Gobook Logo"
                    className="w-[174px] h-[120px]"
                  />
                </div>
                <div className="text-[#1E293B] font-semibold text-6xl leading-[72px] font-instrument">
                  For everyone from
                  <br />
                  entrepreneurs to enterprise
                </div>
              </div>
              <a
                href="http://app.gobook.lk"
                className="bg-[#0F172A] rounded-[8px] p-4 min-w-20 w-fit mx-auto text-[#F8FAFC] text-sm font-semibold leading-[21px] mt-4"
              >
                Get started free
              </a>
            </div>
          </section>
          <footer className="max-w-[1400px] mx-auto flex justify-between py-16">
            <p className="text-sm font-normal leading-5 text-[#A1A1AA]">
              Copyright © 2025 gobook
            </p>
            <ul className="flex gap-8">
              <li className="text-[#A1A1AA] text-sm leading-5">
                <a href="mailto:support@gobook.lk">Contact us</a>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger className="text-[#A1A1AA] text-sm leading-5 cursor-pointer">
                    Privacy Policy
                  </DialogTrigger>
                  <DialogContent
                    title="Privacy Policy"
                    subTitle=""
                    showCloseButton={false}
                    primaryButtonLabel="Confirm"
                  >
                    <DialogHeader>
                      <DialogDescription className="flex flex-col gap-4 h-[497px] overflow-y-auto">
                        <div className="flex flex-col gap-1">
                          <div className="text-sm font-semibold text-[#1E293B]">
                            Effective Date: {format(Date.now(), "yyyy/MM/dd")}
                          </div>
                          <p className="text-sm font-normal text-[#475569]">
                            Gobook (“we,” “us,” or “our”) values your privacy and
                            is committed to protecting the personal data of all
                            users (“you”) who access our platform, including
                            Tenants offering services and Customers booking
                            services. This Privacy Policy explains how we collect,
                            use, store, and share your information, and your
                            rights regarding that data. By using our platform, you
                            agree to the practices described herein.
                          </p>
                        </div>
                        <div>
                          <span className="text-sm font-normal text-[#1E293B]">
                            1. Information We Collect
                          </span>
                          <p className="text-[#475569]">
                            We collect personal and non-personal information
                            necessary to provide our platform services, including:
                          </p>
                          <ul className="list-disc pl-5">
                            <li className="text-[#475569]">
                              <b>Personal Information:</b> Name, email, phone
                              number, billing address, and other details provided
                              when creating an account or making a booking.
                            </li>
                            <li className="text-[#475569]">
                              <b>Booking/Service Information:</b> Details of
                              services booked or offered, dates, times, and notes
                              shared between Tenants and Customers.
                            </li>
                            <li className="text-[#475569]">
                              <b>Payment Information:</b> Processed via secure
                              third-party payment providers; full payment
                              credentials are not stored by us.
                            </li>
                            <li className="text-[#475569]">
                              <b>Usage Data:</b> IP address, device, browser type,
                              and activity patterns collected via cookies or
                              similar technologies for analytics and improving our
                              platform.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <span className="text-sm font-normal text-[#1E293B]">
                            2. How We Use Your Information
                          </span>
                          <p className="text-[#475569]">
                            We use your information to:
                          </p>
                          <ul className="list-disc pl-5">
                            <li className="text-[#475569]">
                              Process bookings and manage services.
                            </li>
                            <li className="text-[#475569]">
                              Communicate confirmations, updates, and
                              notifications.
                            </li>
                            <li className="text-[#475569]">
                              Provide customer and tenant support.
                            </li>
                            <li className="text-[#475569]">
                              Personalize and improve the platform experience.
                            </li>
                            <li className="text-[#475569]">
                              Comply with legal obligations.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <span className="text-sm font-normal text-[#1E293B]">
                            3. Data Access and Sharing
                          </span>
                          <ul className="list-disc pl-5">
                            <li className="text-[#475569]">
                              <b>Tenants</b> may access Customer information{" "}
                              <b>only for service delivery purposes.</b> Misuse of
                              data is prohibited.
                            </li>
                            <li className="text-[#475569]">
                              We may share necessary information with third-party
                              service providers (e.g., payment processors){" "}
                              <b>only to facilitate platform operations.</b>
                            </li>
                            <li className="text-[#475569]">
                              We do not sell, trade, or share personal information
                              for unrelated commercial purposes.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <span className="text-sm font-normal text-[#1E293B]">
                            4. Data Security and Storage
                          </span>
                          <ul className="list-disc pl-5">
                            <li className="text-[#475569]">
                              Reasonable technical, administrative, and physical
                              measures are implemented to protect data.
                            </li>
                            <li className="text-[#475569]">
                              Data is stored on secure servers or trusted
                              third-party cloud providers.
                            </li>
                            <li className="text-[#475569]">
                              No system is completely secure; use of our platform
                              is at your own risk.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <span className="text-sm font-normal text-[#1E293B]">
                            5. Retention of Data
                          </span>
                          <ul className="list-disc pl-5">
                            <li className="text-[#475569]">
                              Personal information is retained while accounts are
                              active or as needed for service delivery.
                            </li>
                            <li className="text-[#475569]">
                              Booking and transaction data may be retained for
                              legal compliance, reporting, or operational
                              purposes.
                            </li>
                            <li className="text-[#475569]">
                              Users may request deletion of personal data, subject
                              to legal and contractual obligations.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <span className="text-sm font-normal text-[#1E293B]">
                            6. Cookies and Tracking
                          </span>
                          <ul className="list-disc pl-5">
                            <li className="text-[#475569]">
                              Cookies and similar technologies are used to monitor
                              usage, maintain sessions, and personalize content.
                            </li>
                            <li className="text-[#475569]">
                              Users can manage or disable cookies via browser
                              settings, but some features may not function
                              correctly without them.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <span className="text-sm font-normal text-[#1E293B]">
                            7. Your Rights
                          </span>
                          <p className="text-[#475569]">
                            Depending on your jurisdiction, you may have rights
                            to:
                          </p>
                          <ul className="list-disc pl-5">
                            <li className="text-[#475569]">
                              Access and obtain a copy of your personal data.
                            </li>
                            <li className="text-[#475569]">
                              Correct or delete your personal data.
                            </li>
                            <li className="text-[#475569]">
                              Object to or restrict processing of your personal
                              data.
                            </li>
                            <li className="text-[#475569]">
                              Withdraw consent for marketing communications.
                            </li>
                          </ul>
                          <p className="text-[#475569]">
                            Contact us at support@gobook.lk to exercise your
                            rights.
                          </p>
                        </div>
                        <div>
                          <span className="text-sm font-normal text-[#1E293B]">
                            8. Children’s Privacy
                          </span>
                          <ul className="list-disc pl-5">
                            <li className="text-[#475569]">
                              Our platform is not intended for children under 16.
                            </li>
                            <li className="text-[#475569]">
                              We do not knowingly collect personal information
                              from minors.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <span className="text-sm font-normal text-[#1E293B]">
                            9. Changes to this Privacy Policy
                          </span>
                          <p className="text-[#475569]">
                            We may update this Privacy Policy periodically.
                            Material changes will be communicated via the platform
                            or email. Continued use of the platform constitutes
                            acceptance of the updated policy.
                          </p>
                        </div>
                        <div>
                          <span className="text-sm font-normal text-[#1E293B]">
                            10. Contact Us
                          </span>
                          <p className="text-[#475569]">
                            For questions or concerns regarding this Privacy
                            Policy or your personal data:
                          </p>
                          <b>Gobook Email:</b> support@gobook.lk
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger className="text-[#A1A1AA] text-sm leading-5 cursor-pointer">
                    Terms & Conditions
                  </DialogTrigger>
                  <DialogContent
                    title="Terms & Conditions"
                    subTitle="Please review and agree our Terms & Conditions to continue."
                    showCloseButton={false}
                    primaryButtonLabel="Agree"
                  >
                    <DialogHeader>
                      <DialogDescription className="flex flex-col gap-4 h-[497px] overflow-y-auto">
                        <div className="flex flex-col gap-1">
                          <div className="text-sm font-semibold text-[#1E293B]">
                            Effective Date: {format(Date.now(), "yyyy/MM/dd")}
                          </div>
                          <p className="text-sm font-normal text-[#475569]">
                            By using Gobook (“we,” “us,” or “our”), you (“Tenant”
                            ) agree to these Terms & Conditions. If you do not
                            agree with any part of these terms, please do not use
                            our platform or services.
                          </p>
                        </div>
                        <div>
                          <span className="text-sm font-normal text-[#1E293B]">
                            1. Use of Platform
                          </span>
                          <ul className="list-disc pl-5">
                            <li className="text-[#475569]">
                              Our platform enables Tenants to offer their services
                              for booking.
                            </li>
                            <li className="text-[#475569]">
                              All use of the platform must comply with applicable
                              laws and these Terms.
                            </li>
                            <li className="text-[#475569]">
                              Tenants must provide accurate and complete
                              information when registering and managing their
                              services.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <span className="text-sm font-normal text-[#1E293B]">
                            2. Tenant Terms
                          </span>
                          <ul className="list-disc pl-5">
                            <li className="text-[#475569]">
                              <b>Payment to Tenants:</b> Tenants receive the
                              revenue generated from bookings minus platform
                              service fee, credited to their billing account on a
                              weekly basis.
                            </li>
                            <li className="text-[#475569]">
                              <b>Setup Costs:</b> We do not charge any setup fees
                              to Tenants.
                            </li>
                            <li className="text-[#475569]">
                              <b>Service Fulfilment:</b> Tenants are solely
                              responsible for fulfilling bookings and delivering
                              the services they list on the platform.
                            </li>
                            <li className="text-[#475569]">
                              <b>Customer Data Access:</b> Tenants may only access
                              customer data for internal use directly related to
                              service delivery. Misuse of data is strictly
                              prohibited.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <span className="text-sm font-normal text-[#1E293B]">
                            3. Fees and Billing
                          </span>
                          <ul className="list-disc pl-5">
                            <li className="text-[#475569]">
                              Platform service fees are deducted automatically
                              from each transaction.
                            </li>
                            <li className="text-[#475569]">
                              Tenants’ net earnings (after deduction of service
                              fees) are credited to their billing account weekly.
                            </li>
                            <li className="text-[#475569]">
                              All fees are inclusive of platform service charges.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <span className="text-sm font-normal text-[#1E293B]">
                            4. Purchase Policy
                          </span>
                          <ul className="list-disc pl-5">
                            <li className="text-[#475569]">
                              <b>Payment Methods:</b>
                              GoBook accepts Visa, MasterCard, American Express,
                              select Debit Cards, and Net Banking. Other payment
                              methods may be added from time to time.
                            </li>
                            <li className="text-[#475569]">
                              <b>Who You Are Buying From:</b> GoBook acts as the
                              agent on behalf of service providers (“Tenants”) who
                              list their services on the platform. When you make a
                              booking, GoBook handles the transaction and collects
                              payment on behalf of the Tenant.
                            </li>
                            <li className="text-[#475569]">
                              <b>Pricing and Availability:</b> GoBook facilitates
                              bookings on behalf of Tenants and does not control
                              the inventory, availability, or pricing of the
                              services listed.
                            </li>
                            <li className="text-[#475569]">
                              <b>
                                Internet Handling Fees and Order Processing Fees:
                              </b>{" "}
                              Tickets purchased on GoBook are subject to a per
                              ticket internet handling fee and a non-refundable
                              per order processing fee.
                            </li>
                            <li className="text-[#475569]">
                              <b>Order Confirmation:</b> If you do not receive a
                              confirmation number (via a confirmation page or
                              email) after submitting your payment information, or
                              if you experience an error message or service
                              interruption during the booking process, it is your
                              responsibility to verify your booking through your
                              booking history or by contacting our Customer
                              Support. Only you may be aware of any issues that
                              occur during the booking process. GoBook will not be
                              responsible for any losses (monetary or otherwise)
                              if you assume a booking was not placed due to not
                              receiving confirmation.
                            </li>
                            <li className="text-[#475569]">
                              <b>Refunds and Exchanges:</b> Before completing your
                              booking, please carefully review all details. GoBook
                              is unable to process exchanges or refunds after a
                              booking has been confirmed, or for lost, stolen,
                              damaged, or destroyed tickets or booking
                              confirmations.
                            </li>
                          </ul>
                        </div>

                        {/* 5. Cancellation Policy */}
                        <div>
                          <span className="text-sm font-semibold text-[#1E293B]">
                            5. Cancellation Policy
                          </span>
                          <ul className="list-disc pl-5">
                            <li className="text-[#475569]">
                              <b>Tenant-Initiated Cancellations:</b> If a Tenant
                              cancels a booking or event, the customer is entitled
                              to a full refund of the booking amount. The Tenant
                              is responsible for any transaction fees or costs
                              incurred during the refund process. GoBook will
                              facilitate the refund on behalf of the Tenant but
                              shall not be liable for such cancellations.
                            </li>
                            <li className="text-[#475569]">
                              <b>Customer-Initiated Cancellations:</b> Refunds for
                              customer cancellations will be subject to the
                              Tenant’s individual cancellation policy. If no
                              policy is provided, bookings will be considered
                              non-refundable.
                            </li>
                            <li className="text-[#475569]">
                              <b>Force Majeure Events:</b> In cases of events
                              beyond reasonable control (natural disasters,
                              restrictions, strikes, pandemics), GoBook and the
                              Tenant are not liable for non-performance. Refunds
                              or credits depend on the Tenant’s policy.
                            </li>
                            <li className="text-[#475569]">
                              <b>Transaction Fees:</b> Transaction fees charged by
                              third-party processors are generally non-refundable.
                              For Tenant cancellations, Tenants bear the cost so
                              customers receive a full refund.
                            </li>
                          </ul>
                        </div>

                        {/* 6. Billing Information Verification */}
                        <div>
                          <span className="text-sm font-semibold text-[#1E293B]">
                            6. Billing Information Verification
                          </span>
                          <p className="text-[#475569]">
                            Some bookings may be processed only after your billing
                            address and other billing information have been
                            verified. Incorrect billing details can delay
                            processing. If we cannot reach you, GoBook may cancel
                            the booking and allow another customer to book the
                            service.
                          </p>
                        </div>

                        {/* 7. Delivery */}
                        <div>
                          <span className="text-sm font-semibold text-[#1E293B]">
                            7. Delivery
                          </span>
                          <p className="text-[#475569]">
                            GoBook offers multiple delivery options, which may
                            vary depending on the service or event. Currently:
                          </p>
                          <ul className="list-disc pl-5">
                            <li className="text-[#475569]">
                              <b>Email Confirmation:</b> Booking confirmation will
                              be sent via email.
                            </li>
                          </ul>
                        </div>

                        {/* 8. Cancelled/Postponed Events */}
                        <div>
                          <span className="text-sm font-semibold text-[#1E293B]">
                            8. Cancelled / Postponed Events
                          </span>
                          <p className="text-[#475569]">
                            Occasionally, services may be canceled or postponed by
                            the Tenant. The Tenant is fully responsible for
                            refunds as per their own policy. GoBook facilitates
                            the refund process but does not assume liability.
                          </p>
                        </div>

                        {/* 9. Data Use and Privacy */}
                        <div>
                          <span className="text-sm font-semibold text-[#1E293B]">
                            9. Data Use and Privacy
                          </span>
                          <ul className="list-disc pl-5">
                            <li className="text-[#475569]">
                              Personal information is collected and processed in
                              accordance with our Privacy Policy.
                            </li>
                            <li className="text-[#475569]">
                              Tenants must comply with data protection rules and
                              may not use customer data outside service delivery.
                            </li>
                            <li className="text-[#475569]">
                              Misuse of personal data may result in suspension or
                              termination of access.
                            </li>
                          </ul>
                        </div>

                        {/* 10. Limitation of Liability */}
                        <div>
                          <span className="text-sm font-semibold text-[#1E293B]">
                            10. Limitation of Liability
                          </span>
                          <ul className="list-disc pl-5">
                            <li className="text-[#475569]">
                              The platform acts solely as a facilitator; we do not
                              provide services directly.
                            </li>
                            <li className="text-[#475569]">
                              We are not liable for any loss, damage, or disputes
                              from services offered by Tenants.
                            </li>
                            <li className="text-[#475569]">
                              Use of the platform is at your own risk.
                            </li>
                          </ul>
                        </div>

                        {/* 11. Termination */}
                        <div>
                          <span className="text-sm font-semibold text-[#1E293B]">
                            11. Termination
                          </span>
                          <ul className="list-disc pl-5">
                            <li className="text-[#475569]">
                              We reserve the right to suspend or terminate Tenant
                              accounts for violations of these Terms.
                            </li>
                            <li className="text-[#475569]">
                              Termination does not relieve Tenants of outstanding
                              fees.
                            </li>
                          </ul>
                        </div>

                        {/* 12. Changes to Terms */}
                        <div>
                          <span className="text-sm font-semibold text-[#1E293B]">
                            12. Changes to Terms
                          </span>
                          <p className="text-[#475569]">
                            We may update these Terms from time to time. Material
                            changes will be communicated via the platform or
                            email. Continued use of the platform constitutes
                            acceptance of the updated Terms.
                          </p>
                        </div>

                        {/* 13. Governing Law */}
                        <div>
                          <span className="text-sm font-semibold text-[#1E293B]">
                            13. Governing Law
                          </span>
                          <p className="text-[#475569]">
                            These Terms are governed by and construed in
                            accordance with the laws of the Democratic Socialist
                            Republic of Sri Lanka. Any disputes shall be subject
                            to the exclusive jurisdiction of the courts of
                            Colombo, Sri Lanka.
                          </p>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
          </footer>
        </main>
      </div>
    </>
  );
}
