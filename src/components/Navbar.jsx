import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  return (
    <div  className='navbar'>
        <div className='head'>
            <h3>Upload CSV</h3>
        </div>
        <div className='profile'>
            <IoMdNotificationsOutline/>
            <CgProfile/>
        </div>
    </div>
  )
}

export default Navbar