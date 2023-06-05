import './ProductList.scss'
import ProductCard from '../ProductCard/ProductCard'
import { useEffect, useState } from 'react'
import { getAllProducts } from '../../utils/api'


export default function ProductList({filters}) {

  const [filteredData, setFilteredData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    getData()
  }, [filters])

  const getData = async()=>{
    try{
      setLoading(true)
      let url = `/products?populate=*&filters[categories][id][$eq]=${parseInt(filters.category)}`;
      
      if (filters.sort) {
        url += `&sort=price:${filters.sort}`;
      }

      const {data} = await getAllProducts(url);
      setFilteredData(prevData=> data)
      setLoading(false)
    }catch(e){
      setLoading(false)
      console.log(e.message)
    }
  }

  return (
    <div className='list'>
      {
        filteredData?.map(product=>{
            return (
              <ProductCard key={product.id} data={product} className='grid-line'/>
            )
        })
      }
    </div>
  )
}
