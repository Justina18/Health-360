import React from 'react'
import './Footer.css'
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineTwitter,AiFillInstagram} from 'react-icons/ai'
import {RiWhatsappFill} from 'react-icons/ri'
import {MdEmail} from 'react-icons/md'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='Footer-wrap'>
            <div className=''>
              <img  className='footer-img' src='/logo.png' />
              <hr/>
              <p>
                About Medical Consultation and Support <br/>
                @2023 Good Health. All right reserved.
              </p>
            </div>
            <div>
              <div>
                <MdEmail fontSize={25} color="#D9D9D9"/>
                <FaFacebook fontSize={25} color="#D9D9D9"/>
                <AiFillInstagram fontSize={25} color="#D9D9D9"/>
                <AiOutlineTwitter fontSize={25} color="#D9D9D9"/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer