import './ProductList.scss'
import ProductCard from '../ProductCard/ProductCard'
import { useEffect, useState } from 'react'
import { getAllProducts } from '../../utils/api'
import Skeleton from '../Skeleton/Skeleton'
import SomethingWentWrong from '../SomethingWentWrong/SomethingWrong'

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
