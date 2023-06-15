import './ProductList.scss'
import ProductCard from '../ProductCard/ProductCard'

export default function ProductList({filteredData}) {

  return (
    <div className='list'>
      {
        filteredData?.map(product=>{
            return (
              <ProductCard key={product.id} data={product} />
            )
        })
      }
    </div>
  )
}
