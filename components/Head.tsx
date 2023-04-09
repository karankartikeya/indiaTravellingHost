import Image from 'next/image'
import React, { useState } from 'react'

import router, { useRouter } from 'next/router';

import Link from 'next/link';

type Props = {
  placeholder: string;
}

function Head({ placeholder }: Props) {
  const myLoader = () => {
    return '/logo.jpeg'
  };

  const [searchInput, setSearchInput] = useState('');

  const openModal = () => setSearchInput('Rajae HomeStay');

  return (
    <header id='home' className='sticky top-0 z-50 grid grid-cols-3 bg-transparent shadow-md p-5 md:px-10'>

      {/**Left Side: Icon */}
      <div onClick={() => router.push('/')} className='relative flex items-center h-16 cursor-pointer my-auto'>
        <Image
          priority
          alt="picture of homestay"
          loader={myLoader}
          src=" "
          layout="fill"
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      {/**  Middle Section: Search Bar */}
      <div className='md:flex flex-col items-center md:border-2 rounded-full py-2 space-x-0 shadow-md md:shadow-md'>
      </div>

      {/**  Right Section: Right Side */}
      <div className='flex items-center space-x-4 justify-end text-gray-500' onClick={openModal}>
        <Link href='/login'>
          <p className='hidden lg:inline bg-red-500 text-white font-bold border-2 rounded-full p-2 cursor-pointer'> Login/Register</p>
        </Link>
      </div>

    </header>
  )
}

export default Head
