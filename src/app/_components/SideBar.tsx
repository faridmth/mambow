'use client'
import React, { SetStateAction } from 'react'
import NavLinks from './NavLinks'
import { IoClose } from "react-icons/io5";
interface SideBarChildren {
    isSideBarOpen: boolean;
    setIsSideBarOpen: React.Dispatch<SetStateAction<boolean>>;
  }
  const SideBar:React.FC<SideBarChildren> = ({isSideBarOpen,setIsSideBarOpen}) => {
    
  return (
    <div className={`
        absolute
        bg-[#f8f2df]
        w-full
        overflow-hidden
        ${isSideBarOpen ? 'left-0' : '-left-full'} 
        h-full
        opacity-95
        transition
        side-bar-transition
        z-50

      `}>
        <div className='
        flex 
        flex-col
        h-lvh
        justify-center
        items-center
        gap-10
      
      '>
        <NavLinks setIsSideBarOpen={setIsSideBarOpen} />
        </div>
        <div className={`absolute top-3 right-3 cursor-pointer`}>
            <IoClose size={40} onClick={()=>setIsSideBarOpen(false)}/>
        </div>
    </div>
  )
}

export default SideBar
