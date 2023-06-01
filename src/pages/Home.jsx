import Banner from '../components/Slider/Slider'
import './page-CSS/Home.scss'
import SmallBanner from '../components/Small-Banner/SmallBanner'
import Featured_Latest from '../components/Featured/Latest/Featured_Latest'

export default function Home() {


  const featuredData = [
    { 
      id: 1,
      url: '/products/card-item1.jpg',
      name : 'Nike Running Shoes',
      price: 30
    },
    { 
      id:2,
      url: '/products/card-item2.jpg',
      name : 'Nike Running Shoes',
      price: 40
    },
    {
      id:3,
      url: '/products/card-item3.jpg',
      name : 'Nike Running Shoes',
      price: 30
    },
    {
      id:4,
      url: '/products/card-item1.jpg',
      name : 'Nike Running Shoes',
      price: 50
    },
    {
      id:5,
      url: '/products/card-item2.jpg',
      name : 'Nike Running Shoes',
      price: 30
    },
  ]
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
      <Featured_Latest data={featuredData} heading='Featured products'/>
      <SmallBanner/>
      <Featured_Latest data={featuredData} heading='Latest products'/>
    </div>
  )
}
