import React from 'react'

interface IProps {
  tagName: string
  tagColor: string
}

const TagBox = ( {tagName, tagColor}:IProps ) => {
  return (
    <div className='relative w-32 h-9 bg-black border border-black flex justify-center items-center'>
      <div className={`absolute w-32 h-9 flex justify-center items-center right-[2px] bottom-[2px] border border-black bg-${tagColor}`} > {tagName} </div>
    </div>
  )
}

export default TagBox