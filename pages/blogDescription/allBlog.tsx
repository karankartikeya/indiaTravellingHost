import About from '@/components/About'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Header from '@/components/Head'
import { GetServerSideProps } from 'next'
import Itinerary from '@/components/Itinerary'
import Testimonials from '@/components/Testimonials'
import React, { useState } from 'react'
import { Post } from '@/typing'
import { fetchBlog } from '@/utils/fetchBlogs'
import { useRouter } from 'next/router'
import InfoCard from '@/components/InfoCard'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

type Props = {
    posts: Post[];
}

function AllBlog({ posts }: Props) {

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
        <div className='bg-gradient-to-r from-[#cab59e] to-[#dcad51] scrollbar scrollbar-track-blue-500 scrollbar-thumb-yellow-400'>

      <Header  placeholder='Search here' session={isUserLoggedIn}/>
      <main className='flex mb-10 mt-24'>
        <section className='flex-grow pt-14 px-6'>
            <p className='text-xs'>Travel with us </p>
            <h1 className='text-3xl font-semibold mt-2 mb-6'> Explore the blogs to know more </h1>
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
            {posts.map((post) => (
                <InfoCard key={post._id} post={post} />
            ))}
        </section>
       </main>
      <Footer/>
    </div>
    )
}

export default AllBlog

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const posts: Post[] = await fetchBlog();

    return {
        props: {
            posts
        }
    }
}