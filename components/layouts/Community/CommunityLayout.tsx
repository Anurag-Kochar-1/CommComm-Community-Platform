import React from 'react'
import NavTabs from '../../pageWiseComponents/community/NavTabs/NavTabs'
import TopSection from '../../pageWiseComponents/community/TopSection/TopSection'

interface IProps {
    children: React.ReactNode
}

const CommunityLayout = ({children}: IProps) => {
    // console.log(`----------------------------- CommunityLayout is running`)
  return (
    <div className='w-full lg:w-[60%] h-[80vh] lg:h-[90vh] mt-[10vh] mb-[10vh] lg:mb-0 flex flex-col justify-start items-center overflow-x-hidden overflow-y-visible'>

        <TopSection />
        {/* <NavTabs /> */}
        {/* ------- NOW AB TOPSECTION KE ANDAR HAI EZ PZ-------   */}


        {children}

    </div>
  )
}

export default CommunityLayout