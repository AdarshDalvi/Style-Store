import './ProductList.scss'
import ProductCard from '../ProductCard/ProductCard'
import { useParams } from 'react-router-dom'


export default function ProductList({filters}) {
    const {categoryId} = useParams()

    const data = [
      { 
        id: 1,
        url: '/products/card-item1.jpg',
        name : 'Nike Running Shoes',
        price: 30
      },
      { 
        id:2,
        url: '/products/card-item2.jpg',
        name : 'Nike Running Shoes',
        price: 40
      },
      {
        id:3,
        url: '/products/card-item3.jpg',
        name : 'Nike Running Shoes',
        price: 30
      },
      {
        id:4,
        url: '/products/card-item1.jpg',
        name : 'Nike Running Shoes',
        price: 50
      },
      {
        id:5,
        url: '/products/card-item2.jpg',
        name : 'Nike Running Shoes',
        price: 30
      },
      {
        id:6,
        url: '/products/card-item3.jpg',
        name : 'Nike Running Shoes',
        price: 30
      },
      {
        id:7,
        url: '/products/card-item1.jpg',
        name : 'Nike Running Shoes',
        price: 50
      },
      {
        id:8,
        url: '/products/card-item2.jpg',
        name : 'Nike Running Shoes',
        price: 30
      },
      {
        id:9,
        url: '/products/card-item3.jpg',
        name : 'Nike Running Shoes',
        price: 30
      },
      {
        id:10,
        url: '/products/card-item1.jpg',
        name : 'Nike Running Shoes',
        price: 50
      },
      {
        id:11,
        url: '/products/card-item2.jpg',
        name : 'Nike Running Shoes',
        price: 30
      },
      {
        id:12,
        url: '/products/card-item3.jpg',
        name : 'Nike Running Shoes',
        price: 30
      }
    ]
  return (
    <div className='list'>
      {
        data?.map(item=>{
            return (
                <ProductCard key={item.id} data={item} className='grid-line'/>
            )
        })
      }
    </div>
  )
}
