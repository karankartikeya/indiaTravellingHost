import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity'
import Link from 'next/link'

export const RichTextComponents = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className='relative w-full h-96 m-10 mx-auto'>
                    <Image
                        className='object-contain'
                        src={urlFor(value).url()!}
                        alt='Blog Post'
                        fill
                    />
                </div>
            );
        },
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className='list-disc list-inside ml-10 py-5 space-y-5'>{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className='mt-lg list-decimal'>{children}</ol>
        ),
    },
    block: {
        h1: ({ children }: any) => (
            <h1 className='text-center text-5xl py-10 font-bold'>{children}</h1>
        ),
        h2: ({ children }: any) => (
            <h2 className='text-4xl py-2 font-bold'>{children}</h2>
        ),
        h3: ({ children }: any) => (
            <h3 className='text-3xl py-2 font-bold'>{children}</h3>
        ),
        h4: ({ children }: any) => (
            <h4 className='text-2xl py-2 font-bold'>{children}</h4>
        ),

        blockquote: ({ children }: any) => (
            <blockquote className='border-l-[#F7AB0A] border-l-4 pl-5  my-5'>
                {children}
            </blockquote>
        ),
        normal: ({ children }: any) => (
            <p className='text-2xl '>{children}</p>
        ),
    },

    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith("/")
                ? "noopener noreferrer"
                : undefined;
            return (
                <Link
                    href={value.href}
                    rel={rel}
                    className='underline decoration-[#F7AB0A] hover:decoration-black'>
                    {children}</Link>
            );
        },
    }
}