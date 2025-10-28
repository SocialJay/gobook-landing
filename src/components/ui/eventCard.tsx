import type { EventItem } from "../../sampleData/Events";

export default function EventCard({ event } : { event: EventItem }) {
    return (
        <div 
            tabIndex={0}
            className={
              "p-2 cursor-pointer transform-gpu will-change-transform transition-transform duration-500 ease-in-out origin-center " +
              "bg-transparent hover:bg-gray-100/10 rounded-md transition-colors"
            }
        >
            <div className="inline-flex flex-col w-full max-w-[240px]">
                <div className="flex flex-col gap-3">
                    <div className="h-[311px] overflow-hidden rounded-md bg-[#111] flex items-center justify-center">
                        <img
                            src={event.image}
                            alt={event.title}
                            className="w-[235px] h-[311px] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                        />
                    </div>

                    <div className="px-0">
                        <div className="text-white text-lg font-semibold leading-tight">
                            {event.title}
                        </div>
                        <div className="text-gray-400 text-sm font-semibold mt-1">
                            {event.venue}, {event.date}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}