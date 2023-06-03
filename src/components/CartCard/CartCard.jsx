import './CartCard.scss'
import {AiTwotoneDelete} from 'react-icons/ai'

export default function CartCard() {
  return (
    <div className='cart-card-container'>
      <div className='product-image'>
        <img src="/products/card-item2.jpg" alt="" />
      </div>
      <div className='product-info'>
        <h4>Nike Running Shoes</h4>
        <div className='quantity-size'>
            <div className='selection'>
                <label htmlFor="size"> Size</label>
                <select className='dropdown' name="size" id="size">
                    <option value="">UK 7</option>
                    <option value="">UK 8</option>
                    <option value="">UK 9</option>
                </select>
            </div>
            <div className='selection'>
                <label htmlFor="quantity"> Quantity</label>
                <select className='dropdown' name="quantity" id="quantity">
                    <option value="">1</option>
                </select>
            </div>
        </div>
      </div>
      <div className='card-actions'>
        <p className='product-price'>
            MRP: $50
        </p>
        <AiTwotoneDelete className='delete-item'/>
      </div>
    </div>
  )
}
