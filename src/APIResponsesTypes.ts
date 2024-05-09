export type Distance = "5K" | "10K" | "Half-Marathon" | "Marathon";

export interface Race {
  id: string;
  name: string;
  date: string;
  link: string;
  country: string;
  state: string;
  city: string;
  distance: Distance;
}

export interface RaceAPIResponse {
  numberOfResults: number;
  startIndex: number;
  endIndex: number;
  hasNext: boolean;
  races: Race[];
}
