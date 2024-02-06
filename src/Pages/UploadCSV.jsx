import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Table from '../components/Table';
import Upload from '../components/Upload';
import "../styles/UploadCsv.css";
const UploadCSV = () => {

  let [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }
  return (
    <div className='uploadcsv'>
     <Sidebar/>
     <div className='csvPage'>
        <Navbar/>
      <div className='item'>
      <Upload count={count} handleClick={handleClick}/>
      </div>
      { count >1 &&
        <div className='table'>
        <Table/>
      </div>
      }
     
     </div>

    </div>
  )
}

export default UploadCSV