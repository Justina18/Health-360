import React from 'react'
import './More.css'

const More = () => {
  return (
    <div className='More'>
      <div className='More-wrap'>
        <h2 className='More-h2'>
          More Info
        </h2>
        <p className='More-p'>
           Practitioners will have the following features to choose from:

            15, 30, 45, 60 minute consultations.

            Charge your own fees.

            Have multiple schedules that fit your workflow.

            Create schedules that include your break time between consultations, minimum notice before having a consultation, as well as your timezone.

            Many more features.

        </p>
        <p className='More-p'>
            If you are interested in providing healthcare services, click the join us button below!
        </p>
          <button className='More-button'>
            <h5>Join Health 360</h5>
          </button>
      </div>
    </div>
  )
}

export default More