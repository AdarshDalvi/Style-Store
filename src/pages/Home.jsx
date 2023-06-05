import Banner from '../components/Slider/Slider'
import './page-CSS/Home.scss'
import SmallBanner from '../components/Small-Banner/SmallBanner'
import Featured_Latest from '../components/Featured/Featured_Latest'
import { useEffect, useState } from 'react'
import {getAllProducts} from '../utils/api'

export default function Home() {

  const [products, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    getProducts();
  },[])


  const getProducts= async()=>{
    try{
      setLoading(true)
      const {data} = await getAllProducts('/products?populate=*')
      setData(prevProducts=>data) 
      setLoading(false)
    }catch(e){
      setLoading(false)
      console.log(e.message)
    }
  }

  return (
    <div className='home-container'>
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
      <Featured_Latest data={products} heading='Featured products'/>
      <SmallBanner/>
      <Featured_Latest data={products} heading='Latest products'/>
    </div>
  )
}
