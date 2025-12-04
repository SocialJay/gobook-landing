import { useGetLatestEvents, type Event } from "./api/event/event";
import { Button } from "./components/atoms/Button";
import EventCard from "./components/molecules/EventCard/EventCard";

export default function App() {
  const { latestEvents } = useGetLatestEvents();
  return (
    <main className="">
      <img
        src="/hero.png"
        alt="Hero"
        className="fixed top-0 left-0 min-w-full min-h-full"
      />
      <div className="relative w-[998px] mx-auto">
        <header className="py-2 flex items-center justify-between">
          <img src="/logo.svg" alt="Logo" />
          <nav>
            <ul className="flex list-none gap-2">
              <li>
                <Button hierarchy="tertiary" size="default">
                  Switch to hosting
                </Button>
              </li>
              <li>
                <Button hierarchy="tertiary" size="default">
                  Login
                </Button>
              </li>
            </ul>
          </nav>
        </header>
        {/* TODO: @ThejanNims Check tokens */}
        <div className="text-center items-center flex flex-col gap-4 mt-[104px]">
          <div className="bg-[#171717] border py-1 pl-1 pr-3 border-[#262626] text-[#A3A3A3] text-[15px] font-semibold rounded-full w-fit leading-[23px] flex items-center gap-2">
            <div className="py-1 px-[5px] bg-[#262626] rounded-4 w-5 h-5 text-sm flex items-center justify-center">
              ⭐
            </div>
            <div>Hello Abishek</div>
          </div>
          {/* <h1 className="text-white font-semibold text-5xl leading-[60px]">
            Discover events<br />made for you.
          </h1> */}
          <img src="/hero-title.svg" alt="hero title" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex gap-2 mt-16">
            {latestEvents?.map((event: Event) => (
              <EventCard key={event.id} isNew={true} {...event} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-1 flex-col pl-2">
              <span className="text-text-label text-[15px] leading-[23px]">
                Popular in
              </span>
              <span className="text-text-content text-[28px] font-semibold leading-[35px]">
                Colombo
              </span>
            </div>
            <div className="flex gap-2">
              {latestEvents?.map((event: Event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          </div>
        </div>
        <footer className="pt-4 pb-5 mt-16">
          <div className="flex items-center gap-2">
            <Button hierarchy="link" size="default" className="w-fit">
              Become a Host
            </Button>
            <span className="text-text-label text-xs font-normal leading-[1.8]">
              ★
            </span>
            <span className="text-text-label text-[15px] font-normal leading-[2.3]">
              with gobook
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}
