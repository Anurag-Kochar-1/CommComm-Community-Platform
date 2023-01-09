import React, { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import Image from 'next/image'
import Link from 'next/link'
import { useAuthState } from 'react-firebase-hooks/auth'
import { ICommunityData } from '../../../../customTypesAndInterfaces/Community/CommunityInterfaces'
import { auth, db } from '../../../../firebaseConfig'
import demo from "../../../../public/images/bg/demo.jpg"
import userDPdemo from "../../../../public/images/bg/userDPdemo.jpg"

import coinIcon from "../../../../public/images/icons/coinIcon.svg"
import { AiOutlineLogout } from 'react-icons/ai'
import { signOut } from 'firebase/auth'

const LeftSideBar = () => {

  const [user, loading] = useAuthState(auth)
  const communityCollectionRef = collection(db, "communities")
  const [userJoinedCommunitiesState, setUserJoinedCommunitiesState] = useState<any[] | []>([])
  const [userDetails, setUserDetails] = useState<any[]>([])


  const fetchUserDetails = async () => {
    if (user && !loading) {
      const userRef = doc(db, "users", user?.uid as string)
      const data = await getDoc(userRef)
      setUserDetails([data.data()])
    }
  }

  const fetchUserJoinedAndOwnedCommunities = async () => {
    if (user && !loading && userDetails[0]?.communitiesJoinedID.length !== 0) {
      const userJoinedCommunitiesArray: any[] = []
      const queryTheUser = query(communityCollectionRef, where("communityMembersID", "array-contains", auth?.currentUser?.uid))
      const queryData = await getDocs(queryTheUser)

      queryData.forEach((doc) => {
        userJoinedCommunitiesArray.push(doc.data())

      })

      // setUserJoinedCommunitiesState(queryData.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })));
    } else {
      console.log("Fetching all community datas")
      const communityCollectionRef = collection(db, "communities")
      const allData = await getDocs(communityCollectionRef)
      setUserJoinedCommunitiesState(allData.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })));
    }

  }

  useEffect(() => {
    fetchUserDetails()
    fetchUserJoinedAndOwnedCommunities()

  }, [loading])

  return (
    <div className='hidden lg:inline-flex w-[20%] h-[90vh] mt-[10vh] bg-BgBrutalSkin1 flex-col justify-start items-center'>

      <div className='w-[95%] h-full flex flex-col justify-start items-center bg-BgSecondaryBrutalSkin1 overflow-x-hidden overscroll-y-scroll pt-10  space-y-10 scrollbar-hide'>

        {/* ------- Tabs ------- */}
        <div className='w-full flex flex-col justify-start items-center space-y-5'>
          <Link href={"/"}
            onClick={() => console.log(userJoinedCommunitiesState)}
            className='relative w-[85%] h-14 bg-black border border-black flex justify-center items-center'
          >
            <span className='absolute w-full h-14 right-1 bottom-1 border-2 border-black bg-BrutalRed1 text-black font-BebasNeue text-2xl active:right-0 active:bottom-0 flex justify-center items-center'>
              Home
            </span>
          </Link>

          <Link href={"/explore"}
            className='relative w-[85%] h-14 bg-black border border-black flex justify-center items-center'
          >
            <span className='absolute w-full h-14 right-1 bottom-1 border-2 border-black bg-BrutalBlue1 text-black font-BebasNeue text-2xl active:right-0 active:bottom-0 flex justify-center items-center'>
              Explore
            </span>
          </Link>
        </div>

        {/* ------- My Communities user && userJoinedCommunitiesState.length !== 0 ------- */}
        {true && (
          <div className='w-[90%] flex flex-col justify-start items-center space-y-4 bg-BrutalOrange1 border-2 border-black py-10 rounded-sm' >
            <h3 className='font-BebasNeue px-2 text-center  lg:text-3xl xl:text-4xl text-black'> {user && !loading && userDetails[0]?.communitiesJoinedID.length !== 0 ? "My Communities" : "Suggested Communities"} </h3>

            {userJoinedCommunitiesState && (
              userJoinedCommunitiesState.slice(0, 10).map((community: ICommunityData) => {
                return (
                  <Link
                    href={`/community/${community.communityID}`}
                    key={community.communityID}
                    className="relative w-[90%] h-14 xl:h-20 flex justify-start items-center bg-back border-2 bg-black border-black space-x-2 rounded-md hover:cursor-pointer"
                  >
                    <div className='absolute right-1 bottom-1 w-full h-14 xl:h-20  bg-BrutalGreen2 border border-black rounded-md flex justify-start items-center space-x-2 px-3'>
                      {community.communityLogo !== null  && (
                        <Image src={community.communityLogo as string} width={8} height={8} alt="pfp" className='w-8 h-8 xl:w-10 xl:h-10 rounded-full aspect-square' />
                      )}

                      {community.communityLogo === null && (
                        <div className='w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-BrutalOrange1 border-2 border-black aspect-square' />
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
        )}




        {/* ------- Suggested Communities -------*/}
        {/* <div className='w-full flex flex-col justify-start items-center'>
        <div className='w-full flex flex-col justify-start items-center space-y-4'>
            <h3 className='font-BebasNeue text-4xl text-black'> Suggested Communities </h3>

            {userJoinedCommunitiesState && (
              userJoinedCommunitiesState.map((community: ICommunityData) => {
                return (
                  <Link
                  href={`/community/${community.communityID}`}
                  key={community.communityID} 
                  className="relative w-[85%] h-14 flex justify-start items-center bg-back border-2 bg-black border-black space-x-2 rounded-md hover:cursor-pointer"
                  >
                    <div className='absolute right-1 bottom-1 w-full h-14 bg-BrutalGreen2 border border-black rounded-md flex justify-start items-center space-x-2 px-3'>
                      <Image src={community.communityLogo as string} width={8} height={8} alt="pfp" className='w-8 h-8 rounded-full object-contain' />

                      <div className='w-full flex flex-col items-start justify-start'>
                        <p className='font-BebasNeue lg:text-sm xl:text-lg 2xl:text-xl  text-black font-medium'> {community.communityName.slice(0,40)} </p>
                        <p className='font-InriaSans  text-xs text-black font-bold'> {community.communityMembersID.length} {community.communityMembersID.length > 1 ? "members" : "member"} </p>
                      </div>
                    </div>
                  </Link>
                )
              })
            )}
          </div>

        </div> */}


        {/* Profile */}
        {user?.uid && (
          <div className='w-full h-full flex flex-col justify-end items-center py-2'>
            <div className='w-[95%] border-2 border-black bg-white flex justify-start items-center px-2 py-4 space-x-3'>
              {user?.photoURL ? (
                <Image src={user?.photoURL} alt="dp" width={12} height={12} className='w-12 h-12 rounded-full' />
              ) :
                <Image src={userDPdemo as any} alt="dp" width={12} height={12} className='w-12 h-12 rounded-full' />
              }

              <div className='w-full flex flex-col justify-start items-start space-y-1'>
                <p className='font-InriaSans text-sm font-semibold'> {user?.displayName} </p>
                <div className='w-full flex justify-start items-center space-x-2'>
                  <Image src={coinIcon as string} alt="icon" width={5} height={5} className="w-5 h-5" />
                  <span className='font-InriaSans font-semibold text-black text-sm'> {userDetails[0]?.userCoins} </span>
                </div>
              </div>

                <AiOutlineLogout className='w-8 h-8 mx-3 text-BrutalRed1 cursor-pointer' onClick={() => signOut(auth)}/>

            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default LeftSideBar