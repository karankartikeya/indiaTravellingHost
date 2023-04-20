import Footer from '@/components/Footer'
import { GetServerSideProps } from 'next'
import React, { useState } from 'react'
import { Itinerary, Post } from '@/typing'
import { useRouter } from 'next/router'
import InfoCard from '@/components/InfoCard'
import { fetchItinerary } from '@/utils/fetchItineraries'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Header from '@/components/Head'
import Head from 'next/head'

type Props = {
    itineraries: Itinerary[];
}

function AllItinerary({ itineraries }: Props) {

    const { query } = useRouter();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const supabaseClient = useSupabaseClient();

    {/** provide session:Session to header component */ }
    const user_session = async () => {
        const { data, error } = await supabaseClient.auth.getSession();
        return data.session;
    }

    const isSession2 = user_session().then((val) => {
        if (val != null) {
            setIsUserLoggedIn(true);
        }
    }).catch((err) => {
        console.log("err=", err);
    });

    return (
        <div className='bg-gradient-to-r from-[#cab59e] to-[#dcad51] scrollbar scrollbar-track-blue-500 scrollbar-thumb-yellow-400 h-screen'>
            <Head>
                <title>
                    All Itineraries: ITH
                </title>
                <meta
                    name="description"
                    content="Explore our Itineraries"
                    key="desc"
                />
                {/** add og title description and image */}
                <meta property="og:title" content="All Itineraries: ITH" key="ogtitle" />
                <meta property="og:description" content="Explore our Itineraries" key="ogdesc" />
                <meta property="og:image" content="" key="ogimage" />
                <link rel="icon" href="ith.jpeg" />
            </Head>
            <Header placeholder='Search here' session={isUserLoggedIn} />
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
            <Footer />
        </div>
    )
}

export default AllItinerary

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const itineraries: Itinerary[] = await fetchItinerary();

    return {
        props: {
            itineraries
        }
    }
}