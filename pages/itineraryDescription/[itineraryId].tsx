import About from '@/components/About'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Itinerare from '@/components/Itinerary'
import Testimonials from '@/components/Testimonials'
import { Itinerary, Post, Social } from '@/typing'
import { fetchItinerary } from '@/utils/fetchItineraries'
import { GetServerSideProps } from 'next'
import React, { useState } from 'react'
import Header from '@/components/Head'
import { useRouter } from 'next/router'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Head from 'next/head'
import { fetchSocials } from '@/utils/fetchSocials'
import { fetchBlog } from '@/utils/fetchBlogs'

type Props = {
    itineraries: Itinerary[];
    socials: Social[];
    posts: Post[];
}

function ItineraryId({ itineraries, socials, posts }: Props) {
    const { query } = useRouter();
    const itineraryId = query.itineraryId as string;
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
            <Head>
                <title>
                    {blogData?.title}: ITH
                </title>
                <meta
                    name="description"
                    content={'Explore ' + blogData?.title}
                    key="desc"
                />
                {/** add og title description and image */}
                <meta property="og:title" content={blogData?.title+': ITH'} key="ogtitle" />
                <meta property="og:description" content={'Explore ' + blogData?.title} key="ogdesc" />
                <meta property="og:image" content="" key="ogimage" />
                <link rel="icon" href="ith.jpeg" />
            </Head>
            <div className='bg-gradient-to-r from-[#cab59e] to-[#dcad51] scrollbar scrollbar-track-gray-500/40'>
                <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
                    <Banner title={blogData?.title} />
                </section>
                <Header placeholder='Search here' session={isUserLoggedIn} post={posts} />
                <div className='bg-gradient-to-r from-[#cab59e] to-[#dcad51] scroll-smooth h-screen'>
                    <About />
                    <Testimonials />

                </div>
                <Itinerare plan={blogData?.body} />

            </div>
            <Footer socials={socials}/>
        </>
    )
}

export default ItineraryId

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const itineraries: Itinerary[] = await fetchItinerary();
    const socials: Social[] = await fetchSocials();
    const posts: Post[] = await fetchBlog();
    return {
        props: {
            itineraries,
            socials,
            posts
        }
    }
}