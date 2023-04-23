import { Social } from '@/typing';
import Link from 'next/link'
import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {
  socials: Social[];
}

function Footer({ socials }: Props) {

  return (
    <div className='w-full grid grid-cols-2 sticky shadow-lg md:grid-cols-2 gap-y-10 bg-blue-100 md:px-32 px-14 py-14 border-t border-solid rounded-xl border-purple-700 text-gray-600'>
      <div className='space-y-4 text-x5 text-gray-800'>
        <h5 className='font-extrabold text-2xl'>ABOUT</h5>
        <p className='font-extrabold'><Link href='/'>Home</Link></p>
        {socials.map((social) => (
          <p key={social._id} className='font-extrabold '>
            <Link href={social.url} target="_blank" rel='noopener noreferrer'>{social.title}</Link>
          </p>
        ))}

      </div>

      <div className='space-y-4 text-x5 text-gray-800'>
        <h5 className='font-extrabold text-2xl' >SUPPORT</h5>
        <p className='font-extrabold'><Link href='/policies/#privacy'>Privacy Policy</Link></p>
        <p className='font-extrabold'><Link href='/policies/#terms'>Terms and Conditions</Link></p>
        <p className='font-extrabold'><Link href='/policies/#terms'>Contact Us</Link></p>
        <p className='font-extrabold'><Link href='/policies/#refund'>Refund Policy</Link></p>
      </div>
    </div>
  )
}

export default Footer