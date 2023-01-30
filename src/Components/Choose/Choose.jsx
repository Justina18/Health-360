import React from 'react'
import './Choose.css'
import {FaUserNurse,FaUserCircle} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


const Choose = () => {

  const navigate = useNavigate()

  return (
    <div className='Choose'>
        <div className='Choose-wrap'>
            <div className='choose-text'>
                <h1>Who are you? </h1>
                <p>Kindly Choose</p>
            </div>
            <div className='choose-buttons'>
            <button  className='choose-button-med' onClick={()=> navigate('/sign up')} >
              <FaUserNurse fontSize={25} color="#1B75BC"/>
            For medical personnel
            </button>
            <button onClick={()=> navigate('/sign up')} className='choose-button-user'>
              <FaUserCircle fontSize={25} color="#1B75BC"  />
            For Users
            </button>
            </div>
            <div className='chooseBack'>
            <button className='chooseBackButt'  onClick={()=> navigate('/')}>
              Go Back
            </button>
        </div>
    </div>
    </div>
  )
}

export default Choose