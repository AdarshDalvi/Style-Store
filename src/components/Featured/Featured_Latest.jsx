import ProductCard from '../ProductCard/ProductCard'
import { NavLink } from 'react-router-dom'
import './Featured_Latest.scss'
import sampleSize from 'lodash/sampleSize'


export default function Featured_Latest({data, heading}) {

  const randomArray = sampleSize(data, 5)
  return (
    <div className='featured'>
      <div className='featured-heading'>
        <h1>{heading}</h1>
        <NavLink to='products'>
          <p>view all</p>
        </NavLink>
      </div>
      <div className='featured-grid'>
        {
          randomArray?.map(product=>{
            return (
              <ProductCard 
                key={product?.id}
                data={product}
              />
            )
          })
        }
      </div>
    </div>
  )
}
