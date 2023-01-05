import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useSelector } from 'react-redux'
import { auth } from '../../../../firebaseConfig'
import demoLogo from "../../../../public/images/bg/demo.jpg"
import NavTabs from '../NavTabs/NavTabs'
import TagBox from '../TagBox/TagBox'


const TopSection = () => {
    const [user, loading] = useAuthState(auth)
    const router = useRouter()
    const {id} = router.query
    const [isUserJoinedInCommunity, setIsUserJoinedInCommunity] = useState<boolean>(false)

    const communityData: any = useSelector((state: any) => state.communityData.currentCommunityData[0])

    useEffect(() => {
        if(communityData && user?.uid && !loading) {
            if(communityData?.communityMembersID.includes(user.uid)){
                setIsUserJoinedInCommunity(true)
                console.log(`ANS -> ${communityData?.communityMembersID.includes(user.uid)}`)
            } else if (!communityData?.communityMembersID.includes(user.uid)) {
                setIsUserJoinedInCommunity(false)
                console.log(`ANS -> ${communityData?.communityMembersID.includes(user.uid)}`)
            }
        }

    },[communityData, loading])


    

    return (
        <div className='w-full flex flex-col items-center justify-start bg-BgBrutalSkin1'>
            {/* ---- Banner ----  */}
            <div
                className='w-full bg-black h-[25vh] lg:h-[20vh] flex justify-start items-end'
                style={{
                    backgroundImage: 'url(' + `${communityData?.communityBanner || "https://designmodo.com/wp-content/uploads/2017/08/gradient-1.jpg"}` + ')',
                    backgroundSize: "cover",
                }}>

                <div className='relative w-16 h-16 lg:w-20 lg:h-20  border border-black mx-3 -my-5 lg:mx-5 bg-black rounded-sm'>
                    <Image src={demoLogo} width={15} height={15} alt="logo" className='absolute right-[4px] bottom-[4px] border border-black w-16 h-16 lg:w-20 lg:h-20 aspect-square rounded-sm' onClick={() => console.log(communityData)} />
                </div>
            </div>


            {/* ---- Details ----  */}
            <section className='w-full pt-3 flex flex-col justify-between items-center space-y-1 py-4 px-3 lg:px-5'>

                {/* Name and join buton */}
                <div className='w-full flex justify-between items-center pt-5'>
                    <h2 className='text-3xl lg:text-3xl font-bold font-BebasNeue  text-black'> {communityData?.communityName} </h2>

                    <div className='relative w-16 h-9  lg:w-20 lg:h-10 bg-black border border-black flex justify-center items-center rounded-full'>
                        <button
                            type='button'
                            className='w-16 h-9 lg:w-20 lg:h-10 absolute right-1 bottom-1 bg-BrutalGreen2 text-xl font-medium text-black border border-black active:right-0 active:bottom-0 rounded-full font-BebasNeue'>
                             {isUserJoinedInCommunity ? "JOINED" : "JOIN"}
                        </button>
                    </div>

                </div>

                {/* total Members and online members */}
                <div className='w-full flex justify-start items-center space-x-2'>
                    <p className='text-black text-sm font-light font-InriaSans'> {communityData?.communityMembersID?.length} members </p>
                    <p className='text-black text-sm font-light font-InriaSans'> {communityData?.communityMembersID?.length} online </p>
                </div>

                {/* Community Description */}
                <div className='w-full flex justify-start items-center space-x-2 hover:cursor-pointer '>
                    {communityData?.communityDescription.length > 130 && <p className='text-black font-normal font-InriaSans text-sm'> {communityData?.communityDescription.slice(0, 130)}..... <Link href={`/community/${id}/About`} className='text-blue-700 opacity-70 font-normal text-sm hover:cursor-pointer'> read more </Link> </p>}

                    {communityData?.communityDescription.length <= 130 && <p className='text-black font-normal font-InriaSans text-sm'> {communityData?.communityDescription} </p>}
                </div>



                {/* Tags */}
                <div className='w-full flex justify-start items-center space-x-5 flex-wrap '>
                    <div className='relative w-32 h-7 bg-black border border-black flex justify-center items-center my-2 rounded-full'>
                        <div className={`absolute w-32 h-7 flex justify-center items-center right-[2px] bottom-[2px] border border-black bg-BrutalYellow1 hover:cursor-pointer rounded-full`} > <p className='font-BebasNeue text-base text-black'> {communityData?.communityCategory.toUpperCase()} </p> </div>
                    </div>

                    <div className='relative w-32 h-7 bg-black border border-black flex justify-center items-center my-2 rounded-full'>
                        <div className={`absolute w-32 h-7 flex justify-center items-center right-[2px] bottom-[2px] border border-black bg-BrutalOrange1 hover:cursor-pointer rounded-full `} > <p className='font-BebasNeue text-base text-black'> {communityData?.communitySubCategory.toUpperCase()} </p> </div>
                    </div>
                </div>



            </section>


            <NavTabs />


            

        </div>
    )
}

export default TopSection