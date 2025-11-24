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
      id: "nerjUD-vJsGV",
      title: "Community Game Night",
      venue: "The Cauldron, Colombo",
      date: "29th October",
      image: "https://d1nlwfhz2j4vf.cloudfront.net/30eedcd3-572e-4755-b6d5-a3cbaaf88198",
    },
    {
      id: "aOvG2f67-Ai3",
      title: "Sunday Social",
      venue: "The Cauldron, Colombo",
      date: "09th November",
      image: "https://d1nlwfhz2j4vf.cloudfront.net/e23f9e71-4b34-4d6a-87f3-905d72f1a839",
    },
    {
      id: "qDmZNXijEZ9b",
      title: "Somewhere between",
      venue: "Tharangani Theatre, Colombo 7",
      date: "30th November",
      image: "https://d1nlwfhz2j4vf.cloudfront.net/a1a08cdf-f23e-4e49-b793-95e2ea458810",
    },
    {
      id: "3xsNRYzrRQzS",
      title: "Dice-y Eves",
      venue: "Canapé Bistro",
      date: "22th November",
      image: "https://d1nlwfhz2j4vf.cloudfront.net/9a447d97-21d7-4867-9bc7-8c95abe909bb",
    },
  ]