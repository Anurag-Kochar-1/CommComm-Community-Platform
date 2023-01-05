import { doc, getDoc } from 'firebase/firestore'
import React from 'react'
import CommunityLayout from '../../../../components/layouts/Community/CommunityLayout'
import { ICommunityData } from '../../../../customTypesAndInterfaces/Community/CommunityInterfaces'
import { db } from '../../../../firebaseConfig'

interface IProps {
  communityData: ICommunityData

}

const Index = ( {communityData}:IProps ) => {
  return (
    <CommunityLayout>
      <main className='w-full h-full flex flex-col justify-start items-center bg-BgBrutalSkin1 pt-12 pb-36' onClick={() => console.log(communityData)}>
        <div className='w-full sm:w-[80%] md:w-[60%] lg:w-[60%] h-96 relative flex justify-center items-center border border-black bg-black'>
           <div className='absolute w-full h-96 sm:right-1 sm:bottom-1 bg-BrutalBlue1 flex flex-col justify-start items-center border border-black p-5 space-y-2 overflow-x-hidden overflow-y-scroll scrollbar-hide'>
            <p className='text-black font-InriaSans font-bold text-4xl'> About </p>
            <p className='text-black font-InriaSans font-semibold text-lg text-center'> {communityData?.communityDescription} </p>
           </div>
        </div>
      </main>
    </CommunityLayout>
  )
}

export default Index


export const getServerSideProps = async ({ params }: any) => {
  const { id }: string | any = params

  // fetching community Details
  const communityRef = doc(db, "communities", id as string)
  const res = await getDoc(communityRef)
  const communityData = res.data()


  return {
    props: { 
      communityData,
     }
  };
}
