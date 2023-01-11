import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { MdOutlineFacebook } from 'react-icons/md'
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../firebaseConfig'
import { useRouter } from 'next/router'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { SignInWithGoogleFunction } from "../../utils/SignInWithGoogle/SignInWithGoogle"
import { SignInWithFacebookFunction } from "../../utils/SignInWithFacebook/SignInWithFacebook"
import { useDispatch } from 'react-redux'
import { setIsBottomBarVisible } from '../../redux/slices/bottomBarSlice'
import { useAuthState } from 'react-firebase-hooks/auth'


const Index = () => {
  const [user, loading] = useAuthState(auth)
  const dispatch = useDispatch()
  const router = useRouter()
  const [emailInputValue, setEmailInputValue] = useState<string>("")
  const [passwordInputValue, setPasswordInputValue] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const logIn = () => {
    setIsLoading(true)
    console.log(`--- login func is running ---`);
    signInWithEmailAndPassword(auth, emailInputValue, passwordInputValue)
      .then((userCredential) => {
        // console.log(userCredential)
        setTimeout(() => {
          setIsLoading(false)
          router.push("/")
        }, 1500);

      })
      .catch((error) => {
        alert(error?.errormessage);
        setIsLoading(false)
      });
  }


  useEffect(() => {
    if(user  && !loading) {
      router.push("/")
    }
  },[loading])

  return (
    <div className=' fixed inset-0 w-[100%] h-[100vh] lg:bg-gradient-to-r from-gray-700 via-gray-900 to-black flex flex-row justify-center lg:justify-end items-center lg:px-32 xl:px-40 2xl:px-72'>

      {!isLoading && (
        <div className='z-40 w-full h-[90vh] mb-[10vh] lg:mb-0 sm:w-[70%] sm:h-[70vh] md:w-[70%] lg:w-[60%] xl:w-[40%] 2xl:w-[35%] bg-white rounded-md flex flex-col justify-start items-start pt-10 pb-5 px-5 space-y-5 overflow-x-hidden overflow-y-scroll scrollbar-hide'>

          {/* ---- LOGO ---- */}
          <Link href={'/'} className='flex justify-center items-center space-x-3'>
            <div className='w-6 h-6 rounded-full bg-BrutalPurple2 border-2 border-BrutalRed1 ' />
            <span className='font-semibold'> WEcomm </span>
          </Link>

          {/* ---- Heading ----- */}
          <h1 className='text-3xl font-bold'> Log in </h1>

          {/* ---- Sign up with email */}
          <div className='w-full flex flex-col items-start justify-start'>
            <span className='text-base font-normal'> New User <Link className='text-blue-500 hover:cursor-pointer' href='/register'> Create an account </Link> </span>

            <div className='w-full flex flex-col justify-between items-start space-y-4 py-3'>

              <div className='w-[100%] h-10 relative bg-black flex justify-start items-center'  onMouseEnter={() => dispatch(setIsBottomBarVisible(false))} onMouseLeave={() => dispatch(setIsBottomBarVisible(true))}>
                <input
                  value={emailInputValue}
                  onChange={(e) => setEmailInputValue(e.target.value)}
                  type="email"
                  placeholder='Email address'
                  className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'
                />
              </div>

              <div className='w-[100%] h-10 relative bg-black flex justify-start items-center'  onMouseEnter={() => dispatch(setIsBottomBarVisible(false))} onMouseLeave={() => dispatch(setIsBottomBarVisible(true))}>
                <input
                  value={passwordInputValue}
                  onChange={(e) => setPasswordInputValue(e.target.value)}
                  type="password"
                  placeholder='Password'
                  className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'
                />
              </div>
            </div>

            {/* ---- Continue Button div ---- */}
            <div className='w-full flex justify-end items-center py-5'>
              <button type='button' title='singIn' className='w-20 md:w-32 h-10 relative flex justify-center items-center bg-black rounded-sm border-2 border-black'>
                <span className='w-20 md:w-32 h-10 absolute bottom-[2px] right-[2px] bg-BrutalBlue1  flex justify-center items-center rounded-sm border-2 border-black active:right-0 active:bottom-0'>
                  <p className='text-xs md:text-sm font-medium' onClick={() => {
                    if (emailInputValue && passwordInputValue) {
                      logIn()
                    } else {
                      alert("Fill the required fields")
                    }
                  }}> Login  </p>
                </span>
              </button>
            </div>
          </div>

          <span className='mx-auto' onClick={() => console.log(auth?.currentUser)}> Or </span>

          {/* ---- Continue with google and facebook ----- */}
          <div className='w-full flex flex-col justify-start items-center space-y-3'>
            {/* <button type='button' title='sign' className='bg-white w-full px-3 py-2 flex justify-between items-center border-2 border-black'>
            <FcGoogle />
            <span className='flex-1'> Continue with Google </span>
          </button>

          <button type='button' title='sign' className='w-full px-3 py-2 flex justify-between items-center bg-[#1877F2] border-2 border-black'>
            <MdOutlineFacebook className='text-white' />
            <span className='flex-1 text-white'> Continue with Facebook </span>
          </button> */}

            <button onClick={() => {
              SignInWithGoogleFunction()
              
              setTimeout(() => {
                if(user && !loading) {
                  router.push('/')
                } 
              }, 2000);
            }}
              type='button'
              title='sign'
              className='relative w-full h-10 flex justify-between items-center border-2 border-black bg-black'>
              <span className='absolute bottom-1 right-1 bg-white w-full h-10 flex justify-center items-center space-x-3 border-2 border-black hover:right-0 hover:bottom-0'>
                <FcGoogle className=' w-6 h-6'/>
                <span className=' font-medium font-InriaSans text-base'> Continue with Google </span>
              </span>
            </button>

            <button onClick={() => {
              SignInWithFacebookFunction()
              
              setTimeout(() => {
                if(user && !loading) {
                  router.push('/')
              }
              }, 2000);
            }}
            type='button' 
            title='sign' 
            className='relative w-full h-10 flex justify-between items-center border-2 border-black bg-black'>
              <span className='absolute bottom-1 right-1 bg-[#1877F2] w-full h-10 flex justify-center items-center space-x-3 border-2 border-black hover:right-0 hover:bottom-0'>
                <MdOutlineFacebook className='text-white w-6 h-6' />
                <span className='text-white font-medium font-InriaSans text-base'> Continue with Facebook </span>
              </span>
            </button>
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

export default Index