import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc"
import { MdOutlineFacebook } from "react-icons/md"
import {AiOutlineLoading3Quarters} from "react-icons/ai"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebaseConfig"
import { useRouter } from 'next/router'
import { SignInWithGoogleFunction } from "../../utils/SignInWithGoogle/SignInWithGoogle"
import { SignInWithFacebookFunction } from "../../utils/SignInWithFacebook/SignInWithFacebook"

import blueLinesBG from "../../public/images/bg/blueLinesBG.svg"
import pattern1 from "../../public/images/bg/pattern1.svg"
import jigsaw from "../../public/images/bg/jigsaw.svg"
 
const index = () => {
  const router = useRouter()
  const [emailInputValue, setEmailInputValue] = useState<string>("")
  const [userNameInputValue, setUserNameInputValue] = useState<string>("")
  const [passwordInputValue, setPasswordInputValue] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signUp = () => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, emailInputValue, passwordInputValue)
      .then((response) => {
        console.log(response)
        // updating user's profile
        updateProfile(auth?.currentUser as any, {
          displayName: userNameInputValue,
          photoURL: ""
        }).then(() => {
          console.log('PROFILE UPDATED !')
          setIsLoading(false)
          router.push("/")
        }).catch((error) => {
          console.log(error)
          setIsLoading(false)
        });

      }).catch((error) => {
        console.log(error?.message)
        setIsLoading(false)
      })

    // updating user's profule
    // updateProfile(auth?.currentUser as any, {
    //   displayName: userNameInputValue,
    //   photoURL: ""
    // }).then(() => {
    //   console.log('PROFILE UPDATED !')
    // }).catch((error) => {
    //   console.log(error)
    // });



    setEmailInputValue("")
    setPasswordInputValue("")
  }

  return (
    <div className='fixed inset-0 w-[100%] h-[100vh] bg-BrutalBlue1 flex flex-row justify-center lg:justify-end items-center lg:px-28 xl:px-52 2xl:px-60'>

      {/* <img src={blueLinesBG} alt='bg' className='fixed inset-0 z-10 w-full h-full' draggable="false" /> */}



      {!isLoading && (
        <div className='z-20 w-full h-[90vh] mb-[10vh] lg:mb-0 sm:w-[70%] sm:h-[70vh] md:w-[70%] lg:w-[60%] xl:w-[40%] 2xl:w-[35%] bg-white rounded-md flex flex-col justify-start items-start pt-10 pb-5 px-5 space-y-5 overflow-x-hidden overflow-y-scroll scrollbar-hide'>

          {/* ---- LOGO ---- */}
          <div className='flex justify-center items-center space-x-3'>
            <div className='w-6 h-6 rounded-full bg-BrutalBlack1' />
            <span> TBH </span>
          </div>

          {/* ---- Heading ----- */}
          <h1 className='text-3xl font-bold'> Create an account </h1>

          {/* ---- Continue with google and facebook ----- */}
          <div className='flex justify-start items-center space-x-5'>
            <button onClick={() => {
                SignInWithGoogleFunction()
                router.push("/")
            }} type='button' title='google' className='bg-white w-14 h-14 rounded-full flex justify-center items-center border-2 border-gray-200'>
              <FcGoogle className='w-10 h-10' />
            </button>

            <button 
            onClick={() => {
              SignInWithFacebookFunction()
              router.push("/")
            }}
            type='button' 
            title='facebnook' 
            className='w-14 h-14 rounded-full flex justify-center items-center border-2 border-gray-200'>
              <MdOutlineFacebook className='text-blue-500 w-10 h-10' />
            </button>
          </div>

          <span className='mx-auto' onClick={() => console.log(auth?.currentUser)}> Or </span>

          {/* ---- Sign up with email */}
          <div className='w-full h-full flex flex-col items-start justify-start'>
            <h3 className='font-bold text-base'> Sign up with email </h3>
            <span className='text-base font-normal'> Already have an account? <Link className='text-blue-500 hover:cursor-pointer' href='/login'> Sign in </Link> </span>

            <div className='w-full flex flex-col justify-between items-start space-y-4 py-3 mt-4'>

              <div className='w-[90%] h-10 relative bg-black flex justify-start items-center'>
                <input
                  value={emailInputValue}
                  onChange={(e) => setEmailInputValue(e.target.value)}
                  required
                  type="email"
                  placeholder='Email address'
                  className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'
                />
              </div>

              <div className='w-[90%] h-10 relative bg-black flex justify-start items-center'>
                <input
                  value={userNameInputValue}
                  onChange={(e) => setUserNameInputValue(e.target.value)}
                  required
                  type="text"
                  placeholder='Username'
                  className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'
                />
              </div>

              <div className='w-[90%] h-10 relative bg-black flex justify-start items-center'>
                <input
                  value={passwordInputValue}
                  onChange={(e) => setPasswordInputValue(e.target.value)}
                  required
                  type="password"
                  placeholder='Password'
                  className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'
                />
              </div>
            </div>


            {/* ---- Continue Button div ---- */}
            <div className='w-full flex justify-end items-center py-5'>
              <button
                onClick={() => {
                  if( userNameInputValue && emailInputValue && passwordInputValue ) {
                    signUp()
                  } else {
                    alert("Fill the required fields")
                  }
                }}
                type='button'
                title='singIn'
                className='w-20 md:w-32 h-[4.5vh] relative flex justify-center items-center bg-black rounded-sm border-2 border-black'>
                <span className='w-20 md:w-32 h-[4.5vh] absolute bottom-[2px] right-[2px] bg-BrutalBlue1  flex justify-center items-center rounded-sm border-2 border-black active:right-0 active:bottom-0 hover:right-0 hover:bottom-0'>
                  <p className='text-xs md:text-sm font-medium'> Continue  </p>
                </span>
              </button>
            </div>
          </div>
        </div>
      )}


      {isLoading && (
        <div className='z-50 fixed inset-0 w-full h-screen flex justify-center items-center bg-white scrollbar-hide'>
            <AiOutlineLoading3Quarters className='animate-spin text-2xl text-BrutalBlack1' />
        </div>
      )}
    </div>
  )
}

export default index