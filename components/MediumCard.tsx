import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import DetailCard from './DetailCard';
import Link from 'next/link';


type Props = {
    title: string;
}


function MediumCard({title }: Props) {
    const router = useRouter();
    const goToRoom = () => {
        router.push(`#`);
    }
    return (
        
       <>
        <div
        className='flex flex-col relative overflow-hidden mt-10 text-left md:flex-row max-w-full px-10 md:justify-evenly md:space-y-40 space-y-36 mx-auto items-center'>
        <h1 className='absolute top-24 uppercase text-4xl font-bold text-dark-blue lg:text-6xl'>
          {title}
        </h1>
        <p className='text-xl font-semibold md:hidden'>Slide to view Courses</p>
        <div className='w-full flex space-x-5 mt-0 grid-cols-2 p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-500/40 scrollbar-thumb-[#f7ab0a]/40'>
          {/**ExperienceCard */}

            <DetailCard/>
            <DetailCard/>
            <DetailCard/>
            

        </div>
        
      </div>
      <p className='float-right p-4 text-blue-500 font-bold'>
        <Link href='/'>Read more</Link>
         </p>
       </>

    )
}

export default MediumCard