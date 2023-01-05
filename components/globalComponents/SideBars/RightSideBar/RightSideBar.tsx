import React, { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { auth, db } from '../../../../firebaseConfig'
import Link from 'next/link'
import Image from 'next/image'
import { ICommunityData } from '../../../../customTypesAndInterfaces/Community/CommunityInterfaces'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'

const RightSideBar = () => {
  const [user, loading] = useAuthState(auth)
  const router = useRouter()
  const [topCommunitiesState, setTopCommunitiesState] = useState<any[]>([])
  const communityCollectionRef = collection(db, "communities")

  const fetchTopCommunities = async () => {
    if (true) {
      console.log("Fetching trending community datas")
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
    <div className='hidden lg:inline-flex w-[20%] h-[90vh] mt-[10vh] bg-BgBrutalSkin1 flex-col justify-start items-center '>
      <div className='w-[95%] h-full flex flex-col justify-start items-center bg-BgSecondaryBrutalSkin1 overflow-x-hidden overscroll-y-scroll pt-10 pb-32  space-y-10 scrollbar-hide' onClick={() => console.log(topCommunitiesState)}>


        {/* Top Communities */}
        {router.pathname !== "/register" &&  router.pathname !== "/login" && router.pathname !== "/createCommunity"  ? (
          <div className='w-[90%] flex flex-col justify-start items-center space-y-4 bg-[#FF5E5E] border-2 border-black py-10 rounded-sm' >
            <h3 className='font-BebasNeue px-2 text-center  lg:text-3xl xl:text-4xl text-black'> Trending Communities </h3>

            {topCommunitiesState && (
              topCommunitiesState.slice(0, 10).map((community: ICommunityData) => {
                return (
                  <Link
                    href={`/community/${community.communityID}`}
                    key={community.communityID}
                    className="relative w-[90%] h-14 xl:h-20 flex justify-start items-center bg-back border-2 bg-black border-black space-x-2 rounded-md hover:cursor-pointer"
                  >
                    <div className='absolute right-1 bottom-1 w-full h-14 xl:h-20  bg-BrutalBlue1 border border-black rounded-md flex justify-start items-center space-x-2 px-3'>
                      {community.communityLogo !== null && (
                        <Image src={community.communityLogo as string} width={8} height={8} alt="pfp" className='w-8 h-8 xl:w-10 xl:h-10 rounded-full object-contain aspect-square' />
                      )}

                      {community.communityLogo === null && (
                        <div className='w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-BrutalRed1 aspect-square border-2 border-black' />
                      )}

                      <div className='w-full flex flex-col items-start justify-start'>
                        <p className='font-BebasNeue lg:text-base xl:text-xl   text-black font-medium'> {community.communityName.slice(0, 20)} </p>
                        <p className='hidden xl:inline-block font-InriaSans text-xs text-black font-bold'> {community.communityMembersID.length} {community.communityMembersID.length > 1 ? "members" : "member"} </p>
                      </div>
                    </div>
                  </Link>
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