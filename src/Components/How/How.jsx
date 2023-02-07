import React from 'react'
import './How.css'

const How = () => {
  return (
    <div className='How'>
        <div className='How-wrap'>
            <div>
             <div className='How-img-wrap'>
                <img className='How-img' src='/sign.png'/>
             </div>
            </div>
            
             <div className='How-img-wrap'>
                <img className='How-img' src='/book.png'/>
             </div>

             <div className='How-img-wrap'>
                <img className='How-img' src='rec.png'/>
             </div>
        </div>
    </div>
  )
}

export default How