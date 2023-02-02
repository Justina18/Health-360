import React,{useState, useRef, useReducer} from 'react'
import {BsSuitHeartFill,BsJournalBookmarkFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import {FiAlignJustify} from 'react-icons/fi';
import {FaTimes} from 'react-icons/fa'
import {AiFillHome,AiOutlineMessage,AiOutlineSetting} from 'react-icons/ai'
import {BiUserCircle,BiBell} from 'react-icons/bi'
import {SlUserFollow} from 'react-icons/sl'
import {AiOutlineArrowUp} from 'react-icons/ai'
import {RxClock} from 'react-icons/rx'
import Dash from './Dash'

function reducer(todos, action) {
    switch (action.type) {
      case 'Add':
        return [...todos, newTodo(action.payload.name)]
      case "checked":
        return action.payload.Check
      case "delete":
        return action.payload.Check
    }
  }
  
  function newTodo(inputRef) {
    return { id: Date.now(), todo: inputRef, checkers: false }
  }
 
  const handleClick = () => {
    dispatch({ type: 'Add', payload: { name: inputRef.current.value } })
  }

const Dashboard = () => {
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
                  const inputRef = useRef('')
                  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todo'))|| [])
  return (
    <div className='hey'>
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
                    <h1>Hello Doc!<BsSuitHeartFill color='E22727' fontSize={25}/> </h1>
                    <p>
                    Welcome to your dashboard. <br/> See a quick summary of your transactions below.
                    </p>
                </div>
            </div>
            <br/>
            <div className='dash-main'>
          <div className='dash-icon-wrap-holder'>
            <div className='dash-icon-wrap'>
              <div className='dash-icon'>
                <SlUserFollow color='white' fontSize={50}/>
              </div>
              <div className='dash-icon-text'>
                <p>Patients</p>
                <div><AiOutlineArrowUp/>14</div>
                
              </div>
            </div>

            <div className='dash-icon-wrap'>
              <div className='dash-icon'>
                <RxClock color='white' fontSize={50}/>
              </div>
              <div className='dash-icon-text'>
                <p>Time Taken</p>
                <div>
                    <AiOutlineArrowUp/>
                      02: 14: 39
                </div>
              </div>
            </div>
          </div>

          <div className='todo'>
            <div className='todo-wrap'>
              <div className='inputed-holder'>
                <input 
                  ref={inputRef} 
                  placeholder='Add new Appointment...' 
                        />
                <button 
                className='plus-butt'
                onClick={() => {
                  handleClick() }}>+</button>
              </div>
              </div>
              <Dash
                    Todo={state}
                    update={dispatch}/>
          </div>
        </div>
           
        </div>
    </div>
  )
}

export default Dashboard;