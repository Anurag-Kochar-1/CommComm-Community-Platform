import React, { useState } from 'react'
import { useRouter } from 'next/router'
import BellIcon from '../../Icons/Header/BellIcon/BellIcon'
import MessagesIcon from '../../Icons/Header/MessagesIcon/MessagesIcon'
import SignInAndSignUpButtonsGroup from '../Buttons/SignInAndSignUp/SignInAndSignUpButtonsGroup'
import SearchBarIcon from '../../Icons/Header/SearchBarIcon/SearchBarIcon'
import SearchBar from './components/SearchBar/SearchBar'
// import PlusIcon from '../../Icons/Header/PlusIcon/PlusIcon'
import CreateOptionsModal from '../Modals/CreateOptionsModal/CreateOptionsModal'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../../firebaseConfig'
import Link from 'next/link'
import { useAuthState } from 'react-firebase-hooks/auth'



const Header = () => {
  const router = useRouter()
  const [user, loading] = useAuthState(auth)

 

  return (
    <div className='fixed top-0 w-full h-[10vh] bg-white border-b border-b-black py-4 px-3 md:px-5 flex justify-between items-center'>

      {/*  DEMO LOGO  */}
      <Link href={'/'} className='w-10 h-10 rounded-full bg-BrutalOrange1' onClick={() => console.log(0)} />

      <SearchBar />

      {user !== null && (
        <div className='flex justify-between items-center space-x-4'>
          <SearchBarIcon />
          {/* <PlusIcon /> */}
          <CreateOptionsModal />
          <BellIcon />
          <MessagesIcon />
        </div>
      )}

      {user === null && (
        <div className='flex justify-between items-center space-x-4'>
          <SignInAndSignUpButtonsGroup />
        </div>
      )}

    </div>
  )
}

export default Header