import React, { useState } from 'react'
import { BsCameraVideo, BsImage, BsTextCenter } from 'react-icons/bs'
import { GrAdd } from 'react-icons/gr'

const uploadPost = () => {

  const [postType, setPostType] = useState<string>("caption")
  const [postTitleInputValue, setPostTitleInputValue] = useState<string>("")
  const [postCaptionInputValue, setPostCaptionInputValue] = useState<string>("")
  const [image, setImage] = useState<any[]>([])
  const [video, setVideo] = useState<any[]>([])

  return (
    <main className='w-full lg:w-[70%] h-[80vh] lg:h-[90vh] mt-[10vh] mb-[10vh] lg:mb-0 bg-white flex flex-col justify-center items-center'>

      {/*  Large Screen  */}  
      <div className='hidden lg:inline-flex relative w-[80%] h-[45vh] bg-black justify-center items-center rounded-md'>
        <div className='w-full absolute right-1 bottom-1 bg-white border-2 border-BrutalBlack1 rounded-md' >
          <div className='flex justify-between items-center rounded-md '>
            <button
              type='button'
              onClick={() => setPostType('caption')}
              className={postType === "caption" ? "w-full h-full flex justify-center items-center space-x-3 border-r border-b border-r-gray-300  border-brandColor py-3 hover:cursor-pointer" : "w-full h-full flex justify-center items-center space-x-3 border-r border-b border-r-gray-300  border-b-gray-400 py-3 hover:cursor-pointer"}
            >
              <BsTextCenter className={postType === "caption" ? 'text-brandColor w-5 h-5' : 'text-darkColor w-5 h-5'} />
              <span className={postType === "caption" ? 'font-medium text-brandColor text-base' : 'font-medium text-dakrColor text-base'}> Caption </span>
            </button>

            <button
              type='button'
              onClick={() => setPostType('image')}
              className={postType === "image" ? "w-full h-full flex justify-center items-center space-x-3 border-r border-b border-r-gray-300  border-brandColor py-3 hover:cursor-pointer" : "w-full h-full flex justify-center items-center space-x-3 border-r border-b border-r-gray-300  border-b-gray-400 py-3 hover:cursor-pointer"}
            >
              <BsImage className={postType === "image" ? 'text-brandColor w-5 h-5' : 'text-darkColor w-5 h-5'} />
              <span className={postType === "image" ? 'font-medium text-brandColor text-base' : 'font-medium text-dakrColor text-base'}>  Image  </span>
            </button>

            <button
              type='button'
              onClick={() => setPostType('video')}
              className={postType === "video" ? "w-full h-full flex justify-center items-center space-x-3  border-b border-brandColor py-3 hover:cursor-pointer" : "w-full h-full flex justify-center items-center space-x-3 border-b border-b-gray-400 py-3 hover:cursor-pointer"}
            >
              <BsCameraVideo className={postType === "video" ? 'text-brandColor w-5 h-5' : 'text-darkColor w-5 h-5'} />
              <span className={postType === "video" ? 'font-medium text-brandColor text-base' : 'font-medium text-dakrColor text-base'}>Video  </span>
            </button>
          </div>


          {postType === "caption" && (
            <div className='w-full bg-lightColor h-[40vh] flex flex-col items-center justify-between space-y-2 py-5 rounded-md'>

              {/* TITLE */}
              <div className='w-full h-full flex flex-col justify-start items-center space-y-2 bg-lightColor'>
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

              <div className='w-full flex justify-end items-center px-5 py-2 rounded-md '>
                <button
                  type='button'
                  onClick={() => {
                    // addPost(null, null)
                  }}
                  className='px-4 py-1 border-none outline-none bg-BrutalOrange1 rounded-sm text-white font-medium text-base'
                > Post </button>
              </div>
            </div>
          )}

          {postType === "image" && (
            <div className='w-full h-[40vh]  flex flex-col items-center justify-between space-y-2 bg-lightColor rounded-xl py-5'>
              <div className='w-full  flex flex-col justify-center items-center space-y-2'>
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

                <div className='w-full flex justify-center items-center py-2 bg-lightColor'>
                  <div className='w-32 h-32 rounded-sm border border-dashed bg-lightColor border-brandColor flex justify-center items-center '>
                    <label className='w-full h-full flex justify-center items-center hover:cursor-pointer'>
                      <input type="file" placeholder='image' accept="image/*" hidden
                        onChange={(e) => {
                          const imageFile = e.target.files
                          setImage([imageFile])
                          // setImage( URL.createObjectURL(imageFile[0]) )

                        }}
                      />
                      <GrAdd className='text-xl' />
                    </label>
                  </div>
                </div>

              </div>

              <div className='w-full flex justify-end items-center px-5 py-2'>
                <button
                  type='button'
                  onClick={() => {
                    // uploadImage()
                  }}
                  className='px-4 py-1 border-none outline-none bg-BrutalOrange1 rounded-sm text-white font-medium text-base'
                > Post </button>
              </div>
            </div>
          )}

          {postType === "video" && (
            <div className='w-full h-[40vh]  flex flex-col items-center justify-between space-y-2 bg-lightColor rounded-xl py-5'>
              <div className='w-full  flex flex-col justify-center items-center space-y-2'>
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

                <div className='w-full flex justify-center items-center py-2 bg-lightColor'>
                  <div className='w-32 h-32 rounded-sm border border-dashed bg-lightColor border-blue-300 flex justify-center items-center '>
                    <label className='w-full h-full flex justify-center items-center hover:cursor-pointer'>
                      <input type="file" placeholder='image' accept="video/*" hidden
                        onChange={(e) => {
                          const videoFile = e.target.files
                          setVideo([videoFile])
                        }}
                      />
                      <GrAdd className='text-xl' />
                    </label>
                  </div>
                </div>

              </div>

              <div className='w-full flex justify-end items-center px-5 py-2'>
                <button
                  type='button'
                  onClick={() => {
                    // uploadVideo()
                  }}
                  className='px-4 py-1 border-none outline-none bg-BrutalOrange1 rounded-sm text-white font-medium text-base'
                > Post </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default uploadPost