import React, {useEffect} from 'react'
import { useRouter } from 'next/router'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth'

const Index = () => {
  const [user, loading] = useAuthState(auth)
  const router = useRouter()

  useEffect(() => {
    if(!user && !loading) {
      router.push(`/register`)
    }
  },[loading])
  
  return (
    <main className='w-full lg:w-[60%] h-[80vh] lg:h-[90vh] mt-[12vh] mb-[10vh] lg:mb-0 bg-white shadow-lg shadow-gray-300 flex flex-col justify-start items-center overflow-x-hidden overflow-y-scroll pt-14 pb-20 scrollbar-hide'>
       <h1 className='text-4xl text-red-500 font-bold mt-[7vh] my-3' onClick={() => { 
        signOut(auth)
        router.push("/")
        }}> Sign out </h1>
    </main>
  )
}

export default Index