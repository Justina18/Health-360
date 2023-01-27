import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='Header'>
        <div className='Head-wrap'>
            <div>
                <img className='head-img' src='/head.png' />
             </div>
             <div className='head-links'>
                <h5 className='head-links' >Home</h5>
                <h5 className='head-links'>About</h5>
                <h5 className='head-links'>Services</h5>
                <h5 className='head-links'>Contact</h5>
                <h5 className='head-links'>Dashboard</h5>
             </div>
             <div>
              <button className='head-log-button'>Log In</button>
                <button className='head-sign-button'>Sign Up</button>
             </div>
        </div>
        <hr className='line'/>
    </div>
  )
}

export default Header;