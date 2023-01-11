import React, { useState, useEffect } from 'react'
import { collection, getDoc, getDocs } from 'firebase/firestore'
import Link from 'next/link'
import CommunityLayout from '../../../../components/layouts/Community/CommunityLayout'
import { db } from '../../../../firebaseConfig'
import { useRouter } from 'next/router'
import { ITrackData } from '../../../../customTypesAndInterfaces/Tracks/tracksInterface'
import { IPathsData } from '../../../../customTypesAndInterfaces/Tracks/pathsInterface'
import { PathPopover } from '../../../../components/globalComponents/PathPopover/PathPopover'


interface IProps {
  tracksData: ITrackData[]
  communityTrackPathsData: ITrackData[]
}

const Index = ({ tracksData, communityTrackPathsData }: IProps) => {
  const router = useRouter()
  const { id } = router.query



  return (
    <CommunityLayout>
      <main className='w-full h-auto flex flex-col justify-start items-center bg-white pt-12 pb-36 '>

        {/* <h1 onClick={() => console.log(tracksData)}> LOG tracksData </h1> */}


        {tracksData[0] && (
          <div className='w-full h-auto flex flex-col items-center overflow-x-hidden overflow-y-scroll py-10 scrollbar-hide'>
          
            <div className='w-full flex flex-col justify-center items-center py-10 bg-BrutalBlue1 mb-20'>
              <h3 className='font-bold text-2xl'> {tracksData[0]?.trackName} </h3>
            </div>

            {communityTrackPathsData && communityTrackPathsData?.map((path: any) => {
              return (
                <PathPopover path={path} key={path?.pathID} />
              )
            })}
          </div>
        )}


        {/* ---- No Tracks found ---- */}
        {!communityTrackPathsData[0] && (
          <div className="w-full flex flex-col justify-start items-center p-2">
            <div className="flex flex-col justify-center items-center px-8 py-4 space-y-2 bg-BrutalGreen2">
              <p className="font-bold text-lg"> Create a learning Track for your community 🚀 </p>
              <Link href={`/community/${id}/Tracks/createTrack`} className="text-blue-500 font-medium text-lg"> Create one </Link>
            </div>
          </div>
        )}


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


