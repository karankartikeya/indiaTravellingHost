import React from 'react'

type Props = {}

function Itinerary({ }: Props) {
    return (
        <section id='syllabus' className=' bg-gradient-to-r from-[#cab59e] to-[#dcad51]'>
            <div className='layout flex flex-col items-center justify-center pt-24 pb-20 text-center'>
                <h2 className='font-sans text-4xl font-semibold leading-relaxed  md:text-5xl lg:text-6xl text-center'>Plan for Days</h2>
                <hr className='h-2 w-32 rounded-full border-none bg-primary my-6 mx-auto' />
                <div className='mx-auto grid grid-cols-1 md:grid-cols-2'>
                    {content.syllabus.map((s, i) => (
                        <div
                            data-index={i + 1}
                            key={s.title}
                            className='border-2 border-primary/30 p-6 before:h2 before:mb-2 before:inline-flex before:aspect-square before:h-12 before:items-center before:justify-center before:rounded-md before:bg-primary/30  before:text-content before:content-[attr(data-index)]'>
                            <h3>{s.title}</h3>
                            <p className='mt-2'>{s.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Itinerary


const content = {
    syllabus: [
        {
            title: 'Introduction',
            description: 'Introduction to the course and the instructor',
        },
        {
            title: 'Arrays',
            description: 'Introduction to Arrays',
        },
        {
            title: 'Searching and Sorting',
            description: 'Searching and Sorting Algorithms',
        },
        {
            title: 'Linked List',
            description: 'Introduction to Linked List',
        },
        {
            title: 'Stack and Queue',
            description: 'Introduction to Stack and Queue',
        },
        {
            title: 'Recursion',
            description: 'Introduction to Recursion',
        },
        {
            title: 'Binary Tree',
            description: 'Introduction to Binary Tree',
        },
        {

            title: 'Binary Search Tree',
            description: 'Introduction to Binary Search Tree',
        },
        {
            title: 'Heap',
            description: 'Introduction to Heap',
        },
    ],
}