import React,{useState} from 'react'
import Doc from './doct.jpg'
import { useNavigate } from 'react-router-dom'
import Booker from './Booker'


const Book = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState({
      image: "",
      text: "",
    })
  
    const added=[
      {
      id:1,
     image: Doc,
     text:' Hey there'
    },
  ];

  const handleChange= e =>{
    setActive({...active, [e.target.name]: e.target.active});
  }
  
  const receivedValues =(e)=>{
    e.preventDefault()
    console.log(values)
    window.location.reload()
  }

  return (
    <div>
      <h1>
        Testing!!
      </h1>
      {added.map((i)=>
      <Booker key={i.id} {...i} handleChange={handleChange} active={active[i.name]}/>
      )}
    </div>
  )
}

export default Book 