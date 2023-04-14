import About from '@/components/About'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Head from '@/components/Head'
import Itinerary from '@/components/Itinerary'
import Testimonials from '@/components/Testimonials'
import React from 'react'

type Props = {}

function itineraryId({ }: Props) {
    return (
        <>
        <div className='bg-gradient-to-r from-[#cab59e] to-[#dcad51] scrollbar scrollbar-track-gray-500/40'>
            <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
                <Banner />
            </section>
            <Head placeholder='Search' />
            <div className='bg-gradient-to-r from-[#cab59e] to-[#dcad51] scroll-smooth h-screen'>
                <About />
                <Testimonials />
                
            </div>
            <Itinerary />
            
        </div>
        <Footer />
        </>
    )
}

export default itineraryId