import React, { useState, useEffect } from 'react'
import { collection, getDoc, getDocs } from 'firebase/firestore'
import Link from 'next/link'
import CommunityLayout from '../../../../components/layouts/Community/CommunityLayout'
import { auth, db } from '../../../../firebaseConfig'
import { useRouter } from 'next/router'
import { ITrackData } from '../../../../customTypesAndInterfaces/Tracks/tracksInterface'
import { IPathsData } from '../../../../customTypesAndInterfaces/Tracks/pathsInterface'
import { PathPopover } from '../../../../components/globalComponents/PathPopover/PathPopover'
import { ICommunityData } from '../../../../customTypesAndInterfaces/Community/CommunityInterfaces'
import { useSelector } from 'react-redux'
import { useAuthState } from 'react-firebase-hooks/auth'


interface IProps {
  tracksData: ITrackData[]
  communityTrackPathsData: ITrackData[]
}

const Index = ({ tracksData, communityTrackPathsData }: IProps) => {
  const [user] = useAuthState(auth)
  const router = useRouter()
  const { id } = router.query
  const communityData: ICommunityData = useSelector((state: any) => state?.communityData?.currentCommunityData[0])



  return (
    <CommunityLayout>
      <main className='w-full h-auto flex flex-col justify-start items-center bg-white pt-12 pb-36 '>

        {/* <h1 onClick={() => console.log(tracksData)}> LOG tracksData </h1> */}


        {/* ---- Tracks Found !!! ---- */}
        {tracksData[0] && (
          <div className='w-full h-auto bg-white flex flex-col justify-start items-center overflow-x-hidden overflow-y-scroll pb-20 scrollbar-hide'>

            <div className='w-full flex flex-col justify-center items-center py-10 bg-BrutalBlue1 mb-20 space-y-2 text-center'>
              <h3 className='font-bold text-lg sm:text-2xl md:text-3xl font-Roboto'> {tracksData[0]?.trackName} </h3>
              {/* <span className='font-medium text-base'> Duration : {tracksData[0]?.trackDurationInDays} Days </span> */}
            </div>

            {communityTrackPathsData && communityTrackPathsData?.map((path: any) => {
              return (
                <PathPopover path={path} key={path?.pathID} />
              )
            })}
          </div>
        )}


        {/* ---- No Tracks found (Admin) ---- */}
        {!communityTrackPathsData[0] && communityData?.communityOwnerID === user?.uid ? (
          <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] h-72 border-2 border-black flex flex-col justify-start items-center rounded-md bg-white">
            <div className="w-full h-full -mt-2 -ml-3 flex flex-col justify-center items-center border-2 border-black rounded-md bg-white">
              <div className="w-full h-full -mt-3  -ml-4 flex flex-col justify-center items-center border-2 border-black bg-BrutalPurple1 rounded-md text-center p-2">
                <Link href={`/community/${id}/Tracks/createTrack`} className="text-black text-lg md:text-3xl font-Roboto font-bold"> Create a Learning Track  </Link>
              </div>
            </div>
          </div>
        ) : null}


        {/* ---- No Tracks found (Member) ---- */}
        {!communityTrackPathsData[0] && communityData?.communityOwnerID !== user?.uid ? (
          <div className="w-full flex flex-col justify-start items-center p-2">
            <div className="flex flex-col justify-center items-center px-8 py-4 space-y-2 bg-BrutalGreen2">
              <p className="font-bold text-lg" onClick={() => console.log(communityData)}> No Learning tracks available {":("} </p>
            </div>
          </div>
        ) : null}




      </main>
    </CommunityLayout>
  )
}

export default Index



export const getServerSideProps = async ({ params }: any) => {
  const { id }: string | any = params
  const communityTracksSubCollectionRef = collection(db, "communities", id as string, "communityTracks")
  const data = await getDocs(communityTracksSubCollectionRef)
  const tracksData: ITrackData[] = data?.docs?.map(doc => doc.data() as ITrackData)


  // fetching track Paths
  const trackPathsRef = collection(db, "communities", id as string, "trackPaths")
  const trackPathsData = await getDocs(trackPathsRef)
  const communityTrackPathsData: IPathsData[] = trackPathsData?.docs?.map(doc => doc.data() as IPathsData)

  // Sorting on pathNumber
  communityTrackPathsData.sort(function (a, b) {
    if (a.pathNumber < b.pathNumber) { return -1 }
    if (a.pathNumber > b.pathNumber) { return 1 }
    return 0
  })




  return {
    props: {
      tracksData,
      communityTrackPathsData
    }
  }
}


