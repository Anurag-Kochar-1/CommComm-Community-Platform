import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { IPost } from '../../../../customTypesAndInterfaces/Posts/postInterface'
import PostCard from '../PostCard/PostCard'

const PostFeed = () => {
  const postData = useSelector((state: any) => state.postsData.currentCommunityPostsData)

  return (
    <div
      className='w-full space-y-10 flex flex-col justify-start items-center my-5'
    >

      {postData[0] && (
        postData.map((postData: IPost) => {
          return <PostCard postData={postData} key={postData?.postID} postedAt={"communityHomePage"} />
        })
      )}


      {!postData[0] && (
        <div className='w-full flex flex-col justify-center items-center'>
            <p> No Posts yet </p>
            <Link href={'/UploadPost'}> Create some </Link>
        </div>
      )}
    </div>
  )
}

export default PostFeed