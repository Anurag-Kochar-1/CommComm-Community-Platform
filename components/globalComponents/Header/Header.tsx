import { useRouter } from 'next/router'
import React from 'react'
import BellIcon from '../../Icons/Header/BellIcon/BellIcon'
import MessagesIcon from '../../Icons/Header/MessagesIcon/MessagesIcon'
import SignInAndSignUpButtonsGroup from '../Buttons/SignInAndSignUp/SignInAndSignUpButtonsGroup'
import SearchBarIcon from '../../Icons/Header/SearchBarIcon/SearchBarIcon'
import SearchBar from './components/SearchBar/SearchBar'
import PlusIcon from '../../Icons/Header/PlusIcon/PlusIcon'
import { getAuth } from 'firebase/auth'
import { auth } from '../../../firebaseConfig'

const Header = () => {
  const router = useRouter()
  const isUser = false;

  return (
    <div className='fixed top-0 w-full h-[10vh] bg-white border-b border-b-black py-4 px-3 md:px-5 flex justify-between items-center'>

      {/*  DEMO LOGO  */}
      <div className='w-10 h-10 rounded-full bg-BrutalOrange1' />

      <SearchBar />

      {isUser && (
        <div className='flex justify-between items-center space-x-4'>
          <SearchBarIcon />
          <PlusIcon />
          <BellIcon />
          <MessagesIcon />
        </div>
      )}

      {!isUser && (
        <div className='flex justify-between items-center space-x-4'>
          <SignInAndSignUpButtonsGroup />
        </div>
      )}

    </div>
  )
}

export default Header