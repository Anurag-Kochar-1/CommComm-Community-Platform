import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import CommunityLayout from '../../../../../components/layouts/Community/CommunityLayout'
import { setIsBottomBarVisible } from "../../../../../redux/slices/bottomBarSlice"
import { sourceOfLearningOptions } from "../../../../../constants/createTrackPage/sourceOfLearningOptions"
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { auth, db } from '../../../../../firebaseConfig'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { ITrackData } from '../../../../../customTypesAndInterfaces/Tracks/tracksInterface'

interface IProps {
    communityOwnerID: string
}

const Index = ({ communityOwnerID }: IProps) => {
    const [user, loading, error] = useAuthState(auth)
    const router = useRouter()
    const { id } = router.query


    // States
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [trackNameInputValue, setTrackNameInputValue] = useState<string>("")
    const [trackGoalInputValue, setTrackGoalInputValue] = useState<string>("")
    const [trackDurationInputValue, setTrackDurationInputValue] = useState<number | string>("Duration in days")
    const [sourceOfLearningDropdownValue, setSourceOfLearningDropdownValue] = useState<string>("")
    const [sourceOfLearningDropdownLink, setSourceOfLearningDropdownLink] = useState<string>("")
    const [trackPrerequisitesInputValue, setTrackPrerequisitesInputValue] = useState<string>("")
    const [trackOptionalDescription, setTrackOptionalDescription] = useState<string>("")
    const dispatch = useDispatch()

    const createTrack = async () => {
        if (trackDurationInputValue <= 90) {
            if (communityOwnerID === user?.uid) {
                if (user && !loading && trackNameInputValue && trackGoalInputValue && trackDurationInputValue && sourceOfLearningDropdownValue && sourceOfLearningDropdownLink && trackPrerequisitesInputValue) {
                    try {
                        const communityTracksSubCollectionRef = collection(db, `communities/${id}/communityTracks`)
                        const addingTrack = await addDoc(communityTracksSubCollectionRef, {
                            trackID: "",
                            communityID: id,
                            trackName: trackNameInputValue,
                            trackGoal: trackGoalInputValue,
                            trackDurationInDays: trackDurationInputValue,
                            trackSourceOfLearning: sourceOfLearningDropdownValue,
                            trackSourceOfLearningLink: sourceOfLearningDropdownLink,
                            trackPrerequisites: trackPrerequisitesInputValue,
                            trackDescription: trackOptionalDescription || ""
                        })

                        // ---- adding ID ----
                        const trackRef = doc(db, "communities", id as string, "communityTracks", addingTrack?.id)
                        await updateDoc(trackRef, {
                            trackID: addingTrack.id
                        })


                        // -------- creating Tracks paths ---------
                        const data = await getDoc(trackRef)
                        const pathsNumbers: number = data.data()?.trackDurationInDays
                        const communityPathsSubCollectionRef = collection(db, "communities", id as string, "trackPaths")

                        for (let i = 1; i <= pathsNumbers; i++) {
                            // adding path
                            if (i === 1) {
                                const addingPath = await addDoc(communityPathsSubCollectionRef, {
                                    pathID: "",
                                    trackID: addingTrack.id,
                                    pathNumber: i,
                                    isUnlocked: true,
                                    isCompleted: false

                                })

                                // adding ID manually
                                await updateDoc(addingPath, {
                                    pathID: addingPath.id
                                })
                            } else {
                                const addingPath = await addDoc(communityPathsSubCollectionRef, {
                                    pathID: "",
                                    trackID: addingTrack.id,
                                    pathNumber: i,
                                    isUnlocked: false,
                                    isCompleted: false

                                })

                                // adding ID manually
                                await updateDoc(addingPath, {
                                    pathID: addingPath.id
                                })
                            }


                        }







                        // router.push(`/community/${id}/Tracks`)
                    } catch (error) {
                        alert(error)
                    }
                } else {
                    alert("Fill the required Fields")
                }
            } else if (communityOwnerID !== user?.uid) {
                router.push('/')
            }
        } else if (trackDurationInputValue > 90) {
            alert("Track durtion should be less than 90 day")
        }
    }




    useEffect(() => {
        if (!user && !loading) {
            router.push("/")
        } else if (communityOwnerID !== user?.uid && user && !loading) {
            router.push("/")
        }
    }, [loading])

    return (
        <CommunityLayout>
            <main className='w-full h-[90vh] mb-[10vh] lg:mb-0 fixed lg:static inset-0 flex flex-col justify-start items-center bg-BgBrutalSkin1 lg:pt-12 lg:pb-36'>

                <div className='w-full h-full p-2 flex flex-col justify-start items-start pt-10 pb-5 px-5 space-y-5 overflow-x-hidden overflow-y-scroll bg-white'>

                    {/* ---- LOGO ---- */}
                    <Link href={'/'} className='flex justify-center items-center space-x-3'>
                        <div className='w-6 h-6 rounded-full bg-BrutalPurple2 border-2 border-BrutalRed1 ' />
                        <span className='font-semibold'> CommComm </span>
                    </Link>

                    {/* ---- Heading and info ----- */}
                    <h2 className='text-3xl font-bold' onClick={() => {
                        console.log(`User UID -> ${user?.uid}`);
                        console.log(`communityOwnerID -> ${communityOwnerID}`);
                    }}> Create a Track  </h2>
                    <p className='font-medium text-sm text-gray-900'>
                        Setup a learning track for your community members to learn together and grow together at ZERO cost
                    </p>

                    {/* ---- Details ----- */}
                    <div className='w-full h-full flex flex-col items-center justify-start space-y-5'>

                        {pageNumber === 1 && (
                            <div className='w-full h-full flex flex-col justify-between items-start py-3'>
                                <div className='w-full h-full flex flex-col justify-start items-start space-y-5'>
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
                                            value={trackGoalInputValue}
                                            onChange={(e) => setTrackGoalInputValue(e.target.value)}
                                            required
                                            type="text"
                                            placeholder='Goal of track'
                                            className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'

                                        />
                                    </div>

                                    {/* Duration */}
                                    <div className='w-[90%] h-10 relative bg-black flex justify-start items-center' onMouseEnter={() => dispatch(setIsBottomBarVisible(false))} onMouseLeave={() => dispatch(setIsBottomBarVisible(true))}>
                                        <input
                                            value={trackDurationInputValue}
                                            onChange={(e) => setTrackDurationInputValue(parseInt(e.target.value))}
                                            required
                                            type="number"
                                            placeholder='Duration in days'
                                            className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'
                                        />
                                    </div>
                                </div>

                                {/* Next Btn */}
                                <div className='w-full flex justify-end items-center p-5'>
                                    <button
                                        onClick={() => {
                                            setPageNumber(2)
                                        }}
                                        type='button'
                                        title='next'
                                        className='w-20 md:w-32 h-10 relative flex justify-center items-center bg-black rounded-sm border-2 border-black'>
                                        <span className='w-20 md:w-32 h-10 absolute bottom-[2px] right-[2px] bg-BrutalBlue1  flex justify-center items-center rounded-sm border-2 border-black active:right-0 active:bottom-0 '>
                                            <p className='text-xs md:text-sm font-medium'> Next  </p>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        )}


                        {pageNumber === 2 && (
                            <div className='w-full h-full flex flex-col justify-between items-start  py-3'>
                                <div className='w-full h-full flex flex-col justify-start items-start space-y-5'>

                                    {/* Source of Learning - Dropdwon */}
                                    <div className='w-[90%] h-10 relative bg-black flex justify-start items-center' onMouseEnter={() => dispatch(setIsBottomBarVisible(false))} onMouseLeave={() => dispatch(setIsBottomBarVisible(true))}>
                                        <div className='w-full h-10 relative bg-black flex justify-start items-center '>
                                            <select
                                                title='choose'
                                                className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'
                                                value={sourceOfLearningDropdownValue}
                                                onChange={(e) => {
                                                    setSourceOfLearningDropdownValue(e.target.value)
                                                }}
                                            >

                                                {sourceOfLearningOptions && sourceOfLearningOptions?.map((learningOption) => {
                                                    return <option
                                                        key={learningOption.id}
                                                        value={learningOption.value}
                                                        className='bg-white px-2 py-3 text-black text-base'
                                                    > {learningOption.label}
                                                    </option>
                                                })}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Source of Learning - Link */}
                                    <div className='w-[90%] h-10 relative bg-black flex justify-start items-center' onMouseEnter={() => dispatch(setIsBottomBarVisible(false))} onMouseLeave={() => dispatch(setIsBottomBarVisible(true))}>
                                        <input
                                            value={sourceOfLearningDropdownLink}
                                            onChange={(e) => setSourceOfLearningDropdownLink(e.target.value)}
                                            required
                                            type="text"
                                            placeholder='Source of Learning - Link'
                                            className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'

                                        />
                                    </div>

                                    {/* Who can Join this track? */}
                                    <div className='w-[90%] h-10 relative bg-black flex justify-start items-center' onMouseEnter={() => dispatch(setIsBottomBarVisible(false))} onMouseLeave={() => dispatch(setIsBottomBarVisible(true))}>
                                        <input
                                            value={trackPrerequisitesInputValue}
                                            onChange={(e) => setTrackPrerequisitesInputValue(e.target.value)}
                                            required
                                            type="text"
                                            placeholder='Who can Join this track?'
                                            className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'

                                        />
                                    </div>

                                    {/* Description */}
                                    <div className='w-[90%] h-[40%] relative bg-black flex justify-start items-center' onMouseEnter={() => dispatch(setIsBottomBarVisible(false))} onMouseLeave={() => dispatch(setIsBottomBarVisible(true))}>
                                        <textarea
                                            value={trackOptionalDescription}
                                            onChange={(e) => setTrackOptionalDescription(e.target.value)}
                                            placeholder='Description (optional)'
                                            className='w-full h-full absolute right-1 bottom-1 outline-none focus:ring-0 p-2 placeholder:px-2 border-2 border-black'

                                        />
                                    </div>
                                </div>

                                {/* Btns */}
                                <div className='w-full flex justify-between items-center p-5'>
                                    <button
                                        onClick={() => {
                                            setPageNumber(1)
                                        }}
                                        type='button'
                                        title='back'
                                        className='w-20 md:w-32 h-10 relative flex justify-center items-center bg-black rounded-sm border-2 border-black'>
                                        <span className='w-20 md:w-32 h-10 absolute bottom-[2px] right-[2px] bg-BrutalRed1  flex justify-center items-center rounded-sm border-2 border-black active:right-0 active:bottom-0 '>
                                            <p className='text-xs md:text-sm font-medium'> Back  </p>
                                        </span>
                                    </button>

                                    <button
                                        onClick={() => {
                                            // console.log(`trackNameInputValue => ${trackNameInputValue}`)
                                            // console.log(`trackGoalInputValue => ${trackGoalInputValue}`)
                                            // console.log(`trackDurationInputValue => ${trackDurationInputValue}`)

                                            // console.log(`sourceOfLearningDropdownValue => ${sourceOfLearningDropdownValue}`)
                                            // console.log(`sourceOfLearningDropdownLink => ${sourceOfLearningDropdownLink}`)
                                            // console.log(`trackPrerequisitesInputValue => ${trackPrerequisitesInputValue}`);
                                            // console.log(`trackOptionalDescription => ${trackOptionalDescription}`)
                                            // console.log(communityOwnerID);

                                            createTrack()
                                        }}
                                        type='button'
                                        title='Create'
                                        className='w-20 md:w-32 h-10 relative flex justify-center items-center bg-black rounded-sm border-2 border-black'>
                                        <span className='w-20 md:w-32 h-10 absolute bottom-[2px] right-[2px] bg-BrutalBlue1  flex justify-center items-center rounded-sm border-2 border-black active:right-0 active:bottom-0 '>
                                            <p className='text-xs md:text-sm font-medium'> Create  </p>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        )}




                    </div>
                </div>


            </main>
        </CommunityLayout>
    )
}

export default Index



export const getServerSideProps = async ({ params }: any) => {
    const { id } = params

    const communityRef = doc(db, "communities", id as string)
    const data = await getDoc(communityRef)
    const communityOwnerID: string = data.data()?.communityOwnerID

    return {
        props: { communityOwnerID }
    }
}