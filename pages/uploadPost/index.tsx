import React, { useEffect, useState } from 'react'
import { addDoc, arrayUnion, collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import { BsCameraVideo, BsImage, BsTextCenter } from 'react-icons/bs'
import { GrAdd } from 'react-icons/gr'
import { communityCategoriesArray } from '../../constants/createCommunityPage/communityCategories'
import { auth, db, storage } from '../../firebaseConfig'
import { useAuthState } from "react-firebase-hooks/auth"
import { RxImage } from 'react-icons/rx'
import { RiVideoAddFill } from 'react-icons/ri'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { v4 as uuidv4 } from "uuid"
import { useRouter } from 'next/router'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const uploadPost = () => {
  const router = useRouter()
  const [user, loading] = useAuthState(auth)
  const [postType, setPostType] = useState<string>("caption")
  const [postTitleInputValue, setPostTitleInputValue] = useState<string>("")
  const [postCaptionInputValue, setPostCaptionInputValue] = useState<string>("")
  const [isPostPosting, setIsPostPosting] = useState<boolean>(false)
  const [image, setImage] = useState<any[]>([])
  const [video, setVideo] = useState<any[]>([])

  const [userJoinedCommunitiesState, setUserJoinedCommunitiesState] = useState<any[] | []>([])
  const [selectedCommunity, setSelectedCommunity] = useState<any | null>(null)



  const communityCollectionRef = collection(db, "communities")
  const postsCollectionRef = collection(db, "posts")

  const fetchUserJoinedAndOwnedCommunities = async () => {
    console.log(` ---- fetchUserJoinedAndOwnedCommunities is running ----`)
    const userJoinedCommunitiesArray: any[] = []
    const queryTheUser = query(communityCollectionRef, where("communityMembersID", "array-contains", auth?.currentUser?.uid))
    const queryData = await getDocs(queryTheUser)
    queryData.forEach((doc) => {
      userJoinedCommunitiesArray.push(doc.data())
    })

    setUserJoinedCommunitiesState(queryData.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })));

  }

  const uploadImage = async () => {
    if (image[0][0]) {
      setIsPostPosting(true)
      console.log(`---- Image found ----`)
      const imageRef = ref(storage, "postImages/" + uuidv4() + "--" + image[0][0]?.name)
      const uploadImageMedia = uploadBytesResumable(imageRef, image[0][0])

      uploadImageMedia.on("state_changed", (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log(`upload is ${progress}% done`);
      }, (error) => {
        alert(error)
      }, () => {
        getDownloadURL(uploadImageMedia.snapshot.ref).then((downloadURL) => {
          addPost(downloadURL, null)
          console.log(`URL IS ${downloadURL}`);
        })
      })
    }
  }

  const uploadVideo = async () => {
    if (video[0][0]) {
      setIsPostPosting(true)
      console.log("---- Video found ----")
      const videoRef = ref(storage, "postVideos/" + uuidv4() + "---" + video[0][0].name)
      const uploadVideoMedia = uploadBytesResumable(videoRef, video[0][0])

      uploadVideoMedia.on("state_changed", (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log(`upload is ${progress}% done`);
      }, (error) => {
        alert(error)
      }, () => {
        getDownloadURL(uploadVideoMedia.snapshot.ref).then((downloadURL) => {
          addPost(null, downloadURL)
          console.log(`URL IS ${downloadURL}`);

        })
      })
    }
  }

  const addPost = async (imageURL: string | null, videoURL: string | null) => {
    try {
      setIsPostPosting(true)

      // --- Adding post to Posts's Collection
      const postDoc = await addDoc(postsCollectionRef, {
        postID: "",
        postTitle: postTitleInputValue,
        postCaption: postCaptionInputValue || null,
        postImageURL: imageURL || null,
        postVideoURL: videoURL || null,
        postCreatorID: user?.uid,
        postCreatorName: user?.displayName,
        postCreateAtCommunityID: selectedCommunity,
        upvotedByUserID: [],
        downvotedByUserID: []
      })

      // Upading post to add ID manually
      const postDocRef = doc(db, "posts", postDoc.id)
      await updateDoc(postDocRef, {
        postID: postDoc.id
      })

      // Adding postID to user's createdPostsID array
      const userRef = doc(db, "users", user?.uid as string)
      await updateDoc(userRef, {
        createdPostsID: arrayUnion(postDoc.id)
      })

      // Adding postID to communiy's postsID
      const communityDocRef = doc(db, "communities", selectedCommunity as any)
      await updateDoc(communityDocRef, {
        communityPostsID: arrayUnion(postDoc.id)
      })

       // ---- Resetting states ---- 
       setPostTitleInputValue("")
       setPostCaptionInputValue("")
       setImage([])
       setVideo([])
       setIsPostPosting(false)

       router.push(`community/${selectedCommunity}`)

    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    if (user && !loading) {
      fetchUserJoinedAndOwnedCommunities()
    }
  }, [loading])

  useEffect(() => {
    if (userJoinedCommunitiesState) {
      console.log("second useEffect is running")
      setSelectedCommunity(userJoinedCommunitiesState[0]?.communityID)
    }
  }, [userJoinedCommunitiesState])

  useEffect(() => {
    if(!user && loading === false) {
      router.push("/register")
    }
  },[loading])



  return (
    <main className='w-full lg:w-[70%] h-[80vh] lg:h-[90vh] mt-[10vh] mb-[10vh] lg:mb-0 bg-BgBrutalSkin1 flex flex-col justify-center items-center'>

      {/*  Large Screen  */}
      <div className='hidden lg:inline-flex flex-col relative w-[80%] lg:w-[70%] xl:w-[65%] h-[45vh] bg-black justify-center items-center rounded-md' onClick={() => {
        console.log("W");
      }}>

        <div className='w-full h-full absolute right-1 bottom-1 bg-white border-2 border-BrutalBlack1 rounded-md' >

          {/* TABS */}
          <div className='flex justify-between items-center rounded-md '>
            <button
              type='button'
              onClick={() => setPostType('caption')}
              className={postType === "caption" ? "w-full h-full flex justify-center items-center space-x-3 border-r border-b border-r-gray-300  border-black py-3 hover:cursor-pointer" : "w-full h-full flex justify-center items-center space-x-3 border-r border-b border-r-gray-300  border-b-gray-400 py-3 hover:cursor-pointer"}
            >
              <BsTextCenter className={postType === "caption" ? 'text-BrutalPurple2 w-5 h-5' : 'text-darkColor w-5 h-5'} />
              <span className={postType === "caption" ? 'text-BrutalPurple2 font-bold text-base' : 'font-medium text-dakrColor text-base'}> Caption </span>
            </button>

            <button
              type='button'
              onClick={() => setPostType('image')}
              className={postType === "image" ? "w-full h-full flex justify-center items-center space-x-3 border-r border-b border-r-gray-300  border-black py-3 hover:cursor-pointer" : "w-full h-full flex justify-center items-center space-x-3 border-r border-b border-r-gray-300  border-b-gray-400 py-3 hover:cursor-pointer"}
            >
              <BsImage className={postType === "image" ? 'text-BrutalPurple2 w-5 h-5' : 'text-darkColor w-5 h-5'} />
              <span className={postType === "image" ? 'text-BrutalPurple2 font-bold text-base' : 'font-medium text-dakrColor text-base'}>  Image  </span>
            </button>

            <button
              type='button'
              onClick={() => setPostType('video')}
              className={postType === "video" ? "w-full h-full flex justify-center items-center space-x-3  border-b border-black py-3 hover:cursor-pointer" : "w-full h-full flex justify-center items-center space-x-3 border-b border-b-gray-400 py-3 hover:cursor-pointer"}
            >
              <BsCameraVideo className={postType === "video" ? 'text-BrutalPurple2 w-5 h-5' : 'text-darkColor w-5 h-5'} />
              <span className={postType === "video" ? 'text-BrutalPurple2 font-bold text-base' : 'font-medium text-dakrColor text-base'}>Video  </span>
            </button>
          </div>


          {postType === "caption" && (
            <div className='w-full h-[40vh] flex flex-col items-center justify-between space-y-2 py-5 rounded-md'>

              {/* TITLE */}
              <div className='w-full h-full flex flex-col justify-start items-center space-y-2 bg-lightColor '>

                <div className='w-[90%] h-10 relative bg-black flex justify-start items-center border border-black'>
                  <input
                    value={postTitleInputValue}
                    onChange={(e) => setPostTitleInputValue(e.target.value)}
                    required
                    type="text"
                    placeholder='Title'
                    className='w-full h-10 absolute right-[1px] bottom-[1px] outline-none focus:ring-0 px-2 placeholder:px-2 border border-black font-medium'
                  />
                </div>


                <div className='w-[90%] h-full relative bg-black flex justify-start items-center border border-black'>
                  <textarea
                    placeholder='Caption'
                    className='w-full h-full absolute right-[1px] bottom-[1px] outline-none focus:ring-0 px-2 py-2 placeholder:px-2 border border-black  font-medium'
                    value={postCaptionInputValue}
                    onChange={(e) => setPostCaptionInputValue(e.target.value)}
                  />
                </div>
              </div>

              {/*  Post Button and Select Community */}
              <div className='w-full flex justify-between items-center px-10 py-3 rounded-md'>

                <div className='w-[40%] h-10 relative bg-black flex justify-start items-center '>
                  <select
                    title='choose'
                    className='w-full h-10 absolute right-[2px] bottom-[2px] outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black hover:cursor-pointer '
                    value={selectedCommunity}
                    onChange={(e) => setSelectedCommunity(e.target.value)}>

                    {userJoinedCommunitiesState && (
                      userJoinedCommunitiesState.map((community) => {
                        return (
                          <option
                            key={community?.communityID}
                            className='text-base bg-white text-black'
                            value={community?.communityID}
                          // onChange={() => setSelectedCommunity(community?.communityID)}
                          >
                            {community.communityName}
                          </option>
                        )
                      })
                    )}
                  </select>
                </div>


                <button
                  onClick={() => {
                    addPost(null, null)
                    console.log(`selectedCommunity => ${selectedCommunity}`);
                    // console.log(userJoinedCommunitiesState);
                  }}
                  type='button'
                  title='post'
                  className='w-[40%] h-10 relative flex justify-center items-center bg-black rounded-sm border-2 border-black '>
                  <span className='w-full h-10 absolute bottom-[2px] right-[2px] bg-BrutalPurple2 flex justify-center items-center rounded-sm border-2 border-black active:right-0 active:bottom-0 hover:right-0 hover:bottom-0'>
                    <p className='text-sm font-semibold'> POST  </p>
                  </span>
                </button>

              </div>
            </div>
          )}

          {postType === "image" && (
            <div className='w-full h-[40vh]  flex flex-col items-center justify-between space-y-2 bg-lightColor rounded-xl py-5'>
              <div className='w-full h-full flex flex-col justify-center items-center space-y-2'>
                <div className='w-[90%] h-10 relative bg-black flex justify-start items-center border border-black'>
                  <input
                    value={postTitleInputValue}
                    onChange={(e) => setPostTitleInputValue(e.target.value)}
                    required
                    type="text"
                    placeholder='Title'
                    className='w-full h-10 absolute right-[1px] bottom-[1px] outline-none focus:ring-0 px-2 placeholder:px-2 border border-black font-medium'
                  />
                </div>

                <div className='w-full h-full flex justify-center items-center py-2 bg-lightColor'>
                  <div className='w-[90%] h-[90%] rounded-sm border-2 border-dashed bg-lightColor border-black flex justify-center items-center '>
                    <label className='w-full h-full flex justify-center items-center hover:cursor-pointer'>
                      <input type="file" placeholder='image' accept="image/*" hidden
                        onChange={(e) => {
                          const imageFile = e.target.files
                          setImage([imageFile])
                          // setImage( URL.createObjectURL(imageFile[0]) )

                        }}
                      />
                      <RxImage className='text-3xl' />
                    </label>
                  </div>
                </div>

              </div>

              {/*  Post Button and Select Community */}
              <div className='w-full flex justify-between items-center px-10 py-3 rounded-md'>

                <div className='w-[40%] h-10 relative bg-black flex justify-start items-center '>
                  <select
                    title='choose'
                    className='w-full h-10 absolute right-[2px] bottom-[2px] outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black hover:cursor-pointer '
                    value={selectedCommunity}
                    onChange={(e) => setSelectedCommunity(e.target.value)}>

                    {userJoinedCommunitiesState && (
                      userJoinedCommunitiesState.map((community) => {
                        return (
                          <option
                            key={community?.communityID}
                            className='text-base bg-white text-black'
                            value={community?.communityID}
                          // onChange={() => setSelectedCommunity(community?.communityID)}
                          >
                            {community.communityName}
                          </option>
                        )
                      })
                    )}
                  </select>
                </div>


                <button
                  onClick={() => {
                    uploadImage()
                    console.log(`selectedCommunity => ${selectedCommunity}`);
                    // console.log(userJoinedCommunitiesState);
                  }}
                  type='button'
                  title='post'
                  className='w-[40%] h-10 relative flex justify-center items-center bg-black rounded-sm border-2 border-black'>
                  <span className='w-full h-10 absolute bottom-[2px] right-[2px] bg-BrutalPurple2 flex justify-center items-center rounded-sm border-2 border-black active:right-0 active:bottom-0 hover:right-0 hover:bottom-0'>
                    <p className='text-xs md:text-sm font-semibold'> POST  </p>
                  </span>
                </button>

              </div>
            </div>
          )}

          {postType === "video" && (
            <div className='w-full h-[40vh]  flex flex-col items-center justify-between space-y-2 bg-lightColor rounded-xl py-5'>
              <div className='w-full h-full flex flex-col justify-center items-center space-y-2'>
                <div className='w-[90%] h-10 relative bg-black flex justify-start items-center border border-black'>
                  <input
                    value={postTitleInputValue}
                    onChange={(e) => setPostTitleInputValue(e.target.value)}
                    required
                    type="text"
                    placeholder='Title'
                    className='w-full h-10 absolute right-[1px] bottom-[1px] outline-none focus:ring-0 px-2 placeholder:px-2 border border-black font-medium'
                  />
                </div>

                <div className='w-full h-full flex justify-center items-center py-2 bg-lightColor'>
                  <div className='w-[90%] h-[90%] rounded-sm border-2 border-dashed bg-white border-black flex justify-center items-center '>
                    <label className='w-full h-full flex justify-center items-center hover:cursor-pointer'>
                      <input type="file" placeholder='image' accept="video/*" hidden
                        onChange={(e) => {
                          const videoFile = e.target.files
                          setVideo([videoFile])
                        }}
                      />
                      <RiVideoAddFill className='text-3xl' />
                    </label>
                  </div>
                </div>

              </div>

              {/*  Post Button and Select Community */}
              <div className='w-full flex justify-between items-center px-10 py-3 rounded-md'>

                <div className='w-[40%] h-10 relative bg-black flex justify-start items-center '>
                  <select
                    title='choose'
                    className='w-full h-10 absolute right-[2px] bottom-[2px] outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black hover:cursor-pointer '
                    value={selectedCommunity}
                    onChange={(e) => setSelectedCommunity(e.target.value)}>

                    {userJoinedCommunitiesState && (
                      userJoinedCommunitiesState.map((community) => {
                        return (
                          <option
                            key={community?.communityID}
                            className='text-base bg-white text-black'
                            value={community?.communityID}
                          // onChange={() => setSelectedCommunity(community?.communityID)}
                          >
                            {community.communityName}
                          </option>
                        )
                      })
                    )}
                  </select>
                </div>


                <button
                  onClick={() => {
                    uploadVideo()
                    console.log(`selectedCommunity => ${selectedCommunity}`);
                    // console.log(userJoinedCommunitiesState);
                  }}
                  type='button'
                  title='post'
                  className='w-[40%] h-10 relative flex justify-center items-center bg-black rounded-sm border-2 border-black'>
                  <span className='w-full h-10 absolute bottom-[2px] right-[2px] bg-BrutalPurple2 flex justify-center items-center rounded-sm border-2 border-black active:right-0 active:bottom-0 hover:right-0 hover:bottom-0'>
                    <p className='text-xs md:text-sm font-semibold'> POST  </p>
                  </span>
                </button>

              </div>
            </div>
          )}
        </div>
      </div>


      {/*  Small Screen  */}
      <div className='lg:hidden w-full h-full bg-BgBrutalSkin1 flex flex-col justify-start items-center'>
        <div className='w-full flex space-x-2 justify-start items-center mb-4 bg-lightColor px-3'>
          
        </div>
      
      </div>


      {isPostPosting && (
        <div className='z-40 w-[100%] h-[100vh] fixed inset-0 flex flex-col justify-center items-center bg-BgBrutalSkin1 space-y-5'> 
          <p className='text-4xl font-bold text-black'> POSTING... </p>
          <AiOutlineLoading3Quarters className="w-10 h-10 text-black animate-spin" />
      </div>
      )}
    </main>
  )
}

export default uploadPost