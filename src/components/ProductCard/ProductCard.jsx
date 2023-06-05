import './ProductCard.scss'
import { NavLink } from 'react-router-dom'


export default function ProductCard({data:{attributes: product, id } ,className=''}) {
  return (
    <NavLink to={`/product/${product.slug}`} className={`product-link ${className}`}>
      <div className='image-container'>
        <img src={product.product_thumbnail.data.attributes.url} alt="product image" />
      </div>
      <div className='card-info-container'>
          <p className='product-name'>{product.name}</p>
          <p className='price'>${product.price}</p>
      </div>
    </NavLink>
  )
}
