import logo from "./assets/logo.svg";
import hero from "./assets/hero.png";
import { Marquee } from "./components/ui/marquee";
import ReviewCard from "./components/ui/ReviewCard";

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
      <header className="max-w-[1140px] mx-auto flex items-center justify-between">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <ul className="flex gap-1">
            <li className="py-2 px-4 text-sm leading-5 text-[#1E293B] font-medium">
              Who we are
            </li>
            <li className="py-2 px-4 text-sm leading-5 text-[#1E293B] font-medium">
              Features
            </li>
            <li className="py-2 px-4 text-sm leading-5 text-[#1E293B] font-medium">
              Pricing
            </li>
            <li className="py-2 px-4 text-sm leading-5 text-[#1E293B] font-medium">
              FAQ
            </li>
          </ul>
        </div>
        <div></div>
      </header>
      <main className="pt-[180px]">
        <div className="flex flex-col gap-4 mx-auto max-w-[1140px]">
          <div className="flex flex-col gap-4 pb-4">
            <h1 className="text-6xl font-semibold tracking-[-0.02em] text-[#1E293B] text-center font-instrument">
              Every booking should <br />
              build <span>your brand.</span>
            </h1>
            <p className="text-center text-[#475569] font-medium text-xl leading-9">
              Launch your branded booking platform in minutes, not months.
            </p>
          </div>
          <button className="block mx-auto bg-[#0F172A] text-[#F8FAFC] font-semibold text-sm min-w-20 p-4 rounded-lg">
            Create Your First Event
          </button>
        </div>
        <div className="mx-auto max-w-[1140px] pt-16">
          <img src={hero} alt="Hero" />
        </div>
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8 py-[120px]">
          <div className="flex flex-col gap-4">
            <h4 className="uppercase font-medium text-sm text-center">
              know your worth
            </h4>
            <h1 className="text-6xl font-semibold tracking-[-0.02em] font-instrument text-[#1E293B] text-center">
              Why paying extra for
              <br />
              third-party platforms?
            </h1>
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
        </div>
      </main>
    </>
  );
}
