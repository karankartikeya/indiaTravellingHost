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
import { PortableText } from '@portabletext/react'
import { RichTextComponents } from '@/components/RichTextComponents'
import { createServerSupabaseClient, Session } from '@supabase/auth-helpers-nextjs'
import { GetServerSidePropsContext } from 'next'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

type Props = {
    posts: Post[];
}

function BlogId({ posts }: Props) {

    const { query } = useRouter();
    const blogId= query.blogId as string;
    const blogData = posts.find((post) => post?.postId === blogId)!;

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
                    <Banner />
                </section>
                <Header placeholder='Search' session={isUserLoggedIn}/>
                <div className='bg-gradient-to-r from-[#cab59e] to-[#dcad51] scroll-smooth'>
                    <About Title={blogData?.title} Author={blogData?.author}/> 
                </div>
                <div className='p-10'>
                <PortableText value={blogData?.body} components={RichTextComponents}/>
                </div>
                <Testimonials />
            </div>
            
            <Footer />
        </>
    )
}

export default BlogId

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const posts: Post[] = await fetchBlog();

    return {
        props: {
            posts
        }
    }
}