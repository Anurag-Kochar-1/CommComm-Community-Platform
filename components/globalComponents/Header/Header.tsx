import { useRouter } from 'next/router'
import React from 'react'

// ---- Icons -----
import {GiHamburgerMenu} from "react-icons/gi"

const Header = () => {
  const router = useRouter()

  return (
    <div className='fixed top-0 w-full h-[7vh] bg-gray-500 py-4 px-3 flex justify-between items-center'>

      {/* <GiHamburgerMenu /> */}
      <h1 className='text-4xl text-red-400 font-bold' onClick={() => console.log(router)}> LOG ROUTER </h1>

    </div>
  )
}

export default Header