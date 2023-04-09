import Banner from '@/components/Banner'
import Head from '../components/Head'
import { Inter } from 'next/font/google'
import MediumCard from '@/components/MediumCard'
import DetailCard from '@/components/DetailCard'
import Sectionas from '@/components/Sectionas'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-gradient-to-r from-[#cab59e] to-[#dcad51] scrollbar scrollbar-track-slate-500'>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
        <Banner />
      </section>

      <Head  placeholder='Searchj here'/>
      {/** Blogs Section Card */}
      <section id='blogs' className=''>
        <MediumCard title='Blogs'/>
      </section>

      {/** Why us */}
      <section id='whyus' className=''>
        <Sectionas num={1} />
        <Sectionas num={2} />
        <Sectionas num={3} />
      </section>


      {/** Travel Itinerary Section Card */}
      <section id='itinerary' className='mb-10'>
        <MediumCard title='Itinerary'/>
      </section>

      <Testimonials/>

      <Footer/>



    </div>


  )
}
