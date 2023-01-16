import Image from 'next/image'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { IMessageData } from '../../../../customTypesAndInterfaces/message/messageInterfaces'
import { auth } from '../../../../firebaseConfig'
import userDPdemo from "../../../../public/images/bg/userDPdemo.jpg"


interface IProps {
    message: IMessageData
}

const MessageCard = ({ message }: IProps) => {
    const [user] = useAuthState(auth)

    return (
        <div key={message?.messageID} className={` w-full flex  ${message.messageCreatorID === user?.uid ? "justify-end" : "justify-start"} space-x-1 py-2 px-2`} >
            <div className={`flex justify-end items-center space-x-3 ${message?.messageCreatorID === user?.uid ? "bg-purple-200 " : "bg-blue-200" } py-2 px-2 rounded-md`}>

                <div className='w-10 h-10 flex justify-center items-center'>
                    <Image src={message?.messageCreatorDisplayPicture || userDPdemo} alt="dp" className='w-7 h-7 rounded-full' width={7} height={7} />
                </div>

                <div className='flex flex-col items-start justify-start '>
                    <p className='font-Roboto text-black font-medium text-lg '> {message?.messageCreatorName} </p>
                    <p className='font-Roboto text-black font-normal text-base pr-5'> {message?.messageText} </p>
                </div>

            </div>
        </div>
    )
}

export default MessageCard