import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { createServerSupabaseClient, Session } from '@supabase/auth-helpers-nextjs'
import { GetServerSidePropsContext } from 'next'

import Head from 'next/head'
import { useUser } from '@/utils/useUser'
import Link from 'next/link'
import LearningCourseCard from '../../components/LearningCoursecard'
import LoadingDots from '../../components/LoadingDots/LoadingDots'
import Header from '@/components/Head'
import { fetchSocials } from '@/utils/fetchSocials'
import { Social } from '@/typing'
import Footer from '@/components/Footer'
import { supabaseAdmin } from '@/utils/supabase-admin'

type Props = {
  initialSession: Session,
  socials: Social[],
}

function Dashboard({ initialSession, socials }: Props) {

  const { userDetails, isLoading, user, subscription } = useUser();
  const supabase = useSupabaseClient();
  const isSession = initialSession == null ? false : true;
  const teacherCheck = userDetails?.role;
  const isTeacher = teacherCheck == 'teacher' ? true : false;

  return (
    <div className='bg-gradient-to-r from-[#cab59e] to-[#dcad51] snap-y snap-mandatory overflow-y-scroll 
    overflow-x-hidden z-0 scrollbar scrollbar-track-gray-500/40 scrollbar-thumb-[#f7ab0a]/40 h-screen'>
      <Head>
        <title>
          Dashboard: ITH
        </title>
        <meta
          name="description"
          content=" India Travelling Host Dashboard"
          key="desc"
        />
        <link rel="icon" href="ith.jpeg" />
      </Head>
      <meta property="og:title" content="Dashboard: ITH" key="ogtitle" />
      <meta property="og:description" content="India Travelling Host is a unique and innovative solution that caters to the needs of foreign tourists visiting India." key="ogdesc" />
      <link rel="icon" href="ith.jpeg" />
      <Header session={isSession} />

      <h1 className='uppercase text-4xl text-center font-bold mt-28 text-red-500'>Customer Dashboard:</h1>

      <div className=' flex flex-col space-x-5 p-10 snap-x text-center'>
        {subscription?.length != 0 ? (
          <div className='grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 grid-cols-1 gap-8 mb-16 p-10 w-fit'>
            {subscription?.map((sub, index) => (<LearningCourseCard key={index} courseId={sub.itineraryId} subscription={sub} />))}
          </div>
        ) : (<div className=''><p className='md:text-6xl text-xl text-center items-center text-orange-500 justify-end font-semibold'>Seems like you haven&apos;t bought any itinerary yet {userDetails?.full_name}</p>
          <p className='text-gray-600 text-xl text-center mt-10'>Click <Link href='/#itineraries' className='underline text-red-500'>here</Link> to buy some for you</p></div>)}
      </div>
    </div>
  )
}
export default Dashboard

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  const socials: Social[] = await fetchSocials();
  // Check if we have a session
  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    };

  return {
    props: {
      initialSession: session,
      user: session.user,
      socials
    }
  };
};