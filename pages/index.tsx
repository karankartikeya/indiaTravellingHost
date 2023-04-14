import Banner from '@/components/Banner'
import Head from '../components/Head'
import { Inter } from 'next/font/google'
import MediumCard from '@/components/MediumCard'
import { GetServerSideProps } from 'next'
import Sectionas from '@/components/Sectionas'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import { fetchBlog } from '@/utils/fetchBlogs'
import { Itinerary, Post } from '@/typing'
import { fetchItinerary } from '@/utils/fetchItineraries'


const inter = Inter({ subsets: ['latin'] })

type Props={
  posts: Post[];
  itineraries: Itinerary[];
}

export default function Home({posts, itineraries}:Props) {
  return (
    <div className='bg-gradient-to-r from-[#cab59e] to-[#dcad51] scrollbar scrollbar-track-blue-500 scrollbar-thumb-yellow-400'>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
        <Banner />
      </section>

      <Head  placeholder='Search here'/>
      {/** Blogs Section Card */}
      <section id='blogs' className=''>
        <MediumCard title='Blogs' posts={posts}/>
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

      <Testimonials/>
      <div className='mb-10'></div>
      <Footer/>
    </div>


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