import './ProductCard.scss'
import { NavLink } from 'react-router-dom'

export default function ProductCard({data ,className=''}) {
  return (
    <NavLink to={`/product/${data.id}`} className={`product-link ${className}`}>
      <div className='image-container'>
        <img src={data.url} alt="product image" />
      </div>
      <div className='card-info-container'>
          <p className='product-name'>{data.name}</p>
          <p className='price'>${data.price}</p>
      </div>
    </NavLink>
  )
}
