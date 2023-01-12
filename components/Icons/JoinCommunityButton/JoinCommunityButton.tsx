import React from 'react'
import { GoSignIn, GoSignOut } from "react-icons/go"
import { useSelector } from 'react-redux'
import { IUserData } from '../../../customTypesAndInterfaces/User/userInterfaces'

const JoinCommunityButton = () => {
    const isMember = true
    const isOwner = false

    const currentUserData:IUserData = useSelector((state: any) => state.user.currentUserData )


    return (
        <div>
            <div className='w-10 h-10  bg-black border border-black flex justify-center items-center rounded-full'>
                <button
                    onClick={() => console.log(currentUserData)}
                    title='button'
                    type='button'
                    className='w-full h-full -mt-2 -ml-2 bg-BrutalGreen2 flex justify-center items-center  text-xl font-medium text-black border-2 border-black active:-mt-0 active:-ml-0 rounded-full font-BebasNeue'>
                        
                    {isMember ?  <GoSignIn /> : <GoSignOut />}
                    
                </button>

            </div>
        </div>
    )
}

export default JoinCommunityButton