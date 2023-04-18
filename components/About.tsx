import React from 'react'

type Props = {
    Title?: string;
    Author?: string;
}

function About({ Title, Author }: Props) {
    return (

        <section id='about'>
            <div className='layout flex flex-col items-center justify-center pt-24 pb-20 text-center'>
                <h1 className='text-center font-sans text-4xl font-black leading-relaxed text-content md:text-5xl lg:text-8xl'>
                    <span className='highlight highlight--light'>
                        {Title}
                    </span>{' '}
                    
                </h1>
                <p className='h3 mt-4'>Written By: {Author} </p>

                <iframe
                    src='https://www.youtube.com/embed/d9AUCOtOaTM'
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowFullScreen
                    className='mt-8 block aspect-video h-full w-full max-w-[50rem] rounded-xl border-2 object-cover shadow-[0_1rem_3rem] shadow-primary/80'
                ></iframe>

            </div>
        </section>

    )
}

export default About