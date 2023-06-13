import React from 'react'
import './Skeleton.scss'

export default function Skeleton({type,count}) {
    const ProductCardSkeletion =()=> (
        <div className='cardSk'>
            <div className='cardImgSk'>

            </div>
            <div className="cardContentSk">
                <div className='cardNameSk'>
                    <div className="cardHeadSk"></div>
                    <div className='cardIconSk'></div>
                </div>
                <div className='cardPriceContainerSk'>
                    <div className='cardPriceSk'></div>
                </div>
            </div>
        </div>
    )
    if(type==='card') return Array.from({length:count}).map((_,index)=>(
        <ProductCardSkeletion key={index}/>
    ))
}
