import React from 'react'
import { collection, getDocs } from 'firebase/firestore'
import Link from 'next/link'
import CommunityLayout from '../../../../components/layouts/Community/CommunityLayout'
import { db } from '../../../../firebaseConfig'
import { useRouter } from 'next/router'
import { ITrackData } from '../../../../customTypesAndInterfaces/Tracks/tracksInterface'

interface IProps {
  tracksData: ITrackData[]
}

const Index = ( {tracksData}:IProps ) => {
  const router = useRouter()
  const {id} = router.query
  return (
    <CommunityLayout>
      <main className='w-full h-full flex flex-col justify-start items-center bg-BgBrutalSkin1 pt-12 pb-36'>
        <h1 onClick={() => console.log(tracksData)}> LOG tracksData </h1>

      <Link href={`/community/${id}/Tracks/createTrack`} className="font-bold text-xl my-20"> Create a Track </Link>

      {tracksData && (
        <h1> {tracksData[0].trackName} </h1>
      )}


      </main>
    </CommunityLayout>
  )
}

export default Index



export const getServerSideProps = async ( {params}:any ) => {
  const { id }: string | any = params
  const communityTracksSubCollectionRef = collection(db, "communities", id as string, "communityTracks") 
  const data = await getDocs(communityTracksSubCollectionRef)
  
  const tracksData: ITrackData[] = data?.docs?.map(doc => doc.data() as ITrackData)

  return {props: {
    tracksData
  }}
}