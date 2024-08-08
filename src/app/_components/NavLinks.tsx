import React, { SetStateAction, Dispatch } from 'react'
import NavItem from './NavItem'
const NavLinks = ({setIsSideBarOpen}: { setIsSideBarOpen: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <>
        <NavItem label='HOME' link='#' setIsSideBarOpen={setIsSideBarOpen}/>
        <NavItem label='ABOUT US' link='#aboutus' setIsSideBarOpen={setIsSideBarOpen}/>
        <NavItem label='FIND STORE' link='#footer' setIsSideBarOpen={setIsSideBarOpen}/>
        <NavItem label='CONTACT' link='#footer' setIsSideBarOpen={setIsSideBarOpen}/>
    </>
  )
}

export default NavLinks
