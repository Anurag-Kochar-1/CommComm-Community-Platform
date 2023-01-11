import {useState} from "react"
import { Popover, Transition } from '@headlessui/react'
import { doc, getDoc } from 'firebase/firestore'
import Image from 'next/image'
import { Fragment } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BiLockAlt } from 'react-icons/bi'
import { IoMdCreate } from "react-icons/io"
import { IPathsData } from '../../../customTypesAndInterfaces/Tracks/pathsInterface'
import { auth, db } from '../../../firebaseConfig'
import useSWR from 'swr'
import { IUserData } from "../../../customTypesAndInterfaces/User/userInterfaces"
// import coinIcon from "../../../public/images/icons/coinIcon.svg"


interface IProps {
  path: IPathsData
}

export function PathPopover({ path }: IProps) {

  const [user, loading] = useAuthState(auth)
  const [userDetails, setUserDetails] = useState<IUserData>(Object) 

  const fetchUserDetails = async () => {
    const userRef = doc(db, "users", user?.uid as string)
    const res = await getDoc(userRef)
    setUserDetails(res.data() as IUserData)
  }

  const {data, error, isLoading} = useSWR("usersDetails", fetchUserDetails)

  
  // if(isLoading) return <div className="fixed inset-0 w-full h-screen bg-black"> LOADING.....  </div>

  return (
    <div className="my-2">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className={"border-none outline-none focus:ring-0"} onClick={() => {
              if(!path.isUnlocked) {
                alert("Path is LOCKED")
              }
            }}>
              <div className={`w-20 h-20 relative bg-black border-2 border-gray-400  rounded-full flex justify-center items-center ${path?.pathNumber % 2 === 0 ? "mr-16" : "ml-16"} bg-gray-400 hover:cursor-pointer active:border-0 `} >
                <div className={`absolute w-20 h-full bottom-2 rounded-full flex flex-col justify-center items-center bg-blue-200 active:bottom-0`} >
                  {!path?.isUnlocked ? (
                    <BiLockAlt className='text-2xl' />
                  ) : (
                    <div>
                      <p> {path?.pathNumber} </p>
                    </div>
                  )}

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

              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-60 -translate-x-1/2 transform ">

                {path.isUnlocked && !path.isCompleted ? (
                  <div className="w-full h-full bg-white py-5">
                    <div className="relative w-full h-full bg-white space-y-5 p-1 flex flex-col justify-start items-center">

                      {/* Create Class Button*/}
                      {user?.uid === path.pathCreatorID && (
                        <button
                          type='button'
                          className='w-[90%] flex justify-center items-center space-x-2  bg-gray-100 py-2 px-4'>
                          <p className='font-semibold text-base'> Create Class </p>
                        </button>
                      )}

                      {/* Claim Coins Button*/}
                      <button
                        type='button'
                        className='w-[90%] flex justify-center items-center space-x-2 bg-gray-100 py-2 px-4'>
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

