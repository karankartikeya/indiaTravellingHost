import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Registration from '../components/Registration'
import Head from 'next/head'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

type Props = {}


export default function Register({ }: Props) {

	const router = useRouter();

	return (
		<div className=' h-screen'>
			<Head>
				<title>
					Register: ITH
				</title>
				<meta
					name="description"
					content="Register here to get started with your journey."
					key="desc"
				/>
				{/** add og title description and image */}
				<meta property="og:title" content="SignIn: ITH" key="ogtitle" />
				<meta property="og:description" content="Register here to get started with your journey." key="ogdesc" />
				<meta property="og:image" content="" key="ogimage" />
				<link rel="icon" href="ith.jpeg" />
			</Head>
			<Registration />
		</div>
	)
}

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