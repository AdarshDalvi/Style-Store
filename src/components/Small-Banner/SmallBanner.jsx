import './SmallBanner.scss'
import {NavLink} from 'react-router-dom'

export default function SmallBanner() {
  return (
    <div className='small-banner-container'>

        <NavLink to='products/6'>
            <div className='image-container'>
              <div className="overlay"></div>
              <img src="/small-banner/item1.jpg" alt="" />
              <div className='image-text'>
                  <h1>Minimal <br className='break'/> Collection</h1>
                  <p>shop now</p>
              </div>
            </div>
        </NavLink>

        <NavLink to='products/5'>
            <div className='image-container'>
              <div className="overlay"></div>
              <img loading='lazy' src="/small-banner/item2.jpg" alt="" />
              <div className='image-text'>
                  <h1>Sneakers</h1>
                  <p>Shop now</p>
              </div>
            </div>
        </NavLink>
    </div>
  )
}
