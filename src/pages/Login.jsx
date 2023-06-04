import { useState } from 'react'
import './page-CSS/Login-SignUp.scss'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'
import {AiFillEye} from 'react-icons/ai'
import {AiFillEyeInvisible} from 'react-icons/ai'

export default function Login() {

  const [ formData, setFormData] = useState(
    {
      email: '',
      password: ''
    }
  )

  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(event){
    event.preventDefault()
  }

  function handleOnChange(event){
    const {name, value} = event.target
    setFormData(prevFormData=>({
      ...prevFormData,
      [name]: value
    }))
  }

  return (
    <div className='container'>
      <div className='login-container'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className='form'>
          <div className='input-wrapper'>
            <input 
              type="email" 
              name='email' 
              value={formData.email} 
              required 
              placeholder='Email'
              onChange={handleOnChange}
            />
            <MdEmail className='field-icon'/>
          </div>
          <div className='input-wrapper'>
            <input 
              type={`${showPassword? 'text': 'password'}`} 
              required 
              name='password' 
              value={formData.password} 
              placeholder='Password'
              onChange={handleOnChange}
            />
            <RiLockPasswordFill className='field-icon'/>
            {showPassword?
              <AiFillEye className='eye' onClick={()=>setShowPassword(prevValue=>!prevValue)}/>
              : <AiFillEyeInvisible className='eye' onClick={()=>setShowPassword(prevValue=>!prevValue)}/>
            }
          </div>
          <button className='login-signup' type='submit'>Log In</button>
        </form>
      </div>
      <p>Not a member ?</p>
      <button className='create-account'>Create Account</button>
    </div>
  )
}
