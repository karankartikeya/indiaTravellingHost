import SignIn from '@/components/SignIn'
import Head from 'next/head'
import React from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { createServerSupabaseClient} from '@supabase/auth-helpers-nextjs'

type Props = {}

function login({}: Props) {
  return (
    <div className=' h-screen'>
      <Head>
        <title>
          SignIn: 7svar
        </title>
        <meta
          name="description"
          content="An online music learning platform which solves 3I's. Enroll now and find the music within you.."
          key="desc"
        />
        <link rel="icon" href="7svar1.png" />
      </Head>
      <SignIn />
    </div>
  )
}

export default login

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (session)
    return {
      redirect: {
        destination: '/profile/dashboard',
        permanent: false
      }
    };

  return {
    props: {
      initialSession: session,
    }
  };
}