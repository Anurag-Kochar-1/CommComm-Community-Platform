import { collection, getDocs, query, where } from 'firebase/firestore'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useSelector } from 'react-redux'
import CommunityClassCard from '../../../../components/globalComponents/CommunityClassCard/CommunityClassCard'
import CommunityLayout from '../../../../components/layouts/Community/CommunityLayout'
import { IClassData } from '../../../../customTypesAndInterfaces/Class/classInterfaces'
import { ICourse } from '../../../../customTypesAndInterfaces/Course/courseInterfaces'
import { IPathsData } from '../../../../customTypesAndInterfaces/Tracks/pathsInterface'
import { ITrackData } from '../../../../customTypesAndInterfaces/Tracks/tracksInterface'
import { IUserData } from '../../../../customTypesAndInterfaces/User/userInterfaces'
import { auth, db } from '../../../../firebaseConfig'

interface IProps {
  communityCourseData: ICourse[]
  communityCourseClassesData: IClassData[]
}

const Index = ({ communityCourseData, communityCourseClassesData }: IProps) => {
  const [user] = useAuthState(auth)
  const router = useRouter()
  const { id } = router.query

  const currentUserData: IUserData = useSelector((state: any) => state?.user?.currentUserData)

  return (
    <CommunityLayout>
      <main className='w-full h-full flex flex-col justify-start items-center bg-white pt-12 pb-36'>

        {/* <h1 onClick={() => console.log(communityCourseData)} className="text-xl my-5"> LOG communityCourseData </h1>
        <h1 onClick={() => console.log(communityCourseClassesData)} className="text-xl my-5"> LOG communityCourseClassesData </h1> */}

        {/* <Link href={`/community/${id}/Classes/createClass`} > create Class </Link> */}


        {/* NO Course */}
        {!communityCourseData[0] && (
          <div className="w-full flex flex-col justify-start items-center py-4">
            <div className="flex flex-col justify-center items-center p-5 space-y-2 bg-BrutalGreen2">
              <p className="font-bold text-xl" onClick={() => console.log(currentUserData)}> No Course Availabe </p>
                {currentUserData?.communitiesJoinedID?.includes(id as string) && (
                  <Link href={`/community/${id}/Courses/createCourse`} className="font-medium text-base hover:cursor-pointer"> Create a course 🚀 </Link>
                )}
            </div>
          </div>
        )}


        {/* Course and Classes Found !!! */}
        {communityCourseData[0] && communityCourseClassesData[0] ? (
          <div className='w-full flex flex-col justify-start items-center space-y-3 px-2 sm:px-0'>
            {communityCourseClassesData?.map((communityClass: IClassData) => (
              <CommunityClassCard classDetails={communityClass} key={communityClass?.classID} />
            ))}
          </div>
        ) : null}


        {/* Course But No Classes */}
        {communityCourseData[0] && !communityCourseClassesData[0] ? (
          <div className='w-full flex flex-col items-center justify-center'>
            <div className='relative w-[95%] sm:w-[80%] md:w-[60%] lg:w-[70%] xl:w-[50%] h-72 sm:h-56 md:h-56 bg-white border-2 border-black rounded-md scrollbar-hide'>
              <div className='absolute bottom-2 right-2 w-full h-full bg-white border-2 border-black rounded-md'>
                <div className='absolute bottom-2 right-2 w-full h-full p-3 bg-white border-2 border-black rounded-md flex flex-col justify-center items-center space-y-3 overflow-x-hidden overflow-y-scroll  scrollbar-hide'>
                  <p className='text-3xl font-bold tet-black'> No Classes </p>
                  {communityCourseData[0]?.courseCreatorID === user?.uid && (
                    <Link href={`/community/${id}/Classes/createClass`} className="text-blue-500 font-medium text-lg"> Create one </Link>
                  )}
                </div>

              </div>
            </div>
          </div>
        ) : null}



      </main>
    </CommunityLayout>
  )
}

export default Index




export const getServerSideProps = async ({ params }: any) => {
  const { id } = params

   // Fetching community course
  const communityCoursesCollectionRef = collection(db, "communityCourses")
  const communityCourseQuery = query(communityCoursesCollectionRef, where("communityID", "==", id))
  const communityCourseQueryRes = await getDocs(communityCourseQuery)
  const communityCourseData: ICourse[] = communityCourseQueryRes?.docs?.map(doc => doc.data() as ICourse)


  let communityCourseClassesData:IClassData[] = []

  // Fetching classes
  if (communityCourseData[0]) {
    const classCollectionRef = collection(db, "communityCourses", communityCourseData[0]?.courseID, "courseClasses")
    const classRes = await getDocs(classCollectionRef)
    const data: IClassData[] = classRes?.docs?.map(doc => doc.data() as IClassData)
    communityCourseClassesData = data
  }



  return {
    props: { communityCourseData, communityCourseClassesData }
  }
}