import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    favorites:JSON.parse(localStorage.getItem('favorites')) || []
}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavrite: (state, action)=> {
            state.favorites.push(action.payload)
            localStorage.setItem('favorites', JSON.stringify(state.favorites.map(item=>item)))
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
            localStorage.setItem('favorites', JSON.stringify(state.favorites.map(item=>item)))
        },
        removeFromFavorite: (state, action)=>{
            state.favorites = state.favorites.filter(item=> item.id !== action.payload.id)
            localStorage.setItem('favorites', JSON.stringify(state.favorites.map(item=>item)))
        }
    }

})

export default favoriteSlice.reducer
export const {addToFavrite,removeFromFavorite, updateFavorite} = favoriteSlice.actions
