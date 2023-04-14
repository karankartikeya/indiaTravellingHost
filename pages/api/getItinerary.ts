import type { NextApiRequest, NextApiResponse } from "next";
import {groq} from 'next-sanity';
import { sanityClient } from "../../sanity";
import { Itinerary } from "../../typing";


const query = groq`
    *[_type == 'itinerary']
`

type Data = {
    itineraries: Itinerary[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) 
  {

    const itineraries: Itinerary[] = await sanityClient.fetch(query);
    res.setHeader('Access-Control-Allow-Origin', `${process.env.FRONT_END_URL}`);
    res.status(200).json({ itineraries })
  }