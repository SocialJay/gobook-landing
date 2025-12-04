import axios from "../axios";
import useSWR from "swr";

export type Palette = {
  Vibrant: { rgb: number[]; population: number };
  DarkVibrant: { rgb: number[]; population: number };
  LightVibrant: { rgb: number[]; population: number };
  Muted: { rgb: number[]; population: number };
  DarkMuted: { rgb: number[]; population: number };
  LightMuted: { rgb: number[]; population: number };
};

export interface Event {
  id: string;
  name: string;
  type: string;
  banner: string;
  location: string;
  date: string;
  begin: string;
  end: string;
  details: string;
  isAdultOnly: boolean;
  status: string;
  palette: string | Palette;
  maxTicketsPerUser: number;
  tenantId: string;
}

export interface EventResponse {
  events: Event[];
}

export const getLatestEvents = async (): Promise<EventResponse> => {
  const res = await axios.get("/events/latest");
  return res.data;
};

export const useGetLatestEvents = () => {
  const { data, error, isLoading } = useSWR("/events/latest", getLatestEvents);

  return { latestEvents: data?.events, error, isLoading };
};
