import Image from 'next/image'
import React from 'react'
import demoLogo from "../../../../public/images/bg/demo.jpg"
import TagBox from '../TagBox/TagBox'



interface ITopSectionProps {
    communityData: any
}

const TopSection = ({ communityData }: ITopSectionProps) => {
    return (
        <div className='w-full flex flex-col items-center justify-start bg-white border-b-2 border-b-black '>
            {/* ---- Banner ----  */}
            <div
                className='w-full bg-black h-[25vh] flex justify-start items-end'
                style={{
                    backgroundImage: 'url(' + `${communityData?.communityBanner}` + ')',
                    backgroundSize: "cover",
                }}>

                <div className='relative w-16 h-16 lg:w-20 lg:h-20  border border-black mx-3 -my-5 lg:mx-5 bg-black'>
                    <Image src={demoLogo} width={15} height={15} alt="logo" className='absolute right-[2px] bottom-[2px] border border-red-700 w-16 h-16 lg:w-20 lg:h-20 aspect-square ' />
                </div>
            </div>


            {/* ---- Details ----  */}
            <section className='w-full pt-3 flex flex-col justify-between items-center space-y-2 py-4 px-3 lg:px-5'>

                {/* Name and join buton */}
                <div className='w-full flex justify-between items-center pt-5 bg-red-300'>
                    <h2 className='text-lg lg:text-2xl font-semibold text-black'> {communityData?.communityName} </h2>

                    <div className='relative w-16 h-7 bg-black border border-black flex justify-center items-center rounded-full'>
                        <button
                            type='button'
                            className='w-16 h-7 absolute right-[2px] bottom-[2px] bg-BrutalGreen1 text-sm font-medium text-black border border-black active:right-0 active:bottom-0 rounded-full'>
                            Join
                        </button>
                    </div>

                </div>

                {/* total Members and online members */}
                <div className='w-full flex justify-start items-center space-x-2 bg-red-400'>
                    <p className='text-black text-sm font-light'> {communityData?.communityMembersID?.length} members </p>
                    <p className='text-black text-sm font-light'> {communityData?.communityMembersID?.length} online </p>
                </div>

                {/* Community Description */}
                <div className='w-full flex justify-start items-center space-x-2 hover:cursor-pointer bg-red-500'>
                    {communityData?.communityDescription.length > 130 && <p className='text-black font-normal text-sm'> {communityData?.communityDescription.slice(0, 130)}..... <span className='text-blue-700 opacity-70 font-normal text-sm hover:cursor-pointer'> read more </span> </p>}

                    {communityData?.communityDescription.length <= 130 && <p className='text-black font-normal text-sm'> {communityData?.communityDescription} </p>}
                </div>

                {/* Tags */}
                <div className='w-full flex justify-start items-center space-x-5 flex-wrap bg-red-600'>
                    <div className='relative w-32 h-7 bg-black border border-black flex justify-center items-center my-2'>
                        <div className={`absolute w-32 h-7 flex justify-center items-center right-[2px] bottom-[2px] border border-black bg-blue-500 text-xs font-medium hover:cursor-pointer`} > {communityData?.communityCategory.toUpperCase()} </div>
                    </div>

                    <div className='relative w-32 h-7 bg-black border border-black flex justify-center items-center my-2'>
                        <div className={`absolute w-32 h-7 flex justify-center items-center right-[2px] bottom-[2px] border border-black bg-yellow-500 text-xs font-medium hover:cursor-pointer`} > {communityData?.communitySubCategory.toUpperCase()} </div>
                    </div>
                </div>


            </section>

        </div>
    )
}

export default TopSection