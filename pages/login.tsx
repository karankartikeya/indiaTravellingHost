import SignIn from '@/components/SignIn'
import Head from 'next/head'
import React from 'react'

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