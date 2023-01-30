import React,{useState} from 'react'
import './Header.css'
import {FiAlignJustify} from 'react-icons/fi';
import {FaTimes} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => { setToggle(!toggle) }
  const FiAlignJustif = (<FiAlignJustify fontSize={25} color="#1B75BC" onClick={handleToggle} />)
  const FaTime = (<div>
      <FaTimes fontSize={25} color="#D9D9D9" onClick={handleToggle} />
                </div>)

  return (
    <div className='Header'>
        <div className='Head-wrap'>
            <div>
                <img onClick={()=> navigate('/')} className='head-img' src='/head-log.jpeg' />
             </div>
             <div className='head-links'>
                <h5  onClick={()=> navigate('/')} className='head-links' >Home</h5>
                <h5 className='head-links'>About</h5>
                <h5 className='head-links'>Services</h5>
                <h5 className='head-links'>Contact</h5>
                <h5 className='head-links' onClick={()=> navigate('/dashboard')}>Dashboard</h5>
             </div>
            
             <div>
              <button className='head-log-button '  onClick={()=> navigate('/log in')}>Log In</button>
                <button className='head-sign-button' onClick={()=> navigate('/choice')}>Sign Up</button>
             </div>
              <div className='Burger'>
                    {toggle ? FiAlignJustif : FaTime}
                </div>
        </div>
        <hr className='line'/>
    </div>
  )
}

export default Header;