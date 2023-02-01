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
                <h4  onClick={()=> navigate('/')} className='head-links' >Home</h4>
                {/* <h4 onClick={()=> navigate('/about')} className='head-links'>About</h4>
                <h4 className='head-links'>Services</h4>
                <h4 className='head-links'>Contact</h4> */}
                <h4 className='head-links' onClick={()=> navigate('/dashboard')}>Dashboard</h4>
             </div>
            
             <div className='head-buttons'>
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