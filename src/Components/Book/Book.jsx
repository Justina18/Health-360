import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {MdLocationPin} from 'react-icons/md'
import './Book.css'
import {BsSuitHeartFill,BsSuitHeart} from 'react-icons/bs'

const Book = () => {

  const navigate = useNavigate()
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => { setToggle(!toggle) }
  const FiAlignJustif = (<BsSuitHeart  onClick={handleToggle} fontSize={15}/> )
  const FaTime = (<div>
      <BsSuitHeartFill color='E22727'onClick={handleToggle}  fontSize={15}/> 
                </div>)

  return (
    <div  className='book'>
      <div className='book-wrap'>
        <div className='book-head'>
          <img onClick={()=> navigate('/')} className='book-head-img' src='/head-log.jpeg' />
          <h1>Available Doctors</h1> 
          <h4>Favorites <BsSuitHeartFill color='E22727' fontSize={15}/> </h4>
        </div>
        <hr className='book-line'/>
        <div className='wrapped'>
        <div  className='book-wrap-main'>
          <div className='book-img-wrap'>
            <img  className='book-img' src='/book.jpg'/>
          </div>
          <div>
          <div className='book-text'>
            <h2 className='book-h' >
              Joseph Jonah {toggle ? FiAlignJustif : FaTime}
            </h2>
            <p>Anatomist</p>
            <MdLocationPin color='#1B75BC'/>Abuja
            <hr/>
          </div>
            <div className='book-foot'>
             <p> $1500</p>
             <button className='book-butt'>
                Book Now
             </button>
            </div>
          </div>
        </div>

        <div  className='book-wrap-main'>
          <div className='book-img-wrap'>
            <img  className='book-img' src='/book.jpg'/>
          </div>
          <div>
          <div className='book-text'>
            <h2 className='book-h'>
              Joseph Jonah  {toggle ? FiAlignJustif : FaTime}
            </h2>
            <p>Dietitian</p>
            <MdLocationPin color='#1B75BC'/>Abuja
            <hr/>
          </div>
            <div className='book-foot'>
             <p> $1500</p>
             <button className='book-butt'>
                Book Now
             </button>
            </div>
          </div>
        </div>
        </div>

        <div className='wrapped'>
        <div  className='book-wrap-main'>
          <div className='book-img-wrap'>
            <img  className='book-img' src='/book.jpg'/>
          </div>
          <div>
          <div className='book-text'>
            <h2 className='book-h'>
              Joseph Jonah {toggle ? FiAlignJustif : FaTime}
            </h2>
            <p>Dietitian</p>
            <MdLocationPin color='#1B75BC'/>Abuja
            <hr/>
          </div>
            <div className='book-foot'>
             <p> $1500</p>
             <button className='book-butt'>
                Book Now
             </button>
            </div>
          </div>
        </div>

        <div  className='book-wrap-main'>
          <div className='book-img-wrap'>
            <img  className='book-img' src='/book.jpg'/>
          </div>
          <div>
          <div className='book-text'>
            <h2 className='book-h'>
              Joseph Jonah  {toggle ? FiAlignJustif : FaTime}
            </h2>
            <p>Dietitian</p>
            <MdLocationPin color='#1B75BC'/>Abuja
            <hr/>
          </div>
            <div className='book-foot'>
             <p> $1500</p>
             <button className='book-butt'>
                Book Now
             </button>
            </div>
          </div>
        </div>
        </div>

        <div className='wrapped'>
        <div  className='book-wrap-main'>
          <div className='book-img-wrap'>
            <img  className='book-img' src='/book.jpg'/>
          </div>
          <div>
          <div className='book-text'>
            <h2 className='book-h'>
              Joseph Jonah  {toggle ? FiAlignJustif : FaTime}
            </h2>
            <p>Dietitian</p>
            <MdLocationPin color='#1B75BC'/>Abuja
            <hr/>
          </div>
            <div className='book-foot'>
             <p> $1500</p>
             <button className='book-butt'>
                Book Now
             </button>
            </div>
          </div>
        </div>

        <div  className='book-wrap-main'>
          <div className='book-img-wrap'>
            <img  className='book-img' src='/book.jpg'/>
          </div>
          <div>
          <div className='book-text'>
            <h2 className='book-h'>
              Joseph Jonah  {toggle ? FiAlignJustif : FaTime}
            </h2>
            <p>Dietitian</p>
            <MdLocationPin color='#1B75BC'/>Abuja
            <hr/>
          </div>
            <div className='book-foot'>
             <p> $1500</p>
             <button className='book-butt'>
                Book Now
             </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Book