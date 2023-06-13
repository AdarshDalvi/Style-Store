import React from 'react'
import Skeleton from '../Skeleton'
import './FeatureSkeleton.scss'

export default function FeatureSkeleton() {
  return (
    <div className='skFeatured'>
        <div className="skFeatureHeading">
            <div className='skfeaturedH'></div>
            <div className='skViewAll'></div>
        </div>

        <div className="skFeaturedGrid">
            <Skeleton type='card' count={5}/>
        </div>
    </div>
  )
}
