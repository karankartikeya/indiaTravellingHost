import {createClient} from 'next-sanity';
import createImageBuilder from '@sanity/image-url';

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: "mcsgxed5" ,
    apiVersion: "2023-04-10",
    useCdn: process.env.NODE_ENV === "production",
};

//connect to the sanity client
export const sanityClient = createClient(config);

export const urlFor  = (source: any) =>
    createImageBuilder(config).image(source);