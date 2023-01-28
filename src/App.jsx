import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import './App.css'
import Inputs from './Components/Form/Inputs'
import Upload from './Components/Form/Upload'
import LogIn from './Components/Form/LogIn'
import LogSuccess from './Components/Form/LogSuccess'
import Dashboard from './Dashboard/Dashboard'

const App = () => {
  return (
    <div className='App'>
        <Router>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path='/sign up' element={ <Inputs/> }/>
          <Route path='/upload' element={ <Upload/> }/>
          <Route path='/log in' element={ <LogIn/> }/>
          <Route path='/log in img' element={ <LogSuccess/> }/>
          <Route path='/dashboard' element={ <Dashboard/> }/>
        </Routes>
      </Router>
    </div>
  )
}

export default App