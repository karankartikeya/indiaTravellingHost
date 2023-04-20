import React from 'react'
import Head from './Head'
import Image from 'next/image'
type Props = {
    title?: string;
}

function Banner({ title }: Props) {

    return (
        <>
            <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                <video className="min-w-full min-h-full absolute object-cover" autoPlay muted loop>
                    <source src="/indiaMap.mp4" type="video/mp4" />
                </video>
            </div>
            <Image src='/ith.jpeg' alt='logo' width={100} height={100} className='absolute top-40 right-50' />
            <div className="video-content space-y-2">
                <h1 className="font-light text-6xl border-red-500 rounded-e-xl border-2 p-5"><a href='#home'>{title==null? 'Explore':title}</a></h1>
            </div>
        </>
    )
}

export default Banner