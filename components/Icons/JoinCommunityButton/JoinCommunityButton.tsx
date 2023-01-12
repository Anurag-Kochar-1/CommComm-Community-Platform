import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { GoSignIn, GoSignOut } from "react-icons/go"
import { useSelector } from 'react-redux'
import { ICommunityData } from '../../../customTypesAndInterfaces/Community/CommunityInterfaces'
import { IUserData } from '../../../customTypesAndInterfaces/User/userInterfaces'
import { auth, db } from '../../../firebaseConfig'

const JoinCommunityButton = () => {
    const router = useRouter()
    const [user, loading] = useAuthState(auth)
    const [isUserJoined, setIsUserJoined] = useState<boolean>(false)

    const currentUserData: IUserData = useSelector((state: any) => state.user.currentUserData)
    const communityData: ICommunityData = useSelector((state: any) => state.communityData.currentCommunityData[0])

    const joinCommunity = async () => {
        if (user && !loading) {
            try {
                const communityRef = doc(db, "communities", communityData?.communityID)
                const userRef = doc(db, "users", user?.uid)

                // updating community 
                await updateDoc(communityRef, {
                    communityMembersID: arrayUnion(user.uid)
                })

                // updating user
                await updateDoc(userRef, {
                    communitiesJoinedID: arrayUnion(communityData.communityID)
                })

                // Setting state
                setIsUserJoined(true)

            } catch (error) {
                alert(error)
            }

        } else {
            router.push("/register")
        }
    }

    const leaveCommunity = async () => {
        if (user && !loading) {
            if (isUserJoined) {
                try {
                    const communityRef = doc(db, "communities", communityData?.communityID)
                    const userRef = doc(db, "users", user?.uid)

                    // updating community 
                    await updateDoc(communityRef, {
                        communityMembersID: arrayRemove(user.uid)
                    })

                    // updating user
                    await updateDoc(userRef, {
                        communitiesJoinedID: arrayRemove(communityData.communityID)
                    })

                    // Setting state
                    setIsUserJoined(false)

                } catch (error) {
                    alert(error)
                }
            }

        } else {
            router.push("/register")
        }
    }



    useEffect(() => {
        setIsUserJoined(currentUserData?.communitiesJoinedID?.includes(communityData?.communityID))
    }, [currentUserData])


    if (user?.uid === communityData?.communityOwnerID) return null
    return (
        <>
            {user?.uid !== communityData?.communityOwnerID && (
                <div>
                    <div className='w-10 h-10  bg-black border border-black flex justify-center items-center rounded-full'>
                        <button
                            onClick={() => {
                                // console.log(currentUserData.communitiesJoinedID.includes(communityData.communityID))
                                // console.log(currentUserData);
                                
                                isUserJoined ? leaveCommunity() : joinCommunity()
                            }}
                            title='button'
                            type='button'
                            className={`w-full h-full -mt-2 -ml-2 ${isUserJoined ? "bg-BrutalRed1" : "bg-BrutalGreen2"} flex justify-center items-center  text-xl font-medium text-black border-2 border-black active:-mt-0 active:-ml-0 rounded-full font-BebasNeue`}>

                            {isUserJoined ? <GoSignOut className='text-black' /> : <GoSignIn className='text-black' />}

                        </button>

                    </div>
                </div>
            )}
        </>
    )
}

export default JoinCommunityButton