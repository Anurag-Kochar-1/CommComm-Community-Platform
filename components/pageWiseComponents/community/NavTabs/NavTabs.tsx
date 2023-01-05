import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const NavTabs = () => {
    const router = useRouter()
    const { id } = router.query

  return (
  <div className='w-full h-20 bg-BgBrutalSkin1 flex justify-start sm:justify-center items-center space-x-3 lg:space-x-5 px-5 py-2 md:py-4 sticky top-0 overflow-x-scroll overflow-y-hidden scrollbar-hide' onClick={() => console.log(router)}>

        <Link href={`/community/${id}/`} className='relative w-20 h-10 flex justify-center items-center bg-black border border-black rounded-md hover:scale-105'>
          <div className='w-20 h-10 absolute right-[2px] bottom-[2px] bg-BrutalAqua1 text-black border-2 border-black py-2 text-center text-sm hover:cursor-pointer active:right-0 active:bottom-0 rounded-md font-InriaSans font-semibold' > Posts  </div>
        </Link>


        <Link href={`/community/${id}/TextChannels/first`} className='relative w-20 h-10 flex justify-center items-center bg-black border border-black rounded-md hover:scale-105'>
          <div className='w-20 h-10 absolute right-[2px] bottom-[2px] bg-BrutalAqua1 text-black border-2 border-black py-2 text-center text-sm hover:cursor-pointer active:right-0 active:bottom-0 rounded-md font-InriaSans font-semibold' > Chat </div>
        </Link>

         {/* <Link href={`/community/${id}/Tracks`} className='relative w-20 h-10 flex justify-center items-center bg-black border border-black rounded-md hover:scale-105' >
          <div className='w-20 h-10 absolute right-[2px] bottom-[2px] bg-BrutalAqua1 text-black border-2 border-black py-2 text-center text-sm hover:cursor-pointer active:right-0 active:bottom-0 rounded-md font-InriaSans font-semibold'> Tracks </div>
        </Link> */}

        {/* <Link href={`/community/${id}/Events`} className='relative w-20 h-10 flex justify-center items-center bg-black border border-black rounded-md hover:scale-105'>
          <div className='w-20 h-10 absolute right-[2px] bottom-[2px] bg-BrutalAqua1 text-black border-2 border-black py-2 text-center text-sm hover:cursor-pointer active:right-0 active:bottom-0 rounded-md font-InriaSans font-semibold'> Events </div>
        </Link> */}

        {/* <Link href={`/community/${id}/Leaderboard`} className='relative w-28 h-10 flex justify-center items-center bg-black border border-black rounded-md hover:scale-105'>
          <div className='w-28 h-10 absolute right-[2px] bottom-[2px] bg-BrutalAqua1 text-black border-2 border-black py-2 text-center text-sm hover:cursor-pointer active:right-0 active:bottom-0 rounded-md font-InriaSans font-semibold'> Leaderboard </div>
        </Link> */}
        
        <Link href={`/community/${id}/about`} className='relative w-20 h-10 flex justify-center items-center bg-black border border-black rounded-md hover:scale-105'>
          <div className='w-20 h-10 absolute right-[2px] bottom-[2px] bg-BrutalAqua1 text-black border-2 border-black py-2 text-center text-sm hover:cursor-pointer active:right-0 active:bottom-0 rounded-md font-InriaSans font-semibold'> About </div>
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