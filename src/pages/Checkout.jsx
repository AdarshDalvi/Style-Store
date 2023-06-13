import React, { useMemo,  useState, useEffect } from 'react'
import './page-CSS/Checkout.scss'
import { useDispatch, useSelector } from 'react-redux'
import FormInput from '../components/FormInput/FormInput'
import {useForm} from 'react-hook-form'
import {loadStripe} from '@stripe/stripe-js';
import { makePaymentRequest } from '../utils/api'
import {STRIPE_KEY} from '../utils/URLs'
import { clearCart } from '../redux/cartSlice'
import {useNavigate} from 'react-router-dom'

const stripePromise = loadStripe(STRIPE_KEY);
export default function Checkout() {

  const {register, handleSubmit, formState} = useForm({
    defaultValues: JSON.parse(localStorage.getItem('customer-details')) || {}
  })

  const navigate = useNavigate();

  useEffect(() => {
    const handlePopstate = () => {
      navigate('/failed');
    };

    window.onpopstate = handlePopstate;

    return () => {
      window.onpopstate = null;
    };
  }, [navigate]);

  const [loading, setLoading ] = useState(false)
  const {errors} = formState

  const cartItems = useSelector(state=> state.cart.cartItems)
  const dispatch = useDispatch()
  const total = useMemo(()=>{
    return cartItems.reduce((total, item)=>total + item.attributes.price,0)
  }, [cartItems])
  
  const handlePayment = async (data) => {
    try {
        setLoading(true);
        const stripe = await stripePromise;
        const res = await makePaymentRequest("/orders", {
            products: cartItems,
            shipping_details: data
        });
        if(!res.error){
          dispatch(clearCart());
        }
        await stripe.redirectToCheckout({
            sessionId: res.stripeSession.id
        });
    } catch (error) {
        setLoading(false);
        console.log(error);
    }
  };

  return (
    <div className='checkout-container'>
      <div className='shipping-info'>
        <h3>Shipping Details</h3>
        <form className='customer-details' noValidate >
          <FormInput
            id={1}
            name='cname'
            type='text'
            label='Full Name'
            register={register}
            rules={{
              required: {
                value: true,
                message: "Name is Required !"
              }
            }}
            errors={errors.cname?.message}
          />
          <FormInput
            id={2}
            name='cemail'
            type='text'
            label='Email'
            register={register}
            rules={{
              required: {
                value: true,
                message: "Email is Required !"
              },
              pattern:{
                value: /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm,
                message: 'Email is not valid'
              }
            }}
            errors={errors.cemail?.message}
          />
          <FormInput
            id={3}
            name='cphone'
            type='number'
            label='Phone Number'
            register={register}
            rules={{
              required: {
                value: true,
                message: "Phone Number is Required !"
              },
              pattern:{
                value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                message: "Phone Number is not valid !"
              }
            }}
            errors={errors.cphone?.message}
          />
          <div className='form-item'>
            <label htmlFor="adre">Address</label>
            <textarea name="caddress" id="adre" rows="6" {...register('caddress')}/>
          </div>
        </form>
      </div>
      <div className='cart-summary'>
        <h3>Cart Summary</h3>
        <div className='cart-summary-container'>
          <p>
            Order total  reflects the total price of your order, 
            including duties and taxes.
          </p>
          <div className='cart-summary-order'>
            <h3>Order total:</h3>
            <h3>${total}</h3>
          </div>
        </div>
        <button onClick={handleSubmit(handlePayment)}>
          Checkout
          {
            loading && <img className='spinner' src="/general/spinner.svg" alt="" />
          }
        </button>
      </div>
    </div>
  )
}
