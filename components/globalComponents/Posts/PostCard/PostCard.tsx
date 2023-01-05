import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { IPost } from '../../../../customTypesAndInterfaces/Posts/postInterface'
import { auth, db } from '../../../../firebaseConfig'

interface IProps {
    postData: IPost
    postedAt: string
}

const PostCard = ({ postData, postedAt }: IProps) => {
    const [user] = useAuthState(auth)
    const [communityDetails, setCommunityDetails] = useState([])


    const fetchCommunity = async () => {
        const communityRef = doc(db, "communities", postData.postCreateAtCommunityID)
        const res = await getDoc(communityRef)
        const data = res.data()
        console.log(data);

    }

    useEffect(() => {
        fetchCommunity()
    }, [])

    return (
        <div className='w-full sm:w-[70%] md:w-[60%] lg:w-[70%] xl:w-[50%] bg-white flex flex-col justify-start items-center'>
            {/* Create details --- At Community Page */}
            <p> posted by {postData?.postCreatorName} </p>

            {/* Title and Join Button */}
            <div className='w-full flex justify-between items-center'>
                <h3> {postData?.postTitle} </h3>


                {/* Join Button */}
                {false && (
                    <button type='button' className='relative w-14 h-7 bg-black border border-black flex justify-center items-center rounded-full'>
                        <span
                            className='w-14 h-7 absolute right-1 bottom-1 bg-BrutalGreen2 text-xl font-medium text-black border border-black active:right-0 active:bottom-0 rounded-full font-BebasNeue'>
                            Join
                        </span>
                    </button>
                )}
            </div>


            {/* Image */}
            {postData.postImageURL && (
                <img src={postData.postImageURL} alt="title" className='w-full h-full aspect-square' />
            )}

            {/* Video */}
            {postData.postVideoURL && (
                <video src={postData.postVideoURL} controls className='w-full h-full aspect-square' />
            )}


            {/* Buttons */}
            <div className='w-full flex justify-center items-center space-x-3'>

                {/* Like */}

                {/* Comment */}

                {/* Share */}
            </div>



        </div>
    )
}

export default PostCard