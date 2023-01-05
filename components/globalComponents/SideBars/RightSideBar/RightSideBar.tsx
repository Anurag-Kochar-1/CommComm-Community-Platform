import React, {useState} from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../../firebaseConfig'

const RightSideBar = () => {

  const [topCommunitiesState, setTopCommunitiesState] = useState<any[]>([])

  const fetchTopCommunities = async () => {
      console.log("Fetching all community datas")
      const communityCollectionRef = collection(db, "communities")
      const allData = await getDocs(communityCollectionRef)
      setTopCommunitiesState(allData.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })));
  }


  return (
    <div className='hidden lg:inline-flex w-[20%] h-[90vh] mt-[10vh] bg-BgBrutalSkin1 flex-col justify-start items-center'>
      <div className='w-[95%] h-full flex flex-col justify-start items-center bg-BgSecondaryBrutalSkin1 overflow-x-hidden overscroll-y-scroll pt-10  space-y-10 scrollbar-hide'>
        {/* Top Communities */}

      </div>
    </div>
  )
}

export default RightSideBar