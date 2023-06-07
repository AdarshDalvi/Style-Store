import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    favorites:[]
}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavrite: (state, action)=> {
            state.favorites.push(action.payload)
        },
        updateFavorite:(state, action)=>{
            state.favorites = state.favorites.map(product=>{
                if(product.favItemId === action.payload.favItemId){
                    return {
                        ...product,
                        [action.payload.key] : action.payload.value
                    }
                }
                return product
            })
        },
        removeFromFavorite: (state, action)=>{
            state.favorites = state.favorites.filter(item=> item.id !== action.payload.id)
        }
    }

})

export default favoriteSlice.reducer
export const {addToFavrite,removeFromFavorite, updateFavorite} = favoriteSlice.actions
