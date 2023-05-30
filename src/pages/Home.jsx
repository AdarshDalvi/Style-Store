import React from 'react'
import Banner from '../components/Slider/Banner'
import './page-CSS/Home.scss'

export default function Home() {
  return (
    <>
      <Banner/>
      <div className='discount-coupon-wrapper'>
        <div className='discount-coupon'>
          <div className='coupon-text'>
            <h2>10% OFF Discount Coupons</h2>
            <p>Subscribe us to get 10% OFF on all purchases</p>
          </div>
          <button>email me</button>
        </div>
        <h1><span>10</span>% OFF</h1>
      </div>
    </>
  )
}
