import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || []
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state,action)=>{
            const item = state.cartItems.find((product)=>product.id === action.payload.id && product.selectedSize === action.payload.selectedSize)
            if(item){
                item.quantity++;
                item.attributes.price = item.oneQuantityPrice * item.quantity;
            }else{
                state.cartItems.push({...action.payload, quantity: 1})
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map(item=>item)))
        },
        updateCart:(state, action)=>{
            state.cartItems = state.cartItems.map(product=>{
                if(product.cartItemId === action.payload.cartItemId){
                    if(action.payload.key === 'quantity'){
                        product.attributes.price = product.oneQuantityPrice * action.payload.value
                    }
                    return {
                        ...product,
                        [action.payload.key] : action.payload.value
                    }
                }
                return product
            })
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map(item=>item)))
        },
        removeFromCart: (state, action)=>{
            state.cartItems = state.cartItems.filter(product=> product.cartItemId !== action.payload)
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map(item=>item)))
        },
        clearCart: (state)=>{
            localStorage.removeItem('cartItems');
            return {
                ...state,
                cartItems:[]
            }
        }
    }
})

export default  cartSlice.reducer
export const {addToCart, updateCart,removeFromCart,clearCart} = cartSlice.actions