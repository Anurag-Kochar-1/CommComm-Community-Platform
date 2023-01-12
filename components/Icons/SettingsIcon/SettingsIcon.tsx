import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BsFillGearFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { ICommunityData } from '../../../customTypesAndInterfaces/Community/CommunityInterfaces'
import { auth } from '../../../firebaseConfig'



const SettingsIcon = () => {
    const [user] = useAuthState(auth)
    const communityData:ICommunityData = useSelector((state: any) => state.communityData.currentCommunityData[0])

    if (user?.uid !== communityData?.communityOwnerID) return
    return (
        <>
            {user?.uid === communityData?.communityOwnerID && (
                <div className='w-10 h-10 bg-black border border-black flex justify-center items-center rounded-full'>
                    <button
                        title='settings'
                        type='button'
                        className='w-full h-full -mt-2 -ml-2 flex justify-center items-center bg-gray-400 text-xl font-medium text-black border-2 border-black active:-mt-0 active:-ml-0 rounded-full font-BebasNeue'>
                        <BsFillGearFill className='text-xl text-black' />
                    </button>
                </div>
            )}
        </>
    )
}

export default SettingsIcon