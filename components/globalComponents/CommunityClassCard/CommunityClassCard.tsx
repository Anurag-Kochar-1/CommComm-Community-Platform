import React from 'react'
import { IClassData } from '../../../customTypesAndInterfaces/Class/classInterfaces'
import { IoMdCalendar } from "react-icons/io"
import { FiSettings } from "react-icons/fi"
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../firebaseConfig'
import Link from 'next/link'

interface IProps {
    classDetails: IClassData
}

const CommunityClassCard = ({ classDetails }: IProps) => {
    const router = useRouter()
    const [user, loading] = useAuthState(auth)

    const joinClass =  () => {
        router.push(`${classDetails?.communityClassLink}`)
    }

    return (
        <div className='relative w-[95%] sm:w-[80%] md:w-[60%] lg:w-[70%] xl:w-[50%] h-72 sm:h-56 md:h-56 bg-white border-2 border-black rounded-md' onClick={() => console.log(classDetails)}>
            <div className='absolute bottom-2 right-2 w-full h-full bg-white border-2 border-black rounded-md'>
                <div className='absolute bottom-2 right-2 w-full h-full p-3 bg-white border-2 border-black rounded-md flex flex-col justify-start items-start space-y-3 overflow-x-hidden overflow-y-scroll'>

                    {/* Timing Header */}
                    <div className='w-full flex justify-start items-center space-x-2'>
                        <IoMdCalendar className='text-xl text-BrutalPurple2' />
                        <p className='text-sm font-medium text-gray-800'> {classDetails?.dateCreatedAt} {classDetails.communityClassStartingTime} - {classDetails.communityClassEndingTime} </p>
                    </div>

                    {/* Community Class Name */}
                    <h3 className='text-lg font-bold'> {classDetails?.communityClassName} </h3>
                    <p className='text-sm font-medium'> {classDetails?.communityClassDescription} </p>

                    {/* Line Divider */}
                    <div className='w-full h-[1px] bg-black' />

                    <div className='w-full flex justify-between items-center'>
                        <div className='flex justify-center items-center space-x-2'>
                            {classDetails?.communityLogo && <Image src={classDetails?.communityLogo} alt="logo" className='w-7 h-7 rounded-full' width={7} height={7} />}
                            <p className='text-sm font-normal text-black'> {classDetails?.communityName} </p>
                        </div>

                        <button
                            type='button'
                            className='outline-none border-none px-6 py-2 rounded-sm bg-BrutalPurple2 text-white font-medium text-sm'
                            onClick={joinClass}
                        >
                            <p> Join </p>
                        </button>

                        {/* <FiSettings /> */}
                    </div>



                </div>
            </div>
        </div>
    )
}

export default CommunityClassCard