import { Itinerary } from "../typing";

export const fetchItinerary = async() =>{
    const url = new URL("/api/getItinerary", `${process.env.NEXT_PUBLIC_BASE_URL}`)
    const res = await fetch(url);

    const data = await res.json();
    const itineraries: Itinerary[] = data.itineraries;
    console.log("fetching");
    return itineraries;
};