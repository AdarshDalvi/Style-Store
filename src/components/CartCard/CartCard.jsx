import './CartCard.scss'
import {RiDeleteBinLine} from 'react-icons/ri'
import { updateCart,removeFromCart } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'

export default function CartCard({item}) {

  const dispatch = useDispatch()

  const updateCartItem = (event, key)=>{
    const payload = {
      key,
      value: key==="quantity" ? parseInt(event.target.value) : event.target.value,
      cartItemId: item.cartItemId
    }
    dispatch(updateCart(payload))
  }

  return (
    <div className='cart-card-container'>
      <div className='product-image'>
        <img src={item.attributes.product_thumbnail.data.attributes.url} alt="" />
      </div>
      <div className='product-info'>
        <h4>{item.attributes.name}</h4>
        <div className='quantity-size'>
            <div className='selection'>
                <label htmlFor="size"> Size</label>
                <select 
                  className='dropdown' 
                  name="size" 
                  id="size" 
                  onChange={(e)=>updateCartItem(e, "selectedSize")}
                  value={item.selectedSize}
                >
                  {
                    item.attributes.size.data.map((size,index)=>(
                      <option  
                        key={index} 
                        value={size.size}
                        disabled={!size.enabled? true:false}
                      >
                        {size.size}
                      </option>
                    ))
                  }
                </select>
            </div>
            <div className='selection'>
                <label htmlFor="quantity"> Quantity</label>
                <select 
                  className='dropdown' 
                  name="quantity" 
                  id="quantity" 
                  onChange={(e)=>updateCartItem(e, "quantity")}
                  value={item.quantity}
                >
                  {
                    Array.from({length: item.quantity + 5 },(_, index)=>index+1).map((quantity, index)=>{
                      return(
                        <option key={index} value={quantity} >{quantity}</option> 
                      )
                    })
                  }
                </select>
            </div>
        </div>
      </div>
      <div className='card-actions'>
        <p className='product-price'>
        ₹{item.attributes.price}
        </p>
        <RiDeleteBinLine className='delete-item' onClick={()=>dispatch(removeFromCart(item.cartItemId))}/>
      </div>
    </div>
  )
}
