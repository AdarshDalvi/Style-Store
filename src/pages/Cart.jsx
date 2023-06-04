import CartCard from '../components/CartCard/CartCard'
import './page-CSS/Cart.scss'

export default function Cart() {
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className='cart-wrapper'>
        <div className='cart-items'>
          <h3 className='cart-sub'>Cart Items</h3>
          <CartCard/>
          <CartCard/>
          <CartCard/>
          <CartCard/>
        </div>
        <div className='cart-summary'>
          <h3>Summary</h3>
          <div className='summary-details'>
            <div className='summary-detail-subheading'>
              <p>SUBTOTAL</p>
              <p>$ 50</p>
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
  )
}
