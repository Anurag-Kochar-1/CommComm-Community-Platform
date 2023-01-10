import { Popover, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BiLockAlt } from 'react-icons/bi'
import { IoMdCreate } from "react-icons/io"
import { IPathsData } from '../../../customTypesAndInterfaces/Tracks/pathsInterface'
import { auth } from '../../../firebaseConfig'
// import coinIcon from "../../../public/images/icons/coinIcon.svg"


interface IProps {
  path: IPathsData
}

export function PathPopover({ path }: IProps) {

  const [user, loading, error] = useAuthState(auth)
  return (
    <div className="my-2">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className={"border-none outline-none focus:ring-0"} onClick={() => !path.isUnlocked && alert("LOCKED")}>
              <div className={`w-20 h-20 relative bg-black border-2 border-gray-400  rounded-full flex justify-center items-center ${path?.pathNumber % 2 === 0 ? "mr-16" : "ml-16"} bg-gray-400 hover:cursor-pointer active:border-0 `} key={path.pathNumber}>
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

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  )
}
