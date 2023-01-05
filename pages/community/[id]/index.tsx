import React, { useEffect } from 'react'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { useRouter } from 'next/router'
import CommunityLayout from '../../../components/layouts/Community/CommunityLayout'
import NavTabs from '../../../components/pageWiseComponents/community/NavTabs/NavTabs'
import TopSection from '../../../components/pageWiseComponents/community/TopSection/TopSection'
import { db } from '../../../firebaseConfig'
import { useDispatch } from 'react-redux'
import { setCurrentCommunityData } from "../../../redux/slices/communityDataSlice"
import PostFeed from '../../../components/globalComponents/Posts/PostFeed/PostFeed'
import { setCurrentCommunityPostsData } from '../../../redux/slices/postsDataSlice'
import { IPost } from '../../../customTypesAndInterfaces/Posts/postInterface'

const index = ({ communityData, currentCommunityPosts }: any) => {
  const router = useRouter()
  const { id } = router.query
  const dispatch = useDispatch()

  
  const fetchCommunityPosts = async () => {
    const communityRef = doc(db, "communities", id as string)

  }

  useEffect(() => {
    dispatch(setCurrentCommunityData([communityData]))
    dispatch(setCurrentCommunityPostsData(currentCommunityPosts))
  }, [id])

  return (
    <CommunityLayout>
      <main className='w-full bg-BgBrutalSkin1 flex flex-col justify-start items-center pt-12 pb-36'>
        {/* <h1 className='mt-10' onClick={() => console.log(currentCommunityPosts)}> Community ID - {router.query.id} : currentCommunityPosts </h1> */}

        <PostFeed />

        {/* <p>
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
        </p> */}
      </main>
    </CommunityLayout>
  )
}

export default index


export const getServerSideProps = async ({ params }: any) => {
  const { id }: string | any = params

  // fetching community Details
  const communityRef = doc(db, "communities", id as string)
  const res = await getDoc(communityRef)
  const communityData = res.data()


  // fetching community posts 
  const allCommunityPosts:IPost[] = []
  const currentCommunityPosts:IPost[] = []
  const postCollectionRef = collection(db, "posts")
  const allPostsData = await getDocs(postCollectionRef)

  allPostsData?.forEach((post) => {
    allCommunityPosts.push(post?.data() as IPost)
  })

  allCommunityPosts.filter((post) => {
    if(post.postCreateAtCommunityID === id) {
      currentCommunityPosts.push(post)
    } else {
      return;
    }
  })


  return {
    props: { 
      communityData,
      currentCommunityPosts
     }
  };
}


