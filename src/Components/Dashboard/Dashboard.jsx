import React,{useState} from 'react'
import {BsSuitHeartFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import {FiAlignJustify} from 'react-icons/fi';
import {FaTimes} from 'react-icons/fa'

const Dashboard = () => {
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => { setToggle(!toggle) }
    const FiAlignJustif = (<FiAlignJustify fontSize={25} color="#1B75BC" onClick={handleToggle} />)
    const FaTime = (<div>
        <FaTimes fontSize={25} color="#D9D9D9" onClick={handleToggle} />
                  </div>)
  const navigate = useNavigate()
  return (
    <div className='hey'>
          <div className='side'>
            <div>
                <h4>
                Dashboard
                </h4>
                <img className='dash-img' src='/profile.png'/>
                <h2>Albertini Igwe</h2>
          </div>
          <div className='dash-txt'>
              <p  onClick={()=> navigate('/')}className='dash-p'>Home</p>
              <hr className='dash-hr'/>
              <p className='dash-p'>Your Profile</p>
              <hr className='dash-hr'/>
              <p  onClick={()=> navigate('/appointment')} className='dash-p'>Appointments and Schedule</p>
              <hr className='dash-hr'/>
              <p className='dash-p'>Notifications</p>
              <hr className='dash-hr'/>
              <p className='dash-p'>Messages</p>
              <hr className='dash-hr'/>
              <p className='dash-p'>Settings</p>
          </div>
        </div>

        <div className='dun'>
            <div className='hey-wrap'>
                <div className='heys'>
                    <h1>Hello Doc! <BsSuitHeartFill color='red' fontSize={15}/> </h1>
                    <p>
                    Welcome to your dashboard. <br/> See a quick summary of your transactions below.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard;