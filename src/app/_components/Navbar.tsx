"use client"
import Link from 'next/link'
import logo from '../images/logo.png'
import Image from 'next/image'
import NavigationItem from './NavigationItem'
import BookBtn from './BookBtn'
import NavLinks from './NavLinks'
import { FiAlignLeft } from "react-icons/fi";
import SideBar from './SideBar'
import { useState } from 'react'
const Navbar = () => {
  const[isSideBarOpen,setIsSideBarOpen]=useState<boolean>(false)

  return (
    <nav className='h-28 md:h-36 w-full bg-[#fdfaf1] flex flex-col '>
      <div className='w-full flex md:justify-center mt-14 md:mt-6'>
          <Link href='/'>
            <Image 
              src={logo}
              alt='Logo image'
              height={42}
            />
          </Link>
         <div className='absolute right-0 mr-3'>
          <BookBtn/>
         </div>
      </div>
      <div className=' w-full justify-center  h-16 mt-6 hidden md:flex'>
       <NavLinks setIsSideBarOpen={setIsSideBarOpen}/>
      </div>
      <div className={`absolute top-3 left-3  md:hidden ${isSideBarOpen?'hidden':"block"}`}>
        <FiAlignLeft 
          size={30}
          opacity={0.9}
          onClick={()=>setIsSideBarOpen(true)}
          className='cursor-pointer'
        />
      </div>

    <SideBar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen}/>
    </nav>
  )
}

export default Navbar
