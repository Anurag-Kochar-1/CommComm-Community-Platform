import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import CommunityLayout from '../../../../components/layouts/Community/CommunityLayout'

const Index = () => {
    const router = useRouter()
    const {id} = router.query
  return (
    <CommunityLayout>
         <main className='w-full h-auto flex flex-col justify-start items-center bg-white pt-12 pb-36 '>
            <Link href={`/community/${id}/Courses/createCourse`} > Create a course</Link>
         </main>
    </CommunityLayout>
  )
}

export default Index