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
// import { Bebas_Neue } from '@next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home( {allPostsArray}:any ) {
  const router = useRouter()
  const dispatch = useDispatch()





  useEffect(() => {
    dispatch(setAllPostsData([allPostsArray]))
  },[allPostsArray])


  return (
    <main className='w-full lg:w-[70%] h-[80vh] lg:h-[90vh] mt-[10vh] mb-[10vh] lg:mb-0 bg-BgBrutalSkin1 flex flex-col justify-start items-center'>
      <h1 className='text-4xl text-blue-500 font-bold mt-[7vh]' onClick={() => console.log(auth?.currentUser)}> Home  : LOG USER</h1>
      <h1 className='text-4xl text-red-500 font-bold mt-[7vh]' onClick={() =>  {
        signOut(auth)
        console.log("Signed Out!!!")
      } }> Sign out </h1>


      <Link href={'/createCommunity'} className="my-12"> Create community </Link>

      <h1 className='font-bold text-4xl my-5' onClick={() => console.log(allPostsArray)}> LOG PROPS </h1>

      <Link href={`/community/RuV8ys972aFLtbDiGuhb`} className="text-black font-BebasNeue my-1 text-3xl"> 1st COMMUNITY  </Link>
      <Link href={`/community/QUwhcMaNju5oIsEkqnat`} className="text-black font-BebasNeue my-1 text-3xl"> 2st WALI COMMUNITY  </Link>


      {/* <PostFeed /> */}
      
    </main>
  )
}


export const getServerSideProps = async () => {

  // fetching all posts 
  const allPostsArray:IPost[] = []
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

