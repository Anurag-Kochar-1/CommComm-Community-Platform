import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import CommunityLayout from "../../../../components/layouts/Community/CommunityLayout"
import { FiSend } from "react-icons/fi"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "../../../../firebaseConfig"
import { addDoc, collection, doc, getDocs, onSnapshot, updateDoc } from "firebase/firestore"

import userDPdemo from "../../../../public/images/bg/userDPdemo.jpg"
import Image from "next/image"
import { GrFormAdd } from "react-icons/gr"

const Index = ({ allCommunityMessage }: any) => {
  const [user, loading] = useAuthState(auth)
  const router = useRouter()
  const { TextChannelID } = router.query
  const { id } = router.query
  const [messageInputValue, setMessageInputValue] = useState<string>("")
  const [realTimeMessagesState, setRealTimeMessagesState] = useState<any[]>([])


  const sendMessage = async () => {
    if (user && !loading) {
      try {
        if (messageInputValue) {
          const communityMessagesSubCollectionRef = collection(db, "communities", id as string, "communityMessages")
          const addingMessage = await addDoc(communityMessagesSubCollectionRef, {
            messageText: messageInputValue,
            messageCreatorID: user?.uid,
            messageCreatorName: user?.displayName,
            messageCreatorDisplayPicture: user?.photoURL,
            messageID: "",
            messageCreatedAtCommunityID: id as string
          })

          // adding messageID
          await updateDoc(addingMessage, {
            messageID: addingMessage.id
          })



          // resetting
          setMessageInputValue("")
        } else {
          alert("Type message")
        }

      } catch (error) {
        alert(error)
      }
    } else if (!user && !loading) {
      router.push("/register")
    }
  }


  // const realTimeMessages = onSnapshot(collection(db, "communities", id as string, "communityMessages"), (docs) => {
  //   docs.forEach((doc) => {
  //     setRealTimeMessagesState([  doc.data() ])
  //   })
  // });

  useEffect(() => {

  }, [])

  return (
    <CommunityLayout>
      <main className='w-full h-full flex flex-col justify-between items-center bg-BgBrutalSkin1 pb-5 sm:px-4'>
        {/* <h1 onClick={() => console.log(realTimeMessagesState)}>  lOG realTimeMessagesState </h1> */}


        <div className='w-full  overflow-x-hidden overscroll-y-scroll space-y-3 pb-40 px-3 bg-white py-5 rounded-md scrollbar-hide'>
          {allCommunityMessage && (
            allCommunityMessage?.map((message: any) => {
              return (
                <div key={message?.messageID} className={` w-full flex  ${message.messageCreatorID === user?.uid ? "justify-end" : "justify-start"} space-x-1 py-2 px-2`} >
                  <div className={`flex justify-end items-center space-x-3 bg-BrutalOrange1 py-2 px-2 rounded-md`}>

                    <div className='w-10 h-10 flex justify-center items-center'>
                      <Image src={ userDPdemo } alt="dp" className='w-7 h-7 rounded-full' width={7} height={7} />
                    </div>

                    <div className='flex flex-col items-start justify-start '>
                      <p className='font-InriaSans text-black font-semibold text-lg '> {message?.messageCreatorName} </p>
                      <p className='font-InriaSans text-black font-medium text-base'> {message?.messageText} </p>
                    </div>

                  </div>
                </div>
              )
            })
          )}
        </div>


        {/* MESSAGE BAR  */}
        <div className='z-50 fixed bottom-[0vh] lg:bottom-[2vh] w-full lg:w-[55%] h-[11vh] lg:h-[8vh]   bg-purple-300 flex justify-between items-end space-x-3 p-2'>
        
          <input
            value={messageInputValue}
            onChange={(e) => setMessageInputValue(e.target.value)}
            type="text"
            placeholder='TYPE HERE...'
            className='outline-none focus:ring-0 w-full h-full px-4 py-1 placeholder:text-black text-black font-InriaSans text-base border-2 border-black rounded-sm'
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                sendMessage()
              }
            }}
          />

          <button
            type='button'
            title='send'
            className='w-[20%] md:w-[10%] bg-white h-full outline-none flex justify-center items-center border-2 border-black rounded-sm'
            onClick={sendMessage}
          >
            <FiSend className="text-2xl"/>

          </button>
        </div>
      </main>
    </CommunityLayout>
  )
}

export default Index  



export const getServerSideProps = async ({ params }: any) => {
  const { id }: string | any = params

  const allCommunityMessage: any[] = []

  // fetching community messages
  const messagesSubCollectionRef = collection(db, "communities", id as string, "communityMessages")
  const res = await getDocs(messagesSubCollectionRef)
  res.forEach((message) => {
    return allCommunityMessage.push(message.data())
  })

  return {
    props: {
      allCommunityMessage
    }
  };
}
