import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import CommunityCourseCard from '../../../../components/globalComponents/CommunityCourseCard/CommunityCourseCard'
import { PathPopover } from '../../../../components/globalComponents/PathPopover/PathPopover'
import CommunityLayout from '../../../../components/layouts/Community/CommunityLayout'
import { ICourse } from '../../../../customTypesAndInterfaces/Course/courseInterfaces'
import { IPathsData } from '../../../../customTypesAndInterfaces/Tracks/pathsInterface'
import { db } from '../../../../firebaseConfig'

interface IProps {
    communityCoursesData: ICourse[]
    communityCoursePathsData: IPathsData[]
}

const Index = ({ communityCoursesData, communityCoursePathsData }: IProps) => {
    const router = useRouter()
    const { id } = router.query
    return (
        <CommunityLayout>
            <main className='w-full h-auto flex flex-col justify-start items-center bg-white pt-12 pb-36 '>

                {/* <Link href={`/community/${id}/Courses/createCourse`} > Create a course</Link>
                <h1 onClick={() => console.log(communityCoursesData)} className="text-xl my-10 bg-red-300">  LOG communityCoursesData </h1>
                <h1 onClick={() => console.log(communityCoursePathsData)} className="text-xl my-10 bg-blue-300">  LOG communityCoursePathsData </h1> */}

                {/* Community Posts Header */}
                <div className='w-full h-16 bg-black flex justify-start items-center space-x-2 px-4 mb-10'>
                    <span className='text-2xl'> 🚀 </span>
                    <p className='text-2xl text-white font-Roboto font-bold'> Ongoing Course </p>
                </div>


                {/* ---- Course Found !!! ----  */}
                {communityCoursesData[0] && (
                    <div className='w-full h-auto bg-white flex flex-col justify-start items-center overflow-x-hidden overflow-y-scroll pb-20 scrollbar-hide'>

                        {communityCoursesData?.map((communityCourse) => {
                            return <CommunityCourseCard communityCourseData={communityCourse} />
                        })}

                    </div>
                )}

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