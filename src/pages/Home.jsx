import Banner from '../components/Slider/Slider'
import './page-CSS/Home.scss'
import SmallBanner from '../components/Small-Banner/SmallBanner'
import Featured_Latest from '../components/Featured/Featured_Latest'
import { useEffect, useState } from 'react'
import {getAllProducts} from '../utils/api'
import FeatureSkeleton from '../components/Skeleton/FeatureSkeleton/FeatureSkeleton'
import SomethingWentWrong from '../components/SomethingWentWrong/SomethingWrong'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const [products, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    getProducts();
  },[])

  const navigate = useNavigate()


  const getProducts= async()=>{
    try{
      setLoading(true)
      const {data} = await getAllProducts('/api/products?populate=*')
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
          <button onClick={()=>navigate('/contact')}>Contact Us</button>
        </div>
        <h1><span>10</span>% OFF</h1>
      </div>
      { (loading && products==null)
        ?<FeatureSkeleton/>
        :(!loading && (products==null || products==[]))
        ?<SomethingWentWrong buttonFunction={getProducts}/>
        : <Featured_Latest data={products} heading='Featured products'/>
      }
      <SmallBanner/>
      { (loading && products==null)
        ?<FeatureSkeleton/>
        :(!loading && (products==null || products==[]))
        ?<SomethingWentWrong buttonFunction={getProducts}/>
        : <Featured_Latest data={products} heading='Latest products'/>
      }
    </div>
  )
}
