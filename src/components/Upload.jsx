import React from 'react'
import { HiOutlineUpload } from "react-icons/hi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Upload = (props) => {
    const {count, handleClick} = props;
    
    return (
        <div className='uploadContent'>
            <div className='skeleton'>
                <div className='fileIcon'>
                    <img src='https://techcommunity.microsoft.com/t5/image/serverpage/image-id/375416i783713B05CAD4A92/image-size/medium?v=v2&px=400' alt='logo' />

                    {count === 0 ? <p>Drop your excel sheet here or <span style={{ color: "#605bff" }}>browse</span></p> : <p style={{ color: "red" }}>Remove</p>}

                </div>
            </div>
            <div className={count > 1? 'disableUploadButton': 'uploadButton' }>
                <button disabled={count > 1 && true} onClick={handleClick}>{(count === 0 || count > 1) ? (<span style={{ fontSize: "16px" }}><HiOutlineUpload />&nbsp;&nbsp;Upload</span>) : <AiOutlineLoading3Quarters style={{ fontSize: "1.5rem" }} />}</button>
            </div>
        </div>
    )
}

export default Upload