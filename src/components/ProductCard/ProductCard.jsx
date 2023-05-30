import React from 'react'
import './ProductCard.scss'
import { NavLink } from 'react-router-dom'

export default function ProductCard({id,url, name , price}) {
  return (
    <NavLink to={`shop/${id}`} className='product-link'>
      <div className='card-container'>
          <div className='image-container'>
            <img src={url} alt="product image" />
          </div>
          <div className='card-info-container'>
              <p className='product-name'>{name}</p>
              <p className='price'>${price}</p>
          </div>
      </div>
    </NavLink>
  )
}
