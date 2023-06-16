import React from 'react'
import './page-CSS/SuccessFailed.scss'
import {useNavigate} from 'react-router-dom'

export default function Success() {
  const navigate = useNavigate()
  
  return (
    <div className='suc-fai-conatiner'>
      <div className='wrapper'>
        <h2>Order has been placed successfully!</h2>
        <p>For any product or site related queries, drop an email to <br /> <span>awesomestylishstore@gmail.com</span> </p>
        <button onClick={()=>navigate('/products/6')}>Continue Shopping</button>
      </div>
    </div>
  )
}
