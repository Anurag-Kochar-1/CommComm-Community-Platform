import React from 'react'
import { GrFormAdd } from "react-icons/gr"

const PlusIcon = () => {
    return (
        <button type='button' title='searchIcon' className='hidden lg:inline-flex relative w-10 h-10 border-black bg-black border rounded-full  justify-center items-center'>
            <span className='w-10 h-10 rounded-full bg-BrutalRed1 flex justify-center items-center absolute right-[1px] bottom-[1.5px] border border-black active:bottom-0 active:right-0 hover:bottom-0 hover:right-0'>
                <GrFormAdd className='text-lg text-black' />
            </span>
        </button>
    )
}

export default PlusIcon