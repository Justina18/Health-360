import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import './App.css'
import Inputs from './Components/Form/Inputs'
import Upload from './Components/Form/Upload'
import LogIn from './Components/Form/LogIn'
import LogSuccess from './Components/Form/LogSuccess'
import Dashboard from './Dashboard/Dashboard'
import Choose from './Components/Choose/Choose'
import Complete from './Components/Form/Complete'
import Forgot from './Components/Form/Forgot'
import UserInput from './Components/Form/UserInput'
import UserPass from './Components/Form/UserPass'
import SignSuccess from './Components/Form/SignSuccess'
import Footer from './Components/Foot/Footer'
import Book from './Components/Book/Book'
import Prem from './Components/Prem/Prem'
import Header from './Components/Header/Header'
import About from './Components/About/About'

const App = () => {
  return (
    <div className='App'>
        <Router>
          <Header/>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path='/sign up' element={ <Inputs/> }/>
          <Route path='/upload' element={ <Upload/> }/>
          <Route path='/log in' element={ <LogIn/> }/>
          <Route path='/log in img' element={ <LogSuccess/> }/>
          <Route path='/dashboard' element={ <Dashboard/> }/>
          <Route path='/choice' element={ <Choose/> } />
          <Route path='/comp' element={ <Complete/> }/>
          <Route path='/forgot' element={ <Forgot/> }/>
          <Route path='/user sign' element={ <UserInput/> } />
          <Route path='/user password' element={ <UserPass/> } />
          <Route path='/sign success' element={ <SignSuccess/> } />
          <Route path='book' element={ <Book/> }/>
          <Route path='premium' element={ <Prem/> }/>
          <Route path='/about' element={ <About/> }/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App