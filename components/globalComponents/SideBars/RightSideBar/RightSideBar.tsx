import React, { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { auth, db } from '../../../../firebaseConfig'
import Link from 'next/link'
import Image from 'next/image'
import { ICommunityData } from '../../../../customTypesAndInterfaces/Community/CommunityInterfaces'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'
import SmallCommunityCard from '../../CommunityCards/SmallCommunityCard/SmallCommunityCard'

const RightSideBar = () => {
  const [user, loading] = useAuthState(auth)
  const router = useRouter()
  const [topCommunitiesState, setTopCommunitiesState] = useState<any[]>([])
  const communityCollectionRef = collection(db, "communities")

  const fetchTopCommunities = async () => {
    if (true) {
      // console.log("Fetching trending community datas")
      // const filterdCommunities:ICommunityData[] = []
      const res = await getDocs(communityCollectionRef)

      // res.forEach((community: any) => {
      //   if(community?.communityMembersID?.includes(user?.uid)){
      //     filterdCommunities.push(community)
      //   } else {
      //     return community
      //   }
      // })  


      setTopCommunitiesState(res.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })));
      // setTopCommunitiesState( filterdCommunities);
    }
  }

  useEffect(() => {
    fetchTopCommunities()
  }, [])


  return (
    <div className='hidden lg:inline-flex w-[20%] h-[90vh] mt-[12vh] bg-white flex-col justify-start items-center'>
      <div className='w-[95%] h-full flex flex-col justify-start items-center bg-gray-100  overflow-x-hidden overscroll-y-scroll pt-10 pb-32  space-y-10 scrollbar-hide' onClick={() => console.log(topCommunitiesState)}>


        {/* Top Communities */}
        {router.pathname !== "/register" &&  router.pathname !== "/login" && router.pathname !== "/createCommunity"  ? (
          <div className='w-[90%] flex flex-col justify-start items-center space-y-4 bg-[#FF5E5E] border-2 border-black py-10 rounded-sm' >
            <h3 className='font-BebasNeue px-2 text-center  lg:text-3xl xl:text-4xl text-black'> Trending Communities </h3>

            {topCommunitiesState && (
              topCommunitiesState.slice(0, 10).map((community: ICommunityData) => {
                return (
                  <SmallCommunityCard community={community} />
                )
              })
            )}

          </div>
        ): null}

      </div>
    </div>
  )
}

export default RightSideBar