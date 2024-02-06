import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaCloudUploadAlt, FaFileInvoice } from "react-icons/fa";
import { GrSchedule } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import "../styles/Sidebar.css";
import { Base } from '../constant/constant';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const navbarData = [
    {
      "icons": <MdDashboard />,
      "title": "Dashboard"
    },
    {
      "icons": <FaCloudUploadAlt />,
      "title": "Upload"
    }, {
      "icons": <FaFileInvoice />,
      "title": "Invoice"
    }, {
      "icons": <GrSchedule />,
      "title": "Schedule"
    }, {
      "icons": <SlCalender />,
      "title": "Calender"
    }, {
      "icons": <IoNotificationsOutline />,
      "title": "Notification"
    }, {
      "icons": <IoMdSettings />,
      "title": "Settings"
    },
  ]
  return (
    <div className='sidebar'>
   
     <div className='logo'>
     <Link to="/">
        <svg
          width="81"
          height="81"
          viewBox="0 0 81 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40.1102" cy="40.3929" r="40.0765" fill="#605BFF" />
          <path
            d="M0 40L20 30L40 40L50 30L80 40"
            stroke="white"
            stroke-width="4"
            fill="none"
          />
        </svg>
     </Link>

        <h3>{Base}</h3>
      </div>
      {
        navbarData?.map((i, index) => (
          <div key={index} className="sidebarCard">
            <span style={i.title === "Upload" ? { color: "#605bff", background: "linear-gradient(to right, #605BFF, #f7f2f2)" } : {}}>{i.icons}</span>
            <p style={i.title === "Upload" ? { color: "#605bff" } : {}}>{i.title}</p>
          </div>
        ))
      }

    </div>
  )
}

export default Sidebar