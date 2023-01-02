import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'
import { auth } from '../firebaseConfig'
import { signOut } from 'firebase/auth'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  return (
    <main className='w-full lg:w-[70%] h-[80vh] lg:h-[90vh] mt-[10vh] mb-[10vh] lg:mb-0 bg-gray-300 flex flex-col justify-start items-center'>
      <h1 className='text-4xl text-blue-500 font-bold mt-[7vh]' onClick={() => console.log(auth?.currentUser)}> Home  : LOG USER</h1>
      <h1 className='text-4xl text-red-500 font-bold mt-[7vh]' onClick={() =>  {
        signOut(auth)
        console.log("Signed Out!!!")
      } }> Sign out </h1>


    </main>
  )
}
