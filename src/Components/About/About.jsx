import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about'>
        <div className='about-wrap'>
            <div className='abt-text'>
                <h1>About Us</h1>
                <p>
                    <b>Health360</b> is a healthcare solution aimed <br/> at providing all round quality healthcare through an app 
                </p>
                </div>
                <div className='abt-img-wrap'>
                    <img className='abt-img' src='/About.jpg' />
                </div> 
        </div>
        <div className='mission'>
            <div className='mission-wrap'>
                <div className='mission-img-wrap'>
                <img  className='mission-img' src='/logo.png' />
                </div>
                <h1>Our Mission</h1>
                <br/>
                <h3>Health360's mission is to make quality healthcare accessible to every African with a smart device</h3>
            </div>
        </div>
    </div>
  )
}

export default About