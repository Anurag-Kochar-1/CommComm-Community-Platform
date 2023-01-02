import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import PlusIcon from '../../../Icons/Header/PlusIcon/PlusIcon'
import { useDispatch, useSelector } from "react-redux"
import { setIsCreateOptionsModalOpen } from "../../../../redux/slices/modalSlice"

export default function CreateOptionsModal() {
    const dispatch = useDispatch()
    const isCreateOptionsModalOpen = useSelector((state: any) => state?.modal?.isCreateOptionsModalOpen)

    function closeModal() {
        dispatch(setIsCreateOptionsModalOpen(false))
    }

    return (
        <>
            <PlusIcon />
            <Transition appear show={isCreateOptionsModalOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="z-20 w-[70%] h-[40vh] sm:w-[40%] md:w-[30%] lg:w-[25%] xl:w-[20%] scrollbar-hide bg-green-400 rounded-md flex flex-col justify-start items-start overflow-x-hidden overflow-y-scroll">
                                    {/* <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Tit le
                                    </Dialog.Title> */}
                                

                                    
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
