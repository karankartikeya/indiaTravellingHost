import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import DetailCard from './DetailCard';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Itinerary, Post } from '@/typing';


type Props = {
  title: string;
  posts?: Post[];
  itineraries?: Itinerary[];
}


function MediumCard({ title, posts, itineraries }: Props) {
  const router = useRouter();
  const link = title == 'Blogs' ? '/blogDescription/allBlog' : '/itineraryDescription/allItinerary';

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col relative overflow-hidden mt-10 text-left md:flex-row max-w-full px-10 md:justify-evenly md:space-y-40 space-y-36 mx-auto items-center'>
        <h1 className='absolute top-24 uppercase text-4xl font-bold text-dark-blue lg:text-6xl'>
          {title}
        </h1>
        <p className='text-xl font-semibold md:hidden'>Slide to view Blogs</p>
        <div className='w-full flex space-x-5 mt-0 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-blue-500/40 scrollbar-thumb-yellow-400'>
          {title == 'Blogs' ?
            (posts?.map((post) => (
              <DetailCard key={post._id} post={post} title='post' />
            ))) :
            (itineraries?.map((itinerary) => (
              <DetailCard key={itinerary._id} itinerary={itinerary} title='itinerary' />
            )))}
        </div>
      </motion.div>
      <p className='float-right p-4 text-blue-500 font-bold'>
        <Link href={link}>Read more</Link>
      </p>
    </>
  )
}

export default MediumCard