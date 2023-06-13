import React from 'react'
import './page-CSS/SuccessFailed.scss'
export default function Success() {
  return (
    <div className='suc-fai-conatiner'>
      <div className='wrapper'>
        <h2>Order has been placed successfully!</h2>
        <p>For any product or site related queries, drop an email to <br /> <span>adarshdalvi197@gmail.com</span> </p>
        <button onClick={()=>navigate('/products/6')}>Continue Shopping</button>
      </div>
    </div>
  )
}
