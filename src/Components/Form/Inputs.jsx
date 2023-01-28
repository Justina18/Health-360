import React,{useState} from 'react'
import Form from './Form';
import './AllForm.css';
import { useNavigate } from 'react-router-dom';

const Inputs = () => {

    const navigate = useNavigate()
    const [values, setValues] = useState({
        name: "",
        email: "",
        address:"",
        password: "",
        confirmPassword: "",
      })
    
      const inputs=[
        {
        id:1,
        name:'name',
        placeholder: 'Name',
        type: 'text',
        required: true,
        errMsg:'All characters must be letters. There should be at least 3 characters ',
        pattern: `[a-zA-Z][a-zA-Z0-9-_. ]{3,20}`
      },
      {
        id:2,
        name:'email',
        placeholder: 'E-mail',
        type: 'email',
        required: true,
        errMsg:'Must be a valid e-mail',
        pattern:`^\S+@\S+$`
      },
      {
        id:3,
        name:'address',
        placeholder: 'Address',
        type: 'address',
        required: true,
    
      },
      {
        id:4,
        name:'password',
        placeholder: 'Password',
        type: 'password',
        required: true,
        errMsg:'There must be at least 8 characters. It must have a capital letter, a number, a special character and small letters',
        pattern:`^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$`
      },
      {
        id:5,
        name:'password',
        placeholder: 'Confirm Password',
        type: 'password',
        required: true,
        errMsg:'Must match the password',
        pattern: values.password
      },
    ];
    
    const handleChange= e =>{
      setValues({...values, [e.target.name]: e.target.values});
    }
    
    const receivedValues =(e)=>{
      e.preventDefault()
      console.log(values)
      window.location.reload()
    }
  return (
    <div className='apps'>
          <form onSubmit={receivedValues}>
            <h1>Create an account</h1>
          {inputs.map((i)=>
      <Form key={i.id} {...i} handleChange={handleChange} values={values[i.name]}/>
      )}
            <div className='foot'>
              <div>
              <input type="checkbox" name="terms" id="terms" />
            <label className='label' for="terms">I have read and agreed to the <b className='b'> Terms and conditions</b></label>
            </div>
            <button className='button' type='submit' onClick={()=> navigate("/upload")}>
                CREATE ACCOUNT
            </button>
            
            <p className='p'>Already have an account? <b className='b'> Log In.</b></p>
            </div>
          </form>
    </div>
  )
}

export default Inputs