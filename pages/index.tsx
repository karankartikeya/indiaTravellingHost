import Banner from '@/components/Banner'
import { Inter } from 'next/font/google'
import MediumCard from '@/components/MediumCard'
import { GetServerSideProps } from 'next'
import Sectionas from '@/components/Sectionas'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import { fetchBlog } from '@/utils/fetchBlogs'
import { Itinerary, Post } from '@/typing'
import { fetchItinerary } from '@/utils/fetchItineraries'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import Header from '../components/Head'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

type Props = {
  posts: Post[];
  itineraries: Itinerary[];
}

export default function Home({ posts, itineraries }: Props) {
  const supabaseClient = useSupabaseClient();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

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
          Home: ITH
        </title>
        <meta
          name="description"
          content="India Travelling Host is a unique and innovative solution that caters to the needs of foreign tourists visiting India."
          key="desc"
        />
        {/** add og title description and image */}
        <meta property="og:title" content="Home: ITH" key="ogtitle" />
        <meta property="og:description" content="India Travelling Host is a unique and innovative solution that caters to the needs of foreign tourists visiting India." key="ogdesc" />
        <link rel="icon" href="ith.jpeg" />
      </Head>
      <div className='bg-gradient-to-r from-[#cab59e] to-[#dcad51] scrollbar scrollbar-track-blue-500 scrollbar-thumb-yellow-400'>
        <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
          <Banner />
        </section>

        <Header placeholder='Search here' session={isUserLoggedIn} />
        {/** Blogs Section Card */}
        <section id='blogs' className=''>
          <MediumCard title='Blogs' posts={posts} />
        </section>

        {/** Why us */}
        <section id='whyus' className=''>
          <Sectionas num={1} />
          <Sectionas num={2} />
          <Sectionas num={3} />
        </section>

        <section id='itineraries' className=''>
          <MediumCard title='Itineraries' itineraries={itineraries} />
        </section>

        <Testimonials />
        <div className='mb-10'></div>
        <Footer />
      </div>

    </>

  )
}


export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const posts: Post[] = await fetchBlog();
  const itineraries: Itinerary[] = await fetchItinerary();

  return {
    props: {
      posts,
      itineraries
    }
  }
}