import React from 'react'
import Input from './Input'

const NewsLetter = () => {
  return (
    <div className='flex justify-center text-center p-5'>
        <div className='w-3/4 sm:w-full sm:my-28  sm:py-10 flex flex-col sm:items-center sm:gap-2'>
        <h2 className='text-2xl'>What’s coming up?</h2>
        <p className='text-[#3f3f3f] mt-2'>Drop your email below and we’ll keep you in the loop</p>
        <Input/>
    </div>
    </div>
  )
}

export default NewsLetter
