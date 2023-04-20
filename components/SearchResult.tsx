import { urlFor } from '@/sanity';
import { Itinerary, Post } from '@/typing';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

type Props = {
    post?: Post;
    itinerary?: Itinerary;
}

function SearchResult({ post, itinerary }: Props) {
    return (
        <div className='flex py-7 px-2 mb-10  border-b cursor-pointer hover:opacity-80 hover:shadow-lg rounded-xl pr-4 transition duration-200 ease-out first:border-t' >
            {post != null ? (
                <div className='flex flex-col flex-grow pl-5 '>
                    <div className='flex justify-between'>
                        <p>Rajae HomeStay</p>
                    </div>
                    <h4 className='text-xl'>{post.title}</h4>
                    <div className='border-b w-10 pt-2' />
                    <p className='pt-2 text-sm text-gray-500 flex-grow'>{post.author}</p>
                    <div className='flex justify-between items-end pt-5 '>
                        <p className='flex items-center'> 4.7
                        </p>
                        <div>
                            <Link href='https://be.aiosell.com/book/the-corbett-rajae-homestay'><p className=' bg-red-500 text-white font-bold border-2 rounded-full p-2 cursor-pointer'>Read More</p></Link>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className='flex flex-col flex-grow pl-5 '>
                        <div className='flex justify-between'>
                            <p>Rajae HomeStay</p>
                        </div>
                        <h4 className='text-xl'>{itinerary?.title}</h4>
                        <div className='border-b w-10 pt-2' />
                        <p className='pt-2 text-sm text-gray-500 flex-grow'>{itinerary?.body}</p>
                        <div className='flex justify-between items-end pt-5 '>
                            <p className='flex items-center'> 4.7
                            </p>
                            <div>
                                <Link href='https://be.aiosell.com/book/the-corbett-rajae-homestay'><p className=' bg-red-500 text-white font-bold border-2 rounded-full p-2 cursor-pointer'> Book Now!!</p></Link>
                            </div>
                        </div>

                    </div>
                </>
            )}
        </div>
    )
}

export default SearchResult