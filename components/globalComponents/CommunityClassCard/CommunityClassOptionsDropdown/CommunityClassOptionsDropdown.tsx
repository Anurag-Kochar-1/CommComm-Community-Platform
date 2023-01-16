import { Menu, Transition } from '@headlessui/react'
import { arrayRemove, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useRef, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BiDotsVertical } from 'react-icons/bi'
import { IClassData } from '../../../../customTypesAndInterfaces/Class/classInterfaces'
import { auth, db } from '../../../../firebaseConfig'

interface IProps {
    classData?: IClassData
}

const CommunityClassOptionsDropdown = ({ classData }: IProps) => {
    const [user] = useAuthState(auth)
    const router = useRouter()

    // const deletePost = async () => {
    //     if (user?.uid === postData?.postCreatorID) {
    //         const postRef = doc(db, 'posts', postData?.postID)
    //         const postCommunityRef = doc(db, 'communities', postData?.postCreateAtCommunityID)
    //         const userRef = doc(db, 'users', user?.uid)


    //         // updating user
    //         await updateDoc(userRef, {
    //             createdPostsID: arrayRemove(postData?.postID)
    //         })

    //         // updatiting community
    //         await updateDoc(postCommunityRef, {
    //             communityPostsID: arrayRemove(postData?.postID)
    //         })

    //         // deleteing post doc
    //         await deleteDoc(postRef)


    //         window?.location?.reload();

    //     }
    // }

    return (
        <div className="text-right z-50">
            <Menu as="div" className="relative inline-block text-left z-50">
                <div className='z-50'>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md text-sm font-medium text-white">
                        <BiDotsVertical className='inline-block w-6 h-6 text-black hover:cursor-pointer' />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    
                    <Menu.Items className="absolute right-0 mt-2 w-52 origin-top-right divide-y divide-gray-100 rounded-sm space-y-2 border-2 border-black bg-gray-100 p-2 z-50">

                        <div className="px-3 py-2 z-50 bg-BrutalOrange1 rounded-md hover:cursor-pointer">
                            <Menu.Item as={Fragment}>
                                <div onClick={() => console.log(classData)}>
                                    <button
                                        type='button'
                                        className='text-black font-Roboto font-semibold'
                                    >
                                        Start Class
                                    </button>
                                </div>
                            </Menu.Item>
                        </div>

                        <div className="px-3 py-2 z-50 bg-BrutalBlue1 rounded-md hover:cursor-pointer">
                            <Menu.Item as={Fragment}>
                                <div onClick={() => console.log(classData)}>
                                    <button
                                        type='button'
                                        className='text-black font-Roboto font-semibold'
                                    >
                                        End Class
                                    </button>
                                </div>
                            </Menu.Item>
                        </div>

                        <div className="px-3 py-2 z-50 bg-BrutalPurple1 rounded-md hover:cursor-pointer">
                            <Menu.Item as={Fragment}>

                                <div onClick={() => console.log(classData)}>
                                    <button
                                        type='button'
                                        className='text-black font-Roboto font-semibold'
                                    >
                                        Delete
                                    </button>
                                </div>
                            </Menu.Item>
                        </div>

                        <div className="px-3 py-2 z-50 bg-BrutalRed1 rounded-md hover:cursor-pointer">
                            <Menu.Item as={Fragment}>

                                <div onClick={() => console.log(classData)}>
                                    <button
                                        type='button'
                                        className='text-black font-Roboto font-semibold'
                                    >
                                        Share
                                    </button>
                                </div>
                            </Menu.Item>
                        </div>





                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

export default CommunityClassOptionsDropdown