import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems:[]
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
        },
        removeFromCart: (state, action)=>{
            state.cartItems = state.cartItems.filter(product=> product.cartItemId !== action.payload)
        }
    }
})

export default  cartSlice.reducer
export const {addToCart, updateCart,removeFromCart} = cartSlice.actions