import { useRouter } from 'next/router'
import React from 'react'

const textChannelID  = () => {
    const router = useRouter()
    const { TextChannelID } = router.query
  return (
    <div className='mt-60'>
        TextChannelID hai - {TextChannelID}

    </div>
  )
}

export default textChannelID 