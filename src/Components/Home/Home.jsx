import React from 'react'
import Are from '../Are/Are';
import Choose from '../Choose/Choose';
import Header from '../Header/Header';
import How from '../How/How';
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
        <Header/>
        <div className='Home-wrap'>

          <div className='home-text'>
            <h1 className='Home-h1'>
            All it takes is a <br/>
         <b className='home-b'> consultation</b> with a doctor.
            </h1>
            <p className='home-p'>
            The top medical experts are prepared to provide <br/> feedback on your problems.
            </p>
            <div className='home-buttons'>
            <button  className='home-book-button'>
                Book Now
            </button>
            <button className='home-prem-button'>
              Go Premium
              </button>
              </div>
              </div>
              <img src='/home.png' />
        </div>
        <How/>
        <Are/>
        <Choose/>
    </div>
  )
}

export default Home;