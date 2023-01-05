import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { ICommunityData } from '../../../../customTypesAndInterfaces/Community/CommunityInterfaces'
import { IPost } from '../../../../customTypesAndInterfaces/Posts/postInterface'
import { auth, db } from '../../../../firebaseConfig'
import { AiOutlineLike, AiTwotoneLike, AiOutlineShareAlt } from "react-icons/ai"
import { MdOutlineModeComment } from "react-icons/md"
import Link from 'next/link'

interface IProps {
    postData: IPost
    postedAt: string
}

const PostCard = ({ postData, postedAt }: IProps) => {
    const [user, loading] = useAuthState(auth)
    const [communityDetails, setCommunityDetails] = useState<any[]>([])
    const [isPostLiked, setIsPostLiked] = useState<Boolean>(false)


    const fetchCommunityDetails = async () => {
        if (user && !loading) {
            const communityRef = doc(db, "communities", postData.postCreateAtCommunityID as string)
            const res = await getDoc(communityRef)
            const data = res.data()
            setCommunityDetails([data])

        }

    }


    const unLikePost = () => {
        setIsPostLiked(false)
    }

    const likePost = () => {
        setIsPostLiked(true)
    }

    useEffect(() => {
        fetchCommunityDetails()
    }, [loading])

    return (
            <div className='w-full sm:w-[70%] md:w-[60%] lg:w-[70%] xl:w-[50%] bg-white border md:border-2 border-black flex flex-col justify-start items-center p-2 md:p-4 rounded-sm md:rounded-md' onClick={() => console.log(communityDetails)}>
                {/* Create details --- At Community Page */}
                <div className='w-full flex justify-start items-start space-x-2'>
                    <p className='text-sm font-InriaSans font-light'> posted by {postData?.postCreatorName} • 19 hours • <Link href={`/community/${postData.postCreateAtCommunityID}`}> {communityDetails[0]?.communityName} </Link> </p>
                </div>

                {/* Title and Join Button */}
                <div className='w-full flex justify-between items-center'>
                    <h3 className='font-InriaSans font-semibold text-xl text-black'> {postData?.postTitle} </h3>


                    {/* Join Button */}
                    {/* {!communityDetails && communityDetails[0]?.communityMembersID.includes(user?.uid as string) ? (
                    <button type='button' className='relative w-14 h-7 bg-black border border-black flex justify-center items-center rounded-full'>
                        <span
                            className='w-14 h-7 absolute right-1 bottom-1 bg-BrutalGreen2 text-xl font-medium text-black border border-black active:right-0 active:bottom-0 rounded-full font-BebasNeue'>
                            Join
                        </span>
                    </button>
                ) : null} */}
                </div>

                {/* Caption */}
                {postData.postCaption && (
                    <div className='w-full flex justify-between items-center my-1'>
                        <p className='font-InriaSans font-normal text-base text-black'> {postData.postCaption} </p>
                    </div>
                )}


                {/* Image */}
                {postData.postImageURL && (
                    <img src={postData.postImageURL} alt="title" className='w-full h-full aspect-square rounded-sm my-2' draggable="false" />
                )}

                {/* Video */}
                {postData.postVideoURL && (
                    <video src={postData.postVideoURL} controls className='w-full h-full aspect-square rounded-sm my-2 ' />
                )}


                {/* Buttons */}
                <div className='w-full flex justify-start items-center space-x-3 py-5'>

                    {/* Like */}
                    <button
                        title='like'
                        type='button'
                        className=''
                        onClick={() => {
                            if (isPostLiked) {
                                unLikePost()
                            } else if (!isPostLiked) {
                                likePost()
                            }
                        }}
                    >
                        {!isPostLiked && <AiOutlineLike className='text-xl active:scale-125' />}
                        {isPostLiked && <AiTwotoneLike className='text-xl text-BrutalPurple2 active:scale-125' />}
                    </button>

                    {/* Comment */}
                    <button
                        type='button'
                        title='comment'
                        className=''
                    >
                        <MdOutlineModeComment className='text-xl text-black' />
                    </button>


                    <button
                        type='button'
                        title='share'
                        className=''
                    >
                        <AiOutlineShareAlt className='text-xl text-black' />
                    </button>


                </div>



            </div>
    )
}

export default PostCard