import { useMemo } from 'react'
import CartCard from '../components/CartCard/CartCard'
import './page-CSS/Cart.scss'
import {useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom'


export default function Cart() {
  const {cartItems} = useSelector(state=> state.cart)
  const {favorites} = useSelector(state=> state.favorite)

  const subtotal = useMemo(()=>{
    return cartItems.reduce((total, item)=>total + item.attributes.price,0)
  }, [cartItems])

  return (
    cartItems.length>0 ? 
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className='cart-wrapper'>
        <div className='cart-items'>
          <h3 className='cart-sub'>Cart Items { cartItems.length>0 && `(${cartItems.length})`}</h3>
          {
            cartItems.map((item,index)=><CartCard key={index} item={item}/>)
          }
        </div>
        <div className='cart-summary'>
          <h3>Summary</h3>
          <div className='summary-details'>
            <div className='summary-detail-subheading'>
              <p>SUBTOTAL</p>
              <p>$ {subtotal}</p>
            </div>
            <p className='summary-description'>
              The subtotal reflects the total price of your order, 
              including duties and taxes.
            </p>
          </div>
          <button className='checkout'>Checkout</button>
        </div>
      </div>
    </div>
    : 
    <div className='empty-cart'>
      <img src="/empty-cart.jpg" alt="" />
      <h3>Your cart is empty</h3>
      <p>Let's add some items</p>
      <NavLink to='/products'><button>Explore Shop</button></NavLink>
      {favorites.length>0 && <NavLink to='/favorite'><button>Add from Favorites</button></NavLink>}
    </div>
  )
}
