import React from 'react'
import {IoLocation} from 'react-icons/io'
import './Book.css'

const Book = () => {
  return (
    <div  className='book'>
      <div className='book-wrap'>
        <h1>Available Doctors</h1>
        <div  className='book-wrap-main'>
          <div className='book-img-wrap'>
            <img  className='book-img' src='/book.jpg'/>
          </div>
          <div className='book-text'>
            <h2>
              Joseph Jonah
            </h2>
            <p>Dietitian</p>
            <IoLocation/>Abuja
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
  )
}

export default Book