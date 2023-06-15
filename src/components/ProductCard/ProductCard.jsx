import './ProductCard.scss'
import { NavLink } from 'react-router-dom'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import {useSelector, useDispatch} from 'react-redux'
import { addToFavrite, removeFromFavorite } from '../../redux/favoriteSlice'
import { nanoid } from '@reduxjs/toolkit'
import discount from '../../utils/discount'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductCard({ data,className=''}) {
  const {attributes: product, id } = data
  const dispatch = useDispatch()
  const favorites= useSelector(state=> state.favorite.favorites)

  const handleAddToFavorite =(event) =>{
    event.preventDefault()
    event.stopPropagation()
    dispatch(addToFavrite({...data, selectedSize:'', favItemId: nanoid()}))
    notify('Product added to wishlist')
  }

  const handleRemoveFromFavorite = (event)=>{
    event.preventDefault()
    event.stopPropagation()
    dispatch(removeFromFavorite({id: id}))
    notify('Product removed from wishlist')
  }

  const notify = (message, method)=>{
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

  return (
    <NavLink to={`/product/${product.slug}`} className={`product-link ${className}`}>
      <ToastContainer/>
      <div className="card">
        <div className="product-image">
          <img className='img' loading='lazy' src={product.product_thumbnail.data.attributes.url} alt="" />
        </div>
        <div className='content'>
          <div className="product-name">
            <h3>{product.name}</h3>
            {
              favorites.find(favItem=> favItem.id=== id) === undefined
              ? <MdFavoriteBorder className='fav-icon' onClick={(event)=> handleAddToFavorite(event)}/>
              : <MdFavorite className='fav-icon' onClick={(event)=> handleRemoveFromFavorite(event)}/>
            }
          </div>
          <div className='product-price'>
            <p>${product.price}</p>
            <h4 className='og_price'>$<span>{product.original_price}</span> </h4>
            <p>{discount(product.original_price, product.price)}% off</p>
          </div>
        </div>
      </div>
    </NavLink>
  )
}

