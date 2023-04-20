import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Registration from '../components/Registration'
import Head from 'next/head'

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
