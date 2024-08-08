import React from 'react'
import BookBtn from './BookBtn'
import Image from 'next/image'
import mainImage from '../images/main.png'

const Main = () => {
  return (
    <div className='min-h-96 flex  flex-col items-center sm:flex-row mt-8 pb-20'>
        <div className='w-full p-8  sm:w-1/2 '>
            <h2 className='font-bold text-3xl'>Welcome To MaMbow</h2>
            <p className='mt-3'>Malaysian Restaurant is a culinary haven for those who crave the rich and diverse flavors of Malaysian cuisine. Our restaurant offers an authentic dining experience</p>
            <div className='mt-5'>
            <BookBtn/>
            </div>
        </div>
        <div className='w-full sm:w-1/2 '>
            <Image
                src={mainImage}
                alt='descriptive image'
            />

        </div>
    </div>
  )
}

export default Main
