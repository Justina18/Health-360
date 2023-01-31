import React from 'react'
import './More.css'
import { useNavigate } from 'react-router-dom'


const More = () => {
  
  const navigate = useNavigate()
  
  return (
    <div className='More'>
      <div className='More-wrap'>
        <div className='More-img-wrap' >
          <img className='More-img' src='/Morer.png' />
        </div>
        <div>
        <h1 className='More-h2'>
          More Info
        </h1>
        <p className='More-p'>
           Practitioners will have the following features to choose from:
           
            <li>15, 30, 45, 60 minute consultations.</li>
            <li>Charge your own fees.</li>
            <li>Have multiple schedules that fit your workflow.</li>

           <li> Create schedules that include your break time between <br/> consultations, minimum notice before having a consultation,<br/> as well as your timezone.</li>

            Many more features.

        </p>
        <p className='More-p'>
            If you are interested in providing healthcare services, click the <br/> join us button below!
        </p>
          <button onClick={()=> navigate('/sign up')}  className='More-button'>
            <h5>Join Health 360</h5>
          </button>
      </div>
    </div>
    </div>
  )
}

export default More