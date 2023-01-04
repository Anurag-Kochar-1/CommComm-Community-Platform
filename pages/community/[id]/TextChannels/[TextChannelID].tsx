import React, {useEffect} from 'react'
import { useRouter } from 'next/router'
import CommunityLayout from '../../../../components/layouts/Community/CommunityLayout'

const textChannelID = () => {
  const router = useRouter()
  const { TextChannelID } = router.query
  const { id } = router.query

  useEffect(() => {
    
  },[])

  return (
    <CommunityLayout>
      <main className='w-full h-full flex flex-col justify-start items-center bg-orange-900 pt-12 pb-36'>
        TextChannelID hai - {TextChannelID} of comm id - {id}

      </main>
    </CommunityLayout>
  )
}

export default textChannelID 