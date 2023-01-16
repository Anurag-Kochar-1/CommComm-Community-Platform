import Image from 'next/image'
import React from 'react'
import { ICourse } from '../../../customTypesAndInterfaces/Course/courseInterfaces'
import {HiCalendarDays} from "react-icons/hi2"
import { AiFillYoutube } from 'react-icons/ai'

interface IProps {
    communityCourseData: ICourse
}

const CommunityCourseCard = ({ communityCourseData }: IProps) => {
    return (
        <div className='w-[90%] sm:w-[70%] md:w-[60%] xl:w-[50%] h-auto flex flex-col justify-start items-center border-2 border-black bg-black rounded-md'>

            <div className='w-full h-full flex flex-col justify-start items-center border border-black bg-white rounded-md'>
                {/* Thumbnail */}
                <div className='w-full h-[70%] aspect-auto'>
                    <Image
                        unoptimized
                        src={communityCourseData?.youtubeCourseThumbnail}
                        alt="thumbnail"
                        width={20}
                        height={20}
                        className={"h-full w-full aspect-video rounded-sm"}
                    />
                </div>

                <div className='w-full h-full flex flex-col justify-start items-start space-y-1 bg-white py-5 px-2 rounded-md'>
                    {/* Title */}
                    <p className='text-black text-2xl font-Roboto font-bold py-2 text-left'> {communityCourseData?.courseName} </p>


                    {/* Tags */}
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
                                <AiFillYoutube className='text-black'/>
                            </span>
                            <p className='text-black text-sm font-Roboto font-medium'> {communityCourseData?.youtubeCourseChannelName} </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default CommunityCourseCard