import React from 'react'
import {BiBell} from "react-icons/bi"

const BellIcon = () => {
  return (
    <button type='button' title='searchIcon' className='relative w-10 h-10 border-black bg-black border rounded-full flex justify-center items-center'> 
          <span className='w-10 h-10 rounded-full bg-BrutalYellow1 flex justify-center items-center absolute right-[1px] bottom-[1.5px] border border-black active:bottom-0 active:right-0 hover:bottom-0 hover:right-0'>
            <BiBell className='text-lg text-black'/>
          </span>
      </button>
  )
}

export default BellIcon