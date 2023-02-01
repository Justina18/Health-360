import {useState,useRef, useReducer} from 'react'
import './Dashboard.css'
import './Dash'
import {AiFillHome} from 'react-icons/ai'
import {FiAlignJustify} from 'react-icons/fi';
import {FaTimes} from 'react-icons/fa'
import {SlUserFollow} from 'react-icons/sl'
import {AiOutlineArrowUp} from 'react-icons/ai'
import {RxClock} from 'react-icons/rx'
import Dash from './Dash'
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header'

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


const Appointment = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => { setToggle(!toggle) }
  const FiAlignJustif = (<FiAlignJustify fontSize={25} color="#1B75BC" onClick={handleToggle} />)
  const FaTime = (<div>
      <FaTimes fontSize={25} color="#D9D9D9" onClick={handleToggle} />
                </div>)
  const navigate = useNavigate()
  const inputRef = useRef('')
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todo'))|| [])


  const handleClick = () => {
    dispatch({ type: 'Add', payload: { name: inputRef.current.value } })
  }


  return (
    <div className='dash'>
      <Header/>
      <div className='dash-wrap'>
      <div className='Burger'>
                    {toggle ? FiAlignJustif : FaTime}
                </div>
        <div className='side'>
            <h4>
              Dashboard
            </h4>
            <div>
            <img className='dash-img' src='/doct.jpg'/>
            <h2>Albertini Igwe</h2>
          </div>
          <div className='dash-txt'>
              <p  onClick={()=> navigate('/')}className='dash-p'>Home</p>
              <hr className='dash-hr'/>
              <p className='dash-p'>Your Profile</p>
              <hr className='dash-hr'/>
              <p  onClick={()=> navigate('/appointment' )} className='dash-p'>Appointments and Schedule</p>
              <hr className='dash-hr'/>
              <p className='dash-p'>Notifications</p>
              <hr className='dash-hr'/>
              <p className='dash-p'>Messages</p>
              <hr className='dash-hr'/>
              <p className='dash-p'>Settings</p>
          </div>
        </div>

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
                  placeholder='Add new Todo...' 
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

export default Appointment;