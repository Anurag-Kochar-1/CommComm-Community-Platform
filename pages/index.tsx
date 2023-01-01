import Image from 'next/image'
import { Inter } from '@next/font/google'
import HomeLayout from '../components/layouts/Home/HomeLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <HomeLayout>
        <main className='w-full lg:w-[70%] h-[83vh] lg:h-[94vh] mt-[7vh] mb-[10vh] lg:mb-0 bg-gray-300 flex flex-col justify-start items-center'>
          <h1 className='text-4xl text-blue-500 font-bold mt-[7vh]'> Home </h1>
        </main>
      </HomeLayout>
  )
}
