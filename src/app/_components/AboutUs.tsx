import React from 'react'
import Image from 'next/image'
import aboutImage from '../images/malysian-food.png'

const AboutUs = () => {
  return (
   <div id='aboutus' className=' about-gradient flex lg:justify-between'>
    <div className='py-24 flex flex-col md:flex-row lg:w-3/4 '>
    <div className='w-full md:pr-3 flex justify-center md:w-1/2'>
        <Image
        src={aboutImage}
        alt='malysian foosimage at mambow'
        className=' max-h-80'
        />
      </div>
      <div className='md:w-1/2 p-5'>
        <h1 className='text-2xl'>About us</h1>
        <p className='py-2'>Mambow has now taken on its final form, with a forever home (or at least one a tad more permanent than a vibeless Peckham indoor market) in Clapton. A relatively chilled open kitchen takes up a third of the small space, and the restaurant feels fittingly DIY. There are jazzy tiles here, and a splash of Jacques Majorelle blue paint there, but...</p>
        <a href="https://www.timeout.com/london/restaurants/mambow-2"target='_blank' className='underline'>Read More</a>
      </div>
    </div>
   </div>
  )
}

export default AboutUs
