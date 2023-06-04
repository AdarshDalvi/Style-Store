import {AiTwotoneDelete} from 'react-icons/ai'
import './FavoriteCard.scss'

export default function FavoriteCard() {
  return (
    <div className='fav-card-container'>
      <div className='product-image'>
        <div className='overlay-box'></div>
        <AiTwotoneDelete className='delete-icon'/>
        <img src="/products/card-item2.jpg" alt="" />
      </div>
      <h3>Nike Running Shoes</h3>
      <p>Price : $50</p>
      <button className='add-to-cart'>Add to Cart</button>
    </div>
  )
}
