import './page-CSS/SingleProduct.scss'
import { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { getAllProducts } from '../utils/api'
import { useParams } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {addToCart} from '../redux/cartSlice'
import { addToFavrite, removeFromFavorite } from '../redux/favoriteSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from '@reduxjs/toolkit'
import SingleProductSkeleton from '../components/Skeleton/SingleProductSkeleton/SingleProductSkeleton'
import SomethingWentWrong from '../components/SomethingWentWrong/SomethingWentWrong'

export default function SingleProduct() {

  const [loading, setLoading] = useState(false)
  const [productDetails, setProductDetails] = useState(null)
  const [imageData, setImageData] = useState(null)
  const [shoeSizes, setShoesSizes] = useState(null)

  const {slug} = useParams()
  
  useEffect(()=>{
    getProductDetails()
  },[])

  const dispatch = useDispatch() 
  const favorites = useSelector(state=>state.favorite.favorites)

  const getProductDetails = async()=>{
    try{
      setLoading(true)
      const {data} = await getAllProducts(`/products?filters[slug][$eq]=${slug}&populate=*`)
      const product = data?.[0]
      setProductDetails(prevDetails=> product)
      setImageData(prevData=>{
        return product?.attributes.product_image.data?.map(image=>{
          return image.attributes.url
        })
      })
      setShoesSizes(prevSizes=>{
        return product?.attributes.size.data?.map(size=>{
          return size
        })
      })
      setLoading(false)
    }catch(e){
      setLoading(false)
      console.log(e.message)
    }
  }

  const notify = (message)=>{
    toast.success(message, {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const [selectedImage, setSelectedImage] = useState(0)

  const [selectedSize, setSelectedSize] = useState('')
  const [isSizeNotSelected, setIsSizeNotSelcted] = useState(selectedSize!=='')

  function handleOnChange(event){
    const {value} = event.target
    setSelectedSize(prevValue=> value)
    setIsSizeNotSelcted(false)
  }

  const handleAddToCart  = ()=>{
    if(selectedSize!==''){
      dispatch(addToCart({...productDetails, selectedSize, oneQuantityPrice: productDetails?.attributes.price, cartItemId: nanoid()}))
      notify('Product Added to Cart!')
    }else{
      setIsSizeNotSelcted(true)
    }  
  }

  const handleAddToFavorite =() =>{
    dispatch(addToFavrite({...productDetails, selectedSize, favItemId: nanoid()}))
    notify('Product Added to Favorites!')
  }

  const handleRemoveFromFavorite = ()=>{
    dispatch(removeFromFavorite({id: productDetails?.id}))
    notify('Product Removed from Favorites!')
  }

  return (
    loading
    ? <SingleProductSkeleton/>
    : !loading && (productDetails == null || productDetails == undefined)  
    ? <SomethingWentWrong buttonFunction={getProductDetails}/>
    : <div className='product-container'>
        <ToastContainer/>
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
          <h2>{productDetails?.attributes.name}</h2>
          <p className='price'>MRP : ${productDetails?.attributes.price}</p>
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
            <button className='add-to-cart'
              onClick={handleAddToCart}> Add to Cart <AiOutlineShoppingCart className='cart-icon'/>
            </button>
            {
              favorites.find(favItem=> favItem.id=== productDetails?.id) === undefined
              ?<button className='add-to-wishlist' onClick={handleAddToFavorite}> Add to Whishlist <MdFavoriteBorder className='cart-icon'/> </button>
              :<button className='add-to-wishlist' onClick={handleRemoveFromFavorite}> Remove from Whishlist <MdFavorite className='cart-icon'/> </button>
            }
          </div>
          <h3>
            Product Details
          </h3>
          <p className='product-details'>
            {productDetails?.attributes.description}
          </p>
        </div>
     </div>
    
    
  )
}



