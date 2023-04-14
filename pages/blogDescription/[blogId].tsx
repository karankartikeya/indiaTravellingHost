import About from '@/components/About'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Head from '@/components/Head'
import { GetServerSideProps } from 'next'
import Itinerary from '@/components/Itinerary'
import Testimonials from '@/components/Testimonials'
import React from 'react'
import { Post } from '@/typing'
import { fetchBlog } from '@/utils/fetchBlogs'

type Props = {
    posts: Post[];
}

function blogId({ posts }: Props) {
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

export default blogId

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const posts: Post[] = await fetchBlog();

    return {
        props: {
            posts
        }
    }
}