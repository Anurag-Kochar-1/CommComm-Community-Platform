import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { ICommunityData } from '../../../../customTypesAndInterfaces/Community/CommunityInterfaces'
import { IPost } from '../../../../customTypesAndInterfaces/Posts/postInterface'
import { auth, db } from '../../../../firebaseConfig'
import { AiOutlineLike, AiTwotoneLike, AiOutlineShareAlt } from "react-icons/ai"
import { MdOutlineModeComment } from "react-icons/md"
import Link from 'next/link'
import { useRouter } from 'next/router'

interface IProps {
    postData: IPost
    postedAt: string
}

const PostCard = ({ postData, postedAt }: IProps) => {
    const router = useRouter()
    const [user, loading] = useAuthState(auth)
    const [communityDetails, setCommunityDetails] = useState<ICommunityData[]>([])
    const [isPostLiked, setIsPostLiked] = useState<Boolean>(false)
    const [isUserJoinedInCommunity, setIsUserJoinedInCommunity] = useState<boolean>(false)
    const [postLikeCount, setPostLikeCount] = useState<number>(postData.upvotedByUserID.length)


    const fetchCommunityDetails = async () => {
        if (user && !loading) {
            const communityRef = doc(db, "communities", postData.postCreateAtCommunityID as string)
            const res = await getDoc(communityRef)
            const data = res.data()
            setCommunityDetails([data as ICommunityData])

        }

    }


    const unLikePost = async () => {
        if(!user && !loading) {
            router.push("/register")
        } else if (user && !loading) {
            try {
                setIsPostLiked(false)
                setPostLikeCount(postLikeCount - 1)
    
                const userRef = doc(db, "users", user?.uid as string)
                const postRef = doc(db, "posts", postData.postID)
    
                // Updating Post
                await updateDoc(postRef, {
                    upvotedByUserID: arrayRemove(user?.uid)
                })
    
    
                // Updating User
                await updateDoc(userRef, {
                    likedPostsID: arrayRemove(postData.postID)
                })
            } catch (error) {
                console.log(error);
            }
        }
    }

    const likePost = async () => {
        if (!user && !loading) {
            router.push("/register")
        } else if (user && !loading) {
            try {
                setIsPostLiked(true)
                setPostLikeCount(postLikeCount + 1)


                const userRef = doc(db, "users", user?.uid as string)
                const postRef = doc(db, "posts", postData.postID)

                // Updating Post
                await updateDoc(postRef, {
                    upvotedByUserID: arrayUnion(user?.uid)
                })


                // Updating User
                await updateDoc(userRef, {
                    likedPostsID: arrayUnion(postData.postID)
                })
            } catch (error) {
                console.log(error)
            }
        }
    }

    const checkIsUserJoinedInCommunity = () => {
        if (user && !loading) {
            if (postData.postCreatorID === user?.uid) {
                setIsUserJoinedInCommunity(true)
            } else {
                setIsUserJoinedInCommunity(false)
            }
        } else if (!user && !loading) {
            setIsUserJoinedInCommunity(false)
        }
    }


    const checkIsPostLikedByUser = () => {
        if (user?.uid && !loading) {
            postData.upvotedByUserID.map((user2: any) => {
                if (user2 == user.uid) {
                    setIsPostLiked(true)
                } else {
                    setIsPostLiked(false)
                }
            })
        } else {
            setIsPostLiked(false)
        }
    }

    useEffect(() => {
        fetchCommunityDetails()
        checkIsUserJoinedInCommunity()

        checkIsPostLikedByUser()
    }, [loading])

    return (
        <div className='w-full sm:w-[70%] md:w-[60%] lg:w-[70%] xl:w-[50%] bg-white border md:border-2 border-black flex flex-col justify-start items-center p-2 md:p-4 rounded-sm md:rounded-md' onClick={() => console.log(postData)}>

            {/* Create details --- At Community Page */}
            <div className='w-full flex justify-between items-center space-x-2 py-2'>
                <p className='text-sm font-InriaSans font-light'> posted by {postData?.postCreatorName} • 19 hours • <Link href={`/community/${postData.postCreateAtCommunityID}`}> {communityDetails[0]?.communityName} </Link> </p>


                {/* Join Button */}
                {!isUserJoinedInCommunity ? (
                    <button type='button' className='relative w-14 h-6 bg-black border border-black flex justify-center items-center rounded-full'>
                        <span
                            className='w-14 h-6 absolute right-1 bottom-1 bg-BrutalGreen2 text-lg font-medium text-black border border-black active:right-0 active:bottom-0 rounded-full font-BebasNeue'>
                            Join
                        </span>
                    </button>
                ) : null}
            </div>

            {/* Title */}
            <div className='w-full flex justify-start items-center'>
                <h3 className='font-InriaSans font-semibold text-xl text-black'> {postData?.postTitle} </h3>
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
            <div className='w-full flex justify-start items-center space-x-4 py-5'>

                {/* Like */}
                <button
                    title='like'
                    type='button'
                    className='flex justify-center items-center space-x-2'
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
                    <span className='font-InriaSans'> {postLikeCount} </span>
                </button>

                {/* Comment */}
                <button
                    type='button'
                    title='comment'
                    className='flex justify-center items-center space-x-2'
                >
                    <MdOutlineModeComment className='text-xl text-black' />
                    <span className='font-InriaSans'> 0 </span>
                </button>


                <button
                    type='button'
                    title='share'
                    className='flex justify-center items-center space-x-2'
                >
                    <AiOutlineShareAlt className='text-xl text-black' />
                </button>


            </div>



        </div>
    )
}

export default PostCard