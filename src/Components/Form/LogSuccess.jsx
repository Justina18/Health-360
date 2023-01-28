import React from 'react'

const LogSuccess = () => {
  return (
    <div className='logSuccess'>
      <div className='logSuccess-wrap'>
      <div>
        <img className='logSuccess-img' src='/logsuccess.png' />
      </div>
      <div>
        <h2 className='logh2'>
        You have  successfully
        <br/>
<b className='suc'>Logged In!</b>
        </h2>
      </div>
      </div>
    </div>
  )
}

export default LogSuccess;