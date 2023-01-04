import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const NavTabs = () => {
    const router = useRouter()
    const { id } = router.query

  return (
  <div className='w-full h-20 bg-white flex justify-start sm:justify-center items-center space-x-3 lg:space-x-5 px-5 py-2 md:py-4 sticky top-0 overflow-x-scroll overflow-y-hidden scrollbar-hide' onClick={() => console.log(router)}>

        <Link href={`/community/${id}/`} className='relative w-14 h-10 flex justify-center items-center bg-black border border-black rounded-md hover:scale-105'>
          <div className='w-14 h-10 absolute right-[2px] bottom-[2px] bg-BrutalBlue1 text-black border-2 border-black py-2 text-center font-semibold text-sm hover:cursor-pointer active:right-0 active:bottom-0 rounded-md' > Posts  </div>
        </Link>


        <Link href={`/community/${id}/TextChannels/first`} className='relative w-14 h-10 flex justify-center items-center bg-black border border-black rounded-md hover:scale-105'>
          <div className='w-14 h-10 absolute right-[2px] bottom-[2px] bg-BrutalBlue1 text-black border-2 border-black py-2 text-center font-semibold text-sm hover:cursor-pointer active:right-0 active:bottom-0 rounded-md' > Chat </div>
        </Link>

         <Link href={`/community/${id}/Tracks`} className='relative w-14 h-10 flex justify-center items-center bg-black border border-black rounded-md hover:scale-105' >
          <div className='w-14 h-10 absolute right-[2px] bottom-[2px] bg-BrutalBlue1 text-black border-2 border-black py-2 text-center font-semibold text-sm hover:cursor-pointer active:right-0 active:bottom-0 rounded-md'> Tracks </div>
        </Link>

        <Link href={`/community/${id}/Events`} className='relative w-14 h-10 flex justify-center items-center bg-black border border-black rounded-md hover:scale-105'>
          <div className='w-14 h-10 absolute right-[2px] bottom-[2px] bg-BrutalBlue1 text-black border-2 border-black py-2 text-center font-semibold text-sm hover:cursor-pointer active:right-0 active:bottom-0 rounded-md'> Events </div>
        </Link>

        <Link href={`/community/${id}/Leaderboard`} className='relative w-28 h-10 flex justify-center items-center bg-black border border-black rounded-md hover:scale-105'>
          <div className='w-28 h-10 absolute right-[2px] bottom-[2px] bg-BrutalBlue1 text-black border-2 border-black py-2 text-center font-semibold text-sm hover:cursor-pointer active:right-0 active:bottom-0 rounded-md'> Leaderboard </div>
        </Link>
        
        <Link href={`/community/${id}/About`} className='relative w-14 h-10 flex justify-center items-center bg-black border border-black rounded-md hover:scale-105'>
          <div className='w-14 h-10 absolute right-[2px] bottom-[2px] bg-BrutalBlue1 text-black border-2 border-black py-2 text-center font-semibold text-sm hover:cursor-pointer active:right-0 active:bottom-0 rounded-md'> About </div>
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