import Image from 'next/image'
// import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'
import { auth } from '../firebaseConfig'
import { signOut } from 'firebase/auth'
import Link from 'next/link'
// import { Bebas_Neue } from '@next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  return (
    <main className='w-full lg:w-[70%] h-[80vh] lg:h-[90vh] mt-[10vh] mb-[10vh] lg:mb-0 bg-BgBrutalSkin1 flex flex-col justify-start items-center'>
      <h1 className='text-4xl text-blue-500 font-bold mt-[7vh]' onClick={() => console.log(auth?.currentUser)}> Home  : LOG USER</h1>
      <h1 className='text-4xl text-red-500 font-bold mt-[7vh]' onClick={() =>  {
        signOut(auth)
        console.log("Signed Out!!!")
      } }> Sign out </h1>


      <Link href={'/createCommunity'} className="my-12"> Create community </Link>

      <Link href={`/community/7GWS3QIgNOOXPFu0CwAx`} className="text-black font-BebasNeue my-1 text-3xl"> SECOND COMMUNITY  </Link>
      <Link href={`/community/jK2BpUcrmYFA6X3Mx3Xr`} className="text-black font-BebasNeue my-1 text-3xl"> READING WALI COMMUNITY  </Link>
      <Link href={`/community/w4EndY1A3OJzMLzPTQOj`} className="text-black font-BebasNeue my-1 text-3xl"> THIRD COMMUNITY  </Link>


      
    </main>
  )
}
