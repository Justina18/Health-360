// import React,{useState} from 'react'
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'
// const Profile = () => {
//   const [date, setDate] = useState(new Date());
//   return (
//     <div>
//       <div>

//       </div>

//       <Calendar onChange={setDate} value={date} selectRange={true}/>
//       <p>
//         <span>Selected Date:</span>{' '}
//         {date.toDateString()}
//       </p>
//         <div>
//           <div>
//             <img/>
//           </div>
//           <div className='pro-text'>
//           <h4>
//             Name
//           </h4>
//           Joseph Jonah
//           </div>

//           <div className='pro-text'>
//           <h4>
//             Email
//           </h4>
//           josephjonah@gmail.com
//           </div>

//           <div className='pro-text'>
//           <h4>
//             Phone
//           </h4>
//           2349754357890
//           </div>

//           <div className='pro-text'>
//           <h4>
//             Gender
//           </h4>
//           Male
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Profile

import './Dashboard.css'
import React,{useState, useRef, useReducer} from 'react'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import {FiAlignJustify} from 'react-icons/fi';
import {FaTimes} from 'react-icons/fa'
import {AiFillHome,AiOutlineMessage,AiOutlineSetting} from 'react-icons/ai'
import {BiUserCircle,BiBell} from 'react-icons/bi'

const Profile = () => {
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(true);
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => { 
    setToggle(!toggle) 
  setIsOpen(!isOpen)
  }
  const FiAlignJustif = (<FiAlignJustify fontSize={25} color="#1B75BC" onClick={handleToggle} />)
  const FaTime = (<div>
      <FaTimes fontSize={25} color="#D9D9D9" onClick={handleToggle} />
                </div>)
  return (
    <div>
      <div>
      <div className='Burger'>
                    {toggle ? FiAlignJustif : FaTime}
                </div>
                {isOpen && (
                      <div className='sides'>
                      <div>
                          <h4>
                          Dashboard
                          </h4>
                          <div className='dash-img-wrap'>
                          <img className='dash-img' src='/profile.png'/>
                          </div>
                          <h2>Albert Weed</h2>
                    </div>
                    <nav>
                    <div className='dash-txt'>
                        <p  onClick={()=> navigate('/')}className='dash-p'> <AiFillHome fontSize={25}/> Home</p>
                        <hr className='dash-hr'/>
                        <p  onClick={()=> navigate('/profile')} className='dash-p'> <BiUserCircle fontSize={25}/> Your Profile</p>
                        <hr className='dash-hr'/>
                        <p onClick={()=> navigate('/appointment')} className='dash-p'> <BsJournalBookmarkFill fontSize={25}/> Appointments and Schedule</p>
                        <hr className='dash-hr'/>
                        <p className='dash-p'> <BiBell fontSize={25}/> Notifications</p>
                        <hr className='dash-hr'/>
                        <p className='dash-p'> <AiOutlineMessage fontSize={25}/> Messages</p>
                        <hr className='dash-hr'/>
                        <p className='dash-p'> <AiOutlineSetting fontSize={25}/>Settings</p>
                    </div>
                    </nav>
                  </div>
                )}
          <div className='side'>
            <div className='side-head'>
                <h4>
                Dashboard
                </h4>
                <div className='dash-img-wrap'>
                <img className='dash-img' src='/profile.png'/>
                </div>
                <h2>Albert Weed</h2>
          </div>
          <nav>
          <div className='dash-txt'>
              <p  onClick={()=> navigate('/')}className='dash-p'> <AiFillHome fontSize={25}/> Home</p>
              <hr className='dash-hr'/>
              <p  onClick={()=> navigate('/profile')} className='dash-p'> <BiUserCircle fontSize={25}/> Your Profile</p>
              <hr className='dash-hr'/>
              <p onClick={()=> navigate('/appointment')} className='dash-p'> <BsJournalBookmarkFill fontSize={25}/> Appointments and Schedule</p>
              <hr className='dash-hr'/>
              <p className='dash-p'> <BiBell fontSize={25}/> Notifications</p>
              <hr className='dash-hr'/>
              <p className='dash-p'> <AiOutlineMessage fontSize={25}/> Messages</p>
              <hr className='dash-hr'/>
              <p className='dash-p'> <AiOutlineSetting fontSize={25}/>Settings</p>
          </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Profile