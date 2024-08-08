import React, { Dispatch, SetStateAction } from 'react';

interface navItemsProps {
  label: string;
  link: string;
  setIsSideBarOpen:React.Dispatch<SetStateAction<boolean>>
}

const NavItem: React.FC<navItemsProps> = ({ label, link,setIsSideBarOpen }) => {
  return (
    <a className="h-6 link-hover pb-1 mr-3 transition duration-400 "
     href={link} onClick={()=>setIsSideBarOpen(false)}>
      {label}
    </a>
  );
};

export default NavItem;
