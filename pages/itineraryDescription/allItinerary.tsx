import Footer from '@/components/Footer'
import Head from '@/components/Head'
import { GetServerSideProps } from 'next'
import React from 'react'
import { Itinerary, Post } from '@/typing'
import { useRouter } from 'next/router'
import InfoCard from '@/components/InfoCard'
import { fetchItinerary } from '@/utils/fetchItineraries'

type Props = {
    itineraries: Itinerary[];
}

function AllItinerary({ itineraries }: Props) {

    const { query } = useRouter();
    return (
        <div className='bg-gradient-to-r from-[#cab59e] to-[#dcad51] scrollbar scrollbar-track-blue-500 scrollbar-thumb-yellow-400 h-screen'>

      <Head  placeholder='Search here'/>
      <main className='flex mb-10 mt-24'>
        <section className='flex-grow pt-14 px-6'>
            <p className='text-xs'>Travel with us </p>
            <h1 className='text-3xl font-semibold mt-2 mb-6'> Explore the Itineraries to know more </h1>
            <div className='hidden  lg:inline-flex mb-5 text-gray-700 whitespace-nowrap space-x-4'>
                <p className='button border-2 rounded-xl p-4'>
                    Affordable Rates
                </p>
                <p className='button border-2 rounded-xl p-4'>
                    Exquisite Stays
                </p>
                <p className='button border-2 rounded-xl p-4'>
                    Linguistic Guides
                </p>
            </div>
            {itineraries.map((itinerary) => (
                <InfoCard key={itinerary._id} itinerary={itinerary} />
            ))}
        </section>
       </main>
      <Footer/>
    </div>
    )
}

export default AllItinerary

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const itineraries: Itinerary[]= await fetchItinerary();

    return {
        props: {
            itineraries
        }
    }
}