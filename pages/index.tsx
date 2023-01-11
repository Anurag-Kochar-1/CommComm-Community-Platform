import Image from 'next/image'
// import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'
import { auth, db } from '../firebaseConfig'
import { signOut } from 'firebase/auth'
import Link from 'next/link'
import { collection, getDocs } from 'firebase/firestore'
import { IPost } from '../customTypesAndInterfaces/Posts/postInterface'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setAllPostsData } from '../redux/slices/postsDataSlice'
import PostFeed from '../components/globalComponents/Posts/PostFeed/PostFeed'
import PostCard from '../components/globalComponents/Posts/PostCard/PostCard'
import { useAuthState } from 'react-firebase-hooks/auth'
// import { Bebas_Neue } from '@next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home({ allPostsArray }: any) {
  const router = useRouter()
  const [user, loading] = useAuthState(auth)
  const dispatch = useDispatch()




  useEffect(() => {
    dispatch(setAllPostsData([allPostsArray]))
  }, [allPostsArray])


  return (
    <main className='w-full lg:w-[60%] h-[80vh] lg:h-[90vh] mt-[12vh] mb-[10vh] lg:mb-0 bg-white shadow-lg shadow-gray-300 flex flex-col justify-start items-center overflow-x-hidden overflow-y-scroll pt-14 pb-20 scrollbar-hide'>

      <h1 className='text-4xl text-blue-500 font-bold mt-[7vh]' onClick={() => console.log(auth?.currentUser)}> LOG USER</h1>
      <h1 className='text-4xl text-red-500 font-bold mt-[7vh] my-3' onClick={() => { signOut(auth) }}> Sign out </h1>
      {/* <h1 className='font-bold text-4xl my-5' onClick={() => console.log(allPostsArray)}> LOG PROPS </h1> */}


      {/* ---- ---- */}
      {allPostsArray && (
        allPostsArray.map((postData: IPost) => {
          return <PostCard postData={postData} key={postData?.postID} postedAt={"communityHomePage"} />
        })
      )}

    </main>
  )
}


export const getServerSideProps = async () => {

  // fetching all posts 
  const allPostsArray: IPost[] = []
  const postCollectionRef = collection(db, "posts")
  const data = await getDocs(postCollectionRef)

  data?.forEach((post) => {
    allPostsArray.push(post?.data() as IPost)
  })


  return {
    props: {
      allPostsArray
    }
  };
}

