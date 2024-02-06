import React from 'react'
import { HiOutlineUpload } from "react-icons/hi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BROWSE, DROP_EXCEL_HERE, IMAGE_URL, REMOVE,UPLOAD } from '../constant/constant';
const Upload = (props) => {
    const {count, handleClick} = props;
    
    return (
        <div className='uploadContent'>
            <div className='skeleton'>
                <div className='fileIcon'>
                    <img src={IMAGE_URL} alt="logo"/>

                    {count === 0 ? <p>{DROP_EXCEL_HERE} <span style={{ color: "#605bff" }}>{BROWSE}</span></p> : <p style={{ color: "red" }}>{REMOVE}</p>}


                </div>
            </div>
            <div className={count > 1? 'disableUploadButton': 'uploadButton' }>
                <button disabled={count > 1 && true} onClick={handleClick}>{(count === 0 || count > 1) ? (<span style={{ fontSize: "16px" }}><HiOutlineUpload />&nbsp;&nbsp;{UPLOAD}</span>) : <AiOutlineLoading3Quarters style={{ fontSize: "1.5rem" }} />}</button>
            </div>
        </div>
    )
}

export default Upload