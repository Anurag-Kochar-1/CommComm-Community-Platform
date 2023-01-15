import Image from 'next/image'
// import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'
import { auth, db } from '../firebaseConfig'
import { signOut } from 'firebase/auth'
import Link from 'next/link'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { IPost } from '../customTypesAndInterfaces/Posts/postInterface'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAllPostsData } from '../redux/slices/postsDataSlice'
import PostFeed from '../components/globalComponents/Posts/PostFeed/PostFeed'
import PostCard from '../components/globalComponents/Posts/PostCard/PostCard'
import { useAuthState } from 'react-firebase-hooks/auth'
import { setCurrentUserData } from '../redux/slices/userSlice'
import { IUserData } from '../customTypesAndInterfaces/User/userInterfaces'
// import { Bebas_Neue } from '@next/font/google'

// const inter = Inter({ subsets: ['latin'] })

interface IProps {
  allPostsArray: IPost[]
  userFromSSR?: any
}

export default function Home({ allPostsArray, userFromSSR }: IProps) {
  const router = useRouter()
  const [user, loading] = useAuthState(auth)
  const dispatch = useDispatch()

  const currentUserData: IUserData = useSelector((state: any) => state.user.currentUserData)


  


  useEffect(() => {
    dispatch(setAllPostsData([allPostsArray]))



  }, [allPostsArray])




  return (
    <main className='w-full lg:w-[60%] h-[80vh] lg:h-[90vh] mt-[12vh] mb-[10vh] lg:mb-0 bg-gray-100 flex flex-col justify-start items-center overflow-x-hidden overflow-y-scroll pt-14 pb-20 scrollbar-hide'>

      {/* <h1 className='text-4xl text-blue-500 font-bold mt-[7vh]' onClick={() => console.log(auth?.currentUser)}> LOG USER</h1> */}
      {/* <h1 className='font-bold text-xl my-5' onClick={() => console.log(currentUserData)}> LOG currentUserData </h1> */}

      {/* <h1 className='text-5xl my-2 text-black font-light'> HELLO  </h1> */}
      {/* <h1 className='text-5xl my-2 text-black font-Roboto font-light'> HELLO </h1> */}






      {/* ---- All Posts - for signed out user ---- */}
      {true && (
        <PostFeed posts={allPostsArray} page={"homePage"}/>
      )}
      

      

    </main>
  )
}


export const getServerSideProps = async () => {

  // fetching all posts 
  const postCollectionRef = collection(db, "posts")
  const data = await getDocs(postCollectionRef)

  

  const allPostsArray:IPost[] = JSON.parse(JSON.stringify( data?.docs?.map(doc => doc.data() as IPost)))




  return {
    props: {
      allPostsArray,
      // userFromSSR

    }
  };
}

