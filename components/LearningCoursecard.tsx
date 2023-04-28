import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Subscription } from '../typing'
import supabase from '../utils/supabase'

type Props = {
    courseId?: string,
    subscription: {[x:string]:any},
}

export default function LearningCourseCard({ courseId, subscription }: Props) {

    const router = useRouter();
    const [courseName, setCourseName] = useState('');
    const getSubscription = async () => {
        const { data: course } = await supabase.from('course').select('course_name').eq('course_id', courseId).single();
        setCourseName(course?.course_name);
    }
    const courseFeed = () => {
        router.push({
            pathname: '/profile/course_updates',
            query: {
                course_id: courseId,
                id: subscription?.user_id,
                sid: String(subscription.id),
            }
        })
    }
    console.log(subscription);
    const currentDate = new Date();
    const startCourseDate = new Date(Number(subscription?.current_subscription_starttimestamp));
    const endCourseDate = new Date(Number(subscription?.current_subscription_endtimestamp));
    const startDate = startCourseDate.toDateString();
    const endDate = endCourseDate.toDateString();
    const courseEnded = (currentDate > endCourseDate) ? true : false;
    useEffect(() => {
        getSubscription();
    })

    return (
        <div className="w-fit rounded-xl p-4 overflow-hidden shadow-lg bg-gradient-to-r from-[#dcaccb] to-[#F6d327]">
            <Image priority src='/7svar1.png' width={95} height={78} alt='logo' />
            <div className="px-6 py-4 space-y-7">
                <div className="font-bold text-xl mb-2">{courseName}</div>
                {!courseEnded ? (<p className='text-green-700 text-xl flex-grow'>Course in Progress</p>) : (<p className='text-red-700 text-xl flex-grow'>Course Expired</p>)}
                <div className='flex flex-col '>
                    <p className="text-gray-700 text-base flex-grow">
                        Course Starts : {startDate} &nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                    <p className="text-gray-700 text-base flex-grow">
                        Course Ends : {endDate} &nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                </div>
            </div>
            <div className='px-2 pt-4 pb-2 items-center flex flex-col space-y-2'>
                <button className={`bg-[#FFCD24] rounded-md py-5 px-10 ${!courseEnded ? 'opacity-100' : 'opacity-50'} text-black font-bold text-lg md:mt-0 mt-2`} disabled={courseEnded} onClick={courseFeed}>Explore</button>
            </div>
        </div>
    )
}

