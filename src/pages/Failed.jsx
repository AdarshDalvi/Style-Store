import React from 'react'
import './page-CSS/SuccessFailed.scss'
import {useNavigate} from 'react-router-dom'

export default function Failed() {
    const navigate = useNavigate()
  return (
    <div className='suc-fai-conatiner'>
      <div className='wrapper'>
        <h2>Payment Failed !</h2>
        <p>For any product or site related queries, drop an email to <br /> <span>adarshdalvi197@gmail.com</span> </p>
        <button onClick={()=>navigate('/products/6')}>Continue Shopping</button>
      </div>
    </div>
  )
}
