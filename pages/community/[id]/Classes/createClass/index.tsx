import { addDoc, collection, doc, getDocs } from 'firebase/firestore'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import CommunityLayout from '../../../../../components/layouts/Community/CommunityLayout'
import { IPathsData } from '../../../../../customTypesAndInterfaces/Tracks/pathsInterface'
import { ITrackData } from '../../../../../customTypesAndInterfaces/Tracks/tracksInterface'
import { db } from '../../../../../firebaseConfig'
import { setIsBottomBarVisible } from '../../../../../redux/slices/bottomBarSlice'

interface IProps {
    pathNumberToBuildFor: any
}


const classStartingTimeOptions = [
    {
        id: 0,
        label: "12:00 am",
        value: "12:00 am"
    },
    {
        id: 1,
        label: "12:30 am",
        value: "12:30 am"
    },
    {
        id: 2,
        label: "1:00 am",
        value: "1:00 am"
    },
]

const classEndingTimeOptions = [
    {}
]

const Index = ({ pathNumberToBuildFor }: IProps) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const {id} = router.query

    // ---- States ----
    const [isCreating, setIsCreating] = useState<boolean>(false)
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [classNameInputValue, setClassNameInputValue] = useState<string>("")
    const [classLinkInputValue, setClassLinkInputValue] = useState<string>("")
    const [classStartingTimeDropdownValue, setClassStartingTimeDropdownValue] = useState<string>("")
    const [classEndingTimeDropdownValue, setClassEndingTimeDropdownValue] = useState<string>("")


    const createClass = async () => {
        const communityClassesSubCollectionRef = collection(db, `communities/${id}/communityClasses`)
        const addingClass = await addDoc(communityClassesSubCollectionRef, {
            communityClassName: classNameInputValue,
            communityClassLink: classLinkInputValue 
        })
    }

    return (
        <>
            {!isCreating && (
                <CommunityLayout>
                    <main className='w-full h-[90vh] mb-[10vh] lg:mb-0 fixed lg:static inset-0 flex flex-col justify-start items-center bg-BgBrutalSkin1 lg:pt-12 lg:pb-36'>
                        <div className='w-full h-full xl:w-[70%] 2xl:w-[50%] flex flex-col justify-start items-start pt-10 pb-5 px-5 space-y-5 overflow-x-hidden overflow-y-scroll scrollbar-hide bg-white'>

                            {/* ---- LOGO ---- */}
                            <Link href={'/'} className='flex justify-center items-center space-x-3'>
                                <div className='w-6 h-6 rounded-full bg-BrutalPurple2 border-2 border-BrutalRed1 ' />
                                <span className='font-semibold'> CommComm </span>
                            </Link>

                            {/* ---- Heading and info ----- */}
                            <h2 className='text-3xl font-bold' onClick={() => {
                                console.log(pathNumberToBuildFor)
                                // console.log(`communityOwnerID -> 1`);
                            }}> Create a Class for <span className='text-BrutalBlue1'> Path Number {pathNumberToBuildFor[0]?.pathNumber} </span>  </h2>
                            <p className='font-medium text-sm text-gray-900'>
                                A free class for a specific path number for your own community members to learn together - Track name - "", Path Number - ""
                            </p>


                            {pageNumber === 1 && (
                                <div className='w-full h-full flex flex-col justify-between items-start py-3 space-y-5'>
                                    <div className='w-full h-full flex flex-col justify-start items-start space-y-5'>
                                        {/* Class Name */}
                                        <div className='w-[90%] h-10 relative bg-black flex justify-start items-center' onMouseEnter={() => dispatch(setIsBottomBarVisible(false))} onMouseLeave={() => dispatch(setIsBottomBarVisible(true))}>
                                            <input
                                                value={classNameInputValue}
                                                onChange={(e) => setClassNameInputValue(e.target.value)}
                                                required
                                                type="text"
                                                placeholder='Class name'
                                                className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'

                                            />
                                        </div>

                                        {/* Class Link */}
                                        <div className='w-[90%] h-10 relative bg-black flex justify-start items-center' onMouseEnter={() => dispatch(setIsBottomBarVisible(false))} onMouseLeave={() => dispatch(setIsBottomBarVisible(true))}>
                                            <input
                                                value={classLinkInputValue}
                                                onChange={(e) => setClassLinkInputValue(e.target.value)}
                                                required
                                                type="text"
                                                placeholder='Google Meet or Zoom link'
                                                className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'

                                            />
                                        </div>


                                        {/* Class Starting Time Dropdown*/}
                                        <div className='w-[90%] h-10 relative bg-black flex justify-start items-center '>
                                            <select
                                                title='Starting Time'
                                                className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'
                                                value={classStartingTimeDropdownValue}
                                                onChange={(e) => {
                                                    setClassStartingTimeDropdownValue(e.target.value)
                                                }}
                                            >
                                                {classStartingTimeOptions && classStartingTimeOptions?.map((timeOption) => {
                                                    return (
                                                        <option
                                                            key={timeOption.id}
                                                            value={timeOption.value}
                                                            className='bg-white px-2 py-3 text-black text-base'
                                                        > {timeOption.label} </option>
                                                        )
                                                    })}

                                            </select>
                                        </div>

                                        {/* Class Ending Time Dropdown*/}
                                        <div className='w-[90%] h-10 relative bg-black flex justify-start items-center '>
                                            <select
                                                title='Starting Time'
                                                className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'
                                                value={classStartingTimeDropdownValue}
                                                onChange={(e) => {
                                                    setClassStartingTimeDropdownValue(e.target.value)
                                                }}
                                            >
                                                {classStartingTimeOptions && classStartingTimeOptions?.map((timeOption) => {
                                                    return (
                                                        <option
                                                            key={timeOption.id}
                                                            value={timeOption.value}
                                                            className='bg-white px-2 py-3 text-black text-base'
                                                        > {timeOption.label} </option>
                                                    )
                                                })}

                                            </select>
                                        </div>


                                    </div>



                                    {/* Next Btn */}
                                    <div className='w-full flex justify-end items-center p-5'>
                                        <button
                                            onClick={() => {
                                                // createClass()
                                            }}
                                            type='button'
                                            title='next'
                                            className='w-20 md:w-32 h-10 relative flex justify-center items-center bg-black rounded-sm border-2 border-black'>
                                            <span className='w-20 md:w-32 h-10 absolute bottom-[2px] right-[2px] bg-BrutalBlue1  flex justify-center items-center rounded-sm border-2 border-black active:right-0 active:bottom-0 '>
                                                <p className='text-xs md:text-sm font-medium'> Create  </p>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            )}

                        </div>
                    </main>
                </CommunityLayout>
            )}

            {isCreating && (
                <div className='z-40 w-[100%] h-[100vh] fixed inset-0 flex flex-col justify-center items-center bg-BrutalBlue1 space-y-5'>
                    <p className='text-4xl font-bold text-black'> Creating... </p>
                    <AiOutlineLoading3Quarters className="w-10 h-10 text-black animate-spin" />
                </div>
            )}
        </>
    )
}

export default Index


export const getServerSideProps = async ({ params }: any) => {
    const { id } = params
    const communityTrackPathsSubCollectionRef = collection(db, 'communities', id, 'trackPaths')
    const res = await getDocs(communityTrackPathsSubCollectionRef)

    const data: IPathsData[] = res?.docs?.map(doc => doc.data() as IPathsData)

    const pathNumberToBuildFor = data.filter((path) => {
        if (!path.isCompleted && path.isUnlocked) {
            return path
        } else {
            return
        }
    })




    return {
        props: { pathNumberToBuildFor }
    }
}