import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const NavTabs = () => {
    const router = useRouter()
    const { id } = router.query

  return (
  <div className='w-full h-20 bg-white flex justify-start sm:justify-center items-center space-x-3 px-5 py-2 md:py-4 sticky top-0 overflow-x-scroll overflow-y-hidden scrollbar-hide' onClick={() => console.log(router)}>

        <Link href={`/community/${id}/`} className='relative w-14 h-9 flex justify-center items-center bg-black border border-black '>
          <p className='w-14 h-9 absolute right-[2px] bottom-[2px] bg-BrutalBlue1 text-black border-2 border-black py-2 text-center font-semibold text-sm hover:cursor-pointer active:right-0 active:bottom-0' > Posts  </p>
        </Link>


        <Link href={`/community/${id}/TextChannels/first`} className='relative w-14 h-9 flex justify-center items-center bg-black border border-black'>
          <p className='w-14 h-9 absolute right-[2px] bottom-[2px] bg-BrutalBlue1 text-black border-2 border-black py-2 text-center font-semibold text-sm hover:cursor-pointer active:right-0 active:bottom-0' > Chat </p>
        </Link>

         <Link href={`/community/${id}/Tracks`} className='relative w-14 h-9 flex justify-center items-center bg-black border border-black'>
          <p className='w-14 h-9 absolute right-[2px] bottom-[2px] bg-BrutalBlue1 text-black border-2 border-black py-2 text-center font-semibold text-sm hover:cursor-pointer active:right-0 active:bottom-0'> Tracks </p>
        </Link>

        <Link href={`/community/${id}/Events`} className='relative w-14 h-9 flex justify-center items-center bg-black border border-black'>
          <p className='w-14 h-9 absolute right-[2px] bottom-[2px] bg-BrutalBlue1 text-black border-2 border-black py-2 text-center font-semibold text-sm hover:cursor-pointer active:right-0 active:bottom-0'> Events </p>
        </Link>

        <Link href={`/community/${id}/Leaderboard`} className='relative w-28 h-9 flex justify-center items-center bg-black border border-black'>
          <p className='w-28 h-9 absolute right-[2px] bottom-[2px] bg-BrutalBlue1 text-black border-2 border-black py-2 text-center font-semibold text-sm hover:cursor-pointer active:right-0 active:bottom-0'> Leaderboard </p>
        </Link>
        
        <Link href={`/community/${id}/About`} className='relative w-14 h-9 flex justify-center items-center bg-black border border-black'>
          <p className='w-14 h-9 absolute right-[2px] bottom-[2px] bg-BrutalBlue1 text-black border-2 border-black py-2 text-center font-semibold text-sm hover:cursor-pointer active:right-0 active:bottom-0'> About </p>
        </Link>
    </div>
  )
}

export default NavTabs


/*
Posts
Chat
Tracks
Events
LeaderBoard
About


*/