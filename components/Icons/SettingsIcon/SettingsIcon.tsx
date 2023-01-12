import React from 'react'
import { BsFillGearFill } from 'react-icons/bs'

const SettingsIcon = () => {
    

    return (
        <div className='w-10 h-10 bg-black border border-black flex justify-center items-center rounded-full'>
            <button
                title='settings'
                type='button'
                className='w-full h-full -mt-2 -ml-2 flex justify-center items-center bg-gray-500 text-xl font-medium text-black border-2 border-black active:-mt-0 active:-ml-0 rounded-full font-BebasNeue'>
                <BsFillGearFill className='text-xl text-white' />
            </button>
            
        </div>
    )
}

export default SettingsIcon