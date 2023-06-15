import React from 'react'
import './SingleProductSkeleton.scss'

export default function SingleProductSkeleton() {
  return (
    <div className='skSingleContainer'>
      <div className='skSingleProductImages'>
        <div className='skSingleAllImages'>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='main-image'></div>
      </div>
      <div className='skProductInfo'>
        <div className='skProductHeading'></div>
        <div className='skProductPrice'></div>
        <div className='skInPrice'></div>

        <div className='skSize'>
          <div className='skSelectSize'></div>
          <div className='skSizeGrid'>
            {
              Array.from({length:8}).map((_, index)=>(
                <div key={index} className='skSizeBox'></div>
              ))
            }
          </div>
        </div>
        <div className='skproductAction'></div>
        <div className='skproductAction'></div>
        <div className='skProductDescHead'></div>
        {
          Array.from({length:4}).map((_,index)=>(
            <div key={index} className='skProductDescription'></div>
          ))
        }
      </div>
    </div>
  )
}
