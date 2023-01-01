import { useRouter } from 'next/router'
import React from 'react'

const index = () => {
    const router = useRouter()
    
  return (
    <div>
        <h1> Community ID - {router.query.id} </h1>
    </div>
  )
}

export default index