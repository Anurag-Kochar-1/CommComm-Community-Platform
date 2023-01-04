import React from 'react'
import NavTabs from '../../pageWiseComponents/community/NavTabs/NavTabs'
import TopSection from '../../pageWiseComponents/community/TopSection/TopSection'

interface IProps {
    children: React.ReactNode
}

const CommunityLayout = ({children}: IProps) => {
    console.log(`----------------------------- CommunityLayout is running`)
  return (
    <div className='w-full lg:w-[60%] h-[84vh] lg:h-[93vh] mt-[7vh] mb-[10vh] lg:mb-[0vh] flex flex-col justify-start items-center overflow-x-hidden overflow-y-visible bg-green-900 '>

        <TopSection />
        <NavTabs />


        {children}

    </div>
  )
}

export default CommunityLayout