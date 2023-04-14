import type { NextApiRequest, NextApiResponse } from "next";
import {groq} from 'next-sanity';
import { sanityClient } from "../../sanity";
import { Post } from "../../typing";


const query = groq`
    *[_type == 'post']
`

type Data = {
    posts: Post[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) 
  {

    const posts: Post[] = await sanityClient.fetch(query);
    res.setHeader('Access-Control-Allow-Origin', `${process.env.FRONT_END_URL}`);
    res.status(200).json({ posts })
  }