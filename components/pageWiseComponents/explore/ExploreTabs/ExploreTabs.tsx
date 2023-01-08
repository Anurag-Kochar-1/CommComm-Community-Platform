import Link from 'next/link'
import React from 'react'

const ExploreTabs = () => {
  return (
    <div className='w-full flex justify-center itemce space-x-2 sm:space-x-3 md:space-x-5 lg:space-x-10 flex-wrap sticky top-0 z-50 bg-green-400 border-b-2 border-r-2 border-l-2 border-b-black border-r-black border-l-black '>
        <Link 
        href={'/explore'}
        className="w-16 h-10 relative bg-black border border-black flex justify-center items-center rounded-lg my-5"
        >
          <div className='absolute w-16 h-10 right-1 bottom-1 bg-BrutalAqua1 border border-black flex justify-center items-center rounded-lg active:right-0 active:bottom-0'>
            <p className='font-BebasNeue text-black text-xl '> Posts </p>
          </div>
        </Link>

        <Link 
        href={'/explore/communities'}
        className="w-28 h-10 relative bg-black border border-black flex justify-center items-center rounded-lg my-5"
        >
          <div className='absolute w-28 h-10 right-1 bottom-1 bg-BrutalAqua1 border border-black flex justify-center items-center rounded-lg active:right-0 active:bottom-0'>
            <p className='font-BebasNeue text-black text-xl '> Communities </p>
          </div>
        </Link>

        <Link 
        href={'/explore/events'}
        className="w-16 h-10 relative bg-black border border-black flex justify-center items-center rounded-lg my-5"
        >
          <div className='absolute w-16 h-10 right-1 bottom-1 bg-BrutalAqua1 border border-black flex justify-center items-center rounded-lg active:right-0 active:bottom-0'>
            <p className='font-BebasNeue text-black text-xl '> Events </p>
          </div>
        </Link>

      </div>
  )
}

export default ExploreTabs