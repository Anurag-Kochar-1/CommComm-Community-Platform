import { doc, getDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React from 'react'
import TopSection from '../../../components/pageWiseComponents/community/TopSection/TopSection'
import { db } from '../../../firebaseConfig'

const index = ( {communityData}:any ) => {
    const router = useRouter()
    
  return (
    <main className='w-full lg:w-[70%] h-[80vh] lg:h-[90vh] mt-[10vh] mb-[10vh] lg:mb-0 bg-gray-200 flex flex-col justify-start items-center'>
        <TopSection communityData={communityData} />


        <h1 className='mt-10' onClick={() => console.log(communityData?.communityDescription)}> Community ID - {router.query.id} : blog </h1>
    </main>
  )
}

export default index


export const getServerSideProps =  async ({ params }:any) => {
    const {id}:string|any = params
    const communityRef = doc(db, "communities", id as string)
    const res = await getDoc(communityRef)
    const communityData = res.data()


  return {
    props: {communityData}
  };
}
