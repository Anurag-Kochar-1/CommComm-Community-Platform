import Link from 'next/link'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { MdOutlineFacebook } from 'react-icons/md'

const index = () => {
  return (
    <div className='Z-50 fixed inset-0 w-[100%] h-[100vh] bg-BrutalPurple1 flex flex-row justify-center lg:justify-end items-center lg:px-32 xl:px-40 2xl:px-72'>

    <div className='w-full h-[90vh] mb-[10vh] lg:mb-0 sm:w-[70%] sm:h-[70vh] md:w-[70%] lg:w-[60%] xl:w-[40%] 2xl:w-[35%] bg-white rounded-md flex flex-col justify-start items-start pt-10 pb-5 px-5 space-y-5 overflow-x-hidden overflow-y-scroll'>

      {/* ---- LOGO ---- */}
      <div className='flex justify-center items-center space-x-3'>
        <div className='w-6 h-6 rounded-full bg-BrutalBlack1' />
        <span> TBH </span>
      </div>

      {/* ---- Heading ----- */}
      <h1 className='text-3xl font-bold'> Sign in </h1>

      {/* ---- Sign up with email */}
      <div className='w-full h-full flex flex-col items-start justify-start bg-gray-300'>
        <span className='text-base font-normal'> New User <Link className='text-blue-500 hover:cursor-pointer' href='/register'> Create an account </Link> </span>

        <div className='w-full flex flex-col justify-between items-start space-y-4 py-3'>

          <div className='w-[90%] h-10 relative bg-black flex justify-start items-center'>
            <input
              type="email"
              placeholder='Email address'
              className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'
            />
          </div>

          <div className='w-[90%] h-10 relative bg-black flex justify-start items-center'>
            <input
              type="password"
              placeholder='Password'
              className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'
            />
          </div>
        </div>

        {/* ---- Continue Button div ---- */}
        <div className='w-full flex justify-end items-center py-5'>
          <button type='button' title='singIn' className='w-20 md:w-32 h-[4.5vh] relative flex justify-center items-center bg-black rounded-sm border-2 border-black'>
            <span className='w-20 md:w-32 h-[4.5vh] absolute bottom-[2px] right-[2px] bg-BrutalBlue1  flex justify-center items-center rounded-sm border-2 border-black active:right-0 active:bottom-0 hover:right-0 hover:bottom-0'>
              <p className='text-xs md:text-sm font-medium'> Continue  </p>
            </span>
          </button>
        </div>
      </div>

      <span className='mx-auto'> Or </span>

      {/* ---- Continue with google and facebook ----- */}
      <div className='flex justify-start items-center space-x-5'>
        <button type='button' title='google' className='bg-white w-14 h-14 rounded-full flex justify-center items-center border-2 border-gray-200'>
          <FcGoogle className='w-10 h-10' />
        </button>

        <button type='button' title='facebnook' className='w-14 h-14 rounded-full flex justify-center items-center border-2 border-gray-200'>
          <MdOutlineFacebook className='text-blue-500 w-10 h-10' />
        </button>
      </div>

    </div>
  </div>
  )
}

export default index