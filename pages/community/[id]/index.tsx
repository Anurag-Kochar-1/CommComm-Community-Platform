import React, { useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import CommunityLayout from '../../../components/layouts/Community/CommunityLayout'
import NavTabs from '../../../components/pageWiseComponents/community/NavTabs/NavTabs'
import TopSection from '../../../components/pageWiseComponents/community/TopSection/TopSection'
import { db } from '../../../firebaseConfig'
import { useDispatch } from 'react-redux'
import { setCurrentCommunityData } from "../../../redux/slices/communityDataSlice"

const index = ({ communityData }: any) => {
  const router = useRouter()
  const { id } = router.query
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCurrentCommunityData([communityData]))
  }, [id])

  return (
    <CommunityLayout>
      {/* <main className='w-full lg:w-[70%] h-[80vh] lg:h-[90vh] mt-[10vh] mb-[10vh] lg:mb-0 bg-gray-200 flex flex-col justify-start items-center'> */}
      <main className='w-full h-full flex flex-col justify-start items-center bg-blue-900 pt-12 pb-36'>
        {/* <h1 className='mt-10' onClick={() => console.log(id)}> Community ID - {router.query.id} : blog </h1> */}

        <p>
        Strings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the objectStrings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the object
        </p>
      </main>
    </CommunityLayout>
  )
}

export default index


export const getServerSideProps = async ({ params }: any) => {
  const { id }: string | any = params
  const communityRef = doc(db, "communities", id as string)
  const res = await getDoc(communityRef)
  const communityData = res.data()


  return {
    props: { communityData }
  };
}


