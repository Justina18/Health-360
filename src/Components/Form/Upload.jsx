import React,{useState, useEffect} from 'react'
import {FaUserCircle} from 'react-icons/fa'
import './AllForm.css';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [image, setImage] =useState(null)
    const navigate = useNavigate();

    useEffect(() => {
      console.log(image)
    },[image])
  
  return (
    <div className='upload'>
        <h1>Upload and Display Image</h1>
      {selectedImage && (
        <div className='image-wrap'>
       {image ? <FaUserCircle fontSize={200}/> : <img alt="not found"
        className='img'
        src={URL.createObjectURL(selectedImage)} />}
        <br />
        <button className='button' onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br />
      <label className="custom-file-upload">
      <input
        type="file"
        className='file'
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      /> Choose File</label>
      <button className='button' onClick={()=> navigate("/")}>
        Go Back
      </button>
    </div>
  )
}

export default Upload;