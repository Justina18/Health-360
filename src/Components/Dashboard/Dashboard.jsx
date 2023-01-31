import React from 'react'
import './Dashboard.css'
import {AiFillHome} from 'react-icons/ai'
import {SlUserFollow} from 'react-icons/sl'
import {AiOutlineArrowUp} from 'react-icons/ai'

const Dashboard = () => {
  return (
    <div className='dash'>
      <div className='dash-wrap'>
        <div className='side'>
            <h4>
              Dashboard
            </h4>
            <div>
            <img className='dash-img' src='/doct.jpg'/>
            <h2>Albertini Igwe</h2>
          </div>
          <div className='dash-txt'>
              <p className='dash-p'>Home</p>
              <hr className='dash-hr'/>
              <p className='dash-p'>Your Profile</p>
              <hr className='dash-hr'/>
              <p className='dash-p'>Appointments</p>
              <hr className='dash-hr'/>
              <p className='dash-p'>My Schedule</p>
              <hr className='dash-hr'/>
              <p className='dash-p'>Settings</p>
          </div>
        </div>

        <div className='dash-main'>
          <div>
            <div className='dash-icon-wrap'>
              <div className='dash-icon'>
                <SlUserFollow color='white' fontSize={50}/>
              </div>
              <div>
                <p>Patients</p>
                <AiOutlineArrowUp/>14
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard