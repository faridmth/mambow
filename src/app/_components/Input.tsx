import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Input = () => {
  return (
    <div className='relative mt-5 flex flex-col sm:flex-row items-center gap-5 sm:gap-12'>
      <input type="text" id='email' 
        placeholder='email'
        className='
            peer
            w-[250px]
            h-10
            rounded-sm
            outline-none
            pl-5  
          bg-[#f8f2df] 
            border-b-2 
            border-white     
        '/>
      <button className='
        group
        border
        border-[#8f8e8e]  
        p-1
        rounded-sm
        hover:border-[#181818] 
        flex
        items-center
        gap-2
        w-24
        opacity-80 
        hover:opacity-100


      '>
        Submit
        <GoArrowUpRight
            className='
                opacity-50 
                rotate-45
                group-hover:opacity-100
                group-hover:rotate-0
                transition
                duration-400
            '
            size={20}
        />
      </button>
      
    </div>
  )
}

export default Input
