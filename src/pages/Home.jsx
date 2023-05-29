import React from 'react'
import Banner from '../components/Slider/Banner'
import './page-CSS/Home.css'

export default function Home() {
  return (
    <>
      <Banner/>
      <div className='discount-coupon-wrapper'>
        <div className='discount-coupon'>
          <div className='coupon-text'>
            <h2 className='discount'>10% OFF Discount Coupons</h2>
            <p>Subscribe us to get 10% OFF on all purchases</p>
          </div>
          <button className='email-me'>email me</button>
        </div>
        <h1 className='offText'><span>10</span>% OFF</h1>
      </div>
    </>
  )
}
