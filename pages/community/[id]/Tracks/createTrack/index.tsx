import React, { useState } from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import CommunityLayout from '../../../../../components/layouts/Community/CommunityLayout'
import { setIsBottomBarVisible } from "../../../../../redux/slices/bottomBarSlice"

const Index = () => {
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [trackNameInputValue, setTrackNameInputValue] = useState<string>("")
    const dispatch = useDispatch()

    const createTrack = async () => {
        alert("Creating")
    }

    return (
        <CommunityLayout>
            <main className='w-full h-[100vh] fixed lg:static inset-0 flex flex-col justify-start items-center bg-BrutalOrange1 lg:pt-12 lg:pb-36'>

                <div className='w-full h-[100vh] bg-white p-2 flex flex-col justify-start items-start pt-10 pb-5 px-5'>
                    {/* ---- LOGO ---- */}
                    <Link href={'/'} className='flex justify-center items-center space-x-3'>
                        <div className='w-6 h-6 rounded-full bg-BrutalPurple2 border-2 border-BrutalRed1 ' />
                        <span className='font-semibold'> CommComm </span>
                    </Link>

                    {/* ---- Heading ----- */}
                    <h2 className='text-3xl font-bold'> Create a Track  </h2>


                    {/* ---- Details ----- */}
                    <form className='w-full h-full bg-red-400 flex flex-col items-center justify-start space-y-5 pt-5' onSubmit={createTrack}>
                        {pageNumber === 1 && (
                            <div className='w-full h-full flex flex-col justify-start items-center bg-green-500'>
                                {/* Name */}
                                <div className='w-[90%] h-10 relative bg-black flex justify-start items-center' onMouseEnter={() => dispatch(setIsBottomBarVisible(false))} onMouseLeave={() => dispatch(setIsBottomBarVisible(true))}>
                                    <input
                                        value={trackNameInputValue}
                                        onChange={(e) => setTrackNameInputValue(e.target.value)}
                                        required
                                        type="text"
                                        placeholder='Track name'
                                        className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'

                                    />
                                </div>

                                {/* Goal */}
                                <div className='w-[90%] h-10 relative bg-black flex justify-start items-center' onMouseEnter={() => dispatch(setIsBottomBarVisible(false))} onMouseLeave={() => dispatch(setIsBottomBarVisible(true))}>
                                    <input
                                        value={trackNameInputValue}
                                        onChange={(e) => setTrackNameInputValue(e.target.value)}
                                        required
                                        type="text"
                                        placeholder='Goal of track'
                                        className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'

                                    />
                                </div>

                                {/* Duration */}
                                <div className='w-[90%] h-10 relative bg-black flex justify-start items-center' onMouseEnter={() => dispatch(setIsBottomBarVisible(false))} onMouseLeave={() => dispatch(setIsBottomBarVisible(true))}>
                                    <input
                                        value={trackNameInputValue}
                                        onChange={(e) => setTrackNameInputValue(e.target.value)}
                                        required
                                        type="number"
                                        placeholder='Duration in days'
                                        className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'

                                    />
                                </div>

                                {/* Timing */}
                                <div className='w-[90%] h-10 relative bg-black flex justify-start items-center' onMouseEnter={() => dispatch(setIsBottomBarVisible(false))} onMouseLeave={() => dispatch(setIsBottomBarVisible(true))}>
                                    <input
                                        value={trackNameInputValue}
                                        onChange={(e) => setTrackNameInputValue(e.target.value)}
                                        required
                                        type="number"
                                        placeholder='Timing'
                                        className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'

                                    />
                                </div>

                                <button
                                    type='button'
                                    onClick={() => setPageNumber(2)}
                                > Next </button>
                            </div>
                        )}


                        {pageNumber === 2 && (
                            <div className='w-full h-full flex flex-col justify-start items-center bg-blue-500'>
                                {/* Source of learning */}
                                <div className='w-[90%] h-10 relative bg-black flex justify-start items-center' onMouseEnter={() => dispatch(setIsBottomBarVisible(false))} onMouseLeave={() => dispatch(setIsBottomBarVisible(true))}>
                                    <input
                                        value={trackNameInputValue}
                                        onChange={(e) => setTrackNameInputValue(e.target.value)}
                                        required
                                        type="text"
                                        placeholder='Source of learning'
                                        className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'

                                    />
                                </div>

                                {/* Language */}
                                <div className='w-[90%] h-10 relative bg-black flex justify-start items-center' onMouseEnter={() => dispatch(setIsBottomBarVisible(false))} onMouseLeave={() => dispatch(setIsBottomBarVisible(true))}>
                                    <input
                                        value={trackNameInputValue}
                                        onChange={(e) => setTrackNameInputValue(e.target.value)}
                                        required
                                        type="text"
                                        placeholder='Language'
                                        className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'

                                    />
                                </div>

                                {/* Who can join this track */}
                                <div className='w-[90%] h-10 relative bg-black flex justify-start items-center' onMouseEnter={() => dispatch(setIsBottomBarVisible(false))} onMouseLeave={() => dispatch(setIsBottomBarVisible(true))}>
                                    <input
                                        value={trackNameInputValue}
                                        onChange={(e) => setTrackNameInputValue(e.target.value)}
                                        required
                                        type="text"
                                        placeholder='Who can join this track'
                                        className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'

                                    />
                                </div>

                                {/* Description */}
                                <div className='w-[90%] h-10 relative bg-black flex justify-start items-center' onMouseEnter={() => dispatch(setIsBottomBarVisible(false))} onMouseLeave={() => dispatch(setIsBottomBarVisible(true))}>
                                    <input
                                        value={trackNameInputValue}
                                        onChange={(e) => setTrackNameInputValue(e.target.value)}
                                        required
                                        type="text"
                                        placeholder='Description (optional)'
                                        className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'

                                    />
                                </div>


                                <div className='flex justify-between items-center'>
                                    <button
                                        type='button'
                                        onClick={() => console.log(1)}
                                    > Create </button>

                                    <button
                                        type='button'
                                        onClick={() => setPageNumber(1)}
                                    > Back </button>
                                </div>
                            </div>
                        )}




                    </form>
                </div>


            </main>
        </CommunityLayout>
    )
}

export default Index