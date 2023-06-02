import ProductCard from '../ProductCard/ProductCard'
import { NavLink } from 'react-router-dom'
import './Featured_Latest.scss'

export default function Featured_Latest({data, heading}) {
  return (
    <div className='featured'>
      <div className='featured-heading'>
        <h1>{heading}</h1>
        <NavLink to='shop/0'>
          <p>view all</p>
        </NavLink>
      </div>
      <div className='featured-grid'>
        {
          data.map(product=>{
            return (
              <ProductCard 
                key={product.id}
                data={product}
              />
            )
          })
        }
      </div>
    </div>
  )
}
