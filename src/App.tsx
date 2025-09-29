import logo from "./assets/logo.svg";
import hero from "./assets/hero.png";
import middle from "./assets/middle.png";
import do1 from "./assets/whatwedo/1.svg";
import do2 from "./assets/whatwedo/2.svg";
import do3 from "./assets/whatwedo/3.svg";
import do4 from "./assets/whatwedo/4.svg";
import { Marquee } from "./components/ui/marquee";
import ReviewCard from "./components/ui/ReviewCard";
import step1 from "./assets/steps/step1.svg";
import step2 from "./assets/steps/step2.svg";
import step3 from "./assets/steps/step3.svg";
import { CheckIcon, ClockIcon } from "@phosphor-icons/react";
import feat1 from "./assets/features/feat1.svg";
import feat2 from "./assets/features/feat2.svg";
import feat3 from "./assets/features/feat3.svg";
import feat4 from "./assets/features/feat4.svg";
import pricingBanner from "./assets/pricing-banner.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import logoBlock from "./assets/logo-block.png";

export default function App() {
  const reviews = [
    {
      name: "Jack",
      username: "Founder & CEO at StartUp Grid",
      body: "We can’t handle last-minute changes smoothly.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jill",
      username: "Founder & CEO at StartUp Grid",
      body: "We can’t customise the ticketing flow to match our brand.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "John",
      username: "Founder & CEO at StartUp Grid",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Jack",
      username: "Founder & CEO at StartUp Grid",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jill",
      username: "Founder & CEO at StartUp Grid",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "John",
      username: "Founder & CEO at StartUp Grid",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/john",
    },
  ];
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <>
      <header className="max-w-[1140px] mx-auto flex items-center justify-between py-2">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <ul className="flex gap-1">
            <li className="py-2 px-4 flex items-center">
              <a href="#whowedo" className="text-sm leading-5 text-[#1E293B] font-medium">What we do</a>
            </li>
            <li className="py-2 px-4 flex items-center">
              <a href="#features" className="text-sm leading-5 text-[#1E293B] font-medium">Features</a>
            </li>
            <li className="py-2 px-4 flex items-center">
              <a href="#pricing" className="text-sm leading-5 text-[#1E293B] font-medium">Pricing</a>
            </li>
            <li className="py-2 px-4 flex items-center">
              <a href="#faq" className="text-sm leading-5 text-[#1E293B] font-medium">FAQ</a>
            </li>
          </ul>
        </div>
        <a
          href="http://app.gobook.lk"
          className="border border-[#E2E8F0] rounded-[8px] text-[#1E293B] text-sm font-medium px-4 py-2"
        >
          Become a Host
        </a>
      </header>
      <main className="pt-[180px]">
        <section className="flex flex-col gap-4 mx-auto max-w-[1140px]">
          <div className="flex flex-col gap-4 pb-4">
            <h1 className="text-6xl font-semibold tracking-[-0.02em] text-[#1E293B] text-center font-instrument">
              Every booking should <br />
              build <span>your brand.</span>
            </h1>
            <p className="text-center text-[#475569] font-medium text-xl leading-9">
              Launch your branded booking platform in minutes, not months.
            </p>
          </div>
          <a
            className="block mx-auto bg-[#0F172A] text-[#F8FAFC] font-semibold text-sm min-w-20 p-4 rounded-lg"
            href="http://app.gobook.lk"
          >
            Create Your First Event
          </a>
        </section>
        <section className="mx-auto max-w-[1140px] pt-16">
          <img src={hero} alt="Hero" />
        </section>
        <section className="max-w-[1200px] mx-auto flex flex-col gap-8 py-30">
          <div className="flex flex-col gap-4">
            <h4 className="uppercase font-medium text-sm text-center">
              know your worth
            </h4>
            <h2 className="text-6xl font-semibold tracking-[-0.02em] font-instrument text-[#1E293B] text-center">
              Why paying extra for
              <br />
              third-party platforms?
            </h2>
          </div>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
          </div>
        </section>
        <section>
          <img src={middle} alt="Middle" className="cover w-full" />
        </section>
        <section id="whowedo" className="max-w-[1400px] mx-auto py-30 text-center flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <h4 className="uppercase font-medium text-[#1E293B] text-sm">
              What we do
            </h4>
            <h2 className="text-6xl font-semibold tracking-[-0.02em] font-instrument text-[#1E293B] text-center">
              Own your brand and customer
              <br />
              experience. end to end.
            </h2>
          </div>
          <div className="flex justify-between">
            <div className="max-w-[300px] flex flex-col justify-center items-center gap-6">
              <img src={do1} className="w-16 h-16" />
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-semibold text-[#1E293B]">
                  No Setup fee
                </h4>
                <p className="text-[#475569] text-sm font-semibold">
                  Start selling without any upfront costs.
                </p>
              </div>
            </div>

            <div className="max-w-[300px] flex flex-col justify-center items-center gap-6">
              <img src={do2} className="w-16 h-16" />
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-semibold text-[#1E293B]">
                  Build your own platform
                </h4>
                <p className="text-[#475569] text-sm font-semibold">
                  Launch a fully branded booking system in 2 minutes.
                </p>
              </div>
            </div>

            <div className="max-w-[300px] flex flex-col justify-center items-center gap-6">
              <img src={do3} className="w-16 h-16" />
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-semibold text-[#1E293B]">
                  Know your customers
                </h4>
                <p className="text-[#475569] text-sm font-semibold">
                  Gain insights with real-time analytics and reporting.
                </p>
              </div>
            </div>

            <div className="max-w-[300px] flex flex-col justify-center items-center gap-6">
              <img src={do4} className="w-16 h-16" />
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-semibold text-[#1E293B]">
                  Get paid faster
                </h4>
                <p className="text-[#475569] text-sm font-semibold">
                  Secure, seamless transactions straight to your account.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1400px] mx-auto py-30 text-center">
          <div className="flex flex-col gap-12 py-16 px-8">
            <div className="flex flex-col gap-4">
              <h4 className="uppercase font-medium text-[#1E293B] text-sm">
                instant setup
              </h4>
              <h2 className="text-6xl font-semibold tracking-[-0.02em] font-instrument text-[#1E293B] text-center">
                Ready, set, launch.
                <br />~ 60 seconds.
              </h2>
            </div>
            <div className="flex gap-12 justify-center">
              <div className="flex flex-col gap-4 w-fit">
                <img src={step1} width={368} height={396} />
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="bg-[#F5F5F5] py-1 px-2 h-6 w-fit flex items-center justify-center rounded-lg text-[#1E293B] text-xs font-semibold">
                      Step 1
                    </div>
                    <div className="text-left">
                      <h2 className="text-[#1E293B] font-semibold text-lg">
                        Company Profile
                      </h2>
                      <p className="text-[#737373] text-sm font-semibold max-w-[368px]">
                        Easily add your business details to create a platform
                        that’s truly yours.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 border border-[#E5E5E5] rounded-lg py-1 px-2 w-fit justify-center items-center">
                    <ClockIcon size={12} color="black" />
                    <span className="text-xs font-semibold text-[#475569]">
                      10 Seconds
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-fit">
                <img src={step2} width={368} height={396} />
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="bg-[#F5F5F5] py-1 px-2 h-6 w-fit flex items-center justify-center rounded-lg text-[#1E293B] text-xs font-semibold">
                      Step 2
                    </div>
                    <div className="text-left">
                      <h2 className="text-[#1E293B] font-semibold text-lg">
                        Branding
                      </h2>
                      <p className="text-[#737373] text-sm font-semibold max-w-[368px]">
                        Make it yours! Customize colors, logos, and workflow to
                        match your unique brand identity.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 border border-[#E5E5E5] rounded-lg py-1 px-2 w-fit justify-center items-center">
                    <ClockIcon size={12} color="black" />
                    <span className="text-xs font-semibold text-[#475569]">
                      10 Seconds
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-fit">
                <img src={step3} width={368} height={396} />
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="bg-[#F5F5F5] py-1 px-2 h-6 w-fit flex items-center justify-center rounded-lg text-[#1E293B] text-xs font-semibold">
                      Step 3
                    </div>
                    <div className="text-left">
                      <h2 className="text-[#1E293B] font-semibold text-lg">
                        Billing Details
                      </h2>
                      <p className="text-[#737373] text-sm font-semibold max-w-[368px]">
                        Add your payment information and you’re ready to start
                        accepting bookings seamlessly.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 border border-[#E5E5E5] rounded-lg py-1 px-2 w-fit justify-center items-center">
                    <ClockIcon size={12} color="black" />
                    <span className="text-xs font-semibold text-[#475569]">
                      40 Seconds
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#pricing" className="p-4 min-w-20 w-fit mx-auto border border-[#E2E8F0] rounded-lg text-[#1E293B] text-sm font-medium leading-5">
            Pick a plan that fits you
          </a>
        </section>
        <section id="features" className="max-w-[1200px] mx-auto py-16 text-center gap-16 flex flex-col">
          <div className="flex flex-col gap-4">
            <h4 className="uppercase font-medium text-[#1E293B] text-sm">
              Features
            </h4>
            <h2 className="text-6xl font-semibold tracking-[-0.02em] font-instrument text-[#1E293B] text-center">
              Turn busy season into
              <br />
              profit season.
            </h2>
            <div className="text-[#475569] text-xl font-medium leading-9">
              Save time. Boost revenue. Delight customers. That's our promise.
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="p-4 border border-[#E2E8F0] rounded-2xl max-w-[700px] w-full flex flex-col gap-6">
              <img src={feat1} alt="Feature 1" />
              <div className="flex flex-col gap-2 px-2 text-left">
                <h1 className="text-2xl font-semibold text-[#1E293B]">
                  Brand Control
                </h1>
                <p className="text-lg font-normal text-[#475569]">
                  Complete visual control. Your colors, your logo, your
                  reputation.
                </p>
              </div>
            </div>
            <div className="p-4 border border-[#E2E8F0] rounded-2xl max-w-[476px] w-full flex flex-col gap-6">
              <img src={feat2} alt="Feature 1" />
              <div className="flex flex-col gap-2 px-2 text-left">
                <h1 className="text-2xl font-semibold text-[#1E293B]">
                  Smart Attendance
                </h1>
                <p className="text-lg font-normal text-[#475569]">
                  Smart reminders, seamless sync, and fraud-proof tickets that
                  eliminate no-shows.
                </p>
              </div>
            </div>
            <div className="p-4 border border-[#E2E8F0] rounded-2xl max-w-[534px] w-full flex flex-col gap-6">
              <img src={feat3} alt="Feature 1" />
              <div className="flex flex-col gap-2 px-2 text-left">
                <h1 className="text-2xl font-semibold text-[#1E293B]">
                  Get Paid Faster
                </h1>
                <p className="text-lg font-normal text-[#475569]">
                  Multiple payment options = fewer barriers = more revenue in
                  your pocket.
                </p>
              </div>
            </div>
            <div className="p-4 border border-[#E2E8F0] rounded-2xl max-w-[642px] w-full flex flex-col gap-6">
              <img src={feat4} alt="Feature 1" />
              <div className="flex flex-col gap-2 px-2 text-left">
                <h1 className="text-2xl font-semibold text-[#1E293B]">
                  Data That Drives Decisions
                </h1>
                <p className="text-lg font-normal text-[#475569]">
                  Real-time insights that turn booking patterns into profit
                  opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="text-center flex flex-col py-30 gap-12 max-w-[1400px] mx-auto items-center">
          <div className="flex flex-col gap-4">
            <h4 className="uppercase font-medium text-[#1E293B] text-sm">
              Pricing
            </h4>
            <h2 className="text-6xl font-semibold tracking-[-0.02em] font-instrument text-[#1E293B] text-center">
              Let’s grow,
              <br />
              start free today.
            </h2>
            <div className="text-[#475569] text-xl font-medium leading-9">
              Use Gobook for free with unlimited events and guests.
              <br />
              Upgrade for advance features.
            </div>
          </div>
          <div className="flex gap-6">
            <div className="p-6 h-[556px] border border-[#E2E8F0] rounded-[12px] w-[409px] justify-between text-left flex flex-col">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="uppercase font-semibold text-[#1E293B] text-[16px]">
                      Starter
                    </h3>
                    <p className="text-[#475569] text-sm font-semibold">
                      For Solo Entrepreneur
                    </p>
                  </div>
                  <div className="text-5xl text-[#171717] font-semibold">
                    Free
                  </div>
                </div>
                <div className="flex flex-col gap-[7.5px]">
                  <div className="flex items-center gap-2 text-[#1E293B] text-sm font-semibold">
                    <CheckIcon weight="regular" color="#1E293B" size={15} /> 1
                    Admin
                  </div>
                  <div className="flex items-center gap-2 text-[#1E293B] text-sm font-semibold">
                    <CheckIcon weight="regular" color="#1E293B" size={15} />
                    Branding (logo, Sub domain)
                  </div>
                  <div className="flex items-center gap-2 text-[#1E293B] text-sm font-semibold">
                    <CheckIcon weight="regular" color="#1E293B" size={15} />
                    Unlimited events, guests
                  </div>
                  <div className="flex items-center gap-2 text-[#1E293B] text-sm font-semibold">
                    <CheckIcon weight="regular" color="#1E293B" size={15} />
                    Email ticket confirmation
                  </div>
                  <div className="flex items-center gap-2 text-[#1E293B] text-sm font-semibold">
                    <CheckIcon weight="regular" color="#1E293B" size={15} />
                    Basic Analytics dashboard
                  </div>
                  <div className="flex items-center gap-2 text-[#1E293B] text-sm font-semibold">
                    <CheckIcon weight="regular" color="#1E293B" size={15} />
                    Branding (logo, Sub domain)
                  </div>
                  <div className="flex items-center gap-2 text-[#1E293B] text-sm font-semibold">
                    <CheckIcon weight="regular" color="#1E293B" size={15} />
                    Payment gateway integration
                  </div>
                  <div className="flex items-center gap-2 text-[#1E293B] text-sm font-semibold">
                    <CheckIcon weight="regular" color="#1E293B" size={15} />
                    Event check in app
                  </div>
                  <div className="flex items-center gap-2 text-[#1E293B] text-sm font-semibold">
                    <CheckIcon weight="regular" color="#1E293B" size={15} />
                    Multi type tickets
                  </div>
                  <div className="flex items-center gap-2 text-[#1E293B] text-sm font-semibold">
                    <CheckIcon weight="regular" color="#1E293B" size={15} />
                    Transaction Fee: Up to 3.99%
                  </div>
                </div>
              </div>
              <a
                className="bg-[#0F172A] py-2 px-4 text-[#F8FAFC] text-sm font-medium w-full text-center rounded-lg"
                href="http://app.gobook.lk"
              >
                Get Started
              </a>
            </div>

            <div className="h-[556px] p-6 border border-[#E2E8F0] rounded-[12px] w-[409px] text-left justify-between flex flex-col">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="uppercase font-semibold text-[#1E293B] text-[16px]">
                      Pro
                    </h3>
                    <p className="text-[#475569] text-sm font-semibold">
                      For Solo Entrepreneur
                    </p>
                  </div>
                  <div className="text-5xl text-[#171717] font-semibold">
                    Coming Soon
                  </div>
                </div>
                <div className="flex flex-col gap-[7.5px]">
                  <div className="flex items-center gap-2 text-[#1E293B] text-sm font-semibold">
                    <CheckIcon weight="regular" color="#1E293B" size={15} /> 3
                    Admin
                  </div>
                  <div className="flex items-center gap-2 text-[#1E293B] text-sm font-semibold">
                    <CheckIcon weight="regular" color="#1E293B" size={15} />
                    Branding (logo, Sub domain)
                  </div>
                  <div className="flex items-center gap-2 text-[#1E293B] text-sm font-semibold">
                    <CheckIcon weight="regular" color="#1E293B" size={15} />
                    Unlimited events, guests
                  </div>
                  <div className="flex items-center gap-2 text-[#1E293B] text-sm font-semibold">
                    <CheckIcon weight="regular" color="#1E293B" size={15} />
                    Email ticket confirmation
                  </div>
                  <div className="flex items-center gap-2 text-[#1E293B] text-sm font-semibold">
                    <CheckIcon weight="regular" color="#1E293B" size={15} />
                    Advance Analytics dashboard
                  </div>
                  <div className="flex items-center gap-2 text-[#1E293B] text-sm font-semibold">
                    <CheckIcon weight="regular" color="#1E293B" size={15} />
                    Branding (logo, Sub domain)
                  </div>
                  <div className="flex items-center gap-2 text-[#1E293B] text-sm font-semibold">
                    <CheckIcon weight="regular" color="#1E293B" size={15} />
                    Payment gateway integration
                  </div>
                  <div className="flex items-center gap-2 text-[#1E293B] text-sm font-semibold">
                    <CheckIcon weight="regular" color="#1E293B" size={15} />
                    Event check in app
                  </div>
                  <div className="flex items-center gap-2 text-[#1E293B] text-sm font-semibold">
                    <CheckIcon weight="regular" color="#1E293B" size={15} />
                    Multi type tickets
                  </div>
                  <div className="flex items-center gap-2 text-[#1E293B] text-sm font-semibold">
                    <CheckIcon weight="regular" color="#1E293B" size={15} />
                    Transaction Fee: Up to 3.99%
                  </div>
                  <div className="flex items-center gap-2 text-[#1E293B] text-sm font-semibold">
                    <CheckIcon weight="regular" color="#1E293B" size={15} />
                    Early access to premium features
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#E2E8F0] py-2 px-4 text-[#1E293B] text-sm font-medium w-full text-center rounded-lg">
                Contact Support
              </div>
            </div>
          </div>
          <div className="border border-[#E2E8F0] rounded-[12px] p-6 max-w-[844px] w-full flex gap-12">
            <div className="text-left flex-1 flex flex-col justify-between">
              <div className="flex flex-col gap-6">
                <h1 className="text-2xl font-semibold text-[#1E293B]">
                  Hosting a large or complex event?
                </h1>
                <p className="text-sm font-semibold leading-[21px] text-[#1E293B]">
                  We offer tailored plans for event pros with unique needs. Get
                  personalised support, customised pricing, and more by
                  partnering with our sales team.
                </p>
              </div>
              <div>
                <div className="bg-white border border-[#E2E8F0] py-2 px-4 text-[#1E293B] text-sm font-medium w-fit text-center rounded-lg">
                  Contact Support
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img
                src={pricingBanner}
                alt="Pricing Banner"
                className="w-[374px] h-[300px]"
              />
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
                    Yes, you can white-label Gobook to match your brand identity.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How long does it take to get started?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-left">
                  <p>
                    You can set up and start using Gobook within minutes.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Can I integrate payments and manage transactions?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-left">
                  <p>
                    Yes, Gobook supports seamless payment integration and transaction management.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Will I be able to track bookings, customer and revenue?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-left">
                  <p>
                    Absolutely, Gobook provides real-time tracking of bookings, customers, and revenue.
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
            <a href="https://www.instagram.com/gobook.official" className="font-bold">Instagram</a>
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
            <a href="http://app.gobook.lk" className="bg-[#0F172A] rounded-[8px] p-4 min-w-20 w-fit mx-auto text-[#F8FAFC] text-sm font-semibold leading-[21px] mt-4">
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
            <li className="text-[#A1A1AA] text-sm leading-5">
              <a href="https://app.clickup.com/90151503629/docs/2kyq5hrd-715">
                Privacy Policy
              </a>
            </li>
            <li className="text-[#A1A1AA] text-sm leading-5">
              Terms & Conditions
            </li>
          </ul>
        </footer>
      </main>
    </>
  );
}
