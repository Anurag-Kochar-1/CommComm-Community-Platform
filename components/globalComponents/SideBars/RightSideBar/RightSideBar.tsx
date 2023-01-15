import React, { useEffect, useState } from 'react'
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore'
import { auth, db } from '../../../../firebaseConfig'
import Link from 'next/link'
import Image from 'next/image'
import { ICommunityData } from '../../../../customTypesAndInterfaces/Community/CommunityInterfaces'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'
import SmallCommunityCard from '../../CommunityCards/SmallCommunityCard/SmallCommunityCard'
import { useSelector } from 'react-redux'
import { IUserData } from '../../../../customTypesAndInterfaces/User/userInterfaces'
import UserCard from '../../UserCard/UserCard'

const RightSideBar = () => {
  const [user, loading] = useAuthState(auth)
  const router = useRouter()

  const trendingCommunitiesData:ICommunityData[] = useSelector((state:any) => state?.communityData?.trendingCommunities)
  const [leaderBoardUsersState, setLeaderBoardUsersState] = useState<IUserData[]>([])

  
  const fetchLeaderBoardUsers = async () => {
    if(!leaderBoardUsersState[0]) {
      try { 
        const usersCollectionRef = collection(db, 'users')
        const usersQuery = query(usersCollectionRef, orderBy("userCoins", "desc"), limit(5))
        const usersQueryData = await getDocs(usersQuery)
  
        const res:IUserData[] = usersQueryData?.docs?.map(doc => doc.data() as IUserData)
        setLeaderBoardUsersState(res)
  
        
  
  
      } catch (error) {
        console.log(error)
      }
    } else if (leaderBoardUsersState[0]) {
      console.log(`Leaderboard data already there`);
    }
  }

  useEffect(() => {


    fetchLeaderBoardUsers()
  },[])
  
  

 

  return (
    <div className='hidden lg:inline-flex w-[20%] h-[90vh] mt-[12vh] bg-white flex-col justify-start items-center'>
      <div className='w-[95%] h-full flex flex-col justify-start items-center bg-gray-100  overflow-x-hidden overscroll-y-scroll pt-10 pb-32  space-y-10 scrollbar-hide'>


        {/* Top Communities */}
        {router.pathname !== "/register" &&  router.pathname !== "/login" && router.pathname !== "/createCommunity"  ? (
          <div className='w-[90%] flex flex-col justify-start items-center space-y-4 bg-[#FF5E5E] border-2 border-black py-10 rounded-sm' >
            <h3 className='font-BebasNeue px-2 text-center  lg:text-3xl xl:text-4xl text-black'> Trending Communities </h3>

            {trendingCommunitiesData[0] && (
              trendingCommunitiesData?.slice(0, 10)?.map((community: ICommunityData) => {
                return (
                  <SmallCommunityCard community={community}  key={community?.communityID}/>
                  )
              })
            )}

          </div>
        ): null}


        {/* Leaderboard */}

        <div className='w-[90%] flex flex-col justify-start items-center space-y-4 bg-BrutalBlue1 border-2 border-black py-10 rounded-sm' >
            <h3 className='font-BebasNeue px-2 text-center  lg:text-3xl xl:text-4xl text-black' onClick={() => console.log(leaderBoardUsersState)}> Global Leaderboard </h3>

            {leaderBoardUsersState[0] && (
              leaderBoardUsersState?.map((user: IUserData) => {
                return (
                  <UserCard userData={user} key={user?.userDisplayPicture} />
                )
              })
            )}

          </div>



      </div>
    </div>
  )
}

export default RightSideBar