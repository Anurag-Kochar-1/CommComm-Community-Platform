import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BiErrorCircle } from "react-icons/bi"
import { auth } from '../../../../firebaseConfig'

const ProfileIcon = () => {
  const [user] = useAuthState(auth)
  const router = useRouter()


  return (
    <Link href={user ? `/profile/${user?.uid}` : "/register"}>
      <button type='button' title='profile' className={router?.pathname === "/login" || router?.pathname === "/register"  ? (
        'w-10 h-10 bg-black outline-none flex justify-center items-center rounded-md relative '
      ) : (
        'w-10 h-10 bg-white  outline-none flex justify-center items-center rounded-md'
      )} >
        <div className={router?.pathname === "/login" || router?.pathname === "/register" ? (
          'w-10 h-10 bg-BrutalPurple1 flex justify-center items-center rounded-md absolute bottom-1 right-1 border-2 border-black active:bottom-0 active:right-0'
        ) : (
          'w-10 h-10 bg-white flex justify-center items-center rounded-md'
        )}>
          {!user?.photoURL && <BiErrorCircle className='text-2xl text-red-600' />}

          {user?.photoURL && (
            <Image src={user.photoURL as string} alt="dp" width={7} height={7} className="w-7 h-7 rounded-full" />
          )}
        </div>
      </button>
      
    </Link>
  )
}

export default ProfileIcon