import { collection, getDocs } from 'firebase/firestore'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import CommunityLayout from '../../../../components/layouts/Community/CommunityLayout'
import { db } from '../../../../firebaseConfig'

interface IProps {
  communityClassesData: any[]
}

const Index = ( {communityClassesData}:IProps ) => {
  const router = useRouter()
  const {id} = router.query

  return (
    <CommunityLayout>
      <main className='w-full h-full flex flex-col justify-start items-center bg-green-400 pt-12 pb-36'>

        <h1 onClick={( ) => console.log(communityClassesData)}> LOG communityClassesData </h1>

        <Link href={`/community/${id}/Classes/createClass`} > create Class </Link>


        {!communityClassesData[0] && (
          <div className='w-full bg-red-400 flex flex-col justify-start items-center'>
            <p> No Events </p>
          </div>
        )}



      </main>
    </CommunityLayout>
  )
}

export default Index




export const getServerSideProps = async ({params}: any) => {
  const {id} = params

  const communityClassesSubCollectionRef = collection(db, "communities", id , "communityClasses")
  const res = await getDocs(communityClassesSubCollectionRef)
  
  const communityClassesData: any[] = res?.docs?.map(doc => doc.data())
  

  return {
    props: {communityClassesData}
  }
}