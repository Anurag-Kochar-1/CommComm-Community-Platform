import { collection, getDocs, query, where } from 'firebase/firestore'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { ICommunityData } from '../../customTypesAndInterfaces/Community/CommunityInterfaces'
import { auth, db } from '../../firebaseConfig'

const Index = () => {
  const router = useRouter()
  const [user, loading] = useAuthState(auth)
  const communityCollectionRef = collection(db, "communities")
  const [userJoinedCommunitiesState, setUserJoinedCommunitiesState] = useState<any[] | []>([])

  const fetchUserJoinedAndOwnedCommunities = async () => {
    if (user && !loading ) {
      const userJoinedCommunitiesArray: any[] = []
      const queryTheUser = query(communityCollectionRef, where("communityMembersID", "array-contains", auth?.currentUser?.uid))
      const queryData = await getDocs(queryTheUser)
      // queryData.forEach((doc) => {
      //   userJoinedCommunitiesArray.push(doc.data())

      // })
      setUserJoinedCommunitiesState(queryData.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })));
    } else if ( !user && !loading ){
      router.push("/register")
    }

  }

  useEffect(() => {
    fetchUserJoinedAndOwnedCommunities()
  },[loading])


  return (
    <main className='w-full lg:w-[70%] h-[80vh] lg:h-[90vh] mt-[10vh] mb-[10vh] lg:mb-0 bg-BgBrutalSkin1 flex flex-col justify-start items-center'>

        <div className='w-[100%] h-full flex flex-col justify-start items-center space-y-4 bg-BrutalOrange1 border-2 border-black py-10 rounded-sm' >
            <h3 className='font-BebasNeue px-2 text-center text-4xl text-black my-3'>  My Communities  </h3>

            {userJoinedCommunitiesState && (
              userJoinedCommunitiesState.slice(0, 10).map((community: ICommunityData) => {
                return (
                  <Link
                    href={`/community/${community.communityID}`}
                    key={community.communityID}
                    className="relative w-[90%] h-20 flex justify-start items-center bg-back border-2 bg-black border-black space-x-2 rounded-md hover:cursor-pointer"
                  >
                    <div className='absolute right-1 bottom-1 w-full h-20  bg-BrutalAqua1 border border-black rounded-md flex justify-start items-center space-x-2 px-3'>
                      {community.communityLogo !== null  && (
                        <img src={community.communityLogo as string} width={8} height={8} alt="pfp" className='w-8 h-8 xl:w-10 xl:h-10 rounded-full object-contain aspect-square' />
                      )}

                      {community.communityLogo === null && (
                        <div className='w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-BrutalRed1 aspect-square' />
                      )}

                      <div className='w-full flex flex-col items-start justify-start'>
                        <p className='font-BebasNeue text-xl text-black font-medium'> {community.communityName.slice(0, 20)} </p>
                        <p className='font-InriaSans text-sm text-black font-bold'> {community.communityMembersID.length} {community.communityMembersID.length > 1 ? "members" : "member"} </p>
                      </div>
                    </div>
                  </Link>
                )
              })
            )}
          </div>
    </main>
  )
}

export default Index