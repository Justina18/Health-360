import React from 'react'
import {CgShapeZigzag} from 'react-icons/cg'
import {RiVipCrown2Line} from 'react-icons/ri'
import './Prem.css'

const Prem = () => {
  return (
    <div className='prem'>
      <div className='prem-wrap'>
      <div className='prem-hold'>
          <h1 className='prem-h1' >
              Premium <RiVipCrown2Line  color='#FDD13F' fontSize={25}/>
             </h1><CgShapeZigzag fontSize={25}/>
             <p className='prem-p' >
            The Health360 platform <br/> makes it possible for anyone with <br/> a smartphone or tablet to receive <br/> quality and affordable health <br/> consultation.
             </p>
          </div>

          <div className='prem-hold'>
          <h1 className='prem-h1' >
          Premium <RiVipCrown2Line  color='#FDD13F' fontSize={25}/>
             </h1><CgShapeZigzag fontSize={25}/>
             <p className='prem-p' >
            The Health360 platform <br/> makes it possible for anyone with <br/> a smartphone or tablet to receive <br/> quality and affordable health <br/> consultation.
             </p>
          </div>
          
          
          <div className='prem-hold'>
          <h1 className='prem-h1' >
          Premium <RiVipCrown2Line  color='#FDD13F' fontSize={25}/>
             </h1><CgShapeZigzag fontSize={25}/>
             <p className='prem-p' >
            The Health360 platform <br/> makes it possible for anyone with <br/> a smartphone or tablet to receive <br/> quality and affordable health <br/> consultation.
             </p>
          </div>
      </div>
      
    </div>
  )
}

export default Prem