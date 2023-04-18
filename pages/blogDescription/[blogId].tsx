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
import { useRouter } from 'next/router'
import { PortableText } from '@portabletext/react'
import { RichTextComponents } from '@/components/RichTextComponents'

type Props = {
    posts: Post[];
}

function BlogId({ posts }: Props) {

    const { query } = useRouter();
    const blogId= query.blogId as string;
    const blogData = posts.find((post) => post?.postId === blogId)!;
    return (
        <>
            <div className='bg-gradient-to-r from-[#cab59e] to-[#dcad51] scrollbar scrollbar-track-gray-500/40'>
                <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
                    <Banner />
                </section>
                <Head placeholder='Search' />
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