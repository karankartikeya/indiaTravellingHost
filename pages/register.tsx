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
					SignUp: 7svar
				</title>
				<meta
					name="description"
					content="An online music learning platform which solves 3I's. Enroll now and find the music within you.."
					key="desc"
				/>
				<link rel="icon" href="7svar1.png" />
			</Head>
			<Registration />
		</div>
	)
}
	