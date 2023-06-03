import './page-CSS/SingleProduct.scss'
import Featured_Latest from '../components/Featured/Featured_Latest'
import { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'


export default function SingleProduct() {
  const data = [
    { 
      id: 1,
      url: '/products/card-item1.jpg',
      name : 'Nike Running Shoes',
      price: 30,
      categoty: 0
    },
    { 
      id:2,
      url: '/products/card-item2.jpg',
      name : 'Nike Running Shoes',
      price: 40,
      categoty: 1
    },
    {
      id:3,
      url: '/products/card-item3.jpg',
      name : 'Nike Running Shoes',
      price: 30,
      categoty: 2
    },
    {
      id:4,
      url: '/products/card-item1.jpg',
      name : 'Nike Running Shoes',
      price: 50,
      categoty: 0
    },
    {
      id:5,
      url: '/products/card-item2.jpg',
      name : 'Nike Running Shoes',
      price: 30,
      categoty: 1
    }
  ]

  const [selectedImage, setSelectedImage] = useState(0)

  const images= [
    '/single-product/p1.png',
    '/single-product/p2.png',
    '/single-product/p3.png'
  ]

  const [selectedSize, setSelectedSize] = useState('')

  function handleOnChange(event){
    const {value} = event.target
    setSelectedSize(prevValue=> value)
  }

  console.log(selectedSize)

  const sizes= [
    {
      id:0,
      size: 'UK 4',
      isAvailable : false
    },
    {
      id:1,
      size: 'UK 5',
      isAvailable : false
    },
    {
      id:2,
      size: 'UK 6',
      isAvailable : true
    },
    {
      id:3,
      size: 'UK 7',
      isAvailable : true
    },
    {
      id:4,
      size: 'UK 8',
      isAvailable : true
    },
    {
      id:5,
      size: 'UK 9',
      isAvailable : true
    },
    {
      id:6,
      size: 'UK 10',
      isAvailable : true
    },
    {
      id:7,
      size: 'UK 11',
      isAvailable : false
    }
  ]

  const isSizeNotSelected = selectedSize===''
  return (
    <div className='product-container'>
      <h2 className='mobile-heading'>Nike Running Shoes</h2>
      <div className='product-images'>
        <div className='all-product-images'>
          <div className='image-wrapper' onClick={()=>setSelectedImage(0)}>
            {selectedImage === 0 && <div className='image-overlay'></div>}
            <img  src={images[0]} alt='' />
          </div>
          <div className='image-wrapper' onClick={()=>setSelectedImage(1)}>
            {selectedImage === 1 && <div className='image-overlay'></div>}
            <img  src={images[1]} alt='' />
          </div>
          <div className='image-wrapper' onClick={()=>setSelectedImage(2)}>
            {selectedImage === 2 && <div className='image-overlay'></div>}
            <img  src={images[2]} alt='' />
          </div>
        </div>
        <img id='main-image' src={images[selectedImage]} alt="" />
      </div>
      <div className='product-info'>
        <h2>Nike Running Shoes</h2>
        <p className='price'>MRP : $50</p>
        <p className='inc'>{`(incl. of taxes)`}</p>
        <div className='size'>
          <p>Select Size :</p>
          <div className='size-grid'>
            {
              sizes.map(size=>(
                <label 
                  key={size.id} 
                  htmlFor={size.id} 
                  className={`size-box ${!size.isAvailable? 'not-avail':null} ${size.size === selectedSize && 'active-size'}`}
                >
                  {size.size}
                  <input 
                    type="radio" 
                    name='selectedSize'
                    value={size.size}
                    id={size.id}
                    checked={selectedSize === size.size}
                    onChange={handleOnChange}
                  />
                </label>
              ))
            }
          </div>
          {isSizeNotSelected && <p className='size-warning'>Please Select a Size</p>}
        </div>
        <div className='product-actions'>
          <button className={`buy ${isSizeNotSelected && 'btn-disabled'}`}> Buy Now </button>
          <button className={`add-to-cart ${isSizeNotSelected && 'btn-disabled'}`}> Add to Cart <AiOutlineShoppingCart className='cart-icon'/></button>
        </div>
        <h3>
          Product Details
        </h3>
        <p className='product-details'>
          Every time the AJ1 gets a remake, you get the classic 
          sneaker in new colours and textures for an exciting, 
          revamped look but with all the familiar comforts you 
          know. Premium materials and accents give modern 
          expression to an all-time favourite.
        </p>
      </div>
    </div>
  )
}



