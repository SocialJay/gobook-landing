import Event1 from "../assets/marketplace/EventCards/Event1.png";
import Event2 from "../assets/marketplace/EventCards/Event2.png";
import Event3 from "../assets/marketplace/EventCards/Event3.png";
import Event4 from "../assets/marketplace/EventCards/Event4.png";

export type EventItem = {
    id: string;
    title: string;
    venue: string;
    date: string;
    image: string;
};

export const events: EventItem[] = [
    {
      id: "1",
      title: "Bae - Live in Sri Lanka",
      venue: "Indoor Stadium",
      date: "27th September",
      image: Event1,
    },
    {
      id: "2",
      title: "Monica",
      venue: "Indoor Stadium",
      date: "27th September",
      image: Event2,
    },
    {
      id: "3",
      title: "Monica",
      venue: "Indoor Stadium",
      date: "27th September",
      image: Event3,
    },
    {
      id: "4",
      title: "Members Only",
      venue: "Indoor Stadium",
      date: "27th September",
      image: Event4,
    },
  ]