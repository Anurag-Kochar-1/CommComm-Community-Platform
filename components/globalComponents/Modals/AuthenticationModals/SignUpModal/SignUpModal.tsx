import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {FcGoogle} from "react-icons/fc"
import {MdOutlineFacebook} from "react-icons/md"

export default function SignUpModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [createAccountPageNumber, setCreateAccountPageNumber] = useState<number>(1)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    Open dialog
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
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
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-[40%] lg:w-[40%] xl:w-[30%] 2xl:w-[25%] h-[60vh] transform overflow-hidden bg-transparent p-6 text-left align-middle transition-all">

                                    <div className='relative w-full h-full bg-black flex justify-center items-center border-2 border-black'>
                                        <div className='absolute right-2 bottom-2 w-full h-full bg-white flex flex-col justify-start items-center border-2 border-black py-10 px-5'>
                                            <Dialog.Title
                                                as="h3"
                                                className="text-lg font-medium leading-6 text-gray-900"
                                            >
                                                Sign Up
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    By continuing, you are setting up a Reddit account and agree to our User Agreement and Privacy Policy.
                                                </p>
                                            </div>

                                            {/* ------- Google and Facebook buttons ------- */}
                                            <div className='w-full flex flex-col justify-start items-center space-y-3'>
                                                {/* ----- Sign With Google ----- */}
                                                <button type='button' title='sign' className='w-full px-3 py-2  flex justify-between items-center border-2 border-black'>
                                                    <FcGoogle />
                                                    <span className='flex-1'> Continue with Google </span>
                                                </button>

                                                {/* ----- Sign With FaceBook ----- */}
                                                <button type='button' title='sign' className='w-full px-3 py-2 flex justify-between items-center bg-[#1877F2] border-2 border-black'>
                                                    <MdOutlineFacebook className='text-white' />
                                                    <span className='flex-1 text-white'> Continue with Facebook </span>
                                                </button>
                                            </div>

                                            <span> or </span>

                                            <input 
                                            type="email" 
                                            placeholder='email..'
                                            />

                                            <button type='button' title='continue' onClick={() => setCreateAccountPageNumber(2)}>
                                                Continue
                                            </button>


                                            

                                            <div className="mt-4">
                                                <button
                                                    type="button"
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                    onClick={closeModal}
                                                >
                                                    Got it, thanks!
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
