import Image from 'next/image'
import React from 'react'
import { ICourse } from '../../../customTypesAndInterfaces/Course/courseInterfaces'
import { HiCalendarDays } from "react-icons/hi2"
import { AiFillYoutube } from 'react-icons/ai'

interface IProps {
    communityCourseData: ICourse
}
// md:w-[60%] xl:w-[50%] 2xl:w-[45%]
const CommunityCourseCard = ({ communityCourseData }: IProps) => {
    return (
        <div className='w-[90%] sm:w-[70%] lg:w-[90%] h-auto lg:h-72 flex flex-col justify-start items-center border-2 border-black bg-black rounded-md'
            onClick={() => console.log(communityCourseData)}
        >

            <div className='w-full h-full flex flex-col lg:flex-row justify-start items-center border border-black bg-white rounded-md'>
                {/* Thumbnail */}
                <div className='w-full h-[70%] lg:h-full lg:w-[50%] xl:w-[45%] 2xl:w-[35%] aspect-video lg:p-2'>
                    <Image
                        unoptimized
                        src={communityCourseData?.youtubeCourseThumbnail}
                        alt="thumbnail"
                        width={20}
                        height={20}
                        className={"h-full w-full aspect-video rounded-sm "}
                    />
                </div>

                <div className='w-full h-full flex flex-col justify-start items-start space-y-1 py-5 px-2 rounded-md'>
                    {/* Title */}
                    <p className='text-black text-2xl font-Roboto font-bold py-2 text-left'> {communityCourseData?.courseName} </p>


                    <div className='w-full py-1 flex flex-col justify-start items-center space-y-2 '>
                        {/* ---- Tags ---- */}
                        <div className='w-full py-1 flex flex-wrap justify-start items-center space-x-2 '>
                            {/* --- Days --- */}
                            <div className='flex justify-center items-center space-x-2 bg-white p-1 hover:cursor-pointer'>
                                <span className='bg-BrutalOrange1 p-1 border border-black rounded-sm'>
                                    <HiCalendarDays />
                                </span>
                                <p className='text-black text-sm font-Roboto font-medium'> {communityCourseData?.courseDurationInDays} Days </p>
                            </div>

                            {/* Youtube */}
                            <div className='flex justify-start items-center space-x-2 bg-white p-1 hover:cursor-pointer'>
                                <span className='bg-BrutalRed1 p-1 border border-black rounded-sm '>
                                    <AiFillYoutube className='text-black' />
                                </span>
                                <p className='text-black text-sm font-Roboto font-medium'> {communityCourseData?.youtubeCourseChannelName} </p>
                            </div>
                        </div>

                        {/* Details */}
                        <div className='hidden w-full lg:inline-flex flex-col justify-start items-start space-y-1 '>

                            <p className='text-black text-base font-Roboto font-medium'>
                                Goal : {' '}
                                <span className='text-gray-900 text-base font-Roboto font-medium'>
                                    {communityCourseData?.courseGoal}
                                </span>
                            </p>

                            <p className='text-black text-base font-Roboto font-medium'>
                                Prerequisites : {' '}
                                <span className='text-gray-900 text-base font-Roboto font-medium'>
                                {communityCourseData?.coursePrerequisites}
                                </span>
                            </p>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default CommunityCourseCard