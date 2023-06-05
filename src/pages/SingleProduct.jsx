import './page-CSS/SingleProduct.scss'
import Featured_Latest from '../components/Featured/Featured_Latest'
import { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { getAllProducts } from '../utils/api'
import { useParams } from 'react-router-dom'


export default function SingleProduct() {

  const [loading, setLoading] = useState(false)
  const [productDetails, setProductDetails] = useState(null)
  const [imageData, setImageData] = useState(null)
  const [shoeSizes, setShoesSizes] = useState(null)

  const {slug} = useParams()
  
  useEffect(()=>{
    getProductDetails()
  },[])

  const getProductDetails = async()=>{
    try{
      setLoading(true)
      const {data} = await getAllProducts(`/products?filters[slug][$eq]=${slug}&populate=*`)
      const product = data[0]?.attributes
      setProductDetails(prevDetails=> product)
      setImageData(prevData=>{
        return product.product_image.data?.map(image=>{
          return image.attributes.url
        })
      })
      setShoesSizes(prevSizes=>{
        return product.size.data?.map(size=>{
          return size
        })
      })
      setLoading(false)
    }catch(e){
      setLoading(false)
      console.log(e.message)
    }
  }

  console.log(productDetails)

  const [selectedImage, setSelectedImage] = useState(0)

  const [selectedSize, setSelectedSize] = useState('')

  function handleOnChange(event){
    const {value} = event.target
    setSelectedSize(prevValue=> value)
  }

  const isSizeNotSelected = selectedSize===''
  return (
    loading? <h3>Loading...</h3>
    :<div className='product-container'>
      <h2 className='mobile-heading'>{productDetails?.name}</h2>
      <div className='product-images'>
        <div className='all-product-images'>
          {
            imageData?.map((url, index)=>(
              <div key={index} className='image-wrapper' onClick={()=>setSelectedImage(index)}>
                {selectedImage === index && <div className='image-overlay'></div>}
                <img  src={url} alt='' />
              </div>
            ))
          }
        </div>
        <img id='main-image' src={imageData?.[selectedImage]} alt="" />
      </div>
      <div className='product-info'>
        <h2>{productDetails?.name}</h2>
        <p className='price'>MRP : ${productDetails?.price}</p>
        <p className='inc'>{`(incl. of taxes)`}</p>
        <div className='size'>
          <p>Select Size :</p>
          <div className='size-grid'>
            {
              shoeSizes?.map((size,index)=>(
                <label 
                  key={index} 
                  htmlFor={index} 
                  className={`size-box ${!size.enabled? 'not-avail':null} ${size.size === selectedSize && 'active-size'}`}
                >
                  {size.size}
                  <input 
                    type="radio" 
                    name='selectedSize'
                    value={size.size}
                    id={index}
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
          {productDetails?.description}
        </p>
      </div>
    </div>
  )
}



