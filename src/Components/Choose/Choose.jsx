import React from 'react'
import './Choose.css'
import {FaUserNurse,FaUserCircle} from 'react-icons/fa'

const Choose = () => {
  return (
    <div className='Choose'>
        <div className='Choose-wrap'>
            <div className='choose-text'>
                <h1>Kindly Choose </h1>
                <p>Who are you?</p>
            </div>
            <div className='choose-buttons'>
            <button>

            For medical personnel
            </button>
            <button>
            For Users
            </button>
            </div>
        </div>
    </div>
  )
}

export default Choose