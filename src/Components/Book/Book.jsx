import React from 'react'
import {MdLocationPin} from 'react-icons/md'
import './Book.css'
import {BsSuitHeartFill,BsSuitHeart} from 'react-icons/bs'

const Book = () => {
  return (
    <div  className='book'>
      <div className='book-wrap'>
        <h1>Available Doctors</h1>
        <div className='wrapped'>
        <div  className='book-wrap-main'>
          <div className='book-img-wrap'>
            <img  className='book-img' src='/book.jpg'/>
          </div>
          <div>
          <div className='book-text'>
            <h2 className='book-h' >
              Joseph Jonah <BsSuitHeartFill color='E22727' fontSize={15}/> 
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
              Joseph Jonah <BsSuitHeart fontSize={15}/>
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
              Joseph Jonah<BsSuitHeart fontSize={15}/>
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
              Joseph Jonah <BsSuitHeartFill color='E22727' fontSize={15}/> 
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
              Joseph Jonah <BsSuitHeart fontSize={15}/>
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
              Joseph Jonah <BsSuitHeartFill color='E22727' fontSize={15}/> 
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