import { collection, getDocs } from 'firebase/firestore'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import CommunityClassCard from '../../../../components/globalComponents/CommunityClassCard/CommunityClassCard'
import CommunityLayout from '../../../../components/layouts/Community/CommunityLayout'
import { IClassData } from '../../../../customTypesAndInterfaces/Class/classInterfaces'
import { IPathsData } from '../../../../customTypesAndInterfaces/Tracks/pathsInterface'
import { ITrackData } from '../../../../customTypesAndInterfaces/Tracks/tracksInterface'
import { auth, db } from '../../../../firebaseConfig'

interface IProps {
  communityClassesData: any[]
  communityTracksData: any[]
}

const Index = ({ communityClassesData, communityTracksData }: IProps) => {
  const [user] = useAuthState(auth)
  const router = useRouter()
  const { id } = router.query

  return (
    <CommunityLayout>
      <main className='w-full h-full flex flex-col justify-start items-center bg-white pt-12 pb-36'>

        {/* <h1 onClick={( ) => console.log(communityClassesData)} className="text-xl my-5"> LOG communityClassesData </h1> */}
        {/* <h1 onClick={( ) => console.log(communityTracksData)} className="text-xl my-5"> LOG communityTrackPathsData </h1> */}

        {/* <Link href={`/community/${id}/Classes/createClass`} > create Class </Link> */}


        {/* NO TRACKS */}
        {!communityTracksData[0] && (
          <div className="w-full flex flex-col justify-start items-center p-2">
            <div className="flex flex-col justify-center items-center px-8 py-4 space-y-2 bg-BrutalGreen2">
              <p className="font-bold text-lg"> Create a learning Track for your community 🚀 </p>
                <Link href={`/community/${id}/Tracks/createTrack`} className="text-white font-medium text-lg"> Create one </Link>
            </div>
          </div>
        )}


        {/* Track and Classes Found !!! */}
        {communityTracksData[0] && communityClassesData[0] ? (
          <div className='w-full flex flex-col justify-start items-center space-y-3 px-2 sm:px-0'>
            {communityClassesData?.map((communityClass: IClassData) => (
              <CommunityClassCard classDetails={communityClass} key={communityClass?.communityClassID} />
            ))}
          </div>
        ) : null}


        {/* Track But No Classes */}
        {communityTracksData[0] && !communityClassesData[0] ? (
          <div className='w-full flex flex-col items-center justify-center'>
            <div className='relative w-[95%] sm:w-[80%] md:w-[60%] lg:w-[70%] xl:w-[50%] h-72 sm:h-56 md:h-56 bg-white border-2 border-black rounded-md scrollbar-hide'>
              <div className='absolute bottom-2 right-2 w-full h-full bg-white border-2 border-black rounded-md'>
                <div className='absolute bottom-2 right-2 w-full h-full p-3 bg-white border-2 border-black rounded-md flex flex-col justify-center items-center space-y-3 overflow-x-hidden overflow-y-scroll  scrollbar-hide'>
                  <p className='text-3xl font-bold tet-black'> No Classes </p>
                  {communityTracksData[0]?.trackCreatorID === user?.uid && (
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

  // fetching classes
  const communityClassesSubCollectionRef = collection(db, "communities", id, "communityClasses")
  const res = await getDocs(communityClassesSubCollectionRef)
  const communityClassesData: any[] = res?.docs?.map(doc => doc.data())

  // fetching tracks Paths
  const communityTracksSubCollectionRef = collection(db, "communities", id as string, "communityTracks")
  const data = await getDocs(communityTracksSubCollectionRef)
  const communityTracksData: ITrackData[] = data?.docs?.map(doc => doc.data() as ITrackData)




  return {
    props: { communityClassesData, communityTracksData }
  }
}