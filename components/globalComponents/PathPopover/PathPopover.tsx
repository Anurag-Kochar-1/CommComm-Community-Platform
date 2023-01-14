import { useState } from "react"
import { Popover, Transition } from '@headlessui/react'
import { doc, getDoc } from 'firebase/firestore'
import { Fragment } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { FaLock, FaLockOpen } from 'react-icons/fa'
import { BsCheckLg } from 'react-icons/bs'
import { IPathsData } from '../../../customTypesAndInterfaces/Tracks/pathsInterface'
import { auth, db } from '../../../firebaseConfig'
import useSWR from 'swr'
import { IUserData } from "../../../customTypesAndInterfaces/User/userInterfaces"
import { AiFillStar } from "react-icons/ai"
import { useSelector } from "react-redux"
// import coinIcon from "../../../public/images/icons/coinIcon.svg"


interface IProps {
  path: IPathsData
}

export function PathPopover({ path }: IProps) {

  const [user, loading] = useAuthState(auth)
  const [, ] = useState<IUserData>(Object)

  const userDetails:IUserData = useSelector((state: any) => state?.user?.currentUserData)
  



  return (
    <div className="my-2">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className={"border-none outline-none focus:ring-0"} onClick={() => {
              if (!path.isUnlocked) {
                alert("Path is LOCKED")
              } else if ( !userDetails?.communitiesJoinedID?.includes(path?.communityID)) {
                alert("You are not a member of this community")
              }
            }}>
              <div className={`w-20 h-20 ${path.isUnlocked ? "bg-[#CC7800]" : "bg-[#B7B7B7]"} ${path.isUnlocked && "border-0 border-[#CC7800]"} rounded-full flex justify-center items-center ${path?.pathNumber % 2 === 0 ? "mr-16" : "ml-16"} ]`} >
                <div className={`w-full h-full -mt-3 rounded-full flex flex-col justify-center items-center ${!path.isUnlocked ? "bg-[#E5E5E5]" : "bg-[#FF9600]"} active:-mt-0`}>
                  {!path?.isUnlocked && ( <FaLock className='text-2xl text-[#AFAFAF]' /> )}
                  {path?.isUnlocked && !path.isCompleted ? ( <AiFillStar className='text-3xl text-white' /> ) : null}
                  {path?.isUnlocked && path.isCompleted ? ( <BsCheckLg className='text-2xl text-white' /> ) : null}
                  

                 
                  {/* <div>
                    <p> {path?.pathNumber} </p>
                  </div> */}
                </div>
              </div>
            </Popover.Button>
            <Transition

              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >

              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-60 -translate-x-1/2 transform">

                {path.isUnlocked && !path.isCompleted && userDetails?.communitiesJoinedID?.includes(path?.communityID) ? (
                  <div className="w-full h-full bg-[#FF9600] border-2 border-black py-7 px-3 rounded-sm">
                    <div className="w-full h-full space-y-5 p-1 flex flex-col justify-start items-center">

                      {/* Create Class Button*/}
                      {user?.uid === path.pathCreatorID && (
                        <button
                          type='button'
                          className='w-[95%] flex justify-center items-center space-x-2  bg-white rounded-md py-3 px-4'>
                          <p className='font-semibold text-base'> Create Class </p>
                        </button>
                      )}

                      {/* Mark Complete Button*/}
                      {user?.uid === path.pathCreatorID && (
                        <button
                          type='button'
                          className='w-[95%] flex justify-center items-center space-x-2  bg-white rounded-md py-3 px-4'>
                          <p className='font-semibold text-base'> Mark Complete </p>
                        </button>
                      )}

                      {/* Claim Coins Button*/}
                      <button
                        type='button'
                        className='w-[95%] flex justify-center items-center space-x-2 bg-white rounded-md py-3 px-4'>
                        <p className='font-semibold text-base '> Claim coin </p>
                      </button>

                    </div>


                  </div>
                ) : (
                  null
                  // <div>
                  //     <div className="w-full h-full bg-white py-5">
                  //       <div className="relative w-full h-full bg-white space-y-5 p-1 flex flex-col justify-start items-center">

                  //       </div>
                  //     </div>
                  //   </div>
                )}

              </Popover.Panel>



            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

