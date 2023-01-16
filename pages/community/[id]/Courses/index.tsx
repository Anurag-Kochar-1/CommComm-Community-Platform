import React, { useState, useEffect } from 'react'
import { collection, getDocs, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import CommunityCourseCard from '../../../../components/globalComponents/CommunityCourseCard/CommunityCourseCard'
import { PathPopover } from '../../../../components/globalComponents/PathPopover/PathPopover'
import CommunityLayout from '../../../../components/layouts/Community/CommunityLayout'
import { ICourse } from '../../../../customTypesAndInterfaces/Course/courseInterfaces'
import { IPathsData } from '../../../../customTypesAndInterfaces/Tracks/pathsInterface'
import { db } from '../../../../firebaseConfig'
import { useDispatch, useSelector } from 'react-redux'
import { setCommunityCoursePathsData } from '../../../../redux/slices/communityDataSlice'

interface IProps {
    communityCoursesData: ICourse[]
    communityCoursePathsData: IPathsData[]
}

const Index = ({ communityCoursesData }: IProps) => {
    const router = useRouter()
    const { id } = router.query
    const dispatch = useDispatch()

    const [courseNavTabs, setCourseNavTabs] = useState<string>("paths")
    const communityCoursePathsDataRedux: IPathsData[] = useSelector((state: any) => state?.communityData?.communityCoursePathsData)


    // Dispatching courses


    // Real time listening to communityCoursePathsData
    useEffect(() => {
        const communityCoursePathsDataQuery = query(collection(db, "communityCourses", communityCoursesData[0]?.courseID as string, "coursePaths"), orderBy("pathNumber", "asc"))
        const communityCoursePathsDataQueryRes = onSnapshot(communityCoursePathsDataQuery, (snapshot) => {
            const data = snapshot?.docs?.map(doc => doc.data())
            dispatch(setCommunityCoursePathsData(data))
        })
    }, [])



    return (
        <CommunityLayout>
            <main className='w-full h-auto flex flex-col justify-start items-center bg-white pt-12 pb-36 '>

                {/* <Link href={`/community/${id}/Courses/createCourse`} > Create a course</Link>
                <h1 onClick={() => console.log(communityCoursesData)} className="text-xl my-10 bg-red-300">  LOG communityCoursesData </h1>
                <h1 onClick={() => console.log(communityCoursePathsData)} className="text-xl my-10 bg-blue-300">  LOG communityCoursePathsData </h1> */}

                <h1 onClick={() => console.log(communityCoursePathsDataRedux)} className="text-xl my-10 bg-blue-300">  LOG communityCoursePathsDataRedux </h1> 

                {/* Community Posts Header */}
                <div className='w-full h-16 bg-black flex justify-start items-center space-x-2 px-4 mb-10'>
                    <span className='text-2xl'> 🚀 </span>
                    <p className='text-2xl text-white font-Roboto font-bold'> Ongoing Course </p>
                </div>


                {/* ---- Course Found !!! ----  */}
                {communityCoursesData[0] && (
                    <div className='w-full h-auto bg-white flex flex-col justify-start items-center overflow-x-hidden overflow-y-scroll pb-10 scrollbar-hide'>
                        {communityCoursesData?.map((communityCourse) => {
                            return <CommunityCourseCard communityCourseData={communityCourse} key={communityCourse?.courseID} />
                        })}
                    </div>
                )}

                {/* Course Header */}
                <div className='w-full h-16 bg-black flex justify-center items-center space-x-4 px-4 mb-10'>
                    <button
                        onClick={() => setCourseNavTabs("paths")}
                        type='button'
                        title='paths'
                        className={`w-20 h-9 ${courseNavTabs === 'paths' && "bg-BrutalBlue1"} flex justify-center items-center`}
                    >
                        <span className={`text-xl ${courseNavTabs === 'paths' ? "text-black" : "text-white"} font-Roboto font-bold`}> Paths </span>
                    </button>


                    <button
                        onClick={() => setCourseNavTabs("details")}
                        type='button'
                        title='paths'
                        className={`w-20 h-9 ${courseNavTabs === 'details' && "bg-BrutalGreen1"} flex justify-center items-center`}
                    >
                        <span className={`text-xl ${courseNavTabs === 'details' ? "text-black" : "text-white"} font-Roboto font-bold`}> Details </span>
                    </button>
                </div>


                {communityCoursePathsDataRedux[0] && courseNavTabs === 'paths' ? (
                    <div>
                        {communityCoursePathsDataRedux?.map((path: any) => {
                            return <PathPopover path={path} key={path?.pathID} />
                        })}
                    </div>
                ) : null}

            </main>
        </CommunityLayout>
    )
}

export default Index


export const getServerSideProps = async ({ params }: any) => {
    const { id } = params

    // Fetching current community courses
    const communityCoursesCollectionRef = collection(db, "communityCourses")
    const communityCoursesQuery = query(communityCoursesCollectionRef, where("communityID", '==', id as string))
    const communityCoursesQueryData = await getDocs(communityCoursesQuery)
    const communityCoursesData: ICourse[] = communityCoursesQueryData?.docs?.map(doc => doc.data() as ICourse)

    let communityCoursePathsData: any = ['']


    // Fetching current community course's paths
    if (communityCoursesData[0]) {
        const communityCoursePathsSubCollectionRef = collection(db, 'communityCourses', communityCoursesData[0]?.courseID, 'coursePaths')
        const communityCoursePathsQuery = query(communityCoursePathsSubCollectionRef, orderBy("pathNumber", "asc"))
        const res = await getDocs(communityCoursePathsQuery)
        // const communityCoursePathsData: IPathsData[] = res?.docs?.map(doc => doc.data() as IPathsData)
        const pathsData2: IPathsData[] = res?.docs?.map(doc => doc.data() as IPathsData)
        communityCoursePathsData = pathsData2
    }



    return {
        props: { communityCoursesData, communityCoursePathsData }
    }
}