import React from 'react'
import {BiSearch} from "react-icons/bi"

const SearchBar = () => {
    return (
        <div className='hidden md:inline-flex w-[50%] h-[5vh] bg-black justify-center items-center border-2 border-black rounded-sm'>

            <div className='w-full h-full bg-white rounded-sm flex justify-between items-center px-4'>
                <BiSearch className='text-xl text-black mr-1'/>
                <input
                    type="text"
                    placeholder='Search...'
                    className='w-full h-full bg-white outline-none focus:ring-0 px-2 py-1 placeholder:text-BrutalBlack1 text-BrutalBlack1'
                />

                {/* <button type='button' title='searchIcon' className='relative w-7 h-7 border-black bg-black border rounded-md flex justify-center items-center pr-5'>
                    <span className='w-7 h-7 rounded-md bg-BrutalPurple1 flex justify-center items-center absolute right-[1px] bottom-[1.5px] border border-black active:bottom-0 active:right-0 hover:bottom-0 hover:right-0'>
                        <BiSearch className='text-lg text-black' />
                    </span>
                </button> */}
            </div>
        </div>
    )
}

export default SearchBar