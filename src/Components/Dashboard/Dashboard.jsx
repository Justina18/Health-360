import React,{useState} from 'react'
import {BsSuitHeartFill,BsJournalBookmarkFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import {FiAlignJustify} from 'react-icons/fi';
import {FaTimes} from 'react-icons/fa'
import {AiFillHome,AiOutlineMessage,AiOutlineSetting} from 'react-icons/ai'
import {BiUserCircle,BiBell} from 'react-icons/bi'

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
                <div className='dash-img-wrap'>
                <img className='dash-img' src='/profile.png'/>
                </div>
                <h2>Albert Weed</h2>
          </div>
          <div className='dash-txt'>
              <p  onClick={()=> navigate('/')}className='dash-p'> <AiFillHome fontSize={25}/> Home</p>
              <hr className='dash-hr'/>
              <p className='dash-p'> <BiUserCircle fontSize={25}/> Your Profile</p>
              <hr className='dash-hr'/>
              <p onClick={()=> navigate('/appointment')} className='dash-p'> <BsJournalBookmarkFill fontSize={25}/> Appointments and Schedule</p>
              <hr className='dash-hr'/>
              <p className='dash-p'> <BiBell fontSize={25}/> Notifications</p>
              <hr className='dash-hr'/>
              <p className='dash-p'> <AiOutlineMessage fontSize={25}/> Messages</p>
              <hr className='dash-hr'/>
              <p className='dash-p'> <AiOutlineSetting fontSize={25}/>Settings</p>
          </div>
        </div>

        <div className='dun'>
            <div className='hey-wrap'>
                <div className='heys'>
                    <h1>Hello Doc! <BsSuitHeartFill color='E22727' fontSize={15}/> </h1>
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