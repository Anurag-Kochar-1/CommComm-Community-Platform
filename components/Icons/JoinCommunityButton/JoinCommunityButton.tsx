import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { GoSignIn, GoSignOut } from "react-icons/go"
import { useSelector } from 'react-redux'
import { ICommunityData } from '../../../customTypesAndInterfaces/Community/CommunityInterfaces'
import { IUserData } from '../../../customTypesAndInterfaces/User/userInterfaces'
import { auth } from '../../../firebaseConfig'

const JoinCommunityButton = () => {
    const [user] = useAuthState(auth)

    const currentUserData: IUserData = useSelector((state: any) => state.user.currentUserData)
    const communityData: ICommunityData = useSelector((state: any) => state.communityData.currentCommunityData[0])


    const [isUserJoined, setIsUserJoined] = useState<boolean>(false)

    useEffect(() => {
        setIsUserJoined(currentUserData?.communitiesJoinedID?.includes(communityData?.communityID))
    }, [currentUserData])


    return (
        <>
            {user?.uid !== communityData?.communityOwnerID && (
                <div>
                    <div className='w-10 h-10  bg-black border border-black flex justify-center items-center rounded-full'>
                        <button
                            onClick={() => {
                                // console.log(currentUserData.communitiesJoinedID.includes(communityData.communityID))
                                console.log(user?.uid);
                                console.log(communityData?.communityOwnerID);
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