import { Itinerary, Post } from '@/typing';
import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  title: string;
  post?: Post;
  itinerary?: Itinerary;
}

function DetailCard({ title, post, itinerary }: Props) {
  const router = useRouter();
  const goToDest = () => {
    const location = title == 'post' ? 'blogDescription' : 'itineraryDescription';
    router.push('/' + location + '/' + (title == 'post' ? (post?.postId) : (itinerary?.itineraryId)));
  }
  return (
    <article className='flex flex-col items-center space-y-7 rounded-2xl flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-yellow-400 p-10 opacity-100
    cursor-pointer transition-opacity duration-200'>
      <img
        className='w-32 h-32 rounded-full md:w-[200px] md:h-[200px]'
        src='/ith.jpeg' />

      <div className='px-0 md:px-10'>
        <h4 className='md:text-4xl text-xl font-bold'>{title == 'post' ? (post?.title) : (itinerary?.title)}</h4>
        <div className='justify-center items-center text-center mt-10'>
          <button className="rounded-lg h-30 opacity-90 text-2xl bg-black p-6 font-semibold text-white transition hover:opacity-100" onClick={goToDest}>
            {title == 'post' ? 'Read More' : 'View Itinerary'}
          </button>
        </div>
      </div>

    </article>
  )
}

export default DetailCard