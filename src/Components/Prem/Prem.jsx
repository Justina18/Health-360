import React from 'react'
import {CgShapeZigzag} from 'react-icons/cg'
import {RiVipCrown2Line} from 'react-icons/ri'
import './Prem.css'

const Prem = () => {

  const payment=()=>{
    const refVal = "my-ref" + Math.random () * 1000;
    window.Korapay.initialize({
        key: "pk_test_v2efkMKPAMykzB55m1WjvUZphQghWmBbSW97jFjA",
        reference: `${refVal}`,
        amount: 22000, 
        currency: "NGN",
        customer: {
          name: "John Doe",
          email: "john@doe.com"
        },
        notification_url: "https://example.com/webhook"
    });
  }

  return (
    <div className='prem'>
      <h1 className='prem-h'>Premium Plans</h1>
      <div className='prem-wrap'>
      <div className='prem-hold'>
          <h1 className='prem-h1' >
              Weekly Plans <RiVipCrown2Line  color='#D27245' fontSize={30}/>
             </h1><CgShapeZigzag fontSize={25}/>
             <p className='prem-p' >
            The Health360 platform <br/> makes it possible for anyone with <br/> a smartphone or tablet to receive <br/> quality and affordable health <br/> consultation.
             </p>
             <button className='prem-butt' onClick={payment} >Subscribe</button>
          </div>

          <div className='prem-hold'>
          <h1 className='prem-h1' >
          Monthly Plan <RiVipCrown2Line  color='#9E9E9E' fontSize={30}/>
             </h1><CgShapeZigzag fontSize={25}/>
             <p className='prem-p' >
            The Health360 platform <br/> makes it possible for anyone with <br/> a smartphone or tablet to receive <br/> quality and affordable health <br/> consultation.
             </p>
             <button className='prem-butt' onClick={payment} >Subscribe</button>
          </div>
          
          
          <div className='prem-hold'>
          <h1 className='prem-h1' >
          Annual Plan<RiVipCrown2Line  color='#FDD13F' fontSize={30}/>
             </h1><CgShapeZigzag fontSize={25}/>
             <li className='prem-p'>Chat rooms are always open
             <br/>You can make your very own posts
             <br/>No Ads</li>
             <button className='prem-butt' onClick={payment} >Subscribe</button>
          </div>
          
      </div>
      
    </div>
  )
}

export default Prem