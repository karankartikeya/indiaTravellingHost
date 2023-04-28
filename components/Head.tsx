import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import router, { useRouter } from 'next/router';
import { motion } from 'framer-motion'

import Link from 'next/link';
import Menu from './Menu';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import InfoCard from './InfoCard';
import SearchResult from './SearchResult';
import { Post } from '@/typing';

type Props = {
  placeholder?: string;
  session: boolean;
  post?: Post[];
}

function Header({ placeholder, session, post }: Props) {

  const header_content = {
    logo: {
      title: "ITH",
      path: "/ith.jpeg",
    },
    menu: [
      {
        title: "",
        link: "/",
      },
      {
        title: "Why Us?",
        link: "/#whyUs",
      },
      {
        title: "Itineraries",
        link: "/#itineraries",
      },
      {
        title: "Blogs",
        link: "/#blogs",
      },
    ],
  };
  console.log(post);

  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [filteredList, setFilteredList] = useState(post!);

  const openModal = () => {

    setSearch('true');
  }
  const supabaseClient = useSupabaseClient();
  const closeModal = () => {
    setSearch('');
  }
  const signOut = async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (!error) {
      location.reload();
    }
  }

  const Search = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log("search=", search);
  }

  useEffect(() => {
    console.log("Search=", search);
    var indexes: Post[] = [];
    var newDtata = [-1];
    post?.map((item) => {
      item.keywords?.map((keyword, i) => {
        if (keyword.toLocaleLowerCase().includes(search.toLowerCase()) && search != '') {
          console.log("keyword=", keyword);
          indexes.push(item);
        }
      })
    })
    console.log("newDtata=", indexes);
    setFilteredList(indexes);
  }, [search]);


  return (
    <>
      <header className=" relative z-30 -top-10 lg:top-0 w-full py-6 h-[130px] shadow-red-500 z-20">
        <nav className="mx-auto flex max-w-7xl flex-row items-center justify-between mt-0 space-x-4">
          {/* Logo */}
          <Image
            src={header_content?.logo?.path}
            className="cursor-pointer p-4"
            onClick={() => router.push("/")}
            height={150}
            width={156}
            priority
            alt={header_content?.logo?.title}
          />

          {/** Search Bar */}
          <div className='md:flex flex-col w-[300px] md:w-[400px] lg:w-full items-center md:border-2 rounded-full py-2 shadow-md md:shadow-md'>
            <input type='text' placeholder={placeholder} onChange={Search} onFocus={openModal} className='w-[300px] md:w-[400px] lg:w-full bg-transparent py-2 px-4 rounded-full outline-none border-none' />
          </div>


          {/* Nav menu items */}
          <ul className=" hidden md:space-x-6 lg:flex">
            {header_content?.menu &&
              header_content?.menu.map((item, i) => (
                <li
                  className="cursor-pointer transition p-2 rounded-lg text-blue-600 hover:text-yellow-400 font-bold text-4xl md:text-2xl"
                  key={i} onClick={() => router.push(`${item?.link}`)}>
                  {item?.title}
                </li>
              ))}
          </ul>

          <div>
            {/* Buttons */}
            <div className="hidden flex-row space-x-1 md:space-x-4 lg:flex ml-4 p-4">
              {session ? (
                <>
                  <button className=" rounded-lg border-2 bg-yellow-400 border-dark-gray text-xl font-bold px-8 py-4 transition hover:text-dark-blue hover:bg-blue-200" onClick={() => router.push('/profile/dashboard')}>
                    Dashboard
                  </button>
                  <button className="rounded-lg border-2 bg-yellow-400 border-dark-blue text-xl font-bold px-8 py-4 transition hover:text-dark-blue hover:bg-blue-200 " onClick={signOut}>
                    SignOut
                  </button>
                </>
              ) : (
                <>
                  <Link href='/signin'>
                    <button className="disabled font-extrabold rounded-lg bg-yellow-400 border-2 border-dark-gray text-xl text-gray-800 px-8 py-4 transition hover:text-dark-blue  hover:bg-blue-200">
                      Login
                    </button>
                  </Link>
                  <Link href='/register'>
                    <button className="rounded-lg font-extrabold border-2 bg-yellow-400 border-dark-blue text-xl px-8 py-4 transition hover:text-dark-blue  hover:bg-blue-200">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}

            </div>

            {/* Menu Icon */}
            <div className="lg:hidden p-4" onClick={() => setMenu(!menu)}>
              {menu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </div>
          </div>
        </nav>
        <Menu menu={menu} session={session} />

      </header>
      {/** Results Display upto 3 */}
      {search && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }} className=' flex flex-col md:mt-20 col-span-3 mt-5 border-2 p-10'>

          <div className='flex mx-auto items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-semibold'> Search Results</h2>
          </div>
          {filteredList?.map((item, i) => (
            <SearchResult key={i} post={item} />
          ))}
          <div>
            <div className='flex'>
              <button onClick={closeModal} className='flex-grow text-red-500'>Cancel</button>
              <button className='flex-grow text-blue-600' onClick={() => router.push('/blogDescription/allBlog')}>Show More Results</button>
            </div>
          </div>
        </motion.div>
      )}

    </>
  )


}

export default Header
