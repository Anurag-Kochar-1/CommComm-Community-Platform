import React from 'react'
import { useSelector } from 'react-redux'
import { IPost } from '../../../../customTypesAndInterfaces/Posts/postInterface'
import PostCard from '../PostCard/PostCard'

const PostFeed = () => {
    const postData = useSelector((state: any) => state.postsData.currentCommunityPostsData)

  return (
    <div 
    className='w-full space-y-10 flex flex-col justify-start items-center'
    >
        
        {postData && (
            postData.map((postData: IPost) => {
                return <PostCard postData={postData} key={postData?.postID} postedAt={"communityHomePage"} />
            })
        )}
    </div>
  )
}

export default PostFeed