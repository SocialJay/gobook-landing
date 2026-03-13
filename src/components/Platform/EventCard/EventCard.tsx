import { format } from "date-fns";

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

type EventCardProps = {
  event: EventItem;
  className?: string;
  imgContainerClassName?: string;
  cardContainerClassName?: string;
};

export default function EventCard({ event, className = "", imgContainerClassName = "w-full aspect-square", cardContainerClassName = "" }: EventCardProps) {
  return (
    <div className={cardContainerClassName}>
      <a
        href={`${import.meta.env.VITE_GOBOOK_FRONTEND_URL}/customer/event/${encodeURIComponent(event.id)}`}
        className={`flex flex-col gap-2 group ${className}`}
      >
      <div className={`overflow-hidden rounded-4 ${imgContainerClassName}`}>
        <img
          src={event.banner}
          alt={event.name}
          className="object-cover rounded-4 w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col items-start w-full">
        <p className="web-subheadline text-text-primary-default overflow-hidden text-ellipsis w-full">
          {event.name}
        </p>
        <p className="web-callout text-text-label w-full">
          {format(new Date(event.startAt), "EEE, d MMMM")}
        </p>
      </div>
    </a>
    </div>
  );
}
