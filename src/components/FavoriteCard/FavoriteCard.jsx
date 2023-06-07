import {RiDeleteBinLine} from 'react-icons/ri'
import './FavoriteCard.scss'
import { removeFromFavorite, updateFavorite } from '../../redux/favoriteSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import { nanoid } from '@reduxjs/toolkit'
import { useState } from 'react'
export default function FavoriteCard({item}) {


  const updateFavoriteItem = (event, key)=>{
    if(event.target.value!== ''){
      setSizeSelection(false)
      const payload = {
        key,
        value: event.target.value,
        favItemId: item.favItemId
      }
      dispatch(updateFavorite(payload))
    }else{
      setSizeSelection(true)
    }
  }

  const [sizeSelection, setSizeSelection] = useState(false)

  const dispatch = useDispatch()

  const moveToCart =()=>{
    if(item?.selectedSize!==''){
      setSizeSelection(false)
      dispatch(addToCart({...item, oneQuantityPrice: item?.attributes.price, cartItemId: nanoid()}))
      dispatch(removeFromFavorite({id: item.id}))
    }else{
      setSizeSelection(true)
    }
  }
  return (
    <div className='fav-card-container'>
      <div className='product-image'>
        <div className='overlay-box'></div>
        <RiDeleteBinLine className='delete-icon' onClick={()=>dispatch(removeFromFavorite({id: item.id}))}/>
        <img src={item?.attributes?.product_thumbnail?.data?.attributes?.url} alt="" />
      </div>
      <h3>{item?.attributes?.name}</h3>
      <div className={`fav-selection  ${sizeSelection&& 'alertSize'}`}>
        <label htmlFor="size">Size</label>
        <select 
          name="size-selection" 
          id="size" 
          value={item?.selectedSize!==''?item.selectedSize:'' }
          onChange={(e)=>updateFavoriteItem(e, 'selectedSize')}
        >
          {item?.selectedSize==='' && <option value="">Select Size</option>}
          {item?.attributes?.size?.data.map((itemSize, index)=>{
            return (<option  
              key={index} 
              value={itemSize.size}
              disabled={!itemSize.enabled? true:false}
              >
              {itemSize.size}
            </option>)
          })}
        </select>
      </div>
      <p>Price: ${item?.attributes?.price}</p>
      <button className='add-to-cart' onClick={moveToCart}>Move to Cart</button>
    </div>
  )
}
