import React from 'react'
import{ motion }from 'framer-motion'
import { Post } from '@/typing';
import { useRouter } from 'next/router';

type Props = {
    num: number
    post?: Post;
}

function Sectionas({num, post}: Props) {
    const hidden = num%2 == 0 ? true : false;
    const router= useRouter()
    const goTo = () => {
        router.push('/blogDescription/' + (post?.postId));
    }
  return (
    <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative mt-24 text-center md:text-left md:flex-row max-wd-7xl px-10 justify-evenly mx-auto items-center scroll-auto mb-44'
            onClick={goTo}>
            
            <motion.img
            initial= {{
                x : -200,
                opacity: 0
            }}
            transition = {{
                duration: 1.2,

            }}
            whileInView = {{opacity:1 ,x: 0}}
 
            src='ith.jpeg'
            className='mb-16 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px] '
            hidden={!hidden}
        />
            <div className='space-y-10 px-0 md:px-10'>
                <h3 className='text-4xl font-semibold'> {post?.title} </h3>
                <p className='text-base'>
                 WRITTEN BY:   {post?.author}
                </p>
            </div>
            <motion.img
            initial= {{
                x : -200,
                opacity: 0
            }}
            transition = {{
                duration: 1.2,

            }}
            whileInView = {{opacity:1 ,x: 0}}
 
            src='ith.jpeg'
            className='mb-16 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px] '
            hidden={hidden}
        />
        </motion.div>
  )
}

export default Sectionas