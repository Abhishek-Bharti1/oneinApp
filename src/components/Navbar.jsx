import React, { useState } from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { UPLOADCSV } from '../constant/constant';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div  className='navbar'>
        <div className='head'>
            <h3>{UPLOADCSV}</h3>
        </div>
        <div className='profile'>
            <IoMdNotificationsOutline/>
            <CgProfile/>
        </div>
      
    </div>
    <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
    </>
  )
}

export default Navbar