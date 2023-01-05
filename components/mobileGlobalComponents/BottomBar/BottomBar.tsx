import React from 'react'
import { useSelector } from 'react-redux'
import ExploreIcon from '../../Icons/BottomBar/ExploreIcon/ExploreIcon'
import HomeIcon from '../../Icons/BottomBar/HomeIcon/HomeIcon'
import MyCommunitiesIcon from '../../Icons/BottomBar/MyCommunitiesIcon/MyCommunitiesIcon'
import PlusIcon from '../../Icons/BottomBar/PlusIcon/PlusIcon'
import ProfileIcon from '../../Icons/BottomBar/ProfileIcon/ProfileIcon'

const BottomBar = () => {
  const isBottomBarVisible = useSelector((state: any) => state.bottomBar.isBottomBarVisible)

  return (
    <>
      {isBottomBarVisible && (
        <div className='lg:hidden fixed bottom-0 left-0 right-0 w-full h-[10vh] bg-white border-t border-t-black flex justify-between sm:justify-evenly items-center px-4' onClick={() => console.log(isBottomBarVisible)}>
          <HomeIcon />
          <ExploreIcon />
          <PlusIcon />
          <MyCommunitiesIcon />
          <ProfileIcon />
        </div>
      )}

    </>
  )
}

export default BottomBar