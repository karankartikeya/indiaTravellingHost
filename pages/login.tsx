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
          SignIn: ITH
        </title>
        <meta
          name="description"
          content="SignIn here to get started with your journey."
          key="desc"
        />
        {/** add og title description and image */}
        <meta property="og:title" content="SignIn: ITH" key="ogtitle" />
        <meta property="og:description" content="SignIn here to get started with your journey." key="ogdesc" />
        <meta property="og:image" content="" key="ogimage" />
        <link rel="icon" href="ith.jpeg" />
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