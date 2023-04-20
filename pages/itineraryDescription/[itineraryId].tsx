import About from '@/components/About'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Itinerare from '@/components/Itinerary'
import Testimonials from '@/components/Testimonials'
import { Itinerary } from '@/typing'
import { fetchItinerary } from '@/utils/fetchItineraries'
import { GetServerSideProps } from 'next'
import React, { useState } from 'react'
import Header from '@/components/Head'
import { useRouter } from 'next/router'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

type Props = {
    itineraries: Itinerary[];
}

function ItineraryId({ itineraries }: Props) {
    const { query } = useRouter();
    const itineraryId= query.itineraryId as string;
    const blogData = itineraries.find((itinerary) => itinerary?.itineraryId === itineraryId)!;
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
        <>
        <div className='bg-gradient-to-r from-[#cab59e] to-[#dcad51] scrollbar scrollbar-track-gray-500/40'>
            <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
                <Banner title={blogData?.title}/>
            </section>
            <Header placeholder='Search' session={isUserLoggedIn}/>
            <div className='bg-gradient-to-r from-[#cab59e] to-[#dcad51] scroll-smooth h-screen'>
                <About />
                <Testimonials />
                
            </div>
            <Itinerare plan={blogData?.body}/>
            
        </div>
        <Footer />
        </>
    )
}

export default ItineraryId

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const itineraries: Itinerary[] = await fetchItinerary();
    return {
        props: {
            itineraries
        }
    }
}