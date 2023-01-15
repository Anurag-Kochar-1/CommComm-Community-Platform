
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
import { ICommunityData } from '../../../customTypesAndInterfaces/Community/CommunityInterfaces'


interface IProps {
  communityData: ICommunityData
  currentCommunityPosts: IPost[]
}

const Index = ({ communityData, currentCommunityPosts }: IProps) => {
  const router = useRouter()
  const { id } = router.query
  const dispatch = useDispatch()




  useEffect(() => {
    // dispatch(setCurrentCommunityData([communityData]))
    // dispatch(setCurrentCommunityPostsData(currentCommunityPosts))
  }, [id])

  return (
    <CommunityLayout>
      <main className='w-full bg-gray-100 flex flex-col justify-start items-center pt-0 pb-36'>

        <h1 onClick={() => {
          console.log(currentCommunityPosts)
        }}> LOG   currentCommunityPosts</h1>

        {/* Community Posts Header */}
        <div className='w-full h-16 bg-black flex justify-start items-center space-x-2 px-4'>
          <span className='text-2xl'> 🔥 </span>
          <p className='text-2xl text-white font-Roboto font-bold'> {communityData?.communityName}'s  Posts </p>
        </div>

        <PostFeed posts={currentCommunityPosts} page={"communityPostsPage"} />


      </main>
    </CommunityLayout>
  )
}

export default Index




export const getServerSideProps = async ({ params }: any) => {
  const { id }: string | any = params

  // fetching community Details
  const communityRef = doc(db, "communities", id as string)
  const res = await getDoc(communityRef)
  const communityData = res.data()


  // fetching community posts 
  const postCollectionRef = collection(db, "posts")
  const allPostsData = await getDocs(postCollectionRef)



  // const allCommunityPosts:IPost[] = allPostsData?.docs?.map(doc => doc.data() as IPost).filter(doc => doc?.postCreateAtCommunityID === id)
  const currentCommunityPosts: IPost[] = JSON.parse(JSON.stringify(allPostsData?.docs?.map(doc => doc.data() as IPost).filter(doc => doc?.postCreateAtCommunityID === id)))





  return {
    props: {
      communityData,
      currentCommunityPosts,
    }
  };
}


