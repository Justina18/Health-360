import React from 'react'
import './How.css'

const How = () => {
  return (
    <div className='How'>
        <div className='How-wrap'>
            <div className='how-text-wrap'>
            <div className='How-text'>
                <div>
                    <h1 className='how-h'>
                      1
                    </h1>
                </div>
                <div>
                    <h2 className='how-sign'>Sign Up</h2>
                    <p className='how-p'>Download the iOS or Android version <br/> of the app.</p>
                </div>
            </div>
            
            <div className='How-text'>
                <div>
                    <h1 className='how-h'>
                      2
                    </h1>
                </div>
                <div>
                    <h2 className='how-sign'>Book a consultation</h2>
                    <p className='how-p'>Select a day, time, and doctor that <br/>suits your  preference..</p>
                </div>
            </div>
            <div className='How-text'>
                <div>
                    <h1 className='how-h'>
                      3
                    </h1>
                </div>
                <div>
                    <h2 className='how-sign'>Be a happy user!</h2>
                    <p className='how-p'>Select a day, time, and doctor that <br/>suits your preference.</p>
                </div>
            </div>
            </div>
            <div className='how-img-holder'>
                <img className='how-img' src='/How.png' />
            </div>
        </div>
    </div>
  )
}

export default How